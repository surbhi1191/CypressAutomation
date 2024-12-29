///<reference types ="cypress"/>
describe('HandlingChildTabs',()=>
{
    it.skip('Approach1',()=>{
        cy.visit('https://the-internet.herokuapp.com/windows')
        cy.get('.example>a').invoke('removeAttr','Target').click();
        // assert
        cy.url().should('include','https://the-internet.herokuapp.com/windows/new');
        cy.wait(5000);
        cy.go('back'); // go back to parent tab

    })
    // approach 2 to handle child tabs
    it('Approach 2',()=>{
        cy.visit('https://the-internet.herokuapp.com/windows')
        cy.get('.example>a').then((e) =>
        {
           const url = e.prop('href');
           cy.visit(url);

        })
        // assert
        cy.url().should('include','https://the-internet.herokuapp.com/windows/new');
        cy.wait(5000);
        cy.go('back');
    })
})