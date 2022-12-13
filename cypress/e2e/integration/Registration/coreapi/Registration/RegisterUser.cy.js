describe('Register user',function(){
    beforeEach(function() {
        cy.visit('https://gcp-accounts.apiwiz.io');
      });
it('New user', function() {
    cy.get('[href="/register"]').click();
    cy.get('.itx-control').type('abhinav.raman+643@itorix.com');
    cy.get('.btn').click();
})
})
