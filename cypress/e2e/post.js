describe('post', () => {
  it('should be clickable on home', () => {
    cy.visit('/')
      .waitForRouteChange()
      .findByText(/A Lannister always pays his debt/i)
      .click({ force: true })
      .waitForRouteChange()
      .assertRoute('/a-lannister-always-pays-his-debt')
  })
  it('should have its content', () => {
    cy.visit('/a-lannister-always-pays-his-debt').waitForRouteChange()
    cy.get('header').within(() => {
      cy.findByText(/A Lannister always pays his debt/i).findByText(/11.10.2018/i)
    })
    cy.findByText(/Hello, this is a new line on this blogpost./i)
  })
  it('should have working recent posts', () => {
    cy.visit('/a-lannister-always-pays-his-debt').waitForRouteChange()
    cy.get('main').within(() => {
      cy.findByText(/Why you shouldn't visit King's Landing/i)
        .click({ force: true })
        .waitForRouteChange()
    })
    cy.get('header').within(() => {
      cy.findByText(/Why you shouldn't visit King's Landing/i)
    })
  })
  it('should link to its category', () => {
    cy.visit('/a-lannister-always-pays-his-debt').waitForRouteChange()
    cy.get('header').within(() => {
      cy.findByText(/Information/i)
        .click({ force: true })
        .waitForRouteChange()
    })
    cy.findAllByText(/Category/i)
  })
})
