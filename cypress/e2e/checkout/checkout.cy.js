/// <reference types="Cypress" />
import "cypress-xpath";
import { faker } from "@faker-js/faker";
import dataCart from "../../object/checkout/checkoutPage.js"

const information = faker.lorem.sentence();

describe("Checkout Product", () => {
    it("User succesfully checkout product", () => {
        cy.login();
        cy.cart();
        cy.get(dataCart.btnCheckout).click();
        //assert user success checkout product
        cy.get(".title").should("exist");
        cy.get(dataCart.firstName).type('Lam');
        cy.get(dataCart.lastName).type('information');
        cy.get(dataCart.zipCode).type('0989032');
        cy.get(dataCart.btnContinue).click();
        //assert success create user information
        cy.get(".cart_item_label").should("be.visible").should("exist");
        cy.get(dataCart.btnFinish).click();
        //assrt success create order
        cy.get(".complete-header").should("be.visible").should("exist");
    });
});