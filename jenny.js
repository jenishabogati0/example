//firsttestcase
describe('First Test Suit' , function () {
    it('Verify Title of the page-Positive Test', function(){
        
        cy.visit('http://kec.edu.np/')
        cy.title().should('eq','Kantipur Engineering College')
 
    })
    it('Verify Title of the page- Negative Test', function(){
        
        cy.visit('http://kec.edu.np/')
        cy.title().should('eq','Kantipur College')
 
    })
 
})

//checkcommand
describe("commands test", () => {
    it("Check Command", () => {
        cy.visit("https://www.w3.org/TR/wai-aria-practices-1.1/examples/checkbox/checkbox-2/checkbox-2.html")
        //cy.get("#menu-login-signup-menu-1 > li.login-url.menu-item.menu-item-type-custom.menu-item-object-custom.menu-item-7501 > a").should('be.visible').click()
        //cy.get(".tp-checkbox").check()
        cy.get(".chkbox").check()
    })
})

//visitcommand

describe('First Test Suit' , function () {
    it('Visit KEC', function(){
        
        cy.visit('http://kec.edu.np/')
    })
})

//containscommand
describe("commands test", () => {
    it("Content Command", () => {
        cy.visit("http://kec.edu.np/")
        cy.contains('kec')
 
    })
})

//andcommand
describe("commands test", () => {
    it("Content Command", () => {
        cy.visit("https://bajratechnologies.com/")
        cy.get('.btn.btn-fill-primary.mb-2.rounded-circle').and('be.visible')
    })
})

//blur
describe("commands test", () => {
    it("Content Command", () => {
        cy.visit("https://bajratechnologies.com/")
        cy.get('.btn.btn-fill-primary.mb-2.rounded-circle').and('be.visible').click()
        cy.get('input[id$=contact1]').type('jenny').blur()
    })
})