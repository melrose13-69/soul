import { inputWrapper } from './templates'

export class InputComponent extends HTMLElement {
  constructor () {
    const x = super()

    console.log(x)
    const shadow = this.attachShadow({ mode: 'open' })
    const { wrapper } = inputWrapper()

    shadow.appendChild(wrapper)
  }

  render () {
    return '<div>asd</div>'
  }
}
