

export default class CypressPageObject {
  getByInputType(key, value) {
    return cy.get(`input[type="${key}"]`).type(value);
  }

  button(){
    return cy.get(`button[type="button"]`).eq(1).click();
  }

  submit() {
    cy.get('button[type="submit"]').click();
  }

  okButton() {
    cy.get('button[id="submitButton"]').click();
  }

  shouldIncludeInUrl(url) {
    return cy.url().should('include', url);
  }

  addButton() {
    cy.get('button[id="globalAdd"]').click();
  }

  getByName(key) {
    return cy.get(`input[name="${key}"]`);
  }

  useByName(key, value) {
    this.getByName(key).type(value);
  }

  validateByText(text) {
    cy.get('[data-testid="agGridColoredCell"]').contains(text);
  }

  getByDataTestId(key) {
    return cy.get(`[data-testid="${key}"]`).click({ force: true }, { timeout: 5000 });
  }
 
  getByDataTestId2(key) {
    cy.get(`[data-testid="${key}"]`).eq(0).click({ force: true });
  }

  getByPlaceHolder(key) {
    return cy.get(`input[placeholder="${key}"]`);
  }

  useByPlaceHolder(key) {
    this.getByPlaceHolder(key).type('cm{enter}', { delay: 500 });
  }

  useByNameForSecondElement(key, value) {
    this.getByName(key).eq(1).type(value);
  }

  getbyText(text) {
    return cy.contains(text);
  }

  usebyTextforCustomer() {
    return cy.get('input[placeholder="Search or create customer"]').type('Anusha{enter}', { delay: 500 })
  }

  usebyTextforTable() {
    return cy.get('.gridCellHintText').type('Bench{enter}', { delay: 500 })
  }

  validateByText(text) {
    cy.contains(text).should("be.visible");
  }

  customerBillingAdressData(userInfo) {
    cy.get('input[name="firstName"]').type(userInfo.firstName)
    cy.get('input[name="lastName"]').type(userInfo.lastName)
    cy.get('input[name="company"]').type(userInfo.comapanyName)
    cy.get('input[name="phone"]').type(userInfo.phone)
    cy.get('input[name="line1"]').type(userInfo.addressline1)
    cy.get('input[name="line2"]').type(userInfo.addressline2)
    cy.get('input[name="city"]').type(userInfo.Town)
    cy.get('input[name="state"]').type(userInfo.state)
    cy.get('input[name="zip"]').type(userInfo.zip)
    cy.get('input[name="country"]').type(userInfo.country);
  }

} 