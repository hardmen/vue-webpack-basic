<template>
  <div>
    <h2>{{ title }}</h2>
    <p>Message From Vue: {{ msg }}</p>
  </div>
</template>

<script lang="ts">
// import Vue from 'vue';

export default {
  data() {
    const title: string = 'a';
    return {
      title: title,
      msg: 'Thanks to use Vue.js'
    }
  }
}
</script>

<style lang="scss" scoped>
h2 {
  color: red;
}
p {
  font-size: 20px;
}
</style>