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

  it('should be able to save multiple tacos to saved taco component', () => {
    cy
    .wait(2000)
    cy
    .get('.save-taco').click()
    cy
    .get('.view-saved-tacos').click()
    cy
    .get('.saved-taco')
    cy
    .get('div[class=saved-taco]')
    .should(($div) => {
      expect($div).to.have.length(1)
      })
    cy
    .get('.back-to-random').click()
    cy
    .get('.random-wacky-taco').click()
    cy
    .wait(2000)
    cy
    .get('.save-taco').click()
    cy
    .get('.view-saved-tacos').click()
     cy
    .get('div[class=saved-taco]')
    .should(($div) => {
      expect($div).to.have.length(2)
      })
    cy
    .get('div[class=saved-taco]:last').contains('Taco #2')
    cy
    .get('.back-to-random').click()
    cy
    .get('.random-wacky-taco').click()
    cy
    .wait(2000)
    cy
    .get('.save-taco').click()
    cy
    .get('.view-saved-tacos').click()
    cy
    .get('div[class=saved-taco]')
    .should(($div) => {
      expect($div).to.have.length(3)
      })
    cy
    .get('div[class=saved-taco]:last').contains('Taco #3')
    })

    
  });
