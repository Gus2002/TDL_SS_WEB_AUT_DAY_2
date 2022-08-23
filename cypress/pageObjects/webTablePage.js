import BasePage from "./basePage";

class WebTablePage extends BasePage{
    static get url() {
        return "/webtables"
      }
      static get addNewRecordButton(){
        return cy.get("[id='addNewRecordButton']")
    }
    static get inputFirstName(){
        return cy.get("[id='firstName']")
    }
    static get inputLastName(){
        return cy.get("[id='lastName']")
    }
    static get inputEmail(){
        return cy.get("[id='userEmail']")
    }
    static get inputAge(){
        return cy.get("[id='age']")
    }
    static get inputSalary(){
        return cy.get("[id='salary']")
    }
    static get inputDepartment(){
        return cy.get("[id='department']")
    }
    static get submitButton(){
        return cy.get("[id='submit']")
    }
    static getColumns(column){
        let selector = "div[role='row'] > div[class='rt-td']:nth-child"
        let finalSelector = selector+'('+column+')'
        return cy.get(finalSelector)
    }
    static get deleteRecordButtons(){
        return cy.get("span[title='Delete']")
    }
    static get noDataMessage(){
        return cy.get("[class='rt-noData']")
    }
}

export default WebTablePage
