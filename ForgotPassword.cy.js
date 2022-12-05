describe('Forgot password', function() {
    beforeEach(function() {
      cy.visit('https://gcp-astrum-ui.apiwiz.io/#/login');
    });
    it('forgot password', function() {
      // To type Workspace
        cy.get(':nth-child(4) > .mt-2').type('acme-team-gcp-dev');
        cy.get('.btn-generic-blue-sm').click();
        cy.get('.text-underline').click();
        // To type mailid
        cy.get('.mt-1').type('abhinav.raman@itorix.com')
        cy.get('.mt-3').click();
    })
  })