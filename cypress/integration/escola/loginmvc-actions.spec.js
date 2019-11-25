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

    it('should view and validate layout "Login" home page', () => {
        validateLayout()
    })

    it('should validate blank fields', () => {
        validateBlankFields()
    })

    it('should validate button disabled', () => {
        validateButtonDisabled()        
     })

    it('should access SIGPAE', () => {
        accessSIGPAE()
    })
})