/// <reference types="cypress"/>

export function navigate() {
    cy.visit('https://hom-terceirizadas.sme.prefeitura.sp.gov.br/')
}

export function paramLogin() {
    let faker = require('faker')
    let email = faker.internet.email().toLowerCase()
    let nome  = faker.name.firstName();
    let sobrenome = faker.name.lastName();
    let rf = faker.internet.email().toLowerCase()
}

export function validateLayout() {
    cy.get('.login-bg').should('be.visible')        
        cy.get('.col-form-label').should('contain','E-mail')
        cy.get('[data-cy=email]').should('be.visible')
        cy.get('.col-form-label').should('contain','Senha')
        cy.get('[data-cy=password]').should('be.visible')
        cy.get('a').should('contain','Esqueci minha senha')
        cy.get('[data-cy=Acessar]').should('be.disabled')
        cy.get('a').should('contain','Ainda não sou cadastrado')
        cy.get('.logo-sigpae').should('be.visible')
        cy.get('.logo-prefeitura').should('be.visible')
}

export function validateBlankFields() {
    //Password
    cy.get('[data-cy=email]').type('escola@admin.com')
    cy.get('[data-cy=password]').click()
    cy.get('[data-cy=Acessar]').click()
    cy.get('.error-message').should('contain','Campo obrigatório')
    cy.get('[data-cy=email]').clear()
    //E-mail
    cy.get('[data-cy=email]').click()
    cy.get('[data-cy=password]').type('adminadmin')
    cy.get('[data-cy=Acessar]').click()
    cy.get('.error-message').should('contain','Campo obrigatório')
}

export function validateButtonDisabled() {
    cy.get('[data-cy=email]').click()
    cy.get('[data-cy=password]').click()   
    cy.get('[data-cy=Acessar]').should('be.disabled')
    //Password
    cy.get('[data-cy=email]').type('escola@admin.com')
    cy.get('[data-cy=Acessar]').should('be.disabled')
    cy.get('[data-cy=password]').click()
    cy.get('[data-cy=Acessar]').should('be.disabled')
    cy.get('[data-cy=email]').clear()
    //E-mail
    cy.get('[data-cy=password]').type('adminadmin')
    cy.get('[data-cy=Acessar]').should('be.disabled')
    cy.get('[data-cy=email]').click()
    cy.get('[data-cy=Acessar]').should('be.disabled')
}

export function accessSIGPAE() {
    cy.get('[data-cy=email]').type('escola@admin.com')
    cy.get('[data-cy=password]').type('adminadmin')
    cy.get('[data-cy=Acessar]').click()
    cy.get(':nth-child(5) > .text-center > .text-bold').should('contain','EMEF JOSE ERMIRIO DE MORAIS, SEN.')//refactoring
}
//Recuperacao de Senha
export function validateRecuperacaoSenhaLayout() {
    cy.get('[data-cy=esqueci-senha]').click()
    cy.get('.login-bg').should('be.visible')
    cy.get('.logo-sigpae').should('be.visible')  
    cy.get('.form').should('contain','Recuperação de Senha')
    cy.get('.mt-4').should('contain','Caso você tenha cadastrado um endereço de e-mail, informe seu usuário ou RF e ao continuar você receberá um e-mail com as orientações para redefinição da sua senha.')//refactoring
    cy.get('.form > :nth-child(3)').should('contain','Se você não tem e-mail cadastrado ou não tem mais acesso ao endereço de e-mail cadastrado, procure o responsável pelo SIGPAE na sua unidade.')//refactoring
    cy.get('.col-form-label').should('contain','E-mail ou RF')
    cy.get('[data-cy=email_ou_rf]').should('be.visible')
    cy.get('[data-cy=Voltar]').should('be.enabled')
    cy.get('[data-cy=Cancelar]').should('be.enabled')
    cy.get('[data-cy=Continuar]').should('be.disabled')
    cy.get('.logo-prefeitura').should('be.visible')
}

export function validateButtonVoltar() {
    cy.get('[data-cy=esqueci-senha]').click()
    cy.get('[data-cy=Voltar]').click()
}

export function validateButtonCancelar() {
    cy.get('[data-cy=esqueci-senha]').click()
    cy.get('[data-cy=Cancelar]').click()
}

export function IncorrectRF() {
    cy.get('[data-cy=esqueci-senha]').click()
    cy.get('[data-cy=email_ou_rf]').type('123456789')
    cy.get('[data-cy=Continuar]').click()
    cy.get('.div-circular-vermelho').should('be.visible')
    cy.get('.col-8 > :nth-child(1)').should('contain','Você não tem um e-mail cadastrado para recuperar sua senha.')//refactoring
    cy.get('.col-8 > :nth-child(2)').should('contain','Para restabelecer o seu acesso, procure o Diretor da sua unidade.')//refactoring
    cy.get('[data-cy=Continuar]').click()
}