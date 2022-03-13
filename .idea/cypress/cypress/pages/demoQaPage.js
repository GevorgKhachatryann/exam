class demoQaPage {

    elements = {
        elementsBtn:() => cy.get(":nth-child(1) > :nth-child(1) > .card-body > h5"),
        webTable:() => cy.get(":nth-child(1) > .element-list > .menu-list > #item-3"),
        addNewBtn:()=> cy.get("#addNewRecordButton"),
        firstNameInput:() => cy.get("#firstName"),
        lastNameInput: () => cy.get('#lastName'),
        email:()=> cy.get('#userEmail'),
        yourAge:()=>cy.get('#age'),
        salary:()=> cy.get('#salary'),
        department:()=>cy.get('#department'),
        submitBtn:()=>cy.get('#submit'),
        edit:()=>cy.get("#edit-record-3 > svg"),
        email2:()=>cy.get("#firstName"),
        deleting:()=>cy.get("#delete-record-3 > svg > path")
    }

    clickElementBtn(){
        this.elements.elementsBtn().click()

    }

    clickWebTable(){
        this.elements.webTable().click()
    }
    clickAddBtn(){
        this.elements.addNewBtn().click()
    }
    typeFirstName(firstName){
        this.elements.firstNameInput().clear().type(firstName)

    }
    typeLastName(lastName){

        this.elements.lastNameInput().clear().type(lastName)
    }
    typeEmail(email){
        this.elements.email().clear().type(email)
    }
    typeAge(age){
        this.elements.yourAge().clear().type(age)
    }
    typeSalary(salary){
        this.elements.salary().clear().type(salary)
    }
    typeDepartment(department){
        this.elements.department().clear().type(department)
    }
    clickSubmitBtn(submit){
        this.elements.submitBtn().click(submit)
    }
    editing(){
        this.elements.edit().click()
    }
    changeName(name){
        this.elements.email2().clear().type(name)
    }
    deleteRecord(){
        this.elements.deleting().click()
}

}
module.exports = new demoQaPage