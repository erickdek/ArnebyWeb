it('los titulos son correctos', () => {
    const page = cy.visit('http://localhost:4321');
  
    page.get('title').should('have.text', 'Arneby')
    page.get('h1').should('have.text', 'Hola Arneby');
  });