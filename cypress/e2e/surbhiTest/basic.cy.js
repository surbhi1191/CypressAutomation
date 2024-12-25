describe('My first test',() =>
{
it('visit url and verify title positive test case',() =>
{
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.title().should('eq','OrangeHRM')
    
   
})
it('visit url and verify negative test case',() =>
    {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
      
        cy.title().should('eq','OrangeHRM123')
       
    })


})