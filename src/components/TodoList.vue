<template>
  <div>
    <transition-group name="list" tag="ul">
      <li v-for="(todoItem, index) in this.$store.state.todoItems" v-bind:key="todoItem.items">
        <span class="checkBtn" v-bind:class="{checked: todoItem.completed}" 
        v-on:click="toggleCompleted(todoItem, index)">check</span>
        <span class="txt" v-bind:class="{line: todoItem.completed}">{{ todoItem.items }}</span>
        <span class="deleteBtn" v-on:click="deleteTodos(todoItem, index)">delete</span>
      </li>
    </transition-group>
  </div>
</template>

<script>
export default {
  // data: function() {
  //   return {
  //     todoItems: [],
  //   }
  // },
  // props: ["propsdata"],
  methods: {
    deleteTodos(todoItem, index) {
      // localStorage.removeItem(todoItem);
      // this.todoItems.splice(index, 1);
      // this.$emit("removeItem", todoItem, index);
      this.$store.commit("removeOneItem", {todoItem, index});
    },
    toggleCompleted(todoItem, index) {
      // this.$emit("toggleItem", todoItem, index);
      this.$store.commit("toggleCompleted", {todoItem, index});
      // todoItem.completed = !todoItem.completed;
      // localStorage.removeItem(todoItem.items);
      // localStorage.setItem(todoItem.items, JSON.stringify(todoItem));
    },
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
li {display: flex; justify-content: space-between; margin-bottom: 10px; transition: .3s;}
li:last-child {margin-bottom: 0;}
.line {color: #ccc; text-decoration: line-through;}
.checkBtn {padding: 1px 5px; border: 1px solid green; color: green;}
.checked {border: 1px solid #ccc; color: #ccc;}
.deleteBtn {padding: 1px 5px; border: 1px solid red; color: red;}

/* list-item transition */
.list-enter-active, .list-leave-active {transition: all 1s;}
.list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */ {opacity: 0; transform: translateY(30px);}
</style>