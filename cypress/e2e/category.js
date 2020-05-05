describe('category', () => {
  it('should exist on index "recent posts" and work', () => {
    cy.visit('/')
      .waitForRouteChange()
      .findByText(/Announcement/i)
      .click({ force: true })
      .waitForRouteChange()
      .assertRoute('/categories/announcement')
  })
  it('should have correct posts on individual overview pages', () => {
    cy.visit('/categories/announcement')
      .waitForRouteChange()
      .findByText(/Why you shouldn't visit King's Landing/i)
  })
})
