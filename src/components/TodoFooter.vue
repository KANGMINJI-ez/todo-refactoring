<template>
<div class="clearAllContainer">
  <span class="clearAllBtn" v-on:click="deleteAll">Clear All</span>
  <span class="toggleCheckAllBtn" v-on:click="toggleCheckAll">모두 완료</span>
  <span class="viewActive" v-on:click="viewActiveTasks">완료 목록 보기</span>
</div>
</template>

<script>
export default {
  methods: {
    deleteAll() {
      // this.$emit("clearAll");
      // localStorage.clear();
      this.$store.commit("clearAllItems");
    },
    toggleCheckAll() {
      this.$store.commit("toggleCheckAllItems");
    },
    viewActiveTasks() {
      this.$store.commit("showActiveTodos");
    }
  }

}
</script>

<style scoped>
.toggleCheckAllBtn {display: block; margin-top: 20px;}
</style>