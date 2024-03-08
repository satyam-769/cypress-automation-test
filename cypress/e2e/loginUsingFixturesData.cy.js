import testData from '../fixtures/login.json'; // way of getting fixture data

describe('Automation testing cypress || fixtures', ()=>{
  let data;
  before(()=>{
    cy.visit('https://ecommerce-playground.lambdatest.io/index.php?route=account/login')
    cy.fixture('login').then((value)=>{       // way of getting fixture data
      data = value
    })
  })

  it('Login into the application using fixture data', ()=>{
    cy.fixture('login').then((value)=>{       // way of getting fixture data
      cy.get('input[name="email"]').type(testData.email);
      cy.get('input[name="password"]').type(testData.password);
    })
    cy.get('input[type="submit"]').click();
  })
})