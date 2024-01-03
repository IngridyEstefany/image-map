describe('Testes E2E para o Projeto Carro', () => {
  //conjunto de testes
  beforeEach(() => { // caso de teste
    cy.visit('http://127.0.0.1:5500/'); // comando de teste
  });

  it('Verifica se a altura do overlay é o mesmo da imagem base', () => {
    
    cy.get('[data-test="imagemBase"]').should('have.prop', 'clientHeight').then(clientHeight => {
      cy.get('[data-test="testeOverlay"]').invoke('height').then(height => {
        cy.wrap(Math.ceil(height)).should('equal', Math.round(clientHeight));
      });
    })
  });

  it('Verifica se o overlay está oculto', () => {
      
    cy.get('[data-test="testeOverlay"]').should('have.class', 'oculto').and('not.be.visible');
  });

  it('Verifica se a cor e transparência do overlay está correta', () => {
      cy.get('[data-test="testeOverlay"]').should('have.css', 'background-color', 'rgba(0, 0, 0, 0.533)');
  });

  it('Verifica se os cards de infomações estão ocultos', () => {
    
    cy.get('[data-test="divParabrisa"]').should('have.class', 'oculto').and('not.be.visible');

    cy.get('[data-test="divRetrovisorDir"]').should('have.class', 'oculto').and('not.be.visible');

    cy.get('[data-test="divEspelhoRetrovisor"]').should('have.class', 'oculto').and('not.be.visible');
      
  });

  it('Verifica se as imagens em destaque estão ocultas', () => {

    cy.get('[data-test="imagemParabrisa"]').should('have.class', 'oculto').and('not.be.visible');
    cy.get('[data-test="imagemRetrovisorDir"]').should('have.class', 'oculto').and('not.be.visible');
    cy.get('[data-test="imagemEspelhoRetrovisor"]').should('have.class', 'oculto').and('not.be.visible');
    
  });

  it('Verifica a estrutura do card Parabrisa', () => {
      
    cy.get('[data-test="divParabrisa"]').children('span.close').should('exist');
    cy.get('[data-test="divParabrisa"]').children('h3').should('exist');
    cy.get('[data-test="divParabrisa"]').children('p').should('exist');
    cy.get('[data-test="divParabrisa"]').children('span.caption').should('exist');

  });
  
  it('Verifica a estrutura do card RetrovisorDir', () => {
      
    cy.get('[data-test="divRetrovisorDir"]').children('span.close').should('exist');
    cy.get('[data-test="divRetrovisorDir"]').children('h3').should('exist');
    cy.get('[data-test="divRetrovisorDir"]').children('p').should('exist');
    cy.get('[data-test="divRetrovisorDir"]').children('span.caption').should('exist');

  });

  it('Verifica a estrutura do card EspelhoRetrovisor', () => {
      
    cy.get('[data-test="divEspelhoRetrovisor"]').children('span.close').should('exist');
    cy.get('[data-test="divEspelhoRetrovisor"]').children('h3').should('exist');
    cy.get('[data-test="divEspelhoRetrovisor"]').children('p').should('exist');
    cy.get('[data-test="divEspelhoRetrovisor"]').children('span.caption').should('exist');

  });




});
