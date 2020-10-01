const username = '#user_login'
const password = '#user_password'

describe('Working with user inputs', () => {
    // before(function() {
    beforeEach(() => {
        //cy.viewport(1901, 1050)
        cy.visit('http://zero.webappsecurity.com/')
        cy.clearCookies({ log: true }) // clear cookies example
        cy.clearLocalStorage('my_item', { log: true }) //// clear local storage example
        cy.get('button#signin_button.signin.btn.btn-info').click()

    })

    it('Enter username details', () => {
        //cy.get('#user_login').as('username')
        cy.get(username).clear()
        cy.get(username).type('Mrrrr', { delay: 100 })
    })

    it('Fill in password details', () => {
        cy.get('#user_password').as('password') //example of alias
        cy.get('@password').clear()
        cy.get('@password').type('V')
    })

    it('Select Checkbox', () => {
        cy.get('input[type="checkbox"]').click()
        cy.wait(5000)
    })

    it('Check Incorrect Login Credentials', () => {
        cy.get('#user_password').clear()
        cy.get('div.form-actions').should('be.visible')
        cy.get('.btn.btn-primary').click()
        //example of chaining multiple assertions
        cy.get('div.alert.alert-error').contains('Login and/or password are wrong.').should('be.visible')

    })
})
