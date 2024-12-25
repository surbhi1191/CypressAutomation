describe('Assertions test',()=>{
it('validate implicit assertion',()=>{
cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
//assertion 1
cy.url('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login').should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
cy.url('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login').should('include','orangehrmlive')
cy.url('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login').should('contain','/login')
cy.title().should('eq','OrangeHRM')
cy.title().should('include','Orange')
cy.title().should('contain','Or')
cy.title().should('not.eq','Orange')
cy.get(".orangehrm-login-branding > img").should('be.visible').and('exist')
cy.get("img[alt='company-branding']").should('be.visible')

})
// explicit assertions or user defined assertions

/*it('validate explicit assertions' ,()=>
{

cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
cy.get("input[name='username']").type('Admin')
cy.get("input[type='password']").type('admin123').click()
cy.get(".oxd-button").click()
let expname = "manda userSinghSingh"
cy.get(".oxd-userdropdown-name").then((x) =>
{
    let actname = x.text()
    //assert bdd style
    expect(actname).to.equal(expname)
    expect(actname).to.not.equal(expname)
 

})
})*/

})