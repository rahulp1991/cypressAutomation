describe('Manage ongoing contribution', () => {
    it('visit to portfolio section', () => {
      //cy.visit(cypress.config('baseUrl'))
      //cy.wait(4000)
      cy.visit('https://account.sb.forusall.com/login')
      cy.wait(7000) // url takes time to load
      cy.get('.ant-select-lg').type("persona10@sharklasers.com")
      cy.get('.ant-input-lg').type("123456789")
      cy.get('.login-btn').click()
      cy.wait(4000) // loading page 
      cy.get('.standard').click()
    })
  })