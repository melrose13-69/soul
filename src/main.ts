import './assets/styles/index.scss'
import defineComponents from './components'
import defineExtensions from './globals/extensions'
import initListeners from './listeners'

defineExtensions()
defineComponents()
initListeners()

window.matchMedia('(prefers-color-scheme: light)').addEventListener('change', e => {
  console.log(e)
})