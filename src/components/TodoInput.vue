<template>
<div class="inputBox">
  <input type="text" v-model="newTodoItem" v-on:keyup.enter="addTodos">
  <span class="add" v-on:click="addTodos">add</span>

  <!-- use the modal component, pass in the prop -->
  <ModalVue v-if="showModal" @close="showModal = false">
    <!--
      you can use custom content here to overwrite
      default content
    -->
    <h3 slot="header">
      경고!
      <span class="closeModalBtn" @click="showModal = false">close</span>
    </h3>
    <div slot="body">
      무언가를 입력하세요.
    </div>
  </ModalVue>
</div>
</template>

<script>
import ModalVue from "./common/ModalVue.vue"
export default {
  data() {
    return {
      newTodoItem: "",
      showModal: false
    }
  },
  methods: {
    addTodos() {
      if(this.newTodoItem !== "") {
        // var obj = {completed: false, items: this.newTodoItem,};
        // localStorage.setItem(this.newTodoItem, JSON.stringify(obj));
        // this.$emit("이벤트 이름", "인자1, 인자2...")
        // this.$emit("addTodoItem", this.newTodoItem);
        this.$store.commit('addOneItem', this.newTodoItem);
        this.newTodoItem = "";
      } else {
        this.showModal = !this.showModal;
      }
    }
  },
  components: {
    ModalVue
  }
}
</script>

<style scoped>
.inputBox {margin-bottom: 20px;}
.add {padding: 1px 5px; margin-left: 20px; border: 1px solid #000;}
.clsoeModalBtn {color:#42b823;}
</style>