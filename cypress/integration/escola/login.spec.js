/// <reference types="Cypress" />

describe("Login - home page no primeiro acesso", () =>{
    let faker = require('faker')
    let email = faker.internet.email().toLowerCase()
    let nome  = faker.name.firstName();
    let sobrenome = faker.name.lastName();
    let rf = faker.internet.email().toLowerCase()

    beforeEach(() => {
        cy.visit('https://hom-terceirizadas.sme.prefeitura.sp.gov.br/')
    })

    it('validar dados e imagem visiveis na tela de login', () => {
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
        cy.get('[data-cy=email]').type('escola@admin.com')
        cy.get('[data-cy=Acessar]').should('be.disabled')
    })

    it('validar acesso desabilitado para campo e-mail em branco', () => {
        cy.get('[data-cy=password]').type('adminadmin')
        cy.get('[data-cy=Acessar]').should('be.disabled')
    })

    it('acessar SIGPAE', () => {
        cy.get('[data-cy=email]').type('escola@admin.com')
        cy.get('[data-cy=password]').type('adminadmin')
        cy.get('[data-cy=Acessar]').click()
    })
    
    it('esqueci minha senha', () => {
        //.mt-2 > .hyperlink
        //TODO: FIX IT
        //cy.get('[data-cy=esqueci-minha-senha]').click()
        //cy.get('.text-center').should('be.visible')
        cy.get('.text-center').click()
    })

    it('ainda não sou cadastrado - validar dados e imagem visiveis na tela de cadastro do usuário', () => {
        //TODO: FIX IT
        // cy.get('a').click()
        cy.get('.login-bg').should('be.visible')
        cy.get('.logo-sigpae').should('be.visible')
        cy.get('.col-form-label').should('contain','E-mail')
        cy.get('[data-cy=email]').should('be.visible')
        cy.get('.col-form-label').should('contain','Nome')
        cy.get('[data-cy=nome').should('be.visible')
        cy.get('.col-form-label').should('contain','Sobrenome')
        cy.get('[data-cy=sobrenome').should('be.visible')
        cy.get('.col-form-label').should('contain','RF')
        cy.get('[data-cy=rf').should('be.visible')
        cy.get('.col-form-label').should('contain','Vínculo')
        cy.get('[data-cy=vinculo').should('be.visible')
        cy.get('.col-form-label').should('contain','Senha')
        cy.get('[data-cy=senha]').should('be.visible')
        cy.get('.col-form-label').should('contain','Senha')
        cy.get('[data-cy=confirmar_senha]').should('be.visible')
        //TODO: FIX IT
        //cy.get('.#').should('be.visible')
        //TODO: FIX IT
        //cy.get('.#').should('be.visible')
        cy.get('[data-cy=Cadastrar]').should('be.disabled')
        cy.get('.logo-prefeitura').should('be.visible')
    })
    //TODO: FIX IT - Validar "Campos Obrigatórios"
    it('validar cadastro desabilitado para campos nome sobrenome rf vinculo senha e confirmacao senha em branco', () => {
        cy.get('.col-form-label').should('contain','E-mail')
        cy.get('[data-cy=Cadastrar]').should('be.disabled')
    })
    //TODO: FIX IT - Validar "Campos Obrigatórios"
    it('validar cadastro desabilitado para campos nome sobrenome rf vinculo senha e confirmacao senha em branco', () => {
        cy.get('[data-cy=email]').type(email)
        cy.get('[data-cy=Cadastrar]').should('be.disabled')
    })
    //TODO: FIX IT - Validar "Campos Obrigatórios"
    it('validar cadastro desabilitado para campos sobrenome rf vinculo senha e confirmacao senha em branco', () => {
        cy.get('[data-cy=email]').type(email)
        cy.get('[data-cy=nome]').type(nome)
        cy.get('[data-cy=Cadastrar]').should('be.disabled')
    })
    // //TODO: FIX IT - Validar "Campos Obrigatórios"
    it('validar cadastro desabilitado para campos rf vinculo senha e confirmacao senha em branco', () => {
        cy.get('[data-cy=email]').type(email)
        cy.get('[data-cy=nome]').type(nome)
        cy.get('[data-cy=sobrenome]').type(sobrenome)
        cy.get('[data-cy=Cadastrar]').should('be.disabled')
    })
    // //TODO: FIX IT - Validar "Campos Obrigatórios"
    it('validar cadastro desabilitado para campos vinculo senha e confirmacao senha em branco', () => {
        cy.get('[data-cy=email]').type(email)
        cy.get('[data-cy=nome]').type(nome)
        cy.get('[data-cy=sobrenome]').type(sobrenome)
        cy.get('[data-cy=rf]').type('987654321')
        cy.get('[data-cy=Cadastrar]').should('be.disabled')
    })
    // //TODO: FIX IT - Validar "Campos Obrigatórios"
    it('validar cadastro desabilitado para campos vinculo confirmacao senha em branco', () => {
        cy.get('[data-cy=email]').type(email)
        cy.get('[data-cy=nome]').type(nome)
        cy.get('[data-cy=sobrenome]').type(sobrenome)
        cy.get('[data-cy=rf]').type('987654321')
        cy.get('[data-cy=Cadastrar]').should('be.disabled')
    })

    // it('validar confirmação de senha', () => {
    // });

    it('Ainda não sou cadastrado', () => {
        cy.get('[ainda-nao-sou-cadastrado]').click()
    })
})