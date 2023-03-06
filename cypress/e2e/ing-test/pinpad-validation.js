/// <reference types="cypress" />

import Common from './utilities/common.js'

describe('my first test' , () =>{

    it('test one', () =>{

        cy.visit('https://test.meanstester.ing.net/it-identification')

        
        console.log(Common.defaultSelectors())

         cy.common_selectors().find('#customerCode')
        .find('input')
        .type("0001002748")

        cy.common_selectors().find('#dateOfBirth')
        .find('input')
        .type("08/07/1998")

        cy.common_selectors().find('.continue__button')
        .click()

        cy.pause()

        cy.get("body > ing-app-tpa-means-tester")
        .shadow().find('.page-container')
        .find('.container')
        .find('.row .col-3')
        .find('.card.intro')
        .find('[href="/it-pinpad"]')
        .click()
    })

})