describe('Shadow DOM elements', ()=>{
  it('Shadow dom handling', ()=>{
    cy.visit('https://selectorshub.com/xpath-practice-page')
    // cy.get('#pizza').type("Testing shadow dom")

    // use shadow()
    // cy.get('#userName').shadow().find('#app2').shadow().find('#pizza').type("Testing shadow dom")

    // use global config includeShadowDOM: true
    cy.get('#app2').find('#pizza').type("Testing shadow dom")
  })
})