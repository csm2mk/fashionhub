describe('TC2 - Check all links on the page for valid status codes', () => {
  it('should fetch all links and verify their status codes', () => {
    // Visit the main page
    cy.visit('https://pocketaces2.github.io/fashionhub/');

    // Extract all links
    cy.get('a[href]').each(($link) => {
      const href = $link.attr('href');

      // Ignore anchors or empty hrefs
      if (href && !href.startsWith('#')) {
        // For each link, make a request
        cy.request({
          url: href,   // Use the href as the URL to request
          failOnStatusCode: false  // Don't fail the test automatically for non-2xx/3xx status codes
        }).then((response) => {
          // Check that the status is either 200 or in the 30x range
          expect(response.status).to.be.oneOf([200, 301, 302, 303, 307, 308]);

          // Ensure that no 40x errors are returned
          expect(response.status).to.not.be.within(400, 499);
        });
      }
    });
  });
});
