describe('login to astrum', function () {

    this.beforeEach(() => {
        cy.viewport('macbook-16');

    })
    beforeEach(() => {
        cy.restoreLocalStorage();
    });

    afterEach(() => {
        cy.saveLocalStorage();
    });


    it('enter workspace', function () {

        cy.visit('https://gcp-astrum-ui.apiwiz.io/#/login')
        cy.get(':nth-child(4) > .mt-2').type('workspace1');
        cy.get('.btn-generic-blue-sm').click();
        cy.get('div.mt-1 > .neo-input').type('AbhinavRaman');
        cy.get('.position-relative > .neo-input').type('Apipwd12');
        cy.get('.btn-generic-blue-sm').click();

        // API Collections
        cy.xpath('//*[@id="root"]/div/div[2]/div[2]/div[1]/div[14]/div').click({ delay: 2000 });
        cy.wait(3000);
    })



    it('Environment', function () {

        // Environments
        cy.xpath('//*[@id="root"]/div/div[2]/div[2]/div[1]/div[14]/div/div/div/div[5]').click({ force: true }, { delay: 1000 });
        cy.wait(1000);

        // cy.get(':nth-child(4) > a > img').click();

        // New button
        cy.get('.w-25 > .d-flex > :nth-child(1)').click({ force: true });
        cy.wait(1000);

        cy.get('.new-modal-item').click({ force: true });
        cy.wait(1000);


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
        cy.xpath('//*[@id="dropdown-basic"]').click({ force: true });

        // Rename button
        cy.xpath('//*[@id="root"]/div/div[2]/div[1]/div/div[1]/div[2]/div[1]/div[3]/div/div/div/div/div/a[1]').click({ force: true });

        // Rename 
        cy.get('.table-cell-input').click().clear();
        cy.wait(1000);
        cy.get('.table-cell-input').type('Abhinav').type('{enter}');
        cy.wait(1000);
    })


    it('Select environment', function () {

        // API Collections

        cy.xpath('//*[@id="root"]/div/div[2]/div[2]/div[1]/div[14]/div').click({ delay: 2000 }, { force: true });
        cy.wait(500);


        // Collections
        cy.xpath('//*[@id="root"]/div/div[2]/div[2]/div[1]/div[14]/div/div/div/div[4]').click({ force: true });

        cy.wait(1000);

        cy.get('.ps-2 > .w-100 > .ms-3').click();
        cy.get('.justify-content-between > .truncate').click();
        cy.get('.ms-1').click();

        cy.get('#dropdown-basic > .w-100 > span').click();
        cy.wait(500);

        cy.get('.environment-dropdown > .overflow-auto > :nth-child(1) > div').click();
        cy.wait(500);

    })



    it('url and scheme', function () {



        cy.get('.request-input > #dropdown-basic > .d-flex').click();

        cy.wait(1000);

        cy.get('[value="POST"]').click();
        cy.wait(1000);
        // cy.get('#dropdown-basic > .d-flex > :nth-child(2)').click();
        // cy.wait(1000);
        cy.get('.d-flex > .px-2').click().clear();
        cy.wait(1000);
        cy.get('.d-flex > .px-2').click().type('{{}{{}scheme}}://postman-echo.com/post');
    })



    it('params', () => {


        //  To click on params tab
        cy.get('.config-container > .request-config-tabs-container > :nth-child(1)').click();

        cy.get(':nth-child(2) > :nth-child(2) > .Table_table-cell-input__fk7qI').dblclick();
        cy.wait(1000);

        cy.get(':nth-child(2) > :nth-child(2) > .Table_table-cell-input__fk7qI').type('text to type', { delay: 100 });
        cy.wait(1000);


        cy.get(':nth-child(2) > :nth-child(3) > .Table_table-cell-input__fk7qI').dblclick();
        cy.wait(1000);

        cy.get(':nth-child(2) > :nth-child(3) > .Table_table-cell-input__fk7qI').type('text to type', { force: true });
        cy.wait(1000);


    })


    it('headers', function () {


        // headers
        cy.get('.config-container > .request-config-tabs-container > :nth-child(3)').click();
        cy.wait(1000);
        cy.get(':nth-child(2) > :nth-child(2) > .Table_table-cell-input__fk7qI').type('testkey', { delay: 100 });
        cy.wait(1000);

        // value
        cy.get(':nth-child(2) > :nth-child(3) > .Table_table-cell-input__fk7qI').dblclick();
        cy.wait(1000);
        cy.get(':nth-child(2) > :nth-child(3) > .Table_table-cell-input__fk7qI').type('testvalue', { delay: 100 });
        cy.wait(1000);
    })



    // it('Bearer token', function() {

    // //     cy.get('.config-container > .request-config-tabs-container > :nth-child(2)').click();
    // // //     // Bearer token button

    // //       cy.get('.d-flex.auth-type-tab > .d-flex > .mt-1 > input').check();
    // //       cy.get('.generic-input').click().type('token');
    // })



    it('Apikey', () => {


        cy.get('.config-container > .request-config-tabs-container > :nth-child(2)').click();
        // Apikey button
        cy.get(':nth-child(2) > .d-flex > .mt-1 > input').check();
        cy.get(':nth-child(1) > .generic-input').click().type('keyss');
        cy.wait(500);
        cy.get(':nth-child(2) > .generic-input').click().type('values');
        cy.wait(500);


        // To set in the params
        cy.get('select').select('Params').should('have.value', 'queryParams');
    })


    //  it('Basic auth',()=>{


    //         cy.get('.config-container > .request-config-tabs-container > :nth-child(2)').click();
    //       // Basic Auth button

    //         cy.get(':nth-child(4) > .d-flex > .mt-1 > input').check();
    //     cy.wait(1000);

    //         cy.get(':nth-child(1) > .generic-input').click().type('username',{delay:100});
    //     cy.wait(1000);

    //         cy.get(':nth-child(2) > .generic-input').click().type('password',{delay:100});
    //     cy.wait(1000);

    //         })



    // it('form-data text', function() {

    // //     cy.get('.request-config-tabs-container > :nth-child(4)').click();
    // //  cy.get('#form-data').check();
    // // cy.wait(1000);

    // // // TO select text
    // // // cy.get(':nth-child(1) > .dropdown > #dropdown-basic').click({force: true});
    // // cy.get(':nth-child(2) > :nth-child(2) > .d-flex > :nth-child(1) > .dropdown > #dropdown-basic').click();
    // // cy.wait(1000);
    // // cy.get('.form-data > :nth-child(2)').click({force: true});
    // // cy.wait(1000);

    // // // key
    // // cy.get(':nth-child(2) > :nth-child(2) > .Table_table-cell-input__fk7qI').click().type('text');
    // // cy.wait(1000);


    // // // value`
    // // cy.get(':nth-child(2) > :nth-child(3) > .Table_table-cell-input__fk7qI').dblclick();
    // // cy.get(':nth-child(2) > :nth-child(3) > .Table_table-cell-input__fk7qI') .type('text');
    // })



    it('Formdata file', () => {

        cy.get('.request-config-tabs-container > :nth-child(4)').click();
        cy.wait(1000);
        // Formdata
        cy.get('#form-data').check();
        cy.wait(1000);

        // key
        cy.get(':nth-child(2) > :nth-child(2) > .Table_table-cell-input__fk7qI').click().type('text');
        cy.wait(1000);

        //File

        const imagepath = 'users.json';
        cy.get(':nth-child(3) > .Table_table-cell-input__fk7qI', { timeout: 10000 }).should('be.visible').click({ multiple: true, force: true })
        cy.wait(1000);
        // cy.get(':nth-child(3) > :nth-child(3) > .Table_table-cell-input__fk7qI').click();
        cy.get(':nth-child(3) > .Table_table-cell-input__fk7qI').attachFile('image.png');
        cy.wait(1000);

    })


    //   it('urlencoded',() =>{

    // //     cy.get('.request-config-tabs-container > :nth-child(4)').click();

    // //     // urlencoded

    // //     cy.get('#x-www-form-urlencoded').check();

    // //    //  Key
    // //    cy.get(':nth-child(2) > .Table_table-cell-input__fk7qI').click().type('keyss');
    // //    cy.wait(1000);

    // //   // values
    // //    cy.get(':nth-child(2) > :nth-child(3) > .Table_table-cell-input__fk7qI').click();
    // //    cy.get(':nth-child(2) > :nth-child(3) > .Table_table-cell-input__fk7qI').type('valuess');
    // //     cy.wait(500);

    //  })


    //  it('raw',() =>{
    //     // cy.get('.request-config-tabs-container > :nth-child(4)').click();


    //     // cy.get('#raw').check();
    //     // cy.get('.raw-editor-container').dblclick();
    //     // cy.get('.raw-editor-container').type('abhinav')
    //   })



    //   it('binary',() =>{

    //     // cy.get('.request-config-tabs-container > :nth-child(4)').click();
    //     // cy.wait(1000);

    //     //  // binary

    //     //  cy.get('#binary').check();
    //     //  cy.wait(1000);
    //     // //  cy.get('.binary-btn-input',{timeout: 10000}).should('be.visible').click({multiple: true,force: true});
    //     // //  cy.wait(1000);
    //     //  cy.get('.binary-btn-input').click();
    //     //  cy.get('.binary-btn-input').selectFile('users.json');
    //     //  cy.wait(7000);
    //   })



    it('Cookies', function () {

        cy.get('.request-config-tabs-container > :nth-child(5)').click();
        cy.wait(500);


        // Add a cookie name
        cy.get('.justify-content-start > input').type('Cookie', { delay: 100 });
        cy.wait(500);



        // Adding cookie 
        cy.get('.justify-content-start > .Button_btn__W1TTO').click();
        cy.wait(1000);


        // To get value tab
        cy.get('.cookie').click({ multiple: true });
        cy.wait(500);


        // To type value
        cy.get('.requestTabContent > .flex-column > .w-100').click();
        cy.wait(500);

        cy.get('.requestTabContent > .flex-column > .w-100').type('value', { delay: 100 });
        cy.wait(500);


        // Save cookie
        cy.get('.cookie-save-btn').click();
        cy.wait(500);

    })




    it('Send request', function () {


        cy.get('.request-send-btn').click({ force: true });
        cy.wait(5000);
    })



    it('Click on headers below', function () {


        cy.get('.justify-content-between > .justify-content-start > :nth-child(3)').click({ delay: 100 });
        cy.wait(2000);

    })


    it('Raw', function () {


        cy.get('.justify-content-between > .justify-content-start > :nth-child(1)').click({ delay: 100 });
        cy.wait(500);

        cy.get('.response-tabs > :nth-child(2)').click();
        cy.wait(2000);

    })


    it('Preview', function () {


        cy.get('.response-tabs > :nth-child(3)').click({ delay: 100 });
        cy.wait(2000);

    })



    // it('Txn history inside a req', function() {

    //     // cy.get('.action-btn-container > :nth-child(1) > svg').click();
    //     // cy.get(':nth-child(1) > .txn-list > .justify-content-start > .truncate-xl').should('be.be.visible');
    //     // cy.wait(2000);
    // })


    // it('Code generator inside a req', function() {

    //     // cy.get('.action-btn-container > :nth-child(3) > svg').click();
    //     //     cy.get('.mb-4 > .cursor').click();
    //     // cy.wait(4000);

    // })



    it('Generate swagger inside a req', function () {

        cy.get('.action-btn-container > :nth-child(2) > svg').click({ delay: 100 });
        cy.wait(5000);

    })


    it('Download swagger', function () {

        cy.get(':nth-child(2) > .swagger-btn-overlay').click();
        // cy.get('.swagger-btn-overlay.me-1 > img')
    })


    it('push to scm', function () {

        cy.get(':nth-child(1) > .swagger-btn-overlay').click();
        cy.wait(1000);
        // Repo name
        cy.get('.p-2 > :nth-child(2) > :nth-child(1) > div.w-100 > .w-100').click();
        cy.wait(500);

        cy.get('.p-2 > :nth-child(2) > :nth-child(1) > div.w-100 > .w-100').type('test');
        cy.wait(1000);

        // Username
        cy.get('.p-2 > :nth-child(2) > :nth-child(2) > div.w-100 > .w-100').click();
        cy.wait(500);

        cy.get('.p-2 > :nth-child(2) > :nth-child(2) > div.w-100 > .w-100').type('vidya-bs');
        cy.wait(1000);

        // Branch
        cy.get('.p-2 > :nth-child(2) > :nth-child(3) > div.w-100 > .w-100').click();
        cy.wait(500);

        cy.get('.p-2 > :nth-child(2) > :nth-child(3) > div.w-100 > .w-100').type('testing-inspector');
        cy.wait(1000);

        // Host URL
        // cy.get(':nth-child(4) > div.w-100 > .w-100').click({multiple: true});
        cy.get('.p-2 > :nth-child(2) > :nth-child(4) > div.w-100 > .w-100').click({ multiple: true });
        cy.wait(1000);
        cy.get('.p-2 > :nth-child(2) > :nth-child(4) > div.w-100 > .w-100').type('https://github.com/vidya-bs/testing-inspector.git');
        cy.wait(1000);

        // Folder Name
        cy.get(':nth-child(5) > div.w-100 > .w-100').click();
        cy.wait(500);

        cy.get(':nth-child(5) > div.w-100 > .w-100').type('Cypress test3');
        cy.wait(1000);

        // Token
        cy.get(':nth-child(6) > div.w-100 > .w-100').click();
        cy.wait(500);

        cy.get(':nth-child(6) > div.w-100 > .w-100').type('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');
        cy.wait(1000);

        // Submit
        cy.get('.scm-submit').click();
        cy.wait(8000);

    })


    it('Tree view', function () {

        cy.get('.view-swagger').click();
        cy.wait(2000);

        // Compact view
        cy.get('.compact-view-text > .d-flex > .switch').click();
        cy.wait(2000);

    })



    it('Download collection', function () {

        // API Collections
        cy.xpath('//*[@id="root"]/div/div[2]/div[2]/div[1]/div[14]/div').click({ delay: 2000 });
        cy.wait(2000);

        // Collection
        cy.xpath('//*[@id="root"]/div/div[2]/div[2]/div[1]/div[14]/div/div/div/div[4]').click({ force: true });
        cy.wait(2000);

        cy.get('#637738f8880f666237f634cc').click({ force: true });
        cy.xpath('//*[@id="root"]/div/div[2]/div[1]/div/div[1]/div/div[2]/div/div[1]/div/div/div/div[3]/div/div[1]/div[2]/div/div/a[4]').click({ force: true });
        cy.wait(2000);
    })



    it('Dashboard', function () {

        //    // API Collections
        //    cy.xpath('//*[@id="root"]/div/div[2]/div[2]/div[1]/div[14]/div').click({delay:2000});
        //    cy.wait(2000);

        // Dashboard
        cy.xpath('//*[@id="root"]/div/div[2]/div[2]/div[1]/div[14]/div/div/div/div[3]').click({ force: true });


        cy.xpath('//*[@id="root"]/div/div[2]/div[2]/div[1]/div[14]/div/div/div/div[3]').click({ force: true });


        cy.get(':nth-child(1) > .txn-list > .justify-content-start > .text-post > .m-0').contains('POST');
        cy.wait(1000);
    })



    it('Txn history', function () {

        // txn history
        cy.xpath('//*[@id="root"]/div/div[2]/div[2]/div[1]/div[14]/div/div/div/div[6]/div').click({ force: true });
        cy.wait(500);

        cy.get(':nth-child(1) > .txn-list > .justify-content-start > .text-post > .m-0').contains('POST');
        cy.wait(500);



        cy.get(':nth-child(1) > .txn-list > .justify-content-start > .truncate-xl').click();
        cy.wait(5000);
        cy.get(':nth-child(1) > .txn-list > .d-flex > .truncate').click();

        // Custom
        cy.get('.txnHisotry-tabs-container > .cursor').click();
        cy.get('.rdrDayToday > .rdrDayNumber > span').click();
        cy.wait(2000);
        cy.get('.activeTab').click();
        cy.wait(2000);
    })



    it('Audit logs', function () {

        // Audit logs

        cy.xpath('//*[@id="root"]/div/div[2]/div[2]/div[1]/div[15]/div').click();
        cy.wait(200);

        cy.xpath('//*[@id="root"]/div/div[2]/div[2]/div[1]/div[15]/div/div/div/div[5]/div').click({ force: true });
        cy.wait(1000);

        cy.get('.txnHisotry-tabs-container > .justify-content-start > :nth-child(2)').click({ force: true });
        cy.wait(200);

        cy.get(':nth-child(1) > .audit-list > .w-100 > .truncate-xl > .status-code').contains('GET');
        cy.wait(200);

        // cy.get(':nth-child(1) > .audit-list > .w-100 > .truncate-xl > .text-url').contains('/v1/inspector/api/txn-history');
        cy.get(':nth-child(1) > .audit-list > .w-100 > .text-center > .response-code > .text-success').contains('200');
        cy.wait(200);

    })



    it('Delete environment', function () {

        // API Collections
        cy.xpath('//*[@id="root"]/div/div[2]/div[2]/div[1]/div[14]/div').click({ delay: 2000 });
        cy.wait(2000);

        // Environments
        cy.xpath('//*[@id="root"]/div/div[2]/div[2]/div[1]/div[14]/div/div/div/div[5]').click({ force: true }, { delay: 1000 });
        cy.wait(2000);

        // 3 button
        cy.xpath('//*[@id="dropdown-basic"]').click({ force: true });

        // DELETE BUTTON
        cy.xpath('//*[@id="root"]/div/div[2]/div[1]/div/div[1]/div[2]/div[1]/div[3]/div/div/div/div/div/a[3]').click({ force: true });
        cy.wait(2000);

    })



    // it('import collection', function(){

    //     cy.get(':nth-child(3) > a > img').click();
    // cy.wait(1000);

    //     // Import
    //     cy.get('.gap-2 > :nth-child(2)').click();
    // cy.wait(1000);


    // // Select dropdown
    // cy.get('#dropdown-basic > .w-100').click();

    // // To choose import collection

    // // Postman collection
    // cy.get('.dropdown-menu > :nth-child(1) > :nth-child(2)').click();
    // cy.wait(1000);

    // // Attach file
    // cy.get('.row > .py-2 > :nth-child(2)').click({force: true});
    // cy.wait(1000);
    // cy.get('.row > .py-2 > :nth-child(2)').attachFile('Collectioncopy.json');
    // cy.wait(1000);
    // cy.get('.user-select-none').click();
    // })


    it('Reset', function () {

        // API Collections
        cy.xpath('//*[@id="root"]/div/div[2]/div[2]/div[1]/div[14]/div').click({ delay: 2000 });
        cy.wait(2000);

        cy.xpath('//*[@id="root"]/div/div[2]/div[2]/div[1]/div[14]/div/div/div/div[4]').click({ force: true });
        cy.wait(2000);


        // // To go into a request
        cy.get('.ps-2 > .w-100 > .ms-3').click();
        cy.get('.justify-content-between > .truncate').click();
        cy.get('.ms-1').click();

        // // to clear url
        cy.get('.d-flex > .px-2').click().clear();
        cy.get('.d-flex > .px-2').click();
        cy.get('.d-flex > .px-2').type('sample save');
        cy.wait(1000);

        // // To change scheme
        cy.get('.request-input > #dropdown-basic > .d-flex').click();
        cy.wait(1000);
        cy.get('[value="GET"]').click({ multiple: true });
        cy.wait(1000);


        // // Remove auth
        cy.get('.config-container > .request-config-tabs-container > :nth-child(2)').click();
        cy.wait(1000);
        cy.get(':nth-child(1) > .d-flex > .mt-1 > input').check();
        cy.wait(1000);


        // // Remove formdata file
        cy.get('.request-config-tabs-container > :nth-child(4)').click();

        // key
        cy.get(':nth-child(2) > :nth-child(2) > .Table_table-cell-input__fk7qI').click().clear();
        cy.wait(1000);

        // Remove File
        cy.xpath('//*[@id="root"]/div/div[2]/div[1]/div/div[1]/div/div[2]/div/div[3]/div/div/div[1]/div/div[2]/div[2]/div[2]/div/div[2]/div[3]/div/div[2]').click({ force: true });
        cy.wait(100);

        cy.get('#none').click();

        // Remove headers

        // Header tab
        cy.get('.config-container > .request-config-tabs-container > :nth-child(3)').click();
        cy.wait(1000);

        // const tableRow = '//*[@id="root"]/div/div[2]/div[1]/div/div[1]/div/div[2]/div/div[3]/div/div/div[1]/div/div[2]/div[2]/div/div[2]'
        // cy.xpath(tableRow).realHover().clear();

        // cy.xpath('//*[@id="root"]/div/div[2]/div[1]/div/div[1]/div/div[2]/div/div[3]/div/div/div[1]/div/div[2]/div[2]/div/div[2]/div[2]/input').click({delay: 500});
        // cy.wait(1000);

        // cy.xpath('//*[@id="root"]/div/div[2]/div[1]/div/div[1]/div/div[2]/div/div[3]/div/div/div[1]/div/div[2]/div[2]/div/div[2]/div[2]/input').clear();
        // cy.wait(1000);

        // cy.xpath('//*[@id="root"]/div/div[2]/div[1]/div/div[1]/div/div[2]/div/div[3]/div/div/div[1]/div/div[2]/div[2]/div/div[2]/div[3]/input').dblclick();
        // cy.wait(1000); 

        // cy.xpath('//*[@id="root"]/div/div[2]/div[1]/div/div[1]/div/div[2]/div/div[3]/div/div/div[1]/div/div[2]/div[2]/div/div[2]/div[3]/input').clear({delay: 500},{force: true});
        // cy.wait(1000);




        // cy.xpath('//*[@id="root"]/div/div[2]/div[1]/div/div[1]/div/div[2]/div/div[3]/div/div/div[1]/div/div[2]/div[2]/div/div[3]/div[2]/input').click();
        // cy.wait(1000);

        // cy.xpath('//*[@id="root"]/div/div[2]/div[1]/div/div[1]/div/div[2]/div/div[3]/div/div/div[1]/div/div[2]/div[2]/div/div[3]/div[2]/input').clear();
        // cy.wait(1000);

        // cy.xpath('//*[@id="root"]/div/div[2]/div[1]/div/div[1]/div/div[2]/div/div[3]/div/div/div[1]/div/div[2]/div[2]/div/div[3]/div[3]/input').dblclick({force: true});
        // cy.wait(1000); 

        // cy.xpath('//*[@id="root"]/div/div[2]/div[1]/div/div[1]/div/div[2]/div/div[3]/div/div/div[1]/div/div[2]/div[2]/div/div[3]/div[3]/input').clear({delay: 500},{force: true});
        // cy.wait(1000);




        // cy.xpath('//*[@id="root"]/div/div[2]/div[1]/div/div[1]/div/div[2]/div/div[3]/div/div/div[1]/div/div[2]/div[2]/div/div[4]/div[2]/input').click();
        // cy.wait(1000);

        // cy.xpath('//*[@id="root"]/div/div[2]/div[1]/div/div[1]/div/div[2]/div/div[3]/div/div/div[1]/div/div[2]/div[2]/div/div[4]/div[2]/input').clear();
        // cy.wait(1000);

        // cy.xpath('//*[@id="root"]/div/div[2]/div[1]/div/div[1]/div/div[2]/div/div[3]/div/div/div[1]/div/div[2]/div[2]/div/div[4]/div[3]/input').dblclick({force: true});
        // cy.wait(1000); 

        // cy.xpath('//*[@id="root"]/div/div[2]/div[1]/div/div[1]/div/div[2]/div/div[3]/div/div/div[1]/div/div[2]/div[2]/div/div[4]/div[3]/input').clear({delay: 500},{force: true});
        // cy.wait(1000); 



        // Send button
        cy.get('.request-send-btn').click();
        cy.wait(1000);

    })

    it.only('Test hover', ()=> {

        cy.visit('https://gcp-astrum-ui.apiwiz.io/#/login')
        cy.get(':nth-child(4) > .mt-2').type('workspace1');
        cy.get('.btn-generic-blue-sm').click();
        cy.get('div.mt-1 > .neo-input').type('AbhinavRaman');
        cy.get('.position-relative > .neo-input').type('Apipwd12');
        cy.get('.btn-generic-blue-sm').click();


    // API Collections
    cy.xpath('//*[@id="root"]/div/div[2]/div[2]/div[1]/div[14]/div').click({delay:2000});
    cy.wait(2000);

    cy.xpath('//*[@id="root"]/div/div[2]/div[2]/div[1]/div[14]/div/div/div/div[4]').click({force:true});
    cy.wait(2000);


    // // To go into a request
    cy.get('.ps-2 > .w-100 > .ms-3').click();
    cy.get('.justify-content-between > .truncate').click();
    cy.get('.ms-1').click();



        // Header tab
    cy.get('.config-container > .request-config-tabs-container > :nth-child(3)').click();
    cy.wait(1000);

    const tableRow = '//*[@id="root"]/div/div[2]/div[1]/div/div[1]/div/div[2]/div/div[3]/div/div/div[1]/div/div[2]/div[2]/div/div[2]'
    const table ='//*[@id="root"]/div/div[2]/div[1]/div/div[1]/div/div[2]/div/div[3]/div/div/div[1]/div/div[2]/div[2]/div'
    // cy.xpath(table).children()
    // cy.xpath(tableRow).focus();
    cy.wait(100);

    // console.log(cy.xpath(tableRow));
    //*[@id="root"]/div/div[2]/div[1]/div/div[1]/div/div[2]/div/div[3]/div/div/div[1]/div/div[2]/div[2]/div/div[2]/svg
        cy.xpath('//*[@id="root"]/div/div[2]/div[1]/div/div[1]/div/div[2]/div/div[3]/div/div/div[1]/div/div[2]/div[2]/div/div[2]').click();
    cy.wait(500);
    cy.xpath('//*[@id="root"]/div/div[2]/div[1]/div/div[1]/div/div[2]/div/div[3]/div/div/div[1]/div/div[2]/div[2]/div/div[2]/svg').click();

    // cy.xpath(tableRow).clear();
    })


    it('Dark mode/Light mode', function () {

        // cy.get('.ThemeToggler_toggler__container__F0W-V > img').click();
        cy.xpath('//*[@id="root"]/div/div[2]/div[2]/div[3]').click();

    })
});