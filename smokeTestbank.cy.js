describe("Test suite - conjunto de pruebas", () => {

    const url = "http://zero.webappsecurity.com"

    function validarUserPasswd() {
        cy.get('#signin_button').click()
        cy.get('#user_login').type("username")
        cy.get('#user_password').type("password")
        cy.get('.btn').click()
    }

    beforeEach(() => {
        // Comando para entrar en la web a testear
        cy.visit(url)
    })

    it("Validar pagina de inicio", () => {

        // Comando para comprobar que una imagen esté visible
        cy.get(".active > img").should("be.visible")
        // Comando para comprobar que un elemento contenga otro
        cy.get('.active > .custom > h4').contains("Online Banking")
        cy.get('#homeMenu > div').contains("Home")
        // Validamos que podemos escribir en el buscador
        cy.get('#searchTerm').type("Hola mundo")
        
    })

    it("Validar usuario y contraseña vacio", () => {
        // Validamos que nos aparezca un error al intentar loguearnos con usuario y contraseña en blanco

        cy.get('#signin_button').click()
        cy.get('#user_login').type(" ")
        cy.get('#user_password').type(" ")
        cy.get('.btn').click()
        cy.get('.alert').should("be.visible")
    })

    it("Validacion de login correcto", () => {
        validarUserPasswd()
    })

    it("Validar Transferencia", () => {

        // Realizamos login con usuario y contraseña
        // Validamos que se puede realizar una transferencia existosa

        validarUserPasswd()
        cy.get('#transfer_funds_tab > a').click()
        cy.get('#tf_fromAccountId').select("1")
        cy.get('#tf_toAccountId').select("5")
        cy.get('#tf_amount').type("200")
        cy.get('#btn_submit').click()
        cy.get('#btn_submit').click()
        cy.get('.alert').should("be.visible")

    })
    
})
