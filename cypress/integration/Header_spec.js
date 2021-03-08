describe('Header', () => {
  const baseUrl = 'http://localhost:3000';

  beforeEach(() => {
    cy
    .visit(baseUrl);
  });

  it('should contain a header with an app name', () => {
    cy
    .get('header').contains(`LET'S TACO 'BOUT IT!`)
  })
});
