/// <reference types="Cypress" />

describe("Test contact us form via webdriveruni", () => {
    it("should be able to do a successful submission via contact us form", () => {
        //cypress code
        cy.visit("http://webdriveruniversity.com/Contact-Us/contactus.html");
        //cy.get('#contact-us').click() 
        cy.get('[name="first_name"]').type('hel');
        cy.get('[name="last_name"]').type('mel');
        cy.get('[name="email"]').type('hel@centrum.cz');
        cy.get('textarea.feedback-input').type('hello');
        cy.get('[type="submit"]').click();
    }); 
    it("should not do a successful submission via contact us form as all field are reequired", () => {
        //cypress code
        cy.visit("http://webdriveruniversity.com/Contact-Us/contactus.html");
        cy.get('[name="first_name"]').type('hel');
        cy.get('[name="last_name"]').type('mel');
        cy.get('textarea.feedback-input').type('hello');
        cy.get('[type="submit"]').click();
    });
})