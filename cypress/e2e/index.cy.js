/// <reference types="cypress" />

describe('index component', () => {
  beforeEach(() => {
    cy.visit('../../components/index.html');
  })

  it('add and delete todos', () => {
    cy.getDataCy('todo-input').type('todo 1');
    cy.getDataCy('todo-add-btn').click();
    cy.getDataCy('todo-input').type('todo 2');
    cy.getDataCy('todo-add-btn').click();
    cy.getDataCy('todo-input').type('todo 3');
    cy.getDataCy('todo-add-btn').click();
    cy.getDataCy('todo-input').type('todo 4');
    cy.getDataCy('todo-add-btn').click();
    cy.getDataCy('todo-content').should('be.length', 4);
    cy.getDataCy('todo-delete-btn').eq(1).click();
    cy.getDataCy('todo-content').eq(0).contains('1');
    cy.getDataCy('todo-content').eq(1).contains('3');
    cy.getDataCy('todo-content').eq(2).contains('4');
    cy.getDataCy('todo-content').should('be.length', 3);
  })
})