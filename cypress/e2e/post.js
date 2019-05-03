describe('post', () => {
  it('should be clickable on home', () => {
    cy.visit('/')
      .waitForRouteChange()
      .getByText(/A Lannister always pays his debt/i)
      .click()
      .waitForRouteChange()
      .assertRoute('/a-lannister-always-pays-his-debt')
  })
  it('should have its content', () => {
    cy.visit('/a-lannister-always-pays-his-debt').waitForRouteChange()
    cy.get('header').within(() => {
      cy.getByText(/A Lannister always pays his debt/i).getByText(/11.10.2018/i)
    })
    cy.getByText(/Hello, this is a new line on this blogpost./i)
  })
  it('should have working recent posts', () => {
    cy.visit('/a-lannister-always-pays-his-debt').waitForRouteChange()
    cy.get('main').within(() => {
      cy.getByText(/Why you shouldn't visit King's Landing/i)
        .click()
        .waitForRouteChange()
    })
    cy.get('header').within(() => {
      cy.getByText(/Why you shouldn't visit King's Landing/i)
    })
  })
  it('should link to its category', () => {
    cy.visit('/a-lannister-always-pays-his-debt').waitForRouteChange()
    cy.get('header').within(() => {
      cy.getByText(/Information/i)
        .click()
        .waitForRouteChange()
    })
    cy.getAllByText(/Category/i)
  })
})
