/// <reference types="Cypress" />

describe("Verifying variables, cypress commands and jquery commands", () => {
    it("navigating to specific product pages", () => {
        cy.visit('https://automationteststore.com/')
        // const makeupLink = cy.get("a[href*='product/category&path=']").contains('Makeup')
        // makeupLink.click();
        // const skincareLink = cy.get("a[href*='product/category&path=']").contains('Skincare')
        // skincareLink.click();

        
        cy.get("h1 .maintext").then(($headerText) => {
            const headerText = $headerText.text()
            cy.log("Found header text: " + headerText)
            expect(headerText).is.eq("Makeup")
        })
    }); 

    it("navigating to specific product pages", () => {
        cy.visit("https://automationteststore.com/index.php?rt=content/contact")
    })
    
})