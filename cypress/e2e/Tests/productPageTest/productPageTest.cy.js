/// <reference types="cypress" />
import { When, Then } from "cypress-cucumber-preprocessor/steps";
import product from "../../../POM/Pages/productPage";
import productInfo from "../../../POM/Pages/productInfoPage";
import checkoutPage from "../../../POM/Pages/checkoutPage";

Then("the products are visible", () => {
  product.validateProducts();
});

When("a product is clicked", (dataTable) => {
  product.clickProduct();
});
Then("the product's information is displayed", () => {
  productInfo.validateProductInfoPage();
});

When("the user add below products to cart", (dataTable) => {
  product.addProduct(dataTable);
});

Then("{int} products get added to the cart", (int) => {
  product.validateShoppingCartNumber(int);
  checkoutPage.validateCheckout(int);
});
