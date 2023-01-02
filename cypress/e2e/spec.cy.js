describe('Sick Trick Wish List', () => {
  beforeEach(() => {
    cy.intercept('http://localhost:3001/api/v1/tricks', {
      method: 'GET',
      fixture: '../fixtures/tricks.json'
    })
    cy.visit('http://localhost:3000/')
  })
  it('should display the title', () => {
    cy.get('h1').should('contain', 'Sick Trick Wish List')
  })

  it('should display some tricks', () => {
    cy.get('.tricks-container').within(() => {
      cy.get('.card').eq(0).should('contain', 'Treflip Regular')
      .and('contain', 'Obstacle: flat ground')
      .and('contain', 'Link to Tutorial: https://www.youtube.com/watch?v=XGw3YkQmNig')
      cy.get('.card').eq(1).should('contain', 'Heelflip Switch')
      .and('contain', 'Obstacle: stairs')
      .and('contain', 'Link to Tutorial: https://www.youtube.com/watch?v=9N9swrZU1HA')
      cy.get('.card').eq(2).should('contain', 'Frontside 50-50, backside 180 out Regular')
      .and('contain', 'ledge')
      .and('contain', 'Link to Tutorial: https://www.youtube.com/watch?v=9N9swrZU1HA')
    })
  })

  it('should have a form that responds to user\'s input', () => {
    cy.get('select[name=stance]').should('have.value', 'Choose your Stance')
    .select('Regular').should('have.value', 'Regular')
    cy.get('input[name=name]').should('have.value', '')
    .type('the turbo').should('have.value', 'the turbo')
    cy.get('select[name=obstacle]').should('have.value', 'Choose your Obstacle')
    .select('Ledge').should('have.value', 'Ledge')
    cy.get('input[name=tutorial]').should('have.value', '')
    .type('https://www.youtube.com/watch?v=9N9swrZU1HA').should('have.value', 'https://www.youtube.com/watch?v=9N9swrZU1HA')
  })

  it('should allow users to add a new trick to their wish list', () => {
    cy.get('select[name=stance]').select('Regular')
    cy.get('input[name=name]').type('The Hooligan')
    cy.get('select[name=obstacle]').select('Pool')
    cy.get('input[name=tutorial]').type('https://www.youtube.com/watch?v=9N9swrZU1HA')
    cy.get('button').click(0)
    cy.get('.tricks-container').within(() => {
      cy.get('.card').eq(3).should('contain', 'The Hooligan Regular')
      .and('contain', 'Pool')
      .and('contain', 'Link to Tutorial: https://www.youtube.com/watch?v=9N9swrZU1HA')
    })
  })

})