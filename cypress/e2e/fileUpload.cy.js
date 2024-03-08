describe('Upload file request', ()=>{
  
  it.skip('input field || upload file - apporach-1', ()=>{
    cy.visit('https://www.lambdatest.com/selenium-playground/upload-file-demo')
    cy.get('#file').selectFile('test.pdf')
  })

  it('Dropping the file', ()=>{
    cy.visit('https://www.ilovepdf.com/pdf_to_word')
    cy.get('.uploader__droptxt').selectFile('test.pdf', { action: 'drag-drop'})
  })

  it('Dropping the file || fixture', ()=>{
    cy.visit('https://www.ilovepdf.com/pdf_to_word')
    cy.fixture('test3.pdf').as('pdf')
    cy.get('.uploader__droptxt').selectFile('@pdf', { action: 'drag-drop'})
  })
})