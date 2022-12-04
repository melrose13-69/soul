import { Theme } from '../globals/theme'

const themeListener = () => {
  const theme = new Theme()
  const button = document.querySelector<HTMLElement>('#change-theme')

  if (!button) return

  button.addClasses(theme.theme)

  button.addEventListener('click', () => {
    const oldTheme = theme.changeTheme()

    theme.renameBodyClass()

    button.removeClasses(oldTheme).addClasses(theme.theme)
  })
}

export const headerListeners = () => {
  themeListener()
}
