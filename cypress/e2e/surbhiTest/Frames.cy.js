///<reference types ="cypress"/>
describe('Handling Iframes',()=>
    {
        it.skip('Approach1',()=>
        {
            cy.visit('https://the-internet.herokuapp.com/tinymce');

            const iframe = cy.get('#mce_0_ifr').its('0.contentDocument.body').should('be.visible')
           .then(cy.wrap);
           iframe.type('welcome');
        })
        // appraoch 2 usign custom command
        it('Approach2',()=>
            {
                cy.visit('https://the-internet.herokuapp.com/tinymce');
    
                cy.getIframe('#mce_0_ifr').type('welcome');
               
            })
       
        })