<template>
  <div>
    <ul>
      <li v-for="(todoItem, index) in propsdata" v-bind:key="todoItem.items">
        <span class="checkBtn" v-bind:class="{checked: todoItem.completed}" 
        v-on:click="toggleCompleted(todoItem, index)">check</span>
        {{ todoItem.items }}
        <span class="deleteBtn" v-on:click="deleteTodos(todoItem, index)">delete</span>
        </li>
    </ul>
  </div>
</template>

<script>
export default {
  // data: function() {
  //   return {
  //     todoItems: [],
  //   }
  // },
  props: ["propsdata"],
  methods: {
    deleteTodos: function(todoItem, index) {
      // localStorage.removeItem(todoItem);
      // this.todoItems.splice(index, 1);
      this.$emit("removeItem", todoItem, index);
    },
    toggleCompleted: function(todoItem, index) {
      this.$emit("toggleItem", todoItem, index);
      // todoItem.completed = !todoItem.completed;
      // localStorage.removeItem(todoItem.items);
      // localStorage.setItem(todoItem.items, JSON.stringify(todoItem));
    }
  },
  // created: function() {
  //   if(localStorage.length > 0) {
  //     for(var i = 0; i < localStorage.length; i++) {
  //       JSON.parse(localStorage.getItem(localStorage.key(i)));
  //       this.todoItems.push(JSON.parse(localStorage.getItem(localStorage.key(i))))
  //     }
  //   }
  // }

}
</script>

<style scoped>
li {display: flex; justify-content: space-between; margin-bottom: 10px;}
li:last-child {margin-bottom: 0;}
.checkBtn {padding: 1px 5px; border: 1px solid green; color: green;}
.checked {border: 1px solid #ccc; color: #ccc;}
.deleteBtn {padding: 1px 5px; border: 1px solid red; color: red;}
</style>