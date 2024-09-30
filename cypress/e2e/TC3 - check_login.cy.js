describe('Customer Login Test', () => {
  it('should log in with valid credentials', () => {
    // Visit the login page
    cy.visit('https://pocketaces2.github.io/fashionhub/login.html');
    
    // Input the username
    cy.get('input[name="username"]') // Assuming the username input field has name="username"
      .type('demouser');

    // Input the password
    cy.get('input[name="password"]') // Assuming the password input field has name="password"
      .type('fashion123');

    // Submit the login form
    cy.get('form').submit(); // Assuming there's a form element to submit

    // Check if login is successful (depending on how the page behaves after login)
    // You can check for a URL change, or presence of an element that appears post-login
    cy.url().should('not.include', '/login.html'); // Assuming successful login redirects away from the login page
  });
});
