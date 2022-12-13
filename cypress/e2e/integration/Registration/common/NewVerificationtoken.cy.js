
describe('New account registration', function() {
    beforeEach(function() {
      cy.visit('https://gcp-accounts.apiwiz.io/invalid-token?type=register');
    });
    it('enter credentials', function() {
        cy.get('.btn').click();
        cy.get('#inputEmail1').type('abhinavraman14@gmail.com');
        cy.get('.btn').click();
    })
})