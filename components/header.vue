<template>
  <article class="header fixed">
  </article>
</template>

<script>
export default {
    data: function() {
        return {
        }
    },
}
</script>


<style lang="scss" scoped>
  .header {
      &.fixed {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        z-index: 3;
      }
  }
</style>