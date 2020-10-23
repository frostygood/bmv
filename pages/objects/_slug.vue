<template>
  <div class="wrapper">
    <h1>Объекты</h1>
    <div class="block-content">
        <nuxt-content :document="article" />
    </div>
  </div>
</template>

<script>
export default {
    async asyncData ({ $content, params, error }) {
      let article
      try {
        article = await $content('objects', params.slug).fetch()
        // OR const article = await $content(`articles/${params.slug}`).fetch()
      } catch (e) {
        error({ message: 'Article not found' })
      }
      return {
        article,
      }
  },
  head () {
    return {
      title: this.article.title,
      description: this.article.description,
    }
  }
}
</script>

<style lang="scss" scoped>
  
</style>
