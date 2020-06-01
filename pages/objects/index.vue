<template>
  <div class="wrapper page-content">
    <h1 class="h1">Объекты</h1>
    <div class="cards">
       <card v-for="(item,n) in articles" :key="n" :img="item.imgUrl" :link="item.path" :name="item.title"></card>
    </div>
  </div>
</template>

<script>
import card from '~/components/blocks/object.vue'
export default {
  async asyncData ({ $content, params, error }) {
    let articles
    try {
      articles = await $content('objects').limit(100).fetch();
      //console.log(articles);
    } catch (e) {
      error({ message: 'Article not found' })
    }
    return {
      articles,
    }
  },
  components: {
    card
	},
}
</script>

<style lang="scss" scoped>
@import "~/assets/scss/_variables.scss";
.nuxt-content h1 {
  /* my custom h1 style */
}

</style>
