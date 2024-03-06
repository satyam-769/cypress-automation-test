describe('Shadow DOM elements', ()=>{
  it('Shadow dom handling', ()=>{
    cy.visit('https://www.amazon.ae/')
    cy.contains('Best Sellers').should('be.visible')
    cy.reload()           // with cashe
    cy.contains('Best Sellers').should('be.visible')

    cy.reload(true)         // hard reload
    cy.contains('Best Sellers').should('be.visible')

    cy.reload({timeout: 5000}) // by default it was 16000
    cy.contains('Best Sellers').should('be.visible')

    cy.window().then(data=>{
      data.location.reload();
    })
    cy.contains('Best Sellers').should('be.visible')
  })
})