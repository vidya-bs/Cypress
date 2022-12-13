describe('rename', function() {

})

it('rename', function() {

    cy.visit('https://gcp-astrum-ui.apiwiz.io/#/login');
    cy.get(':nth-child(4) > .mt-2').type('workspace1');
    cy.get('.btn-generic-blue-sm').click();
    cy.get('div.mt-1 > .neo-input').type('AbhinavRaman');
    cy.get('.position-relative > .neo-input').type('Apipwd12');
    cy.get('.btn-generic-blue-sm').click();



    cy.wait(5000);

  



     // Delete collection 
cy.get(':nth-child(3) > a > img').click();
// 3 button
cy.get('#637738f8880f666237f634cc').click({ force: true}); 
// Delete button
cy.xpath('//*[@id="root"]/div/div[2]/div[2]/div[1]/div[2]/div/div[1]/div/div[3]/div/div[1]/div[2]/div/div/a[6]').click({force: true});





// Delete environment
cy.get(':nth-child(4) > a > img').click();
//  3button
cy.xpath('//*[@id="dropdown-basic"]').click({force: true});
// DELETE BUTTON
cy.xpath('//*[@id="root"]/div/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div/div/div/div/div/a[3]').click({force: true});
})