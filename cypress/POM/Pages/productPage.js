class productPage {
  //Validating all the 6  products are visible
  validateProducts() {
    cy.get('[data-test="inventory-item-description"]')
      .should("have.length", 6)
      .and("exist")
      .and("be.visible");
  }

  //click the 2nd product
  clickProduct() {
    cy.get('[data-test="item-0-img-link"]').click();
  }

  //add product to the cart
  addProduct(dataTable) {
    cy.log("rows : " + dataTable.rows());

    dataTable.hashes().forEach((elem) => {
      cy.log("Adding " + elem.ProductName);
      cy.get('[data-test="inventory-item-name"]')
        .contains(elem.ProductName)
        .parent()
        .parent()
        .next()
        .find(".btn_primary")
        .click();
    });
  }

  //validating that the number on the cart increases after adding the products to the cart
  validateShoppingCartNumber(value) {
    cy.get('[data-test="shopping-cart-badge"]').should("contain.text", value);
    cy.get('[data-test="shopping-cart-link"]').click();
  }
}
const product = new productPage();
export default product;
