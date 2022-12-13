
describe('login to astrum', function() {

    it('enter workspace', function() {

    

cy.visit('https://gcp-astrum-ui.apiwiz.io/#/login');



        cy.get(':nth-child(4) > .mt-2').type('workspace1');
        cy.get('.btn-generic-blue-sm').click();
        cy.get('div.mt-1 > .neo-input').type('AbhinavRaman');
        cy.get('.position-relative > .neo-input').type('Apipwd12');
        cy.get('.btn-generic-blue-sm').click();
        cy.get(':nth-child(3) > a > img').click();
        cy.get('.mt-2 > .cursor').click();  

        //  To click on 
        cy.get('#6371f2dcd3d8f357add5b9c5').click({ force: true }); 

        // To click on new folder
        // cy.xpath('//*[@id="root"]/div/div[2]/div[2]/div[1]/div[2]/div/div[1]/div/div[3]/div/div/div[2]/div/div/a[2]').click({ force: true });

        // // To create new request
        // cy.get('#dropdown-basic').click({force: true}) ;
        // cy.xpath('//*[@id="root"]/div/div[2]/div[2]/div[1]/div[2]/div/div[1]/div/div[3]/div/div[2]/div/div/div[1]/div[2]/div/div/a[1]').click({force: true});
        
        // cy.get('#dropdown-basic > svg').click({force: true});


        // // Rename collection
        cy.get('#6371f2dcd3d8f357add5b9c5').click({ force: true}); 
        // cy.xpath('//*[@id="root"]/div/div[2]/div[2]/div[1]/div[2]/div/div[1]/div/div[3]/div/div[1]/div[2]/div/div/a[3]').click({force: true}).type('collectionName');
    
        cy.get('.mt-2 > .cursor').click({force: true});
        // cy.get('.w-100 > .ms-3').type('collectionName');

        // Rename folder
        // cy.get('#dropdown-basic').find('.dropdown').click({ force: true }); 
        // cy.xpath('//*[@id="root"]/div/div[2]/div[2]/div[1]/div[2]/div/div[1]/div/div[3]/div/div[2]/div/div/div[1]/div[2]/div/div/a[4]').click({force: true}).type('folderName');
       
        // Rename request
        // cy.get('#dropdown-basic').find('.show dropdown').click({ force: true }); 
        // cy.xpath('//*[@id="root"]/div/div[2]/div[2]/div[1]/div[2]/div/div[1]/div/div[3]/div/div[2]/div/div/div[2]/div/p/div/div[2]/div/div/a[1]').click({force: true}).type('requestname');


      })

      it('To click on a new request', () => {


          // To click on a new request
          cy.get('.ps-2 > .w-100').click({force: true});
          cy.get('.flex-column > [style="width: calc(100% - 0.5rem); min-height: 33px;"]').click({force: true});
          cy.get('.ms-1').click({force: true});
       
      });

      it('To send a request',() => {

        // TO click on Scheme 
        cy.get('.request-input > #dropdown-basic > .d-flex').click();


        // Change scheme to POST method
        cy.get('[value="POST"]').click(); 

        // cy.get('.d-flex > .px-2').click().type('https://postman-echo.com/post');
        // cy.get('.request-send-btn').click({force:true});
        // cy.xpath('//*[@id="root"]/div/div[2]/div[2]/div[1]/div[2]/div/div[3]/div/div/div[1]/div/div[1]/div[2]/div[2]/div[2]/button').click();
        cy.wait(1000);

      })

      it('headers',() =>{

        // To click on header tab
        // cy.get('.config-container > .request-config-tabs-container > :nth-child(3)').click();
        cy.get('.config-container > .request-config-tabs-container > :nth-child(3)').click();
        // cy.xpath('//*[@id="root"]/div/div[2]/div[2]/div[1]/div[2]/div/div[3]/div/div/div[1]/div/div[2]/div[1]/span[3]').click();

        // key
        cy.get(':nth-child(2) > :nth-child(2) > .Table_table-cell-input__fk7qI').type('texhv',{delay:100});
        cy.wait(1000);

        // value
        cy.get(':nth-child(2) > :nth-child(3) > .Table_table-cell-input__fk7qI').dblclick();
        cy.get(':nth-child(2) > :nth-child(3) > .Table_table-cell-input__fk7qI').type('textv');
        cy.wait(1000);
        // cy.xpath('//*[@id="root"]/div/div[2]/div[2]/div[1]/div[2]/div/div[3]/div/div/div[1]/div/div[2]/div[2]/div/div[2]/div[3]/input').dbclick().type('test123',{force: true});
        
        // Description
        cy.get(':nth-child(2) > :nth-child(4) > .Table_table-cell-input__fk7qI').dblclick();
        // cy.get('.undefined > :nth-child(2) > :nth-child(4)').dblclick();
        cy.get(':nth-child(2) > :nth-child(4) > .Table_table-cell-input__fk7qI').type('test',{delay:100});

        
      })

      it('params',() =>{
      //   //  To click on params tab
      //   cy.get('.config-container > .request-config-tabs-container > :nth-child(1)').click();

      //   cy.get(':nth-child(2) > :nth-child(2) > .Table_table-cell-input__fk7qI').dblclick();
      //   cy.wait(1000);

      //   cy.get(':nth-child(2) > :nth-child(2) > .Table_table-cell-input__fk7qI').type('text to type',{delay:100});
      //   cy.wait(1000);


      //   cy.get(':nth-child(2) > :nth-child(3) > .Table_table-cell-input__fk7qI').dblclick();
      //   cy.wait(1000);

      //   cy.get(':nth-child(2) > :nth-child(3) > .Table_table-cell-input__fk7qI').type('text to type',{force:true});
      //   cy.wait(1000);

      
      })



      // describe('authorization',() => {
        // Authorization tab

          it('Apikey',()=>{
        // cy.get('.config-container > .request-config-tabs-container > :nth-child(2)').click();
          // // Apikey button
          // cy.get(':nth-child(2) > .d-flex > .mt-1 > input').check();
          // cy.get(':nth-child(1) > .generic-input').click().type('keyss');
          // cy.get(':nth-child(2) > .generic-input').click().type('value');

          // // To set in the params
          // cy.get('select').select('Params').should('have.value','queryParams');
          })
       
          it('Bearer token',()=>{

        cy.get('.config-container > .request-config-tabs-container > :nth-child(2)').click();
        //     // Bearer token button
      
              cy.get('.d-flex.auth-type-tab > .d-flex > .mt-1 > input').check();
              cy.get('.generic-input').click().type('token');
          })


        it('Basic auth',()=>{
        // cy.get('.config-container > .request-config-tabs-container > :nth-child(2)').click();
      // // Basic Auth button

        // cy.get(':nth-child(4) > .d-flex > .mt-1 > input').check();
        // cy.get(':nth-child(1) > .generic-input').click().type('username');
        // cy.get(':nth-child(2) > .generic-input').click().type('password');
        })

      
      // })

    // describe('body',()=>{

      it('body tab',()=>{
        // Body tab

          cy.get('.request-config-tabs-container > :nth-child(4)').click();
      })

      it('Formdata text',() =>{


        cy.get('#form-data').check();

        // TO select text
        cy.get(':nth-child(1) > .dropdown > #dropdown-basic').click();
        cy.get('.form-data > :nth-child(2)').click();

        // key
        cy.get(':nth-child(2) > .Table_table-cell-input__fk7qI').click().type('text');
        cy.wait(1000);


        // value`
        cy.get(':nth-child(2) > :nth-child(3) > .Table_table-cell-input__fk7qI').dblclick();
        cy.get(':nth-child(2) > :nth-child(3) > .Table_table-cell-input__fk7qI') .type('text');
      })


      it('Formdata file',() =>{
        // Formdata
        // cy.get('#form-data').check();

        // //File

        // const imagepath='users.json';
        // cy.get(':nth-child(3) > .Table_table-cell-input__fk7qI',{timeout: 10000}).should('be.visible').click({ force: true })
        // // cy.get(':nth-child(3) > :nth-child(3) > .Table_table-cell-input__fk7qI').click();
        // cy.get(':nth-child(3) > .Table_table-cell-input__fk7qI').selectFile('users.json');

      }) 

        
      it('urlencoded',() =>{
         // urlencoded

        //  cy.get('#x-www-form-urlencoded').check();

        // //  Key
        // cy.get(':nth-child(2) > .Table_table-cell-input__fk7qI').click().type('keyss');
        // cy.wait(1000);

       // // values
        // cy.get(':nth-child(2) > :nth-child(3) > .Table_table-cell-input__fk7qI').click();
        // cy.get(':nth-child(2) > :nth-child(3) > .Table_table-cell-input__fk7qI').type('valuess');
      })
       

    it('raw',() =>{
      // raw

      // cy.get('#raw').check();
      // cy.get('.raw-editor-container').dblclick();
      // cy.get('.raw-editor-container').type('abhinav')
    })
       

    it('binary',() =>{
      // binary

      // cy.get('#binary').check();
      // cy.get('.binary-btn-input').selectFile('users.json');
    })
  // })


      it('cookie',() =>{
        // Cookie tab
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

      })



        it('To check if apikey is added in headers',() =>{
        //   cy.get('.config-container > .request-config-tabs-container > :nth-child(3)').click();
        //   cy.get('.undefined > :nth-child(3) > :nth-child(2)').dblclick();
        //   cy.get('.undefined > :nth-child(3) > :nth-child(2)').should ('have.value','key')

        })


      it('To check if apikey is added in params',() =>{
      //   // To go to params tab
      //   cy.get('.config-container > .request-config-tabs-container > :nth-child(1)').click();

      //   // To check if key is in 1st params
      //   cy.get('.undefined > :nth-child(3) > :nth-child(2)').should('have.value','keyss')
      })


      it('To check if Bearer token is added to headers',()=>{
          // cy.get('.config-container > .request-config-tabs-container > :nth-child(3)').click();
          // cy.get('.undefined > :nth-child(3) > :nth-child(2)').dblclick();
          // cy.get('.undefined > :nth-child(3) > :nth-child(2)').should ('have.value','Authorization')
          // cy.get(':nth-child(2) > p').should('have.value','Authorization');

      })

      it('To check if Basic Auth is added to headers',()=>{
        //   cy.get('.config-container > .request-config-tabs-container > :nth-child(3)').click();
        //   cy.get('.undefined > :nth-child(3) > :nth-child(2)').dblclick();
        //   cy.get('.undefined > :nth-child(3) > :nth-child(2)').should ('have.value','Authorization')

      })

      it('To check if url encoded is added in headers',()=>{
        // header tab
          // cy.get('.config-container > .request-config-tabs-container > :nth-child(3)').click();

          // cy.get(':nth-child(3) > :nth-child(2) > .Table_table-cell-input__fk7qI').should('have.value','Content-Type');
          // cy.get(':nth-child(3) > :nth-child(3) > .Table_table-cell-input__fk7qI').should('have.value','application/x-www-form-urlencoded');

      })

      it('To check if form data is added in headers',()=>{
        // header tab
        //   cy.get('.config-container > .request-config-tabs-container > :nth-child(3)').click();
      })

      it('To check if raw body is added in headers',()=>{
        // header tab
        //   cy.get('.config-container > .request-config-tabs-container > :nth-child(3)').click();
        
      })

      it('To check if binary is added in headers',()=>{
        // header tab
        //   cy.get('.config-container > .request-config-tabs-container > :nth-child(3)').click();
        
      })


    it('To check cookie is added to headers',() => {
      // To click on header
      // cy.get('.config-container > .request-config-tabs-container > :nth-child(3)').click();

      // // To check if Cookie key is present
      // cy.get(':nth-child(4) > :nth-child(2) > .Table_table-cell-input__fk7qI').dblclick();
      // cy.get(':nth-child(4) > :nth-child(2) > .Table_table-cell-input__fk7qI').should('have.value', 'Cookie'); 
    })

      it('send request',() =>{
    //     // cy.get('.request-send-btn').click({force:true},);
      })




      it('Transaction history of a request',() => {
    //     // Transaction history for a request
    //     cy.get('.action-btn-container > :nth-child(1) > svg').click();
      })


    it('Generate Swagger for a request',() => {
    //     // Generate Swagger for a request
    //     cy.get('.action-btn-container > :nth-child(2) > svg').click();
      })


      it('Code generator for a request',() => {
    //     // Code generator for a request
    //     cy.get('.action-btn-container > :nth-child(3) > svg').click();
      })




      it('Rename', () =>{
        // Rename collection
        //  cy.get('#6371f2dcd3d8f357add5b9c5').click({ force: true }); 
        //  cy.xpath('//*[@id="root"]/div/div[2]/div[2]/div[1]/div[2]/div/div[1]/div/div[3]/div/div[1]/div[2]/div/div/a[3]').click({force: true}).type('collectionName');


        //  Rename folder
        // cy.get('#dropdown-basic').find('.dropdown').click({ force: true }); 
        // cy.xpath('//*[@id="root"]/div/div[2]/div[2]/div[1]/div[2]/div/div[1]/div/div[3]/div/div[2]/div/div/div[1]/div[2]/div/div/a[4]').click({force: true}).type('folderName');
       
        //  Rename request
        // cy.get('#dropdown-basic').find('.show dropdown').click({ force: true }); 
        // cy.xpath('//*[@id="root"]/div/div[2]/div[2]/div[1]/div[2]/div/div[1]/div/div[3]/div/div[2]/div/div/div[2]/div/p/div/div[2]/div/div/a[1]').click({force: true}).type('requestname');
      })
 

  });