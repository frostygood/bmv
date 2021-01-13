<template>
  <div class="wrapper">
    <p><nuxt-link to='/objects'>К списку объектов</nuxt-link></p>
    <h1>{{article.title}}</h1>
    <img class="title-img" :src="article.imgUrl" :alt="article.title">
    <div class="block-content">
        <nuxt-content :document="article" />
        <p><nuxt-link to='/objects'>К списку объектов</nuxt-link></p>
    </div>
  </div>
</template>

<script>
import conf from '~/json/config.json'
export default {
  async asyncData ({ $content, params, error, $get_article }) {
    return {article: await $get_article.getArticle('objects', params.slug, { $content,error })}
  },
  head () {
    return this.$meta_tags.getMeta(
			this.article.title, 
			this.article.description, 
			this.article.imgUrl, 
			conf.url + this.article.path
		)
  },
}
</script>

<style lang="scss" scoped>
  .wrapper {
    padding-top: 60px;
  }
  .title-img {
    max-width: 600px;
    width: 100%;
  }
  .block-content {
    margin-bottom: 120px;
  }
</style>
