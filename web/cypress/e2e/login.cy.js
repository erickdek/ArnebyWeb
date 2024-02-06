it('los titulos son correctos', () => {
    const page = cy.visit('http://localhost:4321/login?');
  
    page.get('title').should('have.text', 'Inicio de Sesion')
  });