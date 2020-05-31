<template>
  <div class="wrapper">
    <h1>Объекты</h1>
    <div>
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
.nuxt-content {
  margin-bottom: 30px;
  h1 {
    font-size: 32px;
    font-weight: bold;
    line-height: 1.25;
    padding-top: 30px;
  }
  p {
    font-size: 16px;
    font-weight: normal;
    line-height: 1.5;
    color: #000;
    max-width: 800px;
  }
  img {
    max-width: 100%;
    max-height: 400px;
    display: block;
    margin-bottom: 15px;
  }
}
</style>
