import PracticeFormPage from "../pageObjects/practiceFormPage";

context("Practice Form Page", () => {
  context("Student registration page",()=> {
    beforeEach(() => {
      PracticeFormPage.visit();
    });

    it("Register new student form", () => {
      cy.fixture('practiceFormData').then(data =>{
        // Registering new student using fixture
        PracticeFormPage.firstNameField.type(data.firstName);
        PracticeFormPage.lastNameField.type(data.lastName);
        PracticeFormPage.emailField.type(data.email);
        PracticeFormPage.getGenderSelectionField.contains(data.gender).click();
        PracticeFormPage.phoneNumberField.type(data.phoneNumber);
        PracticeFormPage.dateField.click();
        PracticeFormPage.dateMonthField.select(data.month);
        PracticeFormPage.dateYearField.select(data.year);
        PracticeFormPage.dateDayField(data.month).contains(data.day).click();
        PracticeFormPage.subjectsField.type(data.subject);
        PracticeFormPage.subjectsOptionsField.click();
        PracticeFormPage.hobbiesWrapperField.contains(data.hobby).click();
        PracticeFormPage.pictureField.selectFile("cypress/files/" + data.file);
        PracticeFormPage.currentAddressField.type(data.currentAddress);
        PracticeFormPage.selectStateField.contains("Select State").click();
        PracticeFormPage.selectStateField.contains(data.state).click();
        PracticeFormPage.selectCityField.contains("Select City").click();
        PracticeFormPage.selectCityField.contains(data.city).click();
        PracticeFormPage.submitButton.click();

        //Checking if values are correct
        PracticeFormPage.tableFieldRowName("Student Name")
        .should('contain', data.firstName + ' ' + data.lastName);

        PracticeFormPage.tableFieldRowName("Student Email")
        .should('contain', data.email);

        PracticeFormPage.tableFieldRowName("Gender")
        .should('contain', data.gender);

        PracticeFormPage.tableFieldRowName("Mobile")
        .should('contain', data.phoneNumber);

        PracticeFormPage.tableFieldRowName("Date of Birth")
        .should('contain', data.day + " " + data.month + "," + data.year);

        PracticeFormPage.tableFieldRowName("Subjects")
        .should('contain', data.subject);

        PracticeFormPage.tableFieldRowName("Hobbies")
        .should('contain', data.hobby);

        PracticeFormPage.tableFieldRowName("Picture")
        .should('contain', data.file);

        PracticeFormPage.tableFieldRowName("Address")
        .should('contain', data.currentAddress);

        PracticeFormPage.tableFieldRowName("State and City")
        .should('contain', data.state + " " + data.city);

        PracticeFormPage.closeButton.click();
      });
    });
  });

});