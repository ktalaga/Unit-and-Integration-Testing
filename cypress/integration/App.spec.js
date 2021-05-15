describe("Calculator", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  })

  it('should have working number buttons', () => {
    cy.get('#number2').click();
    cy.get('.display').should('contain', '2');
  })

  it('should update the display of the running total by number buttons', () => {
    cy.get('#number2').click();
    cy.get('#number4').click();
    cy.get('.display').should('contain', '24');
  })

  it('should update the display with the result of arithmetical operations', () => {
    cy.get('#number2').click();
    cy.get('#operator_add').click();
    cy.get('#number4').click();
    cy.get('#operator_equals').click();
    cy.get('.display').should('contain', '6');
  })

  it('should display positive numbers', () => {
    cy.get('#number1').click();
    cy.get('#operator_add').click();
    cy.get('#number2').click();
    cy.get('#operator_equals').click();
    cy.get('.display').should('contain', '3');
  })

  it('should display negative numbers', () => {
    cy.get('#number1').click();
    cy.get('#operator_subtract').click();
    cy.get('#number2').click();
    cy.get('#operator_equals').click();
    cy.get('.display').should('contain', '-1');
  })

  it('should display decimal numbers', () => {
    cy.get('#number1').click();
    cy.get('#operator_divide').click();
    cy.get('#number2').click();
    cy.get('#operator_equals').click();
    cy.get('.display').should('contain', '0.5');
  })

  it('should display very large numbers', () => {
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#operator_multiply').click();
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#operator_equals').click();
    cy.get('.display').should('contain', '998001');
  })

  it('should display "you cannot divide by 0" when dividing by 0', () => {
    cy.get('#number1').click();
    cy.get('#operator_divide').click();
    cy.get('#number0').click();
    cy.get('#operator_equals').click();
    cy.get('.display').should('contain', 'You cannot divide by 0');
  })
})