
import { navigateTo } from "../../pages/navigationlinks"
//import { logOutNotOnboardedUser } from '../pages/NavigationBar'

describe('TBFX home pagez', () => {
    before(function() {
      cy.viewport(1901, 1050)
      cy.visit('/');
    })
    
    it('check all links!', () => {
      navigateTo.HomePage()

      //cy.get('#login-title').should('be.visible')
      //cy.contains('#login-registerLnk').click()
    //})

    //it('check signup page!', () => {
      navigateTo.SignupPage()
      //cy.get('#login-registerLnk').click() 
      //cy.get('#register-title').should('be.visible')
      //cy.url().should ('include', '/register')
    //})

    //it('check signin page!', () => {
      navigateTo.SigninPage()
      //cy.get('#quickLinks-loginInHereLnk').click()  
      //cy.url().should('include', '/signin')
      //cy.contains('og in here').click()  
    //})
    //it('check reset password page!', () => {
      navigateTo.ResetpwdPage()
      //cy.get('#login-resetPasswordLnk').click()  
      //cy.get('#resetPassword-pageTitle').should('be.visible') 
      //cy.url().should ('include', '/reset-password')
      //cy.url().should('include', '/signin')
      //cy.contains('log in here').click()  
    })
    })



