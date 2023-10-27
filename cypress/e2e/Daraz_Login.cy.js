describe("Test Suite For Daraz", () => {
  Cypress.on("uncaught:exception", (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false;
  });

  beforeEach("Login to daraz.pk", () => {
    cy.visit("https://www.daraz.pk");
    cy.viewport(1280, 720);

    cy.get("#anonLogin").click("right");
    cy.get("input[placeholder='Please enter your Phone Number or Email']").type(
      Cypress.env("USER")
    );
    cy.get("input[placeholder='Please enter your password']").type(
      Cypress.env("PASSWORD")
    );

    cy.get("button[type='submit']").click();

    cy.get("#myAccountTrigger").should("include.text", "Hello");
  });

  it("Add Item to Cart", () => {
    const product = "Redmi Note 12";

    cy.get("#q").type(product);
    cy.get(".search-box__button--1oH7").click();

    cy.get(".gridItem--Yd0sa").contains("Redmi Note 12").click();

    cy.get(".pdp-button_theme_orange").click();

    cy.get(".cart-message-text").should("include.text", "added to your cart");

    cy.get(".next-btn").click();
  });

  it("Delete all items from cart", () => {
    cy.get(".cart-icon").click();
    cy.xpath(
      "//label[@class='next-checkbox list-header-checkbox ']//input[@value='on']"
    ).check();
    cy.get(".list-header-operation-text").click();
    cy.get(".ok").click();
  });

  it("Log out from Daraz", () => {
    cy.get("#topActionUserAccont").trigger("mouseover");
    cy.xpath('//span[@class="account-icon test logout"]').click();
  });
});
