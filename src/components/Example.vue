<script>
import useTodoList from '@/use/useTodoList'
export default {
  name: 'Example',

  setup() {
    const { todoList, todoText, addTodoList, toggleIsDone, completedTodos } = useTodoList(10)

    return {
      todoList,
      todoText,
      addTodoList,
      toggleIsDone,
      completedTodos,
    }
  },
}
</script>

<template>
  <input type="text" placeholder="Напиши какое дело добавить.." v-model="todoText" />
  <button @click="addTodoList">Добавить ToDo</button>
  <ul>
    <li v-for="todo of todoList" :key="todo.id" @click="toggleIsDone(todo.id)">
      {{ todo.value }} {{ todo.isDone ? 'Выполнено' : 'Не выполнено' }}
    </li>
  </ul>
  <span>Выполнено дел: {{ completedTodos }}</span>
</template>

<style scoped></style>
