import { ObservedInputAttributes } from '../types/compoents'
import { createSelectTemplate } from './templates'
export class InputComponent extends HTMLElement {
  public wrapper: HTMLDivElement
  public select: HTMLDivElement
  public field: HTMLDivElement
  public options: HTMLDivElement
  public label: HTMLLabelElement
  public span: HTMLSpanElement
  constructor () {
    super()

    const { wrapper, select, field, options, label, span, id } = createSelectTemplate()

    this.wrapper = wrapper
    this.select = select
    this.field = field
    this.label = label
    this.options = options
    this.span = span

    const custom = {
      wrapper: this.wrapper,
      label: this.label,
      select: this.select,
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
    this.select.textContent = placeholder || label || ''
  }

  attributeChangedCallback (name: ObservedInputAttributes, oldValue: string, newValue: string) {
    if (oldValue === newValue) return

    switch (name) {
      case ObservedInputAttributes.ERROR:
        this.span.textContent = newValue
        break
      case ObservedInputAttributes.VALUE:
        this.select.textContent = newValue
        break
      default: return
    }
  }

  static get observedAttributes () {
    return [...Object.values(ObservedInputAttributes)]
  }
}
