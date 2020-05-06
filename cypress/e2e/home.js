describe('home', () => {
  beforeEach(() => {
    cy.visit('/').waitForRouteChange()
  })

  it('should have the hero content', () => {
    cy.findAllByText(/frontend developer/i)
    cy.findByText(/Hey, I'm Arya./i)
    cy.findByText(/Twitter/i)
  })

  it('should have recent posts', () => {
    cy.findByText(/A Lannister always pays his debt/i)
  })

  it('should have recent projects', () => {
    cy.findByText(/Production of a keyboard/i)
  })

  it('should have a footer', () => {
    cy.findByText(/Valar Morghulis/i)
  })
})
