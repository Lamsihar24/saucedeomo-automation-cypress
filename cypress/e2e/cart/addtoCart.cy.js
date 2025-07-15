/// <reference types="Cypress" />
import "cypress-xpath";
import { faker } from "@faker-js/faker";
import dataCart from "../../object/checkout/checkoutPage.js"

const information = faker.lorem.sentence();

describe("Cart", () => {
    it("User succesfully add product to cart", () => {
        cy.login();
        cy.get(dataCart.productId).click();
        cy.get(dataCart.cartIcon).click();
        //assert success add product to cart
        cy.get(dataCart.cartPage).should("exist");
    });
});