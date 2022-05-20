
import CypressPageObject from '../helpers/cypressPageObject';

export class EditAddressInSalesOrder extends CypressPageObject {

    getTablefirstSalesOrder(userDetails) {
        cy.get('.ag-center-cols-container').find('a').first().click();
        this.getByDataTestId2("address-field-location");
        this.customerBillingAdressData(userDetails);
        this.okButton();
    }

}
export const editAddressInSalesOrderPage = new EditAddressInSalesOrder(); 
