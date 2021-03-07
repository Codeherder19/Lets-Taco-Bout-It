describe('Random Taco', () => {
  const baseUrl = 'http://localhost:3000';

  beforeEach(() => {
    cy
    .visit(baseUrl);
    cy
    .get('button[class=get-random]').click()
  });

  it('recipe container should contain a heading with a title', () => {
    cy
    .get('.curated-title')
    cy
    .get('.random-wacky-taco').click()
    cy
    .get('.curated-title').contains('Randomly Generated Taco')
  })

  it('should always have at least one ingredient and one ingredient recipe for a curated taco', () => {
    cy
    .get('.ingredient-name')
    cy
    .get('.ingredient-recipe')
  })

  it('should always have 5 ingredients for a wacky taco', () => {
    cy
    .get('.random-wacky-taco').click()
    cy
    .get('.total-recipe-container').within(() => {
    cy
    .get('h3')
    .should(($h3) => {
      expect($h3).to.have.length(5)
      })
    })
    .get('.total-recipe-container').within(() => {
    cy
    .get('p')
    .should(($p) => {
      expect($p).to.have.length(5)
      })
    })
  })

  it('should have a button that will take you back to the home page', () => {
    cy
    .get('.back-to-home').click()
    cy
    .get('img').should('have.attr', 'src', 'https://media.istockphoto.com/photos/spicy-homemade-beef-barbacoa-tacos-picture-id960337396?k=6&m=960337396&s=612x612&w=0&h=JHvHpv-7OmGIklZd1qWPsQ_OfwwKiheorszp143RVg8=')
  })

  // it('should have buttons that generate either a random curated taco or a wacky taco', () => {
  //
  // })
  //
  // it('should have a button to save a taco to be viewed later', () => {
  //
  // })
  //
  // it('should have a button that takes a user to view saved tacos', () => {
  //
  // })

});
