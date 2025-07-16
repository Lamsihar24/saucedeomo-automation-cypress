/// <reference types="Cypress" />
import "cypress-xpath";
import { faker } from "@faker-js/faker";
import dataCart from "../../object/checkout/checkoutPage.js"

describe("Cart", () => {
    it("User succesfully add product to cart", () => {
        cy.login();
        cy.get(dataCart.productId).click();
        cy.get(dataCart.cartIcon).click();
        //assert success add product to cart
        cy.get(dataCart.cartPage).should("exist");
        cy.wait(1000);
    });

    it("User succesfully remove product from katalog", () => {
        cy.login();
        cy.cart().wait(2000);
        cy.get(dataCart.btnRemove).click();
    });

    it("User succesfully remove product from cart", () => {
        cy.login();
        cy.cart().wait(2000);
        //assert user success checkout product
        cy.get(".title").should("exist");
        cy.get(dataCart.btnRemove).click();
        //assert berhasil remove product dari cart
        cy.get(dataCart.cartVal).should("exist");
    });

});