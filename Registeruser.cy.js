describe('Forgot password', function() {
    beforeEach(function() {
      cy.visit('https://gcp-astrum-ui.apiwiz.io/#/login');
    });
    it('forgot password', function() {
        cy.get('.text-underline').click();
        cy.visit('https://gcp-astrum-ui.apiwiz.io/#/register');
        cy.get('.neo-input-login').type('abhinav.raman+74@itorix.com')
        cy.get('.s-auto').click();
    })
  })