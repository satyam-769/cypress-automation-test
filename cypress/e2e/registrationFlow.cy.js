describe('Registratn using fixture data || fixtures', ()=>{
  before(()=>{
    cy.visit('https://ecommerce-playground.lambdatest.io/index.php?route=account/register')
  })

  it('Registration using fixture data', ()=>{
    cy.fixture('register').then((value)=>{       // way of getting fixture data
      cy.get('#input-firstname').type(value.name.first_name);
      cy.get('#input-lastname').type(value.name.last_name);
      cy.get('#input-telephone').type(value.phone);
      cy.get('#input-email').type(value.email);
      cy.get('#input-password').type(value.login.password);
      cy.get('#input-confirm').type(value.login.password);
    })
    // cy.get('input[type="radio"]').eq(2).check();
    // cy.get('input[type="checkbox"]').click();
    cy.get('label[for="input-agree"]').click();
    cy.get('input[type="submit"]').click();
  })
})