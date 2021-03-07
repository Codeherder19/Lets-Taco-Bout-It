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
});
