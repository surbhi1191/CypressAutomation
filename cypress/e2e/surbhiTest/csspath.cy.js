describe('css path validations',()=>{
    it('test case 1',() =>
    {
     cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get("input[name='username']").type('Admin')
    cy.get("input[name='password']").type('admin123')
    cy.get("button[type='submit']").click();
    cy.get(".oxd-userdropdown-name").contains('manda user')
    })
})