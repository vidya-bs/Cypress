describe("API plugin test",() =>{
    it("Create a new todo",() => {
    cy.api("POST", "https://gcp-api.apiwiz.io/itorix/v1/monitor/collections",{
        
            name: "test1234",
            summary: "test1234",
            description: "testtt",
    });
});
});