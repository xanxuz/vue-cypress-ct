import { mount } from '@cypress/vue'
import i18n from '@/plugins/i18n'

export default (component, ...options) => {
  mount(component, {
    i18n,
    ...options
  })
}
