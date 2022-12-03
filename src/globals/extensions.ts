export default () => {
  HTMLElement.prototype.addClasses = function (...classes) {
    classes.forEach(c => {
      this.classList.add(c)
    })
  }

  HTMLElement.prototype.removeClasses = function (...classes) {
    classes.forEach(c => {
      this.classList.remove(c)
    })
  }
}