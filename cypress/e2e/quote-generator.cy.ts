describe('Quote Generator App', () => {
  beforeEach(() => {
    // Visitar la página antes de cada prueba
    cy.visit('/')
    // Esperar a que los elementos principales estén presentes
    cy.get('main').should('be.visible')
    cy.get('blockquote').should('be.visible')
    cy.get('button').should('be.visible')
  })

  it('should load the main components', () => {
    // Verificar que los componentes principales estén presentes
    cy.get('main').should('be.visible')
    cy.get('blockquote').should('be.visible')
    cy.get('button').should('be.visible')
  })

  it('should display a quote with author', () => {
    cy.get('blockquote').should('not.be.empty')
    cy.get('cite').should('be.visible')
    cy.get('cite').invoke('text').should('include', '-')
  })

  it('should generate new quotes when clicking the button', () => {
    // Guardar la primera cita
    let firstQuote: string
    cy.get('blockquote').invoke('text').then((text) => {
      firstQuote = text
      // Hacer clic en el botón y verificar que la cita cambie
      cy.get('button').click()
      cy.get('blockquote').should('not.have.text', firstQuote)
    })
  })

  it('should show loading states', () => {
    cy.get('button').click()
    cy.get('button').should('be.disabled')
  })

  it('should be responsive', () => {
    // Prueba en móvil
    cy.viewport('iphone-x')
    cy.get('main').should('be.visible')
    cy.get('blockquote').should('be.visible')

    // Prueba en tablet
    cy.viewport('ipad-2')
    cy.get('main').should('be.visible')
    cy.get('blockquote').should('be.visible')

    // Prueba en desktop
    cy.viewport(1280, 720)
    cy.get('main').should('be.visible')
    cy.get('blockquote').should('be.visible')
  })

  it('should handle network errors gracefully', () => {
    // Interceptar y simular error en la API de citas
    cy.intercept('/api/quotes', {
      statusCode: 500,
      body: { error: 'Internal server error' }
    }).as('quotesRequest')

    // Interceptar y simular error en la API de imágenes
    cy.intercept('/api/unsplash', {
      statusCode: 500,
      body: { error: 'Internal server error' }
    }).as('imageRequest')

    // Recargar la página
    cy.reload()

    // Verificar que se muestren los mensajes de error
    cy.contains(/error/i).should('be.visible')
  })

  it('should maintain aspect ratio of images', () => {
    cy.get('img').should('have.css', 'object-fit', 'cover')
  })

  it('should show transitions on quote change', () => {
    cy.get('button').click()
    // Verificar que existan elementos con transiciones
    cy.get('[class*="transition"]').should('exist')
  })
})