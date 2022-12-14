import { ObservedInputAttributes } from '../types/compoents'
import { createInputTemplate } from './templates'
export class InputComponent extends HTMLElement {
  public wrapper: HTMLDivElement
  public input: HTMLInputElement
  public label: HTMLLabelElement
  public span: HTMLSpanElement
  constructor () {
    super()

    const { wrapper, input, label, span, id } = createInputTemplate()

    this.wrapper = wrapper
    this.input = input
    this.label = label
    this.span = span

    const custom = {
      wrapper: this.wrapper,
      label: this.label,
      input: this.input,
      span: this.span,
      id
    }

    Object.defineProperty(this, '__component__', { value: custom })

    this.appendChild(this.wrapper)
  }

  connectedCallback () {
    const label = this.getAttribute('label-text')
    const placeholder = this.getAttribute('placeholder-text')

    this.label.textContent = label
    this.input.placeholder = placeholder || label || ''
  }

  attributeChangedCallback (name: ObservedInputAttributes, oldValue: string, newValue: string) {
    if (oldValue === newValue) return

    switch (name) {
      case ObservedInputAttributes.ERROR:
        this.span.textContent = newValue
        break
      case ObservedInputAttributes.VALUE:
        this.input.value = newValue
        break
      default: return
    }
  }

  static get observedAttributes () {
    return [...Object.values(ObservedInputAttributes)]
  }
}
