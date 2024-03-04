describe('Browser navigation', ()=>{
  it('Perform backword and forword in cypress', ()=>{
    cy.visit('https://naveenautomationlabs.com/opencart/');
    cy.contains('Software').click();
    cy.contains('There are no products to list in this category.').should('be.visible');
    cy.go('back');  // cy.go(-1) also used 
    cy.go('forward');  // cy.go(1)
    cy.contains('There are no products to list in this category.').should('be.visible');
  })
})