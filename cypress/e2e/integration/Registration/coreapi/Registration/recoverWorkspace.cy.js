describe('Recover workspace',function(){
    beforeEach(function() {
        cy.visit('https://gcp-accounts.apiwiz.io');
      });
it('Recover workspace', function() {
    cy.get('.justify-content-right > a').click();
    cy.visit('https://gcp-accounts.apiwiz.io/recover-workspace');
    cy.get('.itx-control').type('abhinav.raman@itorix.com');
    cy.get('.btn-wrapper > .btn').click();
})
});
