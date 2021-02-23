import getTodos from './utils/getTodos.js'
import { Todos, Counter, Filters } from './view/index.js' // TODO: 확장자명 및 index.js 없이 path resolution 안되는 이슈 처리
import applyDiff from './engine/diff/index.js'

import registry from './engine/registry/index.js'

registry.add('todos', Todos)
registry.add('counter', Counter)
registry.add('filters', Filters)

const state = {
  todos: getTodos(),
  currentFilter: 'All'
}

const render = () => {
  window.requestAnimationFrame(() => {
    const realMain = document.querySelector('.app')
    const virtualMain = registry.renderRoot(main, state)
    applyDiff(document.body, realMain, virtualMain)
  })
}

window.setInterval(() => {
  state.todos = getTodos()
  render()
}, 5000)

render()
