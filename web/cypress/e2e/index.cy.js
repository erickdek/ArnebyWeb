it('los titulos son correctos', () => {
    const page = cy.visit('http://localhost:4321');
  
    page.get('title').should('have.text', 'Arneby')
  });