/// <reference types="cypress" />

const {commonselector} = require('./common_selector');

class Common
{

    async defaultSelectors()
    {
    return  cy.get(commonselector.app)
    .shadow().find(commonselector.identity)
    .shadow().find(commonselector.ingTabs)
    .find(commonselector.authentication)
    .shadow().find(commonselector.identification)
    .shadow().find(commonselector.container)
    }
}

export default new Common();