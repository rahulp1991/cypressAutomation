describe('My First Test', () => {
  it('Visits the Fua login page', () => {
    cy.visit('https://account.sb.forusall.com/login')
    cy.get('.ant-select-lg').type("persona1@sharklasers.com")
    cy.get('.ant-input-lg').type("123456789")
    cy.get('.login-btn').click()
  })
})
