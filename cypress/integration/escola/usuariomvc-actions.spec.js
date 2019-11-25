///<reference types="Cypress" />

import {
    navigate, validateCadastroUsuarioLayout
} from '../../page-objects/usuario-page'

beforeEach(()=>{
    navigate()
})

describe('Cadastro de Usuário', ()=>{
    // let faker = require('faker')
    // let email = faker.internet.email().toLowerCase()
    // let nome  = faker.name.firstName();
    // let sobrenome = faker.name.lastName();
    // let rf = faker.internet.email().toLowerCase()

    it.only('should view and validate layout "Cadastro de Usuário"', () => {
        validateCadastroUsuarioLayout()
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