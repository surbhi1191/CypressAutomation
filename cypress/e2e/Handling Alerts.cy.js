///<reference types = 'cypress'/>
describe('handling Alerts', ()=>{
// case 1 : javascript alert : it will have some text and ok button
 // case 2 : javascript confirm alert : it will have some text with ok and cancel button
 // case 3 : javascript prompt alert : it will have some text for user input with ok button
// case4 : authenticated alert
it.skip('js alert',()=>{
    cy.visit('https://the-internet.herokuapp.com/javascript_alerts');
    cy.get('button[onclick="jsAlert()"]').click();
    //assertion
    cy.get('#result').should('have.text','You successfully clicked an alert');
    cy.on('window:alert',(t)=>{
    expect(t).to.contains('I am a JS Alert');
    })
})
it.skip('js confirm alert',()=>{
    cy.visit('https://the-internet.herokuapp.com/javascript_alerts');
    cy.get('button[onclick="jsConfirm()"]').click();
    //assertion
  // cy.get('#result').should('have.text','You clicked: Ok');
   // confirm alert when clicked ok,by default cypress close the js 
 // cy.on('window:confirm',(t)=>{
  // expect(t).to.contains('I am a JS Confirm');
  // })
   //when cancel is clicked
   cy.on('window:confirm',()=>false)
   cy.get('#result').should('have.text','You clicked: Cancel');

})
// case 3 : javascript prompt alert
it.skip('Prompt alert',()=>{
    cy.visit('https://the-internet.herokuapp.com/javascript_alerts');
    cy.window().then((win)=>{
        cy.stub(win,'prompt').returns('null')
    })
    cy.get('button[onclick="jsPrompt()"]').click()
    cy.on('window:prompt',()=>false)
    cy.get('#result').should('have.text','You entered: null')
})
// case4 : authenticated alert
it('handling authenticated alert',()=>{
    //approach 1
   /* cy.visit('https://the-internet.herokuapp.com/basic_auth',{auth:
    {user:'admin',pass:'admin'}
    }) */
   //approach 2 sending username and pass with the url
cy.visit('https://admin:admin@the-internet.herokuapp.com/basic_auth')
    cy.get('.example').should('have.contain','Congratulations')

})



})