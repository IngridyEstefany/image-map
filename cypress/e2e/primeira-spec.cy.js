describe('Meu primeiro conjunto de testes', () => {
  //conjunto de testes
  it('Visita uma URL', () => { // caso de teste
    cy.visit('http://127.0.0.1:5500/'); // comando de teste
  });


  it('verifica o para-brisa', function() {
    cy.visit('http://127.0.0.1:5500/');
    cy.get('#overlay').should('be.hidden');
    cy.get('map > [data-target="parabrisa"]').click({force: true});
    cy.get('[src="./img/parabrisa.png"]').should('have.class', 'sobreposicao');
    cy.get('[src="./img/parabrisa.png"]').should('have.attr', 'data-target', 'parabrisa');
    cy.get('[src="./img/parabrisa.png"]').should('be.visible');

    /* ==== Generated with Cypress Studio ==== */
    cy.visit('http://127.0.0.1:5500/');
    cy.get('#parabrisa > .close').click({force: true});
    /* ==== End Cypress Studio ==== */
  });

  /* ==== Test Created with Cypress Studio ==== */
  it('verifica o retrovisor direito', function() {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit('http://127.0.0.1:5500/');
    cy.get('map > [data-target="retrovisor-dir"]').click({force: true});
    /* ==== End Cypress Studio ==== */
    /* ==== Generated with Cypress Studio ==== */
    cy.get('#retrovisor-dir > p').click();
    /* ==== End Cypress Studio ==== */
    /* ==== Generated with Cypress Studio ==== */
    cy.get('#retrovisor-dir > .close').click({force: true});
    cy.get('map > [data-target="retrovisor-dir"]').click({force: true});
    cy.get('#retrovisor-dir > .close').should('have.text', '✖');
    cy.get('#retrovisor-dir > .close').should('have.class', 'close');
    cy.get('#retrovisor-dir > .close').should('be.visible');
    cy.get('#retrovisor-dir > .close').click({force: true});
    cy.get('#imagemBase').click({force: true});
    cy.get('map > [data-target="retrovisor-dir"]').click({force: true});
    cy.get('#retrovisor-dir > .close').click({force: true});
    cy.get('map > [data-target="espelho-retrovisor"]').click({force: true});
    cy.get('#espelho-retrovisor > .close').should('have.text', '✖');
    cy.get('#espelho-retrovisor > .close').should('have.class', 'close');
    cy.get('#espelho-retrovisor > .close').should('be.visible');
    /* ==== End Cypress Studio ==== */
  });
})