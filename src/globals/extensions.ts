export default () => {
  HTMLElement.prototype.addClasses = function <T extends HTMLElement> (...classes: string[]): T {
    classes.forEach(c => {
      this.classList.add(c)
    })

    return this as T
  }

  HTMLElement.prototype.removeClasses = function <T extends HTMLElement> (...classes: string[]): T {
    if (!classes.length) {
      this.classList.forEach(c => {
        this.classList.remove(c)
      })

      return this as T
    }
    classes.forEach(c => {
      this.classList.remove(c)
    })

    return this as T
  }
}