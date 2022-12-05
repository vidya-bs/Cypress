describe('New account registration', function() {
  beforeEach(function() {
    cy.visit('https://gcp-astrum-ui.apiwiz.io/#/login');
  });
  it('enter workspace', function() {
    cy.get('.text-underline').click();
    cy.get('.neo-input-login').type('abhinav.raman+81@itorix.com');
    cy.get('.s-auto').click();
  })
})