///<reference types ="cypress"/>
describe('RaioButtonTest',()=>
{
it('checking radio buttons',()=>
{
    cy.visit('https://testautomationpractice.blogspot.com/')
cy.get("input[value='male']").should('be.visible')
cy.get("input[value='female']").should('be.visible')
// selecting and unselecting radio buttons
cy.get("input[value='male']").check().should('be.checked')
cy.get("input[value='female']").should('not.be.checked')
//selecting radio buttons
//cy.get("input[value='female']").check().should('be.checked')
//selecting checkboxes
//cy.get("#sunday").uncheck().should('not.be.checked')

//selecting multiple checkboxes
//cy.get("input[class='form-check-input']").check().should('be.checked')
//selecting first and last
cy.get("input[class='form-check-input']").first().check().should('be.checked')
//cy.get("input[class='form-check-input']").last().check()


})
})