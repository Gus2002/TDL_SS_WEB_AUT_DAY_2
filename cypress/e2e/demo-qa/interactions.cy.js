// import page objects

import SelectablePage from "../../pageObjects/selectablePage";

context("Interactions", () => {
  context("Selectable", () => {
    beforeEach(() => {
      SelectablePage.visit();
    });
    // Create SelectablePage page object
    // Create scenario 1:
    // Click on "Cras justo odio"
    // Validate that class contains active
    // Click on "Dapibus ac facilisis in"
    // Validate that chosen buttons contains class active
    it("Select elements", () => {
    SelectablePage.listFirst.click()
    SelectablePage.listFirst.should("have.class","active")
    SelectablePage.listSecond.click()
    SelectablePage.listSecond.should("have.class","active")
  })
    // Create scenario 2:
    // Click on grid
    // Click on numbers 4, 8, 6, 2
    // Validate that chosen buttons contains class active
    it.only("Click and verify class", () => {
      const numbers = ["Four", "Eight", "Six", "Two"]
      SelectablePage.gridBtn.click()
      for(let i=0;i<4;i++){
        SelectablePage.getNumberLi(numbers[i]).click()
        SelectablePage.getNumberLi(numbers[i]).should("have.class", "active")
      }
    })
  });
});
