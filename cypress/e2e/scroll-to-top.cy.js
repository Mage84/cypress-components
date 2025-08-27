/// <reference types="cypress" />

describe('scroll-to-top component', () => {
  beforeEach(() => {
    cy.visit('../../components/scroll-to-top.html')
  })

  it('shows scroll btn', () => {
    cy.getDataCy('scroll-btn').should('be.not.visible');
    cy.scrollTo(0, 500);
    cy.getDataCy('scroll-btn').should('be.visible');
  })

  it('scroll to top and disapear on click', () => {
    cy.scrollTo(0, 500);
    cy.getDataCy('scroll-btn').click();
    cy.getDataCy('scroll-btn').should('be.visible');
    cy.window().its('scrollY').should('equal', 0);
    cy.getDataCy('scroll-btn').should('be.not.visible');
  })
})
