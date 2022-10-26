/// <reference types="cypress"/>

describe('Criando um cenario de testes para globalsqa', ()=>{

  it('Caso de teste: Registrando um usuario no site com sucesso' , () =>{
    cy.visit("https://globalsqa.com/angularJs-protractor/registration-login-example/#/login")
    cy.get('.btn-link').click()
    cy.get('#firstName').type("awa")
    cy.get('#Text1').type("awa")
    cy.get('#username').type("wtfisthis")
    cy.get('#password').type("reallysecurepassword123@")
    cy.get('.btn-primary').click()
    cy.get('.ng-binding').should('contain.text', 'Registration successful')
  })

  it('Caso de teste: Registrando um usuario com falha (sem senha)' , () =>{
    cy.visit("https://globalsqa.com/angularJs-protractor/registration-login-example/#/register")
    cy.get('#firstName').type("awa")
    cy.get('#Text1').type("awa")
    cy.get('#username').type("wtfisthis")
    cy.get('#password').type("reallysecurepassword123@")
    cy.get('#password').clear()
    cy.get('.has-error > .help-block').should('have.text', 'Password is required')
    cy.get('.btn-primary').should('be.disabled')
})
  
  it('Caso de teste: Login(sucesso)' , () =>{

    let info = criaUsuario()
    cy.get('#username').type(info[0])
    cy.get('#password').type(info[1])
    cy.get('.btn-primary').click()
    cy.get('h1.ng-binding').should('contain.text', info[0])
  })


})


function criaUsuario(){

  let hours = new Date().getHours().toString()
  let minutes = new Date().getMinutes().toString()
  let seconds = new Date().getSeconds().toString()
  let user = hours + minutes + seconds + 'Id'
  let password = hours + minutes + seconds + 'senha'
  let userInfo = [user, password]

  cy.visit("https://globalsqa.com/angularJs-protractor/registration-login-example/#/login")
  cy.get('.btn-link').click()
  cy.get('#firstName').type(user)
  cy.get('#Text1').type(user)
  cy.get('#username').type(user)
  cy.get('#password').type(password)
  cy.get('.btn-primary').click()
  cy.get('.ng-binding').should('contain.text', 'Registration successful')

  return userInfo
}