describe('rename', function() {

})

it('rename', function() {

    cy.visit('https://gcp-astrum-ui.apiwiz.io/#/login');
    cy.get(':nth-child(4) > .mt-2').type('workspace1');
    cy.get('.btn-generic-blue-sm').click();
    cy.get('div.mt-1 > .neo-input').type('AbhinavRaman');
    cy.get('.position-relative > .neo-input').type('Apipwd12');
    cy.get('.btn-generic-blue-sm').click();


    cy.wait(2000);

   // // Start astrum journey
    // cy.get('.mt-5').click();
// cy.xpath('//*[@id="root"]/div/div[2]/div/a').click({multiple: true});

// cy.wait(2000);


cy.xpath('//*[@id="root"]/div/div[2]/div[2]/div[1]/div[14]/div[2]').click({delay:2000});
cy.wait(2000);

cy.xpath('//*[@id="root"]/div/div[2]/div[2]/div[1]/div[14]/div[2]/div/div/div[4]/div').click({force:true});
cy.wait(2000);



// To create a new collection

// New button
cy.get('.environment-list-container > .d-flex > :nth-child(1)').click();
cy.get('.new-modal-container > .py-2 > :nth-child(2)').click();

})