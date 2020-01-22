 /* This is a test to see if the user can access the page to check their bmi*/

 describe(
     'User can check their BMI', () => {
    it ('user can enter weight and height', () => {
        cy.visit('http://localhost:3001')
        cy.contains('BMI Calculator')
        cy.get('#weight').type('90')
        cy.get('#height').type('186')
        cy.get('#Calculate').click()
    })
} )

