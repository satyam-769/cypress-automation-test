describe('Test Dropdown', ()=> {
  it.only('Test dropdown with select tag', ()=>{
    cy.visit('https://www.lambdatest.com/selenium-playground/select-dropdown-demo');
    // cy.get('#select-demo').select('Sunday');
    // cy.get('#select-demo').select(4).should('have.value', 'Wednesday');
    cy.get('#select-demo option:selected').should('have.text', 'Please select');
  })

  it.only('Test multi select dropdown', ()=>{
    cy.visit('https://www.lambdatest.com/selenium-playground/select-dropdown-demo');
    // cy.get('#multi-select').select('California', 'New York', 'Texas');
    cy.get('#multi-select').select(['California', 'New York', 'Texas']);
  })

  it.only('Test dropdown without select tag', ()=>{
    cy.visit('https://www.amazon.ae');
    cy.get('#twotabsearchtextbox').type('iphone');
    cy.get('.left-pane-results-container').find('>div').contains('14 pro max').click();
  })
})