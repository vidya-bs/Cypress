describe('Forgot password', function() {
    beforeEach(function() {
      cy.visit('https://acme-team-gcp-dev.apiwiz.io/session/login');
    });
    it('forgot password', function() {
        cy.get('.itx-link').click();
        cy.visit('https://gcp-accounts.apiwiz.io/forgot-password');
        cy.get('.itx-control').type('abhinav.raman@itorix.com')
        cy.get('.btn-wrapper > .btn').click();
    })
  })