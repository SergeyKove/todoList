import { computed, reactive, toRefs } from 'vue'
export default function (max) {
  const data = reactive({
    todoList: [],
    todoText: '',
  })

  function addTodoList() {
    if (max === data.todoList.length + 1) {
      alert('Максимум дел ' + max)
      return
    }
    data.todoList.push({
      value: data.todoText,
      isDone: false,
      id: Math.random() * 1000,
    })
    data.todoText = ''
  }

  function toggleIsDone(id) {
    const matchingId = data.todoList.filter((todo) => todo.id === id)
    if (matchingId.length === 0) {
      return
    }
    const todoItem = matchingId[0]
    todoItem.isDone = !todoItem.isDone
  }

  const completedTodos = computed(
    () => data.todoList.filter((todoListItem) => todoListItem.isDone).length,
  )
  return {
    ...toRefs(data),
    addTodoList,
    toggleIsDone,
    completedTodos,
  }
}
