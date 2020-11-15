/// <reference types="Cypress" />

describe("Test contact us form via automationTestStore", () => {
    it("should be able to do a successful submission via contact us form", () => {
        cy.visit("https://automationteststore.com/");
        cy.get('.info_links_footer > :nth-child(5) > a').click();
        cy.get('#ContactUsFrm_first_name').type('joe');
        cy.get('#ContactUsFrm_email').type('joe@gmail.com');
        cy.get('#ContactUsFrm_enquiry').type('hello');
        cy.get('button[title="Submit"]').click()
    }); 
   
})