describe('New account registration', function() {
    beforeEach(function() {
      cy.visit('https://gcp-accounts.apiwiz.io/register/9605f201-805e-4b92-bbf6-fd14a2efd5cc/verify?appType=astrum');
    });
    it('enter credentials', function() {
        cy.get(':nth-child(1) > .itx-form-group > .position-relative > .itx-control').type('Testname');
        cy.get(':nth-child(2) > .itx-form-group > .position-relative > .itx-control').type('workspace');
        cy.get('#firstName').type('firstname');
        cy.get(':nth-child(4) > .itx-form-group > .position-relative > .itx-control').type('lastname');
        cy.get('.btn').click();
        cy.get(':nth-child(1) > .itx-form-group > .position-relative > .itx-control').type('password');
        cy.get('.itx-form-group > .itx-control').type('password');
        cy.get('.btn-wrapper > .btn').click();
        cy.get(':nth-child(1) > .btn-wrapper > .btn').click();
        cy.get('.btn-primary').click();
        cy.get('.btn').click();
    })
  })