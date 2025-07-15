// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
/// <reference types="Cypress" />
import "cypress-xpath";
import loginPage from "../object/login/loginPage";
import dataUser from "../fixtures/data/user.json";
import dataCart from "../object/checkout/checkoutPage.js"
import sidebar from "../object/sidebar/sidebar.js"

Cypress.Commands.add("login", () => {
    cy.visit("https://www.saucedemo.com/");
    cy.get(loginPage.emailInput).type(dataUser.email);
    cy.get(loginPage.passwordInput).type(dataUser.password);
    cy.get(loginPage.loginBtn).click();
});

Cypress.Commands.add("cart", () => {
    cy.get(dataCart.productId).click();
    cy.get(dataCart.cartIcon).click();
    cy.get(dataCart.cartPage).should("exist");
});

Cypress.Commands.add("logout", () => {
    cy.get(sidebar.burgerMenu).click();
    cy.get(sidebar.menuLogout).click();
});