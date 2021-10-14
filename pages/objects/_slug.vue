<template>
  <div class="wrapper block-content">
    <p><nuxt-link to='/objects'>К списку объектов</nuxt-link></p>
    <component 
			v-for='(item,i) in article.page' :key='i'
			:is='"bmv-" + item.name'
			v-bind="item.props"/>
    <p><nuxt-link to='/objects'>К списку объектов</nuxt-link></p>
  </div>
</template>

<script>
import conf from '~/json/config.json'
export default {
  async asyncData ({ $content, params, error }) {
    let page
		await $content('ru', 'objects').fetch().then((docs) => {
				let err = true
				docs.forEach(element => {
					if (element.path_nuxt == params.slug) {
						err = false
						page = element
					}
				});
				if (err) return error({ statusCode: 404, message: 'LP not found'})
			}).catch((err) => {
				return error({ statusCode: 404, message: 'LP not found - ' + err})
		})
		return {
			article: page,
			url: params.slug
		}
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
  .block-content {
    margin-bottom: 120px;
  }
</style>
