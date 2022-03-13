import demoQaPage from "../pages/demoQaPage"
describe('Simple Form Demo', () => {

    beforeEach(() => {
        cy.visit('https://demoqa.com/')

    })

    it('Add new Record', () => {
           demoQaPage.clickElementBtn()
           demoQaPage.clickWebTable()
           demoQaPage.clickAddBtn()
           demoQaPage.typeFirstName("Tesvan")
           demoQaPage.typeLastName("LLC")
           demoQaPage.typeEmail("tesvan123@gmail.com")
           demoQaPage.typeAge("2")
           demoQaPage.typeSalary('100000')
           demoQaPage.typeDepartment("aaaaaaaaaaaaa")
           demoQaPage.clickSubmitBtn()
           cy.get(":nth-child(4) > .rt-tr > :nth-child(1)").should('have.text',"Tesvan")
           cy.get(":nth-child(4) > .rt-tr > :nth-child(2)").should('have.text',"LLC")
           cy.get(":nth-child(4) > .rt-tr > :nth-child(3)").should('have.text',"2")
           cy.get(":nth-child(4) > .rt-tr > :nth-child(4)").should('have.text',"tesvan123@gmail.com")
           cy.get(':nth-child(4) > .rt-tr > :nth-child(5)').should("have.text","100000")
           cy.get(':nth-child(4) > .rt-tr > :nth-child(6)').should("have.text","aaaaaaaaaaaaa")
    })

    it('Edit Record', () => {
        demoQaPage.clickElementBtn()
        demoQaPage.clickWebTable()
        demoQaPage.editing()
        demoQaPage.changeName("Tesvan")
        demoQaPage.clickSubmitBtn()
    //    demoQaPage.changeName("Tesvan")
        cy.get(":nth-child(3) > .rt-tr > :nth-child(1)").should('have.text',"Tesvan")
    })

    it('Delete Record', () => {
        demoQaPage.clickElementBtn()
        demoQaPage.clickWebTable()
        demoQaPage.deleteRecord()
        cy.get(":nth-child(3) > .rt-tr > :nth-child(1)").should("not.have.length")
        cy.get(":nth-child(3) > .rt-tr > :nth-child(2)").should("not.have.length")
        cy.get(":nth-child(3) > .rt-tr > :nth-child(4)").should("not.have.length")
    })


})