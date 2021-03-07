describe('Header', () => {
  const baseUrl = 'http://localhost:3000';

  beforeEach(() => {
    cy
    .visit(baseUrl);
  });

  it('should have an image of some tacos on the home page', () => {
    cy
    .get('img').should('have.attr', 'src', 'https://media.istockphoto.com/photos/spicy-homemade-beef-barbacoa-tacos-picture-id960337396?k=6&m=960337396&s=612x612&w=0&h=JHvHpv-7OmGIklZd1qWPsQ_OfwwKiheorszp143RVg8=')
  })

  it('should have an paragraph that describes the app', () => {
    cy
    .get('p[class=app-description]').contains(`Welcome to Let's Taco 'Bout it`)
  })


});
