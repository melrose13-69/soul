import { UseId } from '../utils/hoks/UseId'

const createDefaultTemplate = () => {
  const wrapper = document.createElement('div')
  const label = document.createElement('label')
  const span = document.createElement('span')
  const id = UseId.generate()

  label.addClasses('label')
  span.addClasses('error')

  label.setAttribute('for', id.toString())

  wrapper.appendChild(label)

  return { wrapper, label, span, id }
}

export const createInputTemplate = () => {
  const { wrapper, label, span, id } = createDefaultTemplate()
  const input = document.createElement('input')

  wrapper.addClasses('input-wrapper')
  input.addClasses('input')

  input.id = id.toString()

  wrapper.appendChild(input)
  wrapper.appendChild(span)

  return { wrapper, input, label, span, id }
}

export const createSelectTemplate = () => {
  const { wrapper, label, span, id } = createDefaultTemplate()
  const select = document.createElement('div')
  const field = document.createElement('div')
  const options = document.createElement('div')
  const createOption = (id: string, value: string) => {
    const option = document.createElement('span')

    option.textContent = value
    option.id = id

    options.appendChild(option)
  }

  wrapper.addClasses('select-wrapper')
  select.addClasses('select')

  select.id = id.toString()

  select.appendChild(field)
  select.appendChild(options)

  wrapper.appendChild(select)
  wrapper.appendChild(span)

  return { wrapper, select, field, label, options, span, id, createOption }
}