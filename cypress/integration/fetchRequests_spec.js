    describe('Random Taco', () => {
    const baseUrl = 'http://localhost:3000';

    it('should be able to fetch a random curated taco', () => {
        cy
        .intercept('GET', 'http://taco-randomizer.herokuapp.com/random/?full-taco=true', {fixture: 'curatedData.json'})
        cy
        .visit(baseUrl);
        cy
        .get('button[class=get-random]').click()
        cy
        .get('.title-and-recipe-container').contains('Zucchini and Corn Tacos')
        cy
        .get('.total-recipe-container').within(() => {
        cy
        .get('h3')
        .should(($h3) => {
          expect($h3).to.have.length(2)
          })
        })
        .get('.total-recipe-container').within(() => {
        cy
        .get('p')
        .should(($p) => {
          expect($p).to.have.length(2)
          })
        })
    })

    it('should be able to fetch a random wacky taco', () => {
        cy
        .intercept('GET', 'http://taco-randomizer.herokuapp.com/random', {fixture: 'wackyData.json'})
        cy
        .visit(baseUrl);
        cy
        .get('button[class=get-random]').click()
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
        cy
        .get('h3:first').contains('Baked Tilapia')
        })
    });
