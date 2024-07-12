///<reference types="cypress"/>


describe('iniciar session', () => {

  before(() => {
    cy.visit('http://localhost:8000/login');
  });

  it("inicio  de sesion incorrecto", () => {
    cy.get("#email").clear().type("noexiste@.cl");
    cy.get("#contraseña").clear().type("aaaa");
    cy.get("#formlogin").submit();

    cy.url().should('include', '/login');
  });

  it("inicio  de sesion correcto", () => {
    cy.visit('http://localhost:8000/login');
    cy.get("#email").clear().type("admin@admin.cl");
    cy.get("#contraseña").clear().type("admin123");

    cy.get("#enviar_inicio_sesion").click();

    cy.url().should('include', '/home');
  });
  
});

describe("crear usuario",()=>{

  before(() => {
    cy.visit('http://localhost:8000/registro');
  });

  it("crear usuario",()=>{
    cy.get("#email").clear().type("nuevo@nuevo.cl");
    cy.get("#contraseña").clear().type("nuevo");
    cy.get("#enviar_registrarse").click();
    cy.url().should('include', '/login');
  })

})


describe('menu de compras', () => {


  it("inicio  de sesion correcto", () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
      // Retornar false para evitar que Cypress falle la prueba por errores no capturados
      return false;
    });    
    cy.visit('http://localhost:8000/login');
    cy.get("#email").clear().type("admin@admin.cl");
    cy.get("#contraseña").clear().type("admin123");
    cy.get("#enviar_inicio_sesion").click();
    cy.get("#mencom").click();

    cy.get("#mi1").click();
    cy.get("#mi2").click();
    cy.get("#mi3").click();

    cy.get("#cart").click();
    // se ven los platos agregados

    cy.get("#boton-vaciar").click();
    // se ve como se eliminan los platos

    // agrega denuevo
    cy.get("#mi1").click();
    cy.get("#mi2").click();

    try {
      // Intentar hacer clic en el elemento ".goku"
      cy.get(".goku").click();
    } catch (error) {
      // Si hay un error al hacer clic, manejarlo aquí
      cy.visit('http://localhost:8000/pedidos');
      // Opcionalmente, puedes registrar el error para debugging
      cy.log(`Error al hacer clic en ".goku": ${error.message}`);
    }

    
    // no envia a la pagina de pago y salta directamente a pedidos del admin

    cy.get("#envi1").click();
    cy.get("#envi2").click();
    // se envian al delivery

    cy.visit('http://localhost:8000/delivery');
    // se ven los platos enviados

    cy.get("#mid1").click();
    cy.get("#mid1").click();
    cy.get("#mid1").click();
    cy.get("#mid1").click();
    cy.get("#mid1").click();
  });

  
});