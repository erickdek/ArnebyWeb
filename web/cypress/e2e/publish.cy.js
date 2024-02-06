it('los titulos son correctos', () => {
    const page = cy.visit('http://localhost:4321/publish');
  
    page.get('title').should('have.text', 'Publish')
  });