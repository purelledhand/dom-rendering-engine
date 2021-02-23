const registry = {}

const withRender = component => {
  return (targetElement, state) => {
    const element = component(targetElement, state)
    const childComponents = element.querySelectorAll('[data-component]')

    Array.from(childComponents).forEach(target => {
      const name = target.dataset.component
      const child = registry[name]
      if (!child) return
      target.replaceWith(child(target, state))
    })

    return element
  }
}

const add = (name, component) => {
  registry[name] = withRender(component)
}

export default {
  add,
}
