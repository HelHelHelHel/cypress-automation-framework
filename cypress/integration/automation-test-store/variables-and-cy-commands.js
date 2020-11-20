/// <reference types="Cypress" />

describe("Verifying variables, cypress commands and jquery commands", () => {
    it("navigating to specific product pages", () => {
        const makeupLink = cy.get("a[href*='product/category&path=']").contains('makeup');
        const skincareLink = cy.get("a[href*='product/category&path=']").contains('skincare');
    }); 
    
})