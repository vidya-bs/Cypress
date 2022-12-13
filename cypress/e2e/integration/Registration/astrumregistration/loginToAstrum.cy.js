describe('login to astrum', function() {
    beforeEach(function() {
      cy.visit('https://gcp-astrum-ui.apiwiz.io/#/login');
    });
    
    it('enter workspace', function() {
        cy.get(':nth-child(4) > .mt-2').type('acme-team-gcp-dev');
        cy.get('.btn-generic-blue-sm').click();
        cy.get('div.mt-1 > .neo-input').type('shashil.sravan');
        cy.get('.position-relative > .neo-input').type('Sravan@123');
        cy.get('.btn-generic-blue-sm').click();
      })
  });