<template>
  <div class="wrapper">
    <h1 class="h1">Объекты</h1>
    <p v-for="(item,i) in articles" :key="i" class="p">{{item.title}}</p>
  </div>
</template>

<script>
export default {
  async asyncData ({ $content, params, error }) {
    let articles
    try {
      articles = await $content('objects').limit(6).fetch();
      console.log(articles);
    } catch (e) {
      error({ message: 'Article not found' })
    }
    return {
      articles,
    }
  },
}
</script>

<style lang="scss" scoped>
.nuxt-content h1 {
  /* my custom h1 style */
}
</style>
