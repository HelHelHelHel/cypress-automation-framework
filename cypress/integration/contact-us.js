/// <reference types="Cypress" />

describe("Test contact us form via webdriveruni", () => {
    it("should be able to do a successful submission via contact us form", () => {
        //cypress code
        cy.visit("http://webdriveruniversity.com/")
        cy.get('#contact-us > .thumbnail').click()
    }); 
    it("should not do a successful submission via contact us form as all field are reequired", () => {
        //cypress code
    });
})