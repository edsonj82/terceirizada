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
    cy.get(':nth-child(5) > .text-center > .text-bold').should('contain','EMEF JOSE ERMIRIO DE MORAIS, SEN.')
}