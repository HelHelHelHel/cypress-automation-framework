/// <reference types="Cypress" />



describe("Test the dealersearch in current live app", () => {
    it("should get you to the dealer search page", () => {
        cy.visit("https://volkswagen.de")
        cy.get('#bannerAcceptButton').click();
        cy.get('.sc-fMiknA > svg > path').click();
        cy.get('.spTHj').contains('Händlersuche');


    }); 
   
})