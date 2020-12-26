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
		let title = this.article.title;
		let description = this.article.description;
		let img = this.article.imgUrl;
		return {
			title: title,
      meta: [
        { hid: 'description', name: 'description', content: description },
        // Open Graph
        { hid: 'og:title', property: 'og:title', content: title },
        { hid: 'og:description', property: 'og:description', content: description },
        { hid: 'og:image', property: 'og:image', content: img},
        // Twitter Card
        { hid: 'twitter:title', name: 'twitter:title', content: title },
        { hid: 'twitter:description', name: 'twitter:description', content: description },
        { hid: 'twitter:image', name: 'twitter:image', content: img },
        // Google+. Schema.org
        { itemprop: 'title', content: title },
        { itemprop: 'description', content: description},
        { itemprop: 'image', content: img},
      ],
			link: [
				{ rel: "canonical", href: config.url + '/' + this.article.path }
			]
		}
  	},
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
