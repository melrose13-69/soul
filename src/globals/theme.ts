import { ThemeEnum } from '../types/globals/theme'

export class Theme {
  public theme: ThemeEnum

  constructor () {
    this.theme = Theme.getStartTheme()

    this.renameBodyClass()
  }

  static getStartTheme () {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? ThemeEnum.DARK : ThemeEnum.LIGHT
  }

  changeTheme () {
    const oldTheme = this.theme

    this.theme = document.body.getAttribute('data-theme') === ThemeEnum.LIGHT ? ThemeEnum.DARK : ThemeEnum.LIGHT

    return oldTheme
  }

  renameBodyClass () {
    document.body.setAttribute('data-theme', this.theme)
  }
}
