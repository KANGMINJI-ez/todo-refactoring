<template>
<div class="clearAllContainer">
  <span class="clearAllBtn" v-on:click="deleteAll">Clear All</span>
</div>
</template>

<script>
export default {
  methods: {
    deleteAll() {
      this.$emit("clearAll");
      // localStorage.clear();
    }
  }

}
</script>

<style>

</style>