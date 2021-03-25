<template>
  <div class="wrapper page-content">
    <p><nuxt-link to='/articles'>К списку статей</nuxt-link></p>
    <h1>{{page.title}}</h1>
    <img class="title-img" :src="page.img" :alt="page.title">
    <component 
			v-for='(item,i) in page.page' :key='i'
			:is='"bmv-" + item.name'
			v-bind="item.props"/>
    <p><nuxt-link to='/articles'>К списку статей</nuxt-link></p>
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
		return this.$meta_tags.getMeta(
			this.page.title, 
			this.page.description, 
			this.page.img, 
			conf.url + this.$route.path
		)
	},
}
</script>

<style lang="scss" scoped>
  .title-img {
    width: 600px;
    max-width: 100%;
  }
  .page-content {
    margin-bottom: 60px;
  }
</style>
