import { createCustomerPage } from '../src/pageObjects/createCustomer';
import { loginPage } from '../src/pageObjects/login';
import { salesOrderPage } from '../src/pageObjects/customerOnSalesOrder';
import { editAddressInSalesOrderPage } from '../src/pageObjects/editCustomerAddress';
import { homePage } from '../src/pageObjects/home';

context('Login', () => {

describe('Login and Ui Validation', () => {
    let userDetails;
    before(() => {
        cy.fixture('customerdata.json').then(data => (userDetails = data));
    });

    it('Create - success creation', () => {
        cy.login();
        loginPage.successLoginUser(userDetails.loginValidUserCredentials);
        loginPage.getAPiResponseStutusforSales();
    })

    it('Login - Error email Validation', () => {
        cy.login();
        loginPage.errorEmailValidationforLogin(userDetails.loginInValidEmailCredentials);
    })

    it('Login - Error Password Validation', () => {
        cy.login();
        loginPage.errorPasswordValidationforLogin(userDetails.loginInValidPassowordCredentials);
    })
});

describe('Home Page Validation', () => {
    let menu, userDetails;
    before(() => {
        cy.fixture('homePage.json').then(data => (menu = data));
        cy.fixture('customerdata.json').then(data => (userDetails = data));
        cy.login();
    });

    it('Menu List validation', () => {
        loginPage.successLoginUser(userDetails.loginValidUserCredentials);
        homePage.menuValidation(menu);
    })

    it('Katana Validation', () => {
        homePage.katanaMainTitleValidation();
    })

});


describe('Customer Creation', () => {
    let userDetails;
    before(() => {
        cy.fixture('customerdata.json').then(data => (userDetails = data));
        cy.login();

    });
    it('Create customer - success creation', () => {
        loginPage.successLoginUser(userDetails.loginValidUserCredentials);
        createCustomerPage.creatCustomer(userDetails.customerDataForNewAddress);
        loginPage.getAPiResponseStutusforAddress();
    })
});

describe('Sales Order Creation', () => {
    let userDetails;
    before(() => {
        cy.fixture('customerdata.json').then(data => (userDetails = data));
        cy.login();

    });
    it('Create Sales Order - success creation', () => {
        loginPage.successLoginUser(userDetails.loginValidUserCredentials);
        salesOrderPage.createSalesOrder(userDetails.customerDataForNewAddress);

    })
    it('Create Sales product - success creation', () => {
        salesOrderPage.createSalesProduct();
    })
})
describe('Edit Address', () => {
    let userDetails;
    before(() => {
        cy.fixture('customerdata.json').then(data => (userDetails = data));
        cy.login();

    });
    it('Edit address for sales order', () => {
        loginPage.successLoginUser(userDetails.loginValidUserCredentials);
        editAddressInSalesOrderPage.getTablefirstSalesOrder(userDetails.customerDataForEditAddress);
        loginPage.getAPiResponseStutusforAddress()
    })

})

})