import mount from '@/helpers/mount'
import HelloWorld from './HelloWorld'

describe('HelloWorld.vue', () => {
  it('has the .hello class', () => {
    mount(HelloWorld)

    cy.get('.hello')
  })
})
