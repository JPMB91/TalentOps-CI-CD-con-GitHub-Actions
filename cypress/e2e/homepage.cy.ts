describe('Homepage E2E', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('debe navegar a /profile', () => {
    cy.visit('http://localhost:3000/profile');
    cy.contains('User Profile').should('be.visible');
  });
});
