/// <reference types="Cypress" />
import "cypress-xpath";

describe("logout", () => {
  it("User should be Logout successfully", () => {
    cy.login();
    cy.logout();
    //assert berhasil logout
    cy.get(".login_logo").should("exist");
  });
});
