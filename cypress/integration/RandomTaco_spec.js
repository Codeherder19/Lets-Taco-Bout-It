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

});
