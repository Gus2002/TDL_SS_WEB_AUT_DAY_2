import BasePage from "./basePage";

class RadioBtnPage extends BasePage{
    static get url() {
        return "/radio-button";
      }
    static get yesRadio(){
        return cy.get("[id='yesRadio']")
    }
    static get impressiveRadio(){
        return cy.get("[id='impressiveRadio']")
    }
    static get message(){
        return cy.get("[class='text-success']")
    }
    static get noRadio(){
        return cy.get("[id='noRadio']")
    }
}

export default RadioBtnPage