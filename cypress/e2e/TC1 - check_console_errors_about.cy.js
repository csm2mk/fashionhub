describe('Check for console errors on the website', () => {
    it('should not have any console errors', () => {
        // Intercept browser's console.log, console.error, console.warn
        cy.on('window:before:load', (win) => {
            cy.stub(win.console, 'error').as('consoleError')
        });

        // Visit the website
        cy.visit('https://pocketaces2.github.io/fashionhub/about.html');

        // After loading the page, assert no console errors
        cy.get('@consoleError').should('not.have.been.called');
    });
});
