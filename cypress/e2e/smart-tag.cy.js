/// <reference types="cypress" />

describe('smart-tag component', () => {
  beforeEach(() => {
    cy.visit('../../components/smart-tag.html');
  })

  it('show tag on hover', () => {
    cy.getDataCy('tag-container').should('be.not.visible');
    cy.getDataCy('see-more-btn').trigger('mouseover');
    cy.getDataCy('tag-container').should('be.visible');
  })

  it('hide tag on exit hover', () => {
    cy.getDataCy('see-more-btn').trigger('mouseover');
    cy.getDataCy('tag-container').should('be.visible');
    cy.getDataCy('see-more-btn').trigger('mouseleave');
    cy.getDataCy('tag-container').should('be.not.visible');
  })
})