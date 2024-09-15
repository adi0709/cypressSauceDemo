class LoginPage {
  //Visit the website
  visitURL() {
    cy.visit("/");
  }

  //Enter the login credential
  enterUserNamePassword(username, password) {
    cy.get('[data-test="username"]')
      .should("exist")
      .and("be.visible")
      .type(username);
    cy.get('[data-test="password"]')
      .should("exist")
      .and("be.visible")
      .type(password);
  }

  //Get login button and click it
  clickLoginButton() {
    cy.get('[data-test="login-button"]')
      .should("exist")
      .and("be.visible")
      .click();
  }

  //Validating successful login by checking title and the url
  validateLogin() {
    cy.title().should("eq", "Swag Labs");
    cy.url().should("include", "/inventory.html");
  }

  //Validating unsuccessful login
  validateLockedOutUserLogin() {
    cy.get('[data-test="error"]')
      .should("exist")
      .and("be.visible")
      .contains("Epic sadface: Sorry, this user has been locked out.");
  }

  //Get the logout button from burger button and clicking it
  clickLogout() {
    cy.get('[id="react-burger-menu-btn"]')
      .should("exist")
      .and("be.visible")
      .click();

    cy.get(".bm-menu-wrap").within(() => {
      //validating the close button is present in the menu
      cy.get('[data-test="close-menu"]').should("exist");

      //validating the inventory section link is present in the menu
      cy.get('[data-test="inventory-sidebar-link"]')
        .should("exist")
        .and("be.visible");

      //validating the about us section link is present in the menu
      cy.get('[data-test="about-sidebar-link"]')
        .should("exist")
        .and("be.visible");

      //validating the reset app
      // section link is present in the menu
      cy.get('[data-test="reset-sidebar-link"]')
        .should("exist")
        .and("be.visible");

      //validating the logout button is present in the menu
      cy.get('[data-test="logout-sidebar-link"]')
        .should("exist")
        .and("be.visible")
        .click();
    });
  }

  //Validating that logout was successful
  validateLogout() {
    cy.title().should("eq", "Swag Labs");
    cy.url().should("include", "/");
    cy.get(".login_logo")
      .should("exist")
      .and("be.visible")
      .and("have.text", "Swag Labs");
    cy.get('[data-test="username"]').should("exist").and("be.visible");
    cy.get('[data-test="password"]').should("exist").and("be.visible");
  }

  //Validating unsuccessful login
  validateUnsuccessfulLogin() {
    cy.get('[data-test="error"]')
      .should("exist")
      .and("be.visible")
      .contains(
        "Epic sadface: Username and password do not match any user in this service"
      );
  }
}
const login = new LoginPage();
export default login;
