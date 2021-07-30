describe('Weather app', () => {
    it('frontpage can be opened', () => {
        cy.visit('http://localhost:3000')
        cy.get('.Loader-icon')
    })
})