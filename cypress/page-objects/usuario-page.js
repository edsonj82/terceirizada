///<reference types="Cypress" />

export function navigate() {
    cy.visit('https://hom-terceirizadas.sme.prefeitura.sp.gov.br/')
}

export function validateCadastroUsuarioLayout() {

        cy.get('[data-cy=ainda-nao-cadastrado]').click()

        cy.get('.login-bg').should('be.visible')
        cy.get('.logo-sigpae').should('be.visible')

        cy.get('.col-form-label').should('contain','E-mail')
        cy.get('[data-cy=email]').should('be.visible')
        
        cy.get('.col-form-label').should('contain','RF')
        cy.get('[data-cy=registro_funcional]').should('be.visible')

        cy.get('.col-form-label').should('contain','CPF')
        cy.get('[data-cy=cpf]').should('be.visible')

        cy.get('.col-form-label').should('contain','Senha')
        cy.get('[data-cy=password]').should('be.visible')

        cy.get('.col-form-label').should('contain','Confirme sua senha')
        cy.get('[data-cy=confirmar_password]').should('be.visible')
        
        cy.get('[data-cy=Cadastrar]').should('be.disabled')
        cy.get('.logo-prefeitura').should('be.visible')
}