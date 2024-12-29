///<reference types = "cypress" />
describe('HTTP Methods',()=>{
it('get method',()=>{
    cy.request({
        method:'get',
        url:'https://jsonplaceholder.typicode.com/posts/1' })
        .its('status')
        .should('equal',200);
})
it('post method',()=>{
    cy.request({
      method: 'post',
      url : 'https://jsonplaceholder.typicode.com/posts'  ,
      body : {
        userId: 101,
        title: "http methods new",
        body : " using cypress"
      }
    })
      .its('status').should('equal',201)
    
})


})