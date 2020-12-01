/// <reference types="Cypress" />

describe("Cypress web security", () => {
    it("validate visiting two different domains", () => {
        cy.visit('https://webdriveruniversity.com/');
        cy.visit('https://automationteststore.com/');
    }); 
    it.only("validate visiting two different domains via user actions", () => {
        cy.visit('https://webdriveruniversity.com/');
        cy.get('#automation-test-store').invoke('removeAttr', 'target').click();
    });
})