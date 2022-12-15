# Cypress

INSTALLING CYPRESS
npm install cypress --save-dev


REQUIRED NODEJS 
Node.js 14.x
Node.js 16.x
Node.js 18.x and above


RUNNING TESTS USING CLI 

npx cypress run
//This will run all the tests in the default Electron browser in headless mode.

npx cypress run --headless --browser chrome
//This command will run all the tests headlessly in the chrome browser.

npx cypress run --spec "cypress/integration/examples/actions.spec.js" --browser chrome
//This command will run a specific test headlessly in the chrome browser.


DOCKER
Docker images with all of the required dependencies installed are available under https://github.com/cypress-io/cypress-docker-images

ui:
    image: cypress/base:latest
    # if targeting a specific node version, use e.g.
    # image: cypress/base:14
    
TO RUN A FILE USING DOCKER
    docker run -it -v $PWD:/e2e -w /e2e cypress/{DOCKER IMAGE} --spec {PATH TO FILE} --browser chrome 
