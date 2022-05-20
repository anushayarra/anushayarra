
import CypressPageObject from '../helpers/cypressPageObject';

export class Login extends CypressPageObject {


    successLoginUser(loginValidUserCredentials) {
        this.getByInputType("email", loginValidUserCredentials.email);
        this.getByInputType("password", loginValidUserCredentials.password);
        this.submit();
        this.shouldIncludeInUrl("/sales");
    }

    errorEmailValidationforLogin(loginInValidEmailCredentials) {
        this.getByInputType("email", loginInValidEmailCredentials.email);
        this.getByInputType("password", loginInValidEmailCredentials.password);
        this.submit();
        this.getbyText('Email is invalid').should("be.visible");
    }

    errorPasswordValidationforLogin(loginInPassowordCredentials) {
        this.getByInputType("email", loginInPassowordCredentials.email);
        this.getByInputType("password", loginInPassowordCredentials.password);
        this.submit();
        this.getbyText('Wrong email or password.').should("be.visible");
    }

    getAPiResponseStutusforSales() {
        cy.intercept('GET', '/sales', (req) => {
            req.reply({
                statusCode: 200, 
            })
          
        })
    }
        
    getAPiResponseStutusforAddress() {
        cy.intercept('GET', '/api/customer-addresses', (req) => {
            req.reply({
                statusCode: 200, 
            })
          
        })
    }
}

export const loginPage = new Login(); 
