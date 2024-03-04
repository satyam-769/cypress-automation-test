describe('Test Elements', ()=> {
  it.only('DOM commands in cypress', ()=>{
    cy.visit('https://naveenautomationlabs.com/opencart/');
    // cy.get('.image').first().click();
    // cy.get('.image').last().click();
    // cy.get('.image').eq(2).click(); // it will take a index in eq()
    // cy.contains('Macbook').click();  // contains take a text
    // cy.get('div').find('>a>img[alt="MacBook"]').click();
    cy.get('div.image').find('>a>').filter('img[alt="MacBook"]').click();
  })
})