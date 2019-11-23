/// <reference types="Cypress"/>

import{
    navigate,
    validateRecuperacaoSenhaLayout,
    validateButtonVoltar,
    validateButtonCancelar,
    rfInvalid,
    emailInvalid
} from '../../page-objects/recuperacao-senha-page.js'

import{validateLayout } from '../../page-objects/login-page'  

beforeEach(()=>{
    navigate()
})

describe("Recuperação de Senha", () =>{

    it('should view and validate layout "Recuperação de Senha"', () => {
        validateRecuperacaoSenhaLayout()
    })

    it('should validate button "Voltar" in "Recuperação de Senha"', () => {        
        validateButtonVoltar()
        validateLayout()
    })

    it('should validate button "Cancelar" in "Recuperação de Senha"', () => {        
        validateButtonCancelar()
        validateLayout()
    })

    it('should validate RF Invalid', () => {        
        rfInvalid()
    })

    it('should validate Email Invalid', () => {        
        emailInvalid()
    })

    it.only('should validate button "Continuar" in "Recuperação de Senha"', () => {
        rfInvalid()
        validateLayout()
        emailInvalid()
        validateLayout()
    });
        //TODO
    // it('esqueci minha senha', () => {
    //     //.mt-2 > .hyperlink
    //     //TODO: FIX IT
    //     //cy.get('[data-cy=esqueci-minha-senha]').click()
    //     //cy.get('.text-center').should('be.visible')
    //     cy.get('.text-center').click()
    // })
})