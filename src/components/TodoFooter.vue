<template>
<div class="clearAllContainer">
  <span class="clearAllBtn" v-on:click="deleteAll">Clear All</span>
  <span class="checkAllBtn" v-on:click="checkAll">모두 완료</span>
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
    checkAll() {
      this.$store.commit("checkAllItems");
    }
  }

}
</script>

<style scoped>
.checkAllBtn {display: block; margin-top: 20px;}
</style>