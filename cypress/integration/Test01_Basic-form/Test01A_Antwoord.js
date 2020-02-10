describe("Antwoord formulieren test", () => {
    it("Stuur een vraag in", () => {
      cy.visit('localhost:5000');
      cy.get("form");
  
      cy.get('input[name="name"]')
        .type("Henk Huurman")
        .should("have.value", "Henk Huurman");
  
      cy.get('input[name="email"]')
        .type("info@henkhuurman.com")
        .should("have.value", "info@henkhuurman.com");
  
      cy.get("textarea")
        .type("Wil jij jouw team meer bevlogenheid en plezier geven?")
        .should("have.value", "Wil jij jouw team meer bevlogenheid en plezier geven?");
    });
  });