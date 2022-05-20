
import CypressPageObject from '../helpers/cypressPageObject';

export class CreateCustomer extends CypressPageObject { 
 creatCustomer(customerDataForNewAddress) {
     this.addButton();
     cy.get("#add-customer").click();
     this.shouldIncludeInUrl("/customer")
     this.useByName("firstName", customerDataForNewAddress.firstName);
     this.useByName("lastName", customerDataForNewAddress.lastName);
     this.useByName("company", customerDataForNewAddress.comapanyName);
     this.useByName("name", customerDataForNewAddress.displayName);
     this.useByName("email", customerDataForNewAddress.email);
     this.useByName("phone", customerDataForNewAddress.phone);
     this.useByName("comment", customerDataForNewAddress.comment);
     this.getByName("defaultBillingAddress").click();
     this.useByNameForSecondElement("firstName", customerDataForNewAddress.firstName);
     this.useByNameForSecondElement("lastName", customerDataForNewAddress.lastName);
     this.useByNameForSecondElement("company", customerDataForNewAddress.comapanyName);
     this.useByNameForSecondElement("phone", customerDataForNewAddress.phone);
     this.useByName("line1", customerDataForNewAddress.addressline1);
     this.useByName("line2", customerDataForNewAddress.addressline2);
     this.useByName("city", customerDataForNewAddress.Town);
     this.useByName("state",customerDataForNewAddress.state);
     this.useByName("zip", customerDataForNewAddress.zip);
     this.useByName("country", customerDataForNewAddress.country);
     this.okButton();
     this.validateByText("All changes saved");
 }

}

export const createCustomerPage = new CreateCustomer(); 
