/// <reference types="cypress" />
// @ts-check
describe("Oefening formulieren test", () => {
  it("Stuur een vraag in", () => {
    cy.visit('localhost:5000');
    cy.get("form");

  });
});