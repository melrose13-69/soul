/// <reference types="vite/client" />
export {}
declare global {
  interface HTMLElement {
    addClasses<T extends HTMLElement>(...classes: string[]): T
    removeClasses<T extends HTMLElement>(...classes: string[]): T
    __component__: {
      wrapper: HTMLDivElement
      label: HTMLLabelElement
      input: HTMLInputElement
      span: HTMLSpanElement
      id: number
    }
  }
}