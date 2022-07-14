<template>
<div id="app">

  <TodoHeader></TodoHeader>
  <TodoInput></TodoInput>
  <TodoList></TodoList>
  <TodoFooter></TodoFooter>
</div>
</template>

<script>
import TodoHeader from "./components/TodoHeader.vue"
import TodoInput from "./components/TodoInput.vue"
import TodoList from "./components/TodoList.vue"
import TodoFooter from "./components/TodoFooter.vue"

export default {
  // data() {
  //   return {
  //     todoItems: [],
  //   }
  // },
  methods: {
    // addOneItem(todoItem) {
    //   const obj = {completed: false, items: todoItem,};
    //   localStorage.setItem(todoItem, JSON.stringify(obj));
    //   this.todoItems.push(obj);
    // },
    // removeOneItem(todoItem, index) {
    //   localStorage.removeItem(todoItem.items);
    //   this.todoItems.splice(index, 1);
    // },
    // toggleOneItem(todoItem, index) {
    //   // todoItem.completed = !todoItem.completed;
    //   this.todoItems[index].completed = !this.todoItems[index].completed;
    //   localStorage.removeItem(todoItem.items);
    //   localStorage.setItem(todoItem.items, JSON.stringify(todoItem));
    // },
    // clearAllItems() {
    //   // localStorage.clear();
    //   // this.todoItems = [];

    // }
  },
  // created() {
  //   if(localStorage.length > 0) {
  //     for(let i = 0; i < localStorage.length; i++) {
  //       // JSON.parse(localStorage.getItem(localStorage.key(i)));
  //       this.todoItems.push(JSON.parse(localStorage.getItem(localStorage.key(i))))
  //     }
  //   }
  // },
  components: {
    TodoHeader,
    TodoInput,
    TodoList,
    TodoFooter,
  }

}
</script>

<style>
body {text-align: center;}
</style>
