import BasePage from "./basePage";

class SelectablePage extends BasePage{
    static get url() {
        return "/selectable"
      }
    static get listFirst(){
       return cy.get("ul[id='verticalListContainer'] > li").contains('Cras justo odio')
    }
    static get listSecond(){
       return cy.get("ul[id='verticalListContainer'] > li").contains('Dapibus ac facilisis in')
    }
    static get gridBtn(){
        return cy.get("[id='demo-tab-grid']")
    }
    static getNumberLi(number){
        return cy.get("div[class='list-group list-group-horizontal-sm'] > li").contains(number)
    }
    
    }


export default SelectablePage