<template>
  <div>
    <p>HOME PAGE: {{ $store.state.count }}</p>
    <button @click="incrementCountNumber">Mutation</button>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    incrementCountNumber() {
      this.$store.dispatch('increment');
    },
  },
};
</script>

<style lang="scss" scoped></style>
