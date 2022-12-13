describe('login to coreapi', function() {
    beforeEach(function() {
      cy.visit('https://acme-team-gcp-dev.apiwiz.io/session/login');
    });
    
    it('enter workspace', function() {
        cy.get('#__BVID__14').type('shashil.sravan');
        cy.get('#__BVID__15').type('Sravan@123');
        cy.get('.m-0 > span').click();
        cy.get(':nth-child(5) > .btn').click();
      })
  });