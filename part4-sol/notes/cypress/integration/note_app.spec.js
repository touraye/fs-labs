describe('Note app', function () {
  beforeEach( function () {
    cy.request('POST', 'http://localhost:3001/api/testing/reset')
    const user = {
      name: 'Pa ebou',
      username: 'paebou',
      password: 'paebou123',
    }
    cy.request( 'POST', 'http://localhost:3001/api/users/', user )

    cy.visit('http://localhost:3000')
  })

  it('front page can be opened', function () {
    cy.contains('Notes')
    cy.contains(
      'Note app, Department of Computer Science, University of Helsinki 2021'
    )
  })

  describe( 'when logged in', function () {
    beforeEach( function () {
      cy.contains('log in').click()
      cy.get('#username').type('paebou')
      cy.get('#password').type('paebou123')
      cy.get('#login-button').click()
    })


    describe('and a note exists', function () {
      beforeEach(function () {
        cy.contains('new note').click()
        cy.get('#note').type('another note cypress')
        cy.get( '#save-button' ).click()
      } )


      it('it can be made important', function () {
        cy.contains('another note cypress').contains('make important')
          .click()

        cy.contains('another note cypress').contains('make not important')
      })
    })
  })
})
