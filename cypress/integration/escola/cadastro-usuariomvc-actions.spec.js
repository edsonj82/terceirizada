///<reference types="Cypress" />

import {
    navigate, validateCadastroUsuarioLayout, validateMessageCampoObrigatorio, validateRequiredFieldEmail,
    validateRequiredFieldRF, validateRequiredFieldCPF, validateQuantityCharacterRF, validateQuantityCharacterCPF
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

    it('should validate required field "RF"', () => {
        validateRequiredFieldRF()
    })

    it('should validate required field "CPF"', () => {
        validateRequiredFieldCPF()
    })

    it('should be seven characters "RF"' , () => {
        validateQuantityCharacterRF()
    })

    it.only('should be seven characters "CPF"' , () => {
        validateQuantityCharacterCPF()
    })
})