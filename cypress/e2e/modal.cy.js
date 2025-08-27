/// <reference types="cypress" />

describe('modal component', () => {
  beforeEach(() => {
    cy.visit('../../components/modal.html');
  })

  it('displays modal on click', () => {
    cy.getDataCy('modal-container').should('be.not.visible');
    cy.getDataCy('display-btn').click();
    cy.getDataCy('modal-container').should('be.visible');
  })

  it('hide modal on click', () => {
    cy.getDataCy('display-btn').click();
    cy.getDataCy('modal-container').should('be.visible');
    cy.get('body').click(0, 0);
    cy.getDataCy('modal-container').should('be.not.visible');
  })

  it('check modal content', () => {
    cy.getDataCy('modal-container').contains('h2', 'Lorem Ipsum')
  })
})
