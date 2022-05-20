
import CypressPageObject from '../helpers/cypressPageObject';

export class SalesOrder extends CypressPageObject {

   addSalesorder() {
      this.addButton();
      cy.get("#add-sales").click();
      this.shouldIncludeInUrl("/salesorder")
   }

   createSalesOrder(userDetails) {
      this.addSalesorder();
      this.usebyTextforCustomer();
      this.validateByText('Sales order #');
      this.getByDataTestId("address-field-new");
      this.customerBillingAdressData(userDetails);
      this.okButton();
      this.getByDataTestId("address-field-same");
      this.customerBillingAdressData(userDetails);
      this.okButton();
      this.validateByText("All changes saved");
   }

   createSalesProduct() {
      this.addSalesorder()
      this.usebyTextforTable();
      this.useByPlaceHolder("Select or create unit of measure");
      this.useByName("sku", "text");
      this.useByName("salesPrice", "783");
      this.getbyText("Done").click()
      this.validateByText("No recipe");
   }

}

   export const salesOrderPage = new SalesOrder(); 
