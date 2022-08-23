import BasePage from "./basePage";

class CheckBoxPage extends BasePage{
    static get url() {
        return "/checkbox";
      }
    static get expandBtn(){
        return cy.get("[aria-label='Expand all']")
    }
    static get notesCheckbox(){
        return cy.get("[id='tree-node-notes']")
    }
    static get reactCheckbox(){
        return cy.get("[id='tree-node-react']")
    }
    static get angularCheckbox(){
        return cy.get("[id='tree-node-angular']")
    }
    static get generalCheckbox(){
        return cy.get("[id='tree-node-general']")
    }
    static get excelCheckbox(){
        return cy.get("[id='tree-node-excelFile']")
    }
    static get officeCheckbox(){
        return cy.get("[id='tree-node-office']")
    }
    static get publicCheckbox(){
        return cy.get("[id='tree-node-public']")
    }
    static get privateCheckbox(){
        return cy.get("[id='tree-node-private']")
    }
    static get classifiedCheckbox(){
        return cy.get("[id='tree-node-classified']")
    }

}

export default CheckBoxPage