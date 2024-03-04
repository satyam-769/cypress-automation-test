describe('Test ',{
  viewportWidth: 890,
  viewportHeight: 760
}, ()=>{
  before = () =>{
    console.log('beforeAll it will run');
  }

  beforeEach = ()=> {
    console.log('Before each test it will run');
  }

  it('TC-1 viewport', ()=>{
    cy.viewport(990, 760);
    cy.visit('https://www.amazon.com');
  })

  it('TC-2 viewport preset', ()=>{
    cy.viewport('iphone-3');
    cy.visit('https://www.amazon.com');
  })

  it('TC-3 viewport oriantation with preset', ()=>{
    cy.viewport('iphone-3', 'landScape');
    cy.visit('https://www.amazon.com');
  })

  it('TC-4 viewport with preset', ()=>{
    cy.viewport('ipad-mini');
    cy.visit('https://www.amazon.com');
  })

  it('TC-5 viewport with preset', ()=>{
    cy.viewport('macbook-16');
    cy.visit('https://www.amazon.com');
  })

  it('TC-6 viewport with preset', ()=>{
    cy.viewport('samsung-s10');
    cy.visit('https://www.amazon.com');
  })
})