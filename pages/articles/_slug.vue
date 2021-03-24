<template>
  <div class="wrapper">
    <p><nuxt-link to='/articles'>К списку статей</nuxt-link></p>
    <h1>{{article.title}}</h1>
    <img class="title-img" :src="article.imgUrl" :alt="article.title">
    <div class="block-content">
        <editor v-if="article.extension == '.json'" :texts="article.texts"/>
        <nuxt-content v-else :document="article" />
        <p><nuxt-link to='/articles'>К списку статей</nuxt-link></p>
    </div>
  </div>
</template>

<script>
import conf from '~/json/config.json'
export default {
  async asyncData ({ $content, params, error, $get_article }) {
    return {article: await $get_article.getArticle('articles', params.slug, { $content,error })}
  },
  head () {
    return this.$meta_tags.getMeta(
			this.article.title, 
			this.article.description, 
			this.article.imgUrl, 
			conf.url + this.$route.path
		)
  },
}
</script>

<style lang="scss" scoped>
  .wrapper {
    padding-top: 60px;
  }
  .title-img {
    width: 600px;
    max-width: 100%;
  }
  .block-content {
    margin-bottom: 120px;
  }
</style>
