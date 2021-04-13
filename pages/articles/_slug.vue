<template>
  <div class="wrapper page-content">
    <p>
		<nuxt-link to='/articles'>К списку статей</nuxt-link>
	</p>
    <component 
			v-for='(item,i) in page.page' :key='i'
			:is='"bmv-" + item.name'
			v-bind="item.props"/>
    <p>
		<nuxt-link to='/articles'>К списку статей</nuxt-link>
	</p>
  </div>
</template>

<script>
import conf from '~/json/config.json'
export default {
  async asyncData ({ $content, params, error }) {
    let page
		await $content('ru', 'articles').fetch().then((docs) => {
				let err = true
				docs.forEach(element => {
				console.log(element.path_nuxt)
				console.log(params.slug)
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
			page: page,
			url: params.slug
		}
  },
  head() {
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
			this.page.title, 
			this.page.description, 
			this.page.img, 
			conf.url + this.$route.path
		)
	},
}
</script>

<style lang="scss" scoped>
  .page-content {
    margin-bottom: 60px;
  }
</style>
