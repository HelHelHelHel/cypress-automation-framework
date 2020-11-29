/// <reference types="Cypress" />

describe("alias and invoke", () => {
    it("validate specific hair care product", () => {
        cy.visit('https://automationteststore.com/');
        cy.get('.subnav > .form-control').select("Hair Care");
        cy.get(".fixed_wrapper .prdocutname").eq(0).invoke('text').as('productThumbnail')
        cy.get('@productThumbnail').its('length').should('be.gt', 5);
        cy.get('@productThumbnail').should('include', 'Seaweed Conditioner');
        });

    it("validate product thumbnail", () => {
        cy.visit('https://automationteststore.com/');
        cy.get(".thumbnail").as('productThumbnail');
        cy.get("@productThumbnail").should('have.length', 16);
        cy.get("@productThumbnail").find('.productcart').invoke('attr', 'title').should('include', 'Add to Cart');
        });

    it.only("calculate total of normal and sale products", () => {
        cy.visit('https://automationteststore.com/');
        cy.get(".thumbnail").as('productThumbnail');
        // cy.get("@productThumbnail").find('.oneprice').each(($el) => {
        //     cy.log($el.text())
        //     });
        cy.get('.thumbnail').find('.oneprice').invoke('text').as('itemPrice')
        cy.get('.thumbnail').find('.pricenew').invoke('text').as('saleItemPrice')
        let itemsTotal = 0
        cy.get('@itemPrice').then($linkText => {
            let itemsPriceTotal = 0;
            let itemPrice = $linkText.split('$')
            let i;
            for(i = 0; i < itemPrice.length; i++) {
                cy.log(itemPrice[i])
                itemsPriceTotal += Number(itemPrice[i]);
                
            }
            itemsTotal += itemsPriceTotal;
            cy.log("Non sale price items total: " + itemsTotal);
        })
        cy.get('@saleItemPrice').then($linkText => {
            let saleItemsPriceTotal = 0;
            let saleItemPrice = $linkText.split('$')
            let i;
            for(i = 0; i < saleItemPrice.length; i++) {
                cy.log(saleItemPrice[i])
                saleItemsPriceTotal += Number(saleItemPrice[i]);
                
            }
            itemsTotal += saleItemsPriceTotal;
            cy.log("Sale price items total: " + saleItemsPriceTotal);
        })
        .then(() => {
            cy.log("The total price of all products: " + itemsTotal)
            expect(itemsTotal).to.equal(664)
        })
        });
    }); 

    
    
