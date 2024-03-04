describe('Suite1', ()=>{
  // beforeEach = ()
  it('First test1 - launch browser', ()=>{
    cy.log('Suite1 test 1 - ')
  })

  it('First test2 - launch browser', ()=>{
    cy.log('Suite1 test 2')
  })
})

describe('Suite2', ()=>{
  it('First test1 - launch browser', ()=>{
    cy.log('Suite2 test 1')
  })

  it('First test2 - launch browser', ()=>{
    cy.log('Suite2 test 2')
  })
})