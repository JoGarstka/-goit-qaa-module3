export class Login {
    
    navigate() {
        return cy.visit('https://www.edu.goit.global/account/login');
    }
    getEmailInput() {
        return cy.get('#user_email');
     }
    getPasswordInput() {
        return cy.get('#user_password');
    }
    getLogInButton() {
        return cy.get('.eckniwg2');
    }
}

export default Login;