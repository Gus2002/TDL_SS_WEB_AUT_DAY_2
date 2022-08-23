import BasePage from "./basePage";

class TextBoxPage extends BasePage {
  static get url() {
    return "/text-box";
  }

  static get inputFullName(){
    return cy.get("[id='userName']")
  }
  static get inputEmail(){
    return cy.get("[id='userEmail']")
  }
  static get inputAddress(){
    return cy.get("[id='currentAddress']")
  }
  static get inputPermanentAddress(){
    return cy.get("[id='permanentAddress']")
  }
  static get submit(){
    return cy.get("[id='submit']")
  }
  static get outputName(){
    return cy.get("[id='name']")
  }
  static get outputEmail(){
    return cy.get("[id='email']")
  }
  static get outputCurrentAddress(){
    return cy.get("[id='currentAddress']")
  }
  static get outputPermanentAddress(){
    return cy.get("[id='permanentAddress']")
  }
}

export default TextBoxPage;
