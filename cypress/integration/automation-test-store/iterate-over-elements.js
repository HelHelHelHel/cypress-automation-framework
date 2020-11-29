/// <reference types="Cypress" />

describe("iterate over elements", () => {
    it("log information of all hair care products", () => {
        cy.visit('https://automationteststore.com/');
        cy.get('.subnav > .form-control').select("Hair Care");
    
        cy.get(".fixed_wrapper .prdocutname").each(($el) => {
            if($el.text().includes('Curls to straight Shampoo')){
                cy.wrap($el).click()
            }
        });
        
    }); 

    
    
})