// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
const {commonselector} = require('../e2e/ing-test/utilities/common_selector');


Cypress.Commands.add('common_selectors', () => {
    return  cy.get(commonselector.app)
    .shadow().find(commonselector.identity)
    .shadow().find(commonselector.ingTabs)
    .find(commonselector.authentication)
    .shadow().find(commonselector.identification)
    .shadow().find(commonselector.container)
})