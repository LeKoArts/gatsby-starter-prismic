describe('home', () => {
  beforeEach(() => {
    cy.visit('/').waitForRouteChange()
  })

  it('should have the hero content', () => {
    cy.getAllByText(/frontend developer/i)
      .getByText(/Hey, I'm Arya./i)
      .getByText(/Twitter/i)
  })

  it('should have recent posts', () => {
    cy.getByText(/A Lannister always pays his debt/i)
  })

  it('should have recent projects', () => {
    cy.getByText(/Production of a keyboard/i)
  })

  it('should have a footer', () => {
    cy.getByText(/Valar Morghulis/i)
  })
})
