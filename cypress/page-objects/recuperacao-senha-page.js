///<reference types="Cypress" />

export function navigate() {
    cy.visit('https://hom-terceirizadas.sme.prefeitura.sp.gov.br/')
}

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
