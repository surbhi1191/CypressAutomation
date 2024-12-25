///<reference types = 'cypress'/>
describe('handling dropdowns', ()=>{
    it.skip('Dropdown with select',()=>
{
cy.visit('https://www.zoho.com/commerce/free-demo.html')
cy.get("#zcf_address_country").select('India').type('{enter}').should('have.value','India')
})
it.skip('handling boot strap dropdown',()=>
{
    cy.visit('https://www.dummyticket.com/dummy-ticket-for-visa-application/')
    cy.get('span[aria-label="Country"]').click();
    cy.get("input[role='combobox']").type('Italy').type('{enter}');
    cy.get('span[aria-label="Country"]').should('have.text','Italy');

})
it.skip('handling autosuggest dropdown',()=>{
cy.visit('https://www.wikipedia.org/');
cy.get('input[id="searchInput"]').type('delhi');
cy.get('a[class="suggestion-link"]').contains('Delhi University').click();
cy.get('title').should('contain','Delhi University');
})
it('Handling dynamic drop downs',()=>{
    cy.visit('https://www.google.com/')
    cy.get('#L2AGLb > .QS5gu').click();
    cy.get('textarea[class="gLFyf"]').type('cypress automation')
    //this approach can also be used
   cy.get('li[data-view-type="1"]').contains('cypress automation tutorial').click();
  //jquery function can also be used
  /* cy.get('li[data-view-type="1"]>div[class="eIPGRd"]').each(($el,index,$list)=>{
    if($el.text=='cypress automation tutorial')
    {
        cy.wrap('$el').click();
    }
   })
    */
})
})



