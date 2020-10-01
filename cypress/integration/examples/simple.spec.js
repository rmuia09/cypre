
//import { navigateTo } from "../../pages/navigationlinks"
import * as navigationlinks from '../../pages/navigationlinks'
//import { logOutNotOnboardedUser } from '../pages/NavigationBar'

describe.skip('TBFX home pagez', () => {
  // before(function() {
  beforeEach(() => {
    //cy.viewport(1901, 1050)
    cy.visit('/');
  })

  it('implicit wait test', () => {
    cy.wait(1000) 
  })

  it('Pause test', () => {
    cy.pause()
  })

  it('check all links!', () => {
    navigationlinks.SignupPage()
  })

 })



  describe('Browser Actions ', () => {
    // before(function() {
    beforeEach(() => {
      //cy.viewport(1901, 1050)
      cy.visit('http://books.toscrape.com/')
      cy.log('Before reload')
      cy.reload()
      cy.log('After reload')
    })
  
    it('check that the site contains toscrape.com', () => {
      cy.url().should('include', 'toscrape.com')
    })
  
    it('I should be able to click on Mystery Category and check that Mystery Page contains correct text', () => {
      cy.get('a').contains('Mystery').click()
      cy.get('div.page-header.action h1').should( "have.text", 'Mystery' )
      //cy.get('.product_pod').its('length').should('eq', 20)
    })
  
    it('should display the correct number of books', () => {
      cy.get('.product_pod').its('length').should('eq', 20)
     
    })

    it('navigate to poetry , click Olio and verify price', () => {
      cy.get('a').contains('Poetry').click()
      cy.get('a').contains('Olio').click()
      cy.get('.price_color').contains('£23.88').click()
     
    })
 
  

})

