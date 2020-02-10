/// <reference types="cypress" />
beforeEach(() => {
  cy.visit('localhost:3000')
})
it('loads', () => {
  cy.contains('h1', 'todos')
})


it('adds two items', () => {
  addItem('first item')
  addItem('second item')
  cy.get(tid('item')).should('have.length', 2)
})
