///<reference types="Cypress" />

import {
    navigate, validateCadastroUsuarioLayout, validateMessageCampoObrigatorio, validateRequiredFieldEmail,
    validateRequiredFieldRF
} from '../../page-objects/cadastro-usuario-page'

beforeEach(()=>{
    navigate()
})

describe('Cadastro de Usuário', ()=>{

    it('should view and validate layout "Cadastro de Usuário"', () => {
        validateCadastroUsuarioLayout()
    })

    it('should validate all required fields ', () => {
        validateMessageCampoObrigatorio()
    })

    it('should validate required field "E-mail"', () => {
        validateRequiredFieldEmail()
    })

    it.only('should validate required field "RF"', () => {
        validateRequiredFieldRF()
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