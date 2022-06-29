<template>
<div class="inputBox">
  <input type="text" v-model="newTodoItem" v-on:keyup.enter="addTodos">
  <span class="add" v-on:click="addTodos">add</span>
</div>
</template>

<script>
export default {
  data: function() {
    return {
      newTodoItem: ""
    }
  },
  methods: {
    addTodos: function() {
      if(this.newTodoItem !== "") {
        // var obj = {completed: false, items: this.newTodoItem,};
        // localStorage.setItem(this.newTodoItem, JSON.stringify(obj));
        // this.$emit("이벤트 이름", "인자1, 인자2...")
        this.$emit("addTodoItem", this.newTodoItem);
        this.newTodoItem = "";
      }
    }
  },
}
</script>

<style scoped>
.inputBox {margin-bottom: 20px;}
.add {padding: 1px 5px; margin-left: 20px; border: 1px solid #000;}

</style>