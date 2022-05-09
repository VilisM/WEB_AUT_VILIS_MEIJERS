import BasePage from "./basePage";

class PracticeFormPage extends BasePage {
  static get url () {
    return '/automation-practice-form';
  }

  static get firstNameField () {
    return cy.get('#firstName');
  }

  static get lastNameField () {
    return cy.get('#lastName');
  }

  static get emailField () {
    return cy.get('#userEmail');
  }

  static get getGenderSelectionField () {
    return cy.get('#genterWrapper label');
  }

  static get phoneNumberField () {
    return cy.get('#userNumber');
  }

  static get dateField () {
    return cy.get('#dateOfBirthInput');
  }

  static get dateMonthField() {
    return cy.get('select[class="react-datepicker__month-select"]');
  }

  static get dateYearField() {
    return cy.get('select[class="react-datepicker__year-select"]');
  }

  static dateDayField(month) {
    return cy.get('.react-datepicker__day[aria-label*=' + month + ']');
  }

  static get subjectsField () {
    return cy.get('#subjectsContainer');
  }

  static get subjectsOptionsField () {
    return cy.get('.subjects-auto-complete__menu');
  }

  static get hobbiesWrapperField () {
    return cy.get('#hobbiesWrapper label');
  }

  static get pictureField () {
    return cy.get('#uploadPicture');
  }

  static get currentAddressField () {
    return cy.get('#currentAddress');
  }

  static get selectStateField () {
    return cy.get('#state > div');
  }

  static get selectCityField () {
    return cy.get('#city > div');
  }

  static get submitButton () {
    return cy.get('#submit');
  }

  static tableFieldRowName (rowName) {
    return cy.get('tr > td').contains(rowName).parent().find('td');
  }

  static get closeButton () {
    return cy.get('#closeLargeModal');
  }

}

export default PracticeFormPage;
