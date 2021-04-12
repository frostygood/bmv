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
    async function getArticle(name, slug) {
        let article
        try {
          article = await $content(''+name, ''+slug).fetch()
        } catch (e) {
          error({ message: 'Article not found' })
        }
        return article
    }
    return {article: await getArticle('objects', params.slug)}
  },
  head () {
    function getMeta (title, description, img, canonical) {
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
						{ rel: "canonical", href: canonical }
				]
			}
		}
		return getMeta(
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
