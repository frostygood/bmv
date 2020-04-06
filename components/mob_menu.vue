<template>
  <article class="mob-header">
  </article>
</template>

<script>
export default {
    data: function() {
        return {
        }
    },
    methods: {
    }
}
</script>

<style lang="scss" scoped>
.mob-header {
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 280px;
    overflow: hidden;
    z-index: 7;
    display: flex;
	  display: -webkit-flex;
	  display: -ms-flexbox;
    flex-direction: column;
    -webkit-box-orient: vertical;
	  -webkit-box-direction: normal;
	  -webkit-flex-direction: column;
	  -ms-flex-direction: column;
    background: white;
}
@media (max-width: 991px) {
    .mob-header {
        display: block;
    }
}

</style>