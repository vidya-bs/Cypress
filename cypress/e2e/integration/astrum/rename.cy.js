describe('rename', function() {
    cy.viewport('macbook-15')
})

it('rename', function() {

    cy.visit('https://gcp-astrum-ui.apiwiz.io/#/login');
    cy.get(':nth-child(4) > .mt-2').type('workspace1');
    cy.get('.btn-generic-blue-sm').click();
    cy.get('div.mt-1 > .neo-input').type('AbhinavRaman');
    cy.get('.position-relative > .neo-input').type('Apipwd12');
    cy.get('.btn-generic-blue-sm').click();
    cy.get(':nth-child(3) > a > img').click();
    // cy.get('.mt-2 > .cursor').click();
    // cy.get('#6371f2dcd3d8f357add5b9c5').click({ force: true }); 
    // cy.get('.mt-2 > .cursor').click({force: true});


    
cy.wait(5000);

let cookied;
  
cy.getCookie('x-token-astrum').should('exist')
.then((c)=>{
cookied=c;
});


cy.get(':nth-child(3) > a > img').click();

 // // Rename collection
 cy.get('#637738f8880f666237f634cc').click({ force: true}); 
 cy.xpath('//*[@id="root"]/div/div[2]/div[2]/div[1]/div[2]/div/div[1]/div/div/div/div[3]/div/div[1]/div[2]/div/div/a[3]').click({force: true});
 cy.xpath('//*[@id="root"]/div/div[2]/div[2]/div[1]/div[2]/div/div[1]/div/div/div/div[3]/div/div[1]/div[1]/input').dblclick().clear();
 cy.xpath('//*[@id="root"]/div/div[2]/div[2]/div[1]/div[2]/div/div[1]/div/div/div/div[3]/div/div[1]/div[1]/input').type('collectionName').type('{enter}');

cy.get('.ps-2 > .w-100').click({force: true});

 // Rename folder

cy.xpath('//*[@id="dropdown-basic"]').click({ force: true }); 
 cy.xpath('//*[@id="root"]/div/div[2]/div[2]/div[1]/div[2]/div/div[1]/div/div/div/div[3]/div/div[2]/div/div/div[1]/div[2]/div/div/a[4]').click({force: true});
 cy.xpath('//*[@id="root"]/div/div[2]/div[2]/div[1]/div[2]/div/div[1]/div/div/div/div[3]/div/div[2]/div/div/div[1]/div[1]/div/input').clear();
 cy.xpath('//*[@id="root"]/div/div[2]/div[2]/div[1]/div[2]/div/div[1]/div/div/div/div[3]/div/div[2]/div/div/div[1]/div[1]/div/input').type('folderName').type('{enter}');

 cy.get('.flex-column > [style="width: calc(100% - 0.5rem); min-height: 33px;"]').click({force: true});



 // Rename request
 cy.xpath('//*[@id="dropdown-basic"]').click({ force: true,multiple: true }); 
 cy.xpath('//*[@id="root"]/div/div[2]/div[2]/div[1]/div[2]/div/div[1]/div/div/div/div[3]/div/div[2]/div/div/div[2]/div/p/div/div[2]/div/div/a[1]').click({force: true})
 cy.xpath('//*[@id="root"]/div/div[2]/div[2]/div[1]/div[2]/div/div[1]/div/div/div/div[3]/div/div[2]/div/div/div[2]/div/p/div/div[1]/span[2]/input').clear();
 cy.xpath('//*[@id="root"]/div/div[2]/div[2]/div[1]/div[2]/div/div[1]/div/div/div/div[3]/div/div[2]/div/div/div[2]/div/p/div/div[1]/span[2]/input').type('requestname').type('{enter}');

 cy.get('.ms-3 > .justify-content-between').click();
    
cy.wait(3000);



// Rename env

// 3 button
cy.xpath('//*[@id="dropdown-basic"]').click({force: true});

// Rename button
cy.xpath('//*[@id="root"]/div/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div/div/div/div/div/a[1]').click({force: true});

// Rename 
cy.get('.table-cell-input').click().clear();
cy.wait(1000);
cy.get('.table-cell-input').type('Abhinav').type('{enter}');
cy.wait(1000);



})