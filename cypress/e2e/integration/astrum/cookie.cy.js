describe('login to astrum', function() {

})

const cookieObj = {

}

it('enter workspace', function() {
    
    cy.viewport('macbook-13')
    cy.visit('https://gcp-astrum-ui.apiwiz.io/#/login')
cy.get(':nth-child(4) > .mt-2').type('workspace1');
cy.get('.btn-generic-blue-sm').click();
cy.get('div.mt-1 > .neo-input').type('AbhinavRaman');
cy.get('.position-relative > .neo-input').type('Apipwd12');
cy.get('.btn-generic-blue-sm').click();
cy.getCookie('x-token-astrum')
cy.get(':nth-child(3) > a > img').click({delay:2000});
cy.get('.mt-2 > .cursor').click();
cy.get('#637738f8880f666237f634cc').click({ force: true }); 
cy.get('.mt-2 > .cursor').click({force: true});
cy.wait(2000);
cy.getCookie('x-token-astrum').then((c) => {
    console.log("hello:", c)
    cookieObj.cookie = c.value
    cy.getCookie('x-token-astrum')
})
cy.getCookies().then(cookies => {
    cy.log(cookies)
})
})




it('import collection', function(){
    cy.setCookie("x-token-astrum", cookieObj.cookie)

    cy.get(':nth-child(3) > a > img').click();
cy.wait(1000);

    // Import
cy.get('.gap-2 > :nth-child(2)').click({multiple: true, force: true});
cy.wait(1000);


// Select dropdown
cy.get('#dropdown-basic > .w-100').click({multiple: true, force: true});

// To choose import collection

// Postman collection
cy.get('.dropdown-menu > :nth-child(3) > :nth-child(2)').click();
cy.wait(1000);

// Attach file
cy.get('.py-2 > :nth-child(2)').click({multiple: true, force: true});
// cy.xpath('/html/body/div[4]/div/div/div[2]/section[1]/div/div[4]/div[2]/label').click({force: true});
cy.wait(1000);
cy.get('.row > .py-2').selectFile('Collectioncopy.json');
// cy.xpath('/html/body/div[4]/div/div/div[2]/section[1]/div/div[4]/div[2]/label').selectFile('Collectioncopy.json');
cy.wait(1000);

cy.get('.user-select-none').click({force: true});

})


// it('Environment', function() {

//     cy.setCookie("x-token-astrum", cookieObj.cookie)
//     // Environments
// // // To go into a request
// cy.get('.ps-2 > .w-100').click({force: true});
// cy.get('.flex-column > [style="width: calc(100% - 0.5rem); min-height: 33px;"]').click({force: true});
// cy.get('.ms-1').click({force: true});


//         cy.get('.request-config-tabs-container > :nth-child(4)').click();
//         cy.wait(1000);
    
//         // binary
    
//         cy.get('#binary').check();
//         cy.wait(1000);
//         const imagepath='image.png';
//         cy.get('.binary-btn-input',{timeout: 10000}).should('be.visible').click({multiple: true,force: true});
//         cy.wait(1000);
//         cy.get('.binary-btn-input').click();
//         cy.get('.binary-btn-input').selectFile('image.png');
//         cy.wait(10000);

    
//     })


    