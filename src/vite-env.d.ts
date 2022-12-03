/// <reference types="vite/client" />
export {}
declare global {
  interface HTMLElement {
    addClasses(...classes: string[]): void
    removeClasses(...classes: string[]): void
  }
}