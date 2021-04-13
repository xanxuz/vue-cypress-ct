import { mount } from '@cypress/vue'
import HelloWorld from './HelloWorld'

describe('HelloWorld.vue', () => {
  it('has the .hello class', () => {
    mount(HelloWorld)

    cy.get('.hello')
  })
})
