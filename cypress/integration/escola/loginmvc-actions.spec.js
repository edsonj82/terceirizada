/// <reference types="Cypress" />

import { 
    navigate,
    validateLayout,
    validateBlankFields,
    validateButtonDisabled,
    accessSIGPAE
} from '../../page-objects/login-page' 

    beforeEach(() => {
        navigate()
    })

describe("Login", () =>{
    // let faker = require('faker')
    // let email = faker.internet.email().toLowerCase()
    // let nome  = faker.name.firstName();
    // let sobrenome = faker.name.lastName();
    // let rf = faker.internet.email().toLowerCase()

    it('should view and validate layout home page', () => {
        validateLayout()
    })

    it('should validate blank fields', () => {
        validateBlankFields()
    })

    it('should validate button disabled', () => {
        validateButtonDisabled()        
     })

    it.only('should access SIGPAE', () => {
        accessSIGPAE()
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