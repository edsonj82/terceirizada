/// <reference types="Cypress" />

describe("Login - home page no primeiro acesso", () =>{

    beforeEach(() => {
        cy.visit('https://hom-terceirizadas.sme.prefeitura.sp.gov.br/')
    })

    it('validar dados e imagem visiveis na tela', () => {

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
    })

    it('validar acesso desabilitado para campo senha em branco', () => {

        cy.get('[data-cy=email]').type('escola@admin.com');
        cy.get('[data-cy=Acessar]').should('be.disabled')
    })

    it('validar acesso desabilitado para campo e-mail em branco', () => {

        cy.get('[data-cy=password]').type('adminadmin');
        cy.get('[data-cy=Acessar]').should('be.disabled')
    })

    it('acessar SIGPAE', () => {
        cy.get('[data-cy=email]').type('escola@admin.com');
        cy.get('[data-cy=password]').type('adminadmin');
        cy.get('[data-cy=Acessar]').click();        
    });
    
    // it('esqueci minha senha', () => {
    //     cy.get('[data-cy=esqueci-minha-senha]').click();
    // });

    // it('Ainda não sou cadastrado', () => {
    //     let faker = require('faker');
        
    //     cy.get('[ainda-nao-sou-cadastrado]').click();

    //     let firstName  = faker.name.firstName();
    //     let lastName = faker.name.lastName();
    //     let rf = faker.internet.email().toLowerCase();
    // });
})