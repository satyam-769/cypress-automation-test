describe('Opening a new tab in cypress', ()=>{
  let data;
  before(()=>{
    cy.visit('https://selectorshub.com')
  })

  it.skip('Open new tab in cypress - apporach-1', ()=>{
    cy.contains('TestCase Studio').invoke('removeAttr', 'target').click({force: true});
  })

  it('Open new tab - apporach-2', ()=>{
    cy.contains('Testing Daily').invoke('removeAttr', 'target', '_self').click({force: true});
  })
})