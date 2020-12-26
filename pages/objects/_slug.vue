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
import config from '~/json/config.json'
export default {
    async asyncData ({ $content, params, error }) {
      let article
      try {
        article = await $content('objects', params.slug).fetch()
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
			meta: [
				{ hid: 'description', name: 'description', content: this.article.description },
				// Open Graph
				{ hid: 'og:title', property: 'og:title', content: this.article.title },
				{ hid: 'og:description', property: 'og:description', content: this.article.description },
				{ hid: 'og:image', property: 'og:image', content: this.article.imgUrl},
				// Twitter Card
				{ hid: 'twitter:title', name: 'twitter:title', content: this.article.title },
				{ hid: 'twitter:description', name: 'twitter:description', content: this.article.description },
				{ hid: 'twitter:image', name: 'twitter:image', content: this.article.imgUrl },
				// Google+. Schema.org
				{ itemprop: 'title', content: this.article.title },
				{ itemprop: 'description', content: this.article.description },
				{ itemprop: 'image', content: this.article.imgUrl},
			],
			link: [
				{ rel: "canonical", href: config.url + '/' + this.article.path }
			]
    }
  }
}
</script>

<style lang="scss" scoped>
  .wrapper {
    padding-top: 60px;
  }
  .title-img {
    max-width: 600px;
  }
  .block-content {
    margin-bottom: 120px;
  }
</style>
