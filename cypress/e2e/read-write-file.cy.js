describe('Read write test suite', ()=>{
  it('write to a file', ()=>{
    cy.writeFile('firstTest.txt', 'Cypress test');  // create new file at root level
    cy.writeFile('firstTest.txt', '\nHello text', {flag: "a+"});   // add the text on existing file

    cy.writeFile('first1.json', {datakey1: "test1", datakey2: "test2"});

    cy.writeFile('cy/fixtures/first1.json', {datakey1: "test1", datakey2: "test2"});  // create new folder
    cy.writeFile('cypress/fixtures/first1.json', {datakey1: "test1", datakey2: "test2"});  // add in existing folder
  })

  it('Read a file', ()=>{
    cy.readFile('firstTest.txt').then((data)=>{
      cy.log('firstTest.txt data ----', data);
    });

    cy.readFile('cypress/fixtures/first1.json').then((data)=>{
      cy.log('first1.json data ----', data);
    });
  })
})