import CheckBoxPage from "../../pageObjects/checkBoxPage";
import RadioBtnPage from "../../pageObjects/radioBtnPage";
import TextBoxPage from "../../pageObjects/textBoxPage";
import WebTablePage from "../../pageObjects/webTablePage";

context("Elements Page", () => {
  context("Text box scenarios", () => {
    beforeEach(() => {
      TextBoxPage.visit();
    });

    // Create texbox scenario
    // fill in textboxes with necessary information
    // validate the paragraphs
    it("Filling in Text Boxes", () => {
      TextBoxPage.inputFullName.type("John Doe")
      TextBoxPage.inputEmail.type("john@mail.com")
      TextBoxPage.inputAddress.type("Right Street 17")
      TextBoxPage.inputPermanentAddress.type("Left Street 14")
      TextBoxPage.submit.click()
      TextBoxPage.outputName.should("contain","John Doe")
      TextBoxPage.outputEmail.should("contain", "john@mail.com")
      TextBoxPage.outputCurrentAddress.should("contain", "Right Street 17")
      TextBoxPage.outputPermanentAddress.should("contain","Left Street 14")
    });
  });

  context("Check box scenarios", () => {
    beforeEach(()=>{
      CheckBoxPage.visit()
      CheckBoxPage.expandBtn.click()
    })
    // Create CheckBoxPage page object
    // Create checkbox scenario 1:
    // Click the "+"/expand button
    // Click Notes, React, Angular, General, Excel File.doc
    // Validate the clicked checkboxes
    it("Checking check boxes 1", () => {
      CheckBoxPage.notesCheckbox.click({force: true})
      CheckBoxPage.reactCheckbox.click({force:true})
      CheckBoxPage.angularCheckbox.click({force:true})
      CheckBoxPage.generalCheckbox.click({force:true})
      CheckBoxPage.excelCheckbox.click({force:true})
      CheckBoxPage.notesCheckbox.should("be.checked")
      CheckBoxPage.reactCheckbox.should("be.checked")
      CheckBoxPage.angularCheckbox.should("be.checked")
      CheckBoxPage.generalCheckbox.should("be.checked")
      CheckBoxPage.excelCheckbox.should("be.checked")
    })

    // Create checkbox scenario 2:
    // Click expand button
    // Click Office
    // Validate the checked checkboxes
    it("Checking office checkbox", () => {
      CheckBoxPage.officeCheckbox.click({force:true})
      CheckBoxPage.officeCheckbox.should("be.checked")
      CheckBoxPage.publicCheckbox.should("be.checked")
      CheckBoxPage.privateCheckbox.should("be.checked")
      CheckBoxPage.classifiedCheckbox.should("be.checked")
      CheckBoxPage.generalCheckbox.should("be.checked")
    })
    
  });

  context("Radio button scenarios", () => {
    beforeEach(()=>{
      RadioBtnPage.visit()
    })
    // Create RadioButtons page object
    // Scenario 1:
    // Click yesButton
    // validate the message
    // click impressiveButton
    // validate the message
    // noButton - validate that the button exists but is disabled
    it("Clicking radio buttons", () => {
    RadioBtnPage.yesRadio.click({force:true})
    RadioBtnPage.message.should("have.text", "Yes")
    RadioBtnPage.impressiveRadio.click({force:true})
    RadioBtnPage.message.should("have.text", "Impressive")
    RadioBtnPage.noRadio.should("exist")
    RadioBtnPage.noRadio.should("be.disabled")
    })

  });

  context("Web tables scenarios", () => {
    beforeEach(()=>{
      WebTablePage.visit()
    })
    // Create WebTables page object
    // Create scenario 1:
    // Click add record button
    // fill in the necessary information
    // click submit button
    // search for the user based on previously added information
    // validate tha the user is visible
    it("Adding record to table", () => {
      WebTablePage.addNewRecordButton.click()
      WebTablePage.inputFirstName.type("John")
      WebTablePage.inputLastName.type("Doe")
      WebTablePage.inputAge.type("40")
      WebTablePage.inputEmail.type("john@mail.com")
      WebTablePage.inputSalary.type("2000")
      WebTablePage.inputDepartment.type("Logistics")
      WebTablePage.submitButton.click()
      const information = ["John", "Doe","40", "john@mail.com","2000", "Logistics"]
      for(let i =1;i<6;i++){
        WebTablePage.getColumns(i).eq(3).should("have.text", information[i-1])
      }
    
      })

    // Create Scenario 2:
    // Delete all table rows
    // Validate that we see text - No rows found
    it.only("Delete records", () => {
        WebTablePage.deleteRecordButtons.should("have.length",3)
        for(let i=0;i<3;i++){
          WebTablePage.deleteRecordButtons.eq(0).click()
        }
        WebTablePage.noDataMessage.should("have.text", "No rows found")
    })
  });

  context("Buttons scenarios", () => {
    // Create buttons clicking scenario
    // Create Buttons page
    // Check documentation https://docs.cypress.io/api/commands/and for how to perform different types of clicking
    // Click Double click button
    // Validate the double click message
    // Click rightclick button
    // Validate the right click message
    // Do dynamic click
    // Validate dynamic click message
  });
});
