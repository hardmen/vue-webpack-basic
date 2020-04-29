<template>
  <p class="back-login">
    <span>{{ text }}</span>
    <router-link :to="{ name:'Login' }" class="text-link"> Sign In</router-link>
  </p>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: 'Back to',
    },
  },
};
</script>
