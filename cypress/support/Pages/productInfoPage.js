import { productData } from "../../fixtures/testData.json";

class productInfoPage {
  //Validating the product info page of the selected product
  validateProductInfoPage() {
    cy.url().should("include", "/inventory-item.html?id=0");

    cy.get('[data-test="inventory-container"]')
      .should("exist")
      .and("be.visible")
      .within((container) => {
        cy.get('[data-test="inventory-item-name"]')
          .should("exist")
          .and("be.visible")
          .and("have.text", productData.itemName);

        cy.get('[data-test="inventory-item-desc"]')
          .should("exist")
          .and("be.visible")
          .and("have.text", productData.itemDesc);

        cy.get('[data-test="inventory-item-price"]')
          .should("exist")
          .and("be.visible")
          .and("have.text", productData.itemPrice);
      });
  }
}
const productInfo = new productInfoPage();
export default productInfo;
