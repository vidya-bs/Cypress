describe('login to astrum', function() {

})
let cookie

// before(()=>{
//     cy.getCookie('x-token-astrum').should('exist').then((c)=>{
//         cookie=c
//     })
// })
// beforeEach(function setcookies() {

//  cy.setCookie('x-token-astrum',cookie.value)

// })

it('enter workspace', function() {

    cy.viewport('macbook-13')



cy.visit('https://gcp-astrum-ui.apiwiz.io/#/login');
cy.get(':nth-child(4) > .mt-2').type('workspace1');
cy.get('.btn-generic-blue-sm').click();
cy.get('div.mt-1 > .neo-input').type('AbhinavRaman');
cy.get('.position-relative > .neo-input').type('Apipwd12');
cy.get('.btn-generic-blue-sm').click();
// cy.get(':nth-child(3) > a > img').click();
// cy.get('.mt-2 > .cursor').click();
// cy.get('#637738f8880f666237f634cc').click({ force: true }); 
// cy.get('.mt-2 > .cursor').click({force: true});




// Environments
cy.get(':nth-child(4) > a > img').click();

// New button
cy.get('.w-25 > .d-flex > :nth-child(1)').click();
cy.get('.new-modal-item').click();

// Rename

// Env variable
cy.get(':nth-child(2) > :nth-child(2) > .Table_table-cell-input__fk7qI').click().type('scheme');

// Env value
cy.get(':nth-child(2) > :nth-child(4) > .Table_table-cell-input__fk7qI').click().type('https');
cy.wait(1000);

// save
cy.get('.py-2 > .Button_btn__W1TTO').click();
cy.wait(1000);

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





// To click on a new request

// Collections
cy.get(':nth-child(3) > a > img').click();

// // To go into a request
// cy.get('.ps-2 > .w-100').click({force: true});
// cy.get('.flex-column > [style="width: calc(100% - 0.5rem); min-height: 33px;"]').click({force: true});
// cy.get('.ms-1').click({force: true});



// Rename 
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


// Select environment
cy.get('#dropdown-basic > .w-100 > span').click();
cy.get('.environment-dropdown > .overflow-auto > :nth-child(1) > div').click();



// headers
cy.get('.config-container > .request-config-tabs-container > :nth-child(3)').click();
cy.get(':nth-child(2) > :nth-child(2) > .Table_table-cell-input__fk7qI').type('texhv',{delay:100});
        cy.wait(1000);

        // value
        cy.get(':nth-child(2) > :nth-child(3) > .Table_table-cell-input__fk7qI').dblclick();
        cy.get(':nth-child(2) > :nth-child(3) > .Table_table-cell-input__fk7qI').type('textv');
        cy.wait(1000);


 cy.get('.request-input > #dropdown-basic > .d-flex').click();
 
cy.wait(1000);

cy.get('[value="POST"]').click(); 
cy.wait(1000);
cy.get('#dropdown-basic > .d-flex > :nth-child(2)').click();
cy.wait(1000);
cy.get('.d-flex > .px-2').click().clear();
cy.wait(1000);
cy.get('.d-flex > .px-2').click().type('{{}{{}scheme}}://postman-echo.com/post');   





cy.get('.config-container > .request-config-tabs-container > :nth-child(2)').click();
//     // Bearer token button

      cy.get('.d-flex.auth-type-tab > .d-flex > .mt-1 > input').check();
      cy.get('.generic-input').click().type('token');




      cy.get('.request-config-tabs-container > :nth-child(4)').click();


cy.get('#form-data').check();
cy.wait(1000);

// TO select text
// cy.get(':nth-child(1) > .dropdown > #dropdown-basic').click({force: true});
cy.get(':nth-child(2) > :nth-child(2) > .d-flex > :nth-child(1) > .dropdown > #dropdown-basic').click();
cy.wait(1000);
cy.get('.form-data > :nth-child(2)').click({force: true});
cy.wait(1000);

// key
cy.get(':nth-child(2) > :nth-child(2) > .Table_table-cell-input__fk7qI').click().type('text');
cy.wait(1000);


// value`
cy.get(':nth-child(2) > :nth-child(3) > .Table_table-cell-input__fk7qI').dblclick();
cy.get(':nth-child(2) > :nth-child(3) > .Table_table-cell-input__fk7qI') .type('text');





cy.get('.request-config-tabs-container > :nth-child(5)').click();

// Add a cookie name
cy.get('.justify-content-start > input').type('Cookie');

// Adding cookie 
cy.get('.justify-content-start > .Button_btn__W1TTO').click();

// To get value tab
cy.get('.cookie').click();

// To type value
cy.get('.requestTabContent > .flex-column > .w-100').click();
cy.get('.requestTabContent > .flex-column > .w-100').type('value'); 

// Save cookie
cy.get('.cookie-save-btn').click();



cy.get('.request-send-btn').click({force:true});
cy.wait(8000);
// cy.get('.editor-bg-transparent').should('have.value')



        // cy.get('.action-btn-container > :nth-child(1) > svg').click();
// cy.get(':nth-child(1) > .txn-list > .justify-content-start > .truncate-xl').should('be.be.visible');


        // cy.get('.action-btn-container > :nth-child(2) > svg').click();
// cy.wait(10000);


        // cy.get('.action-btn-container > :nth-child(3) > svg').click();
        // cy.get('.mb-4 > .cursor').click();




// Dashboard
cy.get('[style="top: 10%;"] > :nth-child(2) > a > img').click();
cy.get(':nth-child(1) > .txn-list > .justify-content-start > .truncate-xl').should('be.be.visible');
// cy.get(':nth-child(1) > .txn-list > .justify-content-start > .text-post > .m-0').should('have.length.above',0);
cy.get(':nth-child(1) > .txn-list > .justify-content-start > .text-post > .m-0').contains('POST');
cy.wait(1000);
cy.get(':nth-child(1) > .txn-list > .justify-content-start > .truncate-xl').contains('https://postman-echo.com/post');


// txn history
cy.get(':nth-child(6) > a > img').click();
cy.get(':nth-child(1) > .txn-list > .justify-content-start > .text-post > .m-0').contains('POST');
cy.get(':nth-child(1) > .txn-list > .justify-content-start > .truncate-xl').contains('https://postman-echo.com/post');


cy.get(':nth-child(1) > .txn-list > .justify-content-start > .truncate-xl').click();
cy.wait(5000);
cy.get(':nth-child(1) > .txn-list > .d-flex > .truncate').click();

// Custom
cy.get('.txnHisotry-tabs-container > .cursor').click();
cy.get('.rdrDayToday > .rdrDayNumber').click();
cy.wait(2000);
cy.get('.activeTab').click();
cy.wait(2000);


// Audit logs
cy.get(':nth-child(7) > a > img').click();
cy.get(':nth-child(1) > .audit-list > .w-100 > .truncate-xl > .status-code').contains('GET');
cy.get(':nth-child(1) > .audit-list > .w-100 > .truncate-xl > .text-url').contains('/v1/inspector/api/txn-history');
cy.get(':nth-child(1) > .audit-list > .w-100 > .text-center > .response-code > .text-success').contains('200');


// Delete environment
cy.get(':nth-child(4) > a > img').click();
//  3button
cy.xpath('//*[@id="dropdown-basic"]').click({force: true});
// DELETE BUTTON
cy.xpath('//*[@id="root"]/div/div[2]/div[2]/div[1]/div[2]/div[1]/div[3]/div/div/div/div/div/a[3]').click({force: true});



// // Delete collection 
// cy.get(':nth-child(3) > a > img').click();
// // 3 button
// cy.get('#6371f2dcd3d8f357add5b9c5').click({ force: true}); 
// // Delete button
// cy.xpath('//*[@id="root"]/div/div[2]/div[2]/div[1]/div[2]/div/div[1]/div/div[3]/div/div[1]/div[2]/div/div/a[6]').click({force: true});




// Import
cy.get('.environment-list-container > .gap-2 > :nth-child(2)').click();

// Select dropdown
cy.get('.p-1 > #dropdown-basic > .w-100').click();

// TO choose import collection

// Postman collection
cy.get('.dropdown-menu > :nth-child(1) > :nth-child(2)').click();
cy.wait(1000);

// cy.get('.modal-content__uploadIcon').click();
// cy.get('.row > .py-2').dblclick();
// cy.xpath('/html/body/div[4]/div/div/div[2]/section[1]/div/div[4]/div[2]/label/span[1]/svg').click();
cy.get('.row > .py-2 > :nth-child(2)').click({force: true});




// Collections
cy.get(':nth-child(3) > a > img').click();

// // To go into a request
cy.get('.ps-2 > .w-100').click({force: true});
cy.get('.flex-column > [style="width: calc(100% - 0.5rem); min-height: 33px;"]').click({force: true});
cy.get('.ms-1').click({force: true});

// // to clear url
cy.get('.d-flex > .px-2').click().clear();
cy.wait(1000);

// // To change scheme
cy.get('.request-input > #dropdown-basic > .d-flex').click();
cy.wait(1000);
cy.get('[value="GET"]').click();

// // Remove auth
cy.get('.config-container > .request-config-tabs-container > :nth-child(2)').click();
cy.get(':nth-child(1) > .d-flex > .mt-1 > input').check();

// // Dark/Light mode
cy.get('.ThemeToggler_toggler__container__F0W-V > img').click();

})