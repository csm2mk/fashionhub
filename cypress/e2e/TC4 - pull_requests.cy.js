describe('Fetch Open PRs and Output as CSV', () => {
  it('should fetch open PRs and log them in CSV format', () => {
    // Use GitHub API to get open pull requests
    cy.request({
      url: 'https://api.github.com/repos/appwrite/appwrite/pulls',
      headers: {
        'User-Agent': 'request',  // Required by GitHub API
        'Accept': 'application/vnd.github.v3+json'
      }
    }).then((response) => {
      // Ensure the response is OK
      expect(response.status).to.eq(200);

      const pullRequests = response.body;

      // Check that there are open pull requests
      if (pullRequests.length > 0) {
        // Create an array to hold CSV rows
        const csvRows = ['PR Name,Created Date,Author'];

        // Loop through each PR and add it to the CSV array
        pullRequests.forEach((pr) => {
          const prName = pr.title;
          const createdDate = new Date(pr.created_at).toLocaleDateString();
          const author = pr.user.login;

          // Push CSV row
          csvRows.push(`"${prName}","${createdDate}","${author}"`);
        });

        // Log the CSV output
        const csvOutput = csvRows.join('\n');
        cy.log(csvOutput);
        cy.writeFile('cypress/fixtures/pr_list.csv', csvOutput);
      } else {
        cy.log('No open pull requests found');
      }
    });
  });
});
