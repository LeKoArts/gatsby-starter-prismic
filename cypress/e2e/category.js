describe('category', () => {
  it('should exist on index "recent posts" and work', () => {
    cy.visit('/')
      .waitForRouteChange()
      .getByText(/Announcement/i)
      .click()
      .waitForRouteChange()
      .assertRoute('/categories/announcement')
      .getByText(/Category/i)
  })
  it('should have correct posts on individual overview pages', () => {
    cy.visit('/categories/announcement')
      .waitForRouteChange()
      .getByText(/Why you shouldn't visit King's Landing/i)
  })
})
