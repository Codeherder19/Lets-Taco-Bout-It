describe('Random Taco', () => {
  const baseUrl = 'http://localhost:3000';

  beforeEach(() => {
    cy
    .visit(baseUrl);
    cy
    .get('button[class=get-random]').click()
  });

  it('should contain a section title for saved tacos component', () => {
    cy
    .get('.view-saved-tacos').click()
    cy
    .get('.section-title').contains('Saved Tacos')
  })

  it('should have a button which navigates ueer back to random taco component from saved view', () => {
    cy
    .get('.view-saved-tacos').click()
    cy
    .get('.back-to-random').click()
    cy
    .get('.section-title').contains('Random Taco Generator')
  })
    /*
    test 2 should have back button which navigates back to random taco component
    get view saved and click
    get back to random contains text and click
    get section title check for text

    test 3 should be able to save multiple tacos and view them in saved tacos component
    get save taco button and click
    get save taco button and click
    get tiny taco container write within function to check for length 1
    get back to random button and click
    get wacky taco button and click
    get save taco button and click
    get save taco button and click
    get tiny taco container write within function to check for length 2
    get tiny taco with id #2 and check it contains a text of Taco #2


    test 4



    */





});
