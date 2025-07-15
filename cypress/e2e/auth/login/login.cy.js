/// <reference types="Cypress" />
import "cypress-xpath";
import loginPage from "../../../object/login/loginPage";
import dataUser from "../../../fixtures/data/user.json";

describe("Login", () => {
    beforeEach(() => {
        cy.visit("https://www.saucedemo.com/");
     });

    it("Input Valid Username and Password should be Success", () => {
        cy.visit("https://www.saucedemo.com/");
        cy.get(loginPage.emailInput).type(dataUser.email);
        cy.get(loginPage.passwordInput).type(dataUser.password);
        cy.get(loginPage.loginBtn).click();
        cy.url().should("include", "/inventory.html");
    });
});