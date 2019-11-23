/// <reference types="Cypress"/>

import{
    navigate,
    validateRecuperacaoSenhaLayout,
    RFInvalid,
    EmailInvalid
} from '../../page-objects/recuperacao-senha-page.js'

beforeEach(()=>{
    navigate()
})

//Recuperação de Senha
it.only('should view and validate layout "Recuperação de Senha"', () => {
    validateRecuperacaoSenhaLayout()
})