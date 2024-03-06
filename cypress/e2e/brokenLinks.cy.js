describe('Find the broken links on page', ()=>{
  it('Verify navigation across the page', ()=>{
    cy.visit('https://ecommerce-playground.lambdatest.io/')
    let activeLink = 0;
    let brokenLink = 0;
    cy.get('a').each(($link, index)=>{
      const href = $link.attr('href');
      if(href){
        cy.request({url: href, failOnStatusCode: false}).then((response)=>{
          if(response.status >= 400){
            cy.log(`**** link ${index + 1} is a broken link ${href}`)
            brokenLink++
          } else {
            cy.log(`*** link ${index + 1} is a active link`)
            activeLink++
          }
        })
      }
    }).then(($links)=>{
      const totalLinks = $links.length;
      cy.log(`*** Total Links ${totalLinks} ***`)
      cy.log(`*** Total active Links ${activeLink} ***`)
      cy.log(`*** Total broken Links ${brokenLink} ***`)
    })
  })
})