import { mount } from '@cypress/vue'
import HelloWorld from './HelloWorld'

it('HelloWorld', () => {
  mount(HelloWorld)

  cy.contains('.hello')
})
