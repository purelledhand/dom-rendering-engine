const getTodoCount = todos => {
  const notCompleted = todos.filter(todo => !todo.completed)
  return notCompleted === 1 ? '1 Item left' : `${length} Items left`;
}

const Counter = (targetElement, { todos }) => {
  const newCounter = targetElement.cloneNode(true)
  newCounter.textContent = getTodoCount(todos)
  return newCounter
}

export default Counter
