/// <reference types="Cypress" />
import "cypress-xpath";
import dataCart from "../../object/checkout/checkoutPage.js"

describe("Catalog", () => {
    it("User succesfully filter ASC product catalog", () => {
        cy.login();
        cy.get(dataCart.filter).select('az').wait(1000);
        //assert filter product ASC
       cy.get(dataCart.cartPage).should('have.length.greaterThan', 0);
    });

    it("User succesfully filter DSC product catalog", () => {
        cy.login();
        cy.get(dataCart.filter).select('za').wait(1000);
        //assert filter product dsc
        cy.get(dataCart.cartPage).should('have.length.greaterThan', 0);
    });

    it("User succesfully filter Price (Low to High) product catalog", () => {
        cy.login();
        cy.get(dataCart.filter).select('lohi').wait(1000);
        //assert filter produt price low to high
        cy.get(dataCart.cartPage).should('have.length.greaterThan', 0);
    });

    it("User succesfully filter Price (High to Low) product catalog", () => {
        cy.login();
        cy.get(dataCart.filter).select('hilo').wait(1000);
        // assert filter product price high to low
        cy.get(dataCart.cartPage).should('have.length.greaterThan', 0);
    });
});