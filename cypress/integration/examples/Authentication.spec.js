describe("Authentication", () => {
    it("Register user", () => {
        cy.visit("/register");
        cy.get('input[name="name"]').type("GuruPrakash");
        cy.get('input[name="email"]').type("guruprakash@gmail.com");
        cy.get('input[name="password"]').type("password@123");
        cy.get('input[name="password_confirmation"]').type("password@123");
        cy.get('button[type="submit"]').click();
        cy.contains("Dashboard");
        cy.contains("GuruPrakash");
        cy.contains("guruprakash@gmail.com");
        cy.contains("Logout");
    });

    it("Login user", () => {
        cy.visit("/login");
        cy.get('input[name="email"]').type("guruprakash@gmail.com");
        cy.get('input[name="password"]').type("password@123");
        cy.get('button[type="submit"]').click();
        cy.contains("Dashboard");
        cy.contains("GuruPrakash");
        cy.contains("guruprakash@gmail.com");
        cy.contains("Logout");
        cy.logout();
        cy.visit("/dashboard");
    });

    it("Log out user", () => {
        cy.logout();
        cy.visit("/login");
    });
});
