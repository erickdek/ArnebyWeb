it('los titulos son correctos', () => {
    const page = cy.visit('http://localhost:4321/signup');
  
    page.get('title').should('have.text', 'Registro')
  });