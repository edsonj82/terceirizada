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

})