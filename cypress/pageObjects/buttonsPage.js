import BasePage from "./basePage";

class ButtonsPage extends BasePage{
    static get url() {
        return "/buttons"
      }
    static get doubleClickBtn(){
        return cy.get("[id='doubleClickBtn']")
    }
    static get rightClickBtn(){
        return cy.get("[id='rightClickBtn']")
    }
    static get dynamicBtn(){
        return cy.get("button[type='button']").eq(3)
    }
    static get doubleClickMsg(){
        return cy.get("[id='doubleClickMessage']")
    }
    static get rightClickMsg(){
        return cy.get("[id='rightClickMessage']")
    }
    static get dynamicClickMsg(){
        return cy.get("[id='dynamicClickMessage']")
    }
}

export default ButtonsPage
