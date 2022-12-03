export const inputWrapper = () => {
  const wrapper = document.createElement('div')
  const input = document.createElement('input')

  input.addClasses('input')
  wrapper.addClasses('input-wrapper')

  wrapper.appendChild(input)

  return { wrapper, input }
}