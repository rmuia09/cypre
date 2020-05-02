
//import { logOutNotOnboardedUser } from '../pages/NavigationBar'
//const logintitle = '#login-title'

export class{}

export class NavigationLink{

    HomePage(){
        cy.get('#login-title').should('be.visible')
    }

    SignupPage(){
        cy.get('#login-registerLnk').click() 
        cy.get('#register-title').should('be.visible')
        cy.url().should ('include', '/register')
    }

    SigninPage(){
        cy.get('#quickLinks-loginInHereLnk').click()  
        cy.url().should('include', '/signin')
    }

    ResetpwdPage(){
        cy.get('#login-resetPasswordLnk').click()  
        cy.get('#resetPassword-pageTitle').should('be.visible') 
        cy.url().should ('include', '/reset-password')
}
}
export const navigateTo = new NavigationLink() 