<template>
	<div class="page-content" >
		<component 
			v-for='(item,i) in page.page' :key='i'
			:is='"bmv-" + item.name'
			v-bind="item.props"/>
		<div class="wrapper">
    		<div class="text">
				<h3 class="h2 mb8">КУДА ОБРАЩАТЬСЯ?</h3>
				<p class="p mb32">Мы ценим время и бюджет заказчика, а также руководствуемся принципом 
					прозрачного ценообразования. Пишите на почту {{config.email}}. 
					Звоните по телефону {{config.phone}}. Наши сотрудники бесплатно вас проконсультируют.</p>
			</div>
		</div>
	</div>
</template>

<script>
import conf from '~/json/config.json'
export default {
	data: function () {
		return {  
			config: conf
		}
	},
	async asyncData ({ $content, error, params }) {
		let page
		await $content('ru', 'services').fetch().then((docs) => {
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
			'/img/footer-logo.png', 
			conf.url + this.$route.path
		)
	},
};
</script>

<style lang="scss" scoped>
.text {
  	max-width: 720px;
}
</style>
