<template>
  <div class="wrapper" style="padding-top: 70px; padding-bottom: 70px;">
    <h1 class="h1 mb32">Наши услуги</h1>
    <ul>
      <li class="mb32" v-for="(item, i) in page" :key='i'>
        <nuxt-link :to="'/services/'+item.path_nuxt">{{item.title}}</nuxt-link>
      </li>
    </ul>
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
  async asyncData({ $content }) {
		let datapage = [];
			await $content('ru', 'services').fetch().then(docs => {
				docs.forEach(element => {
					datapage.push(element)
				});
			})
			.catch((err) => {
				console.log('Error getting documents', err);
			});

		return {page: datapage};
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
			'Услуги устройства инженерных сетей в Курске', 
			'«BMV Engineering» профессионально спроектируют и смонтируют любые инженерных сетей на любом объекте, от бытовых помещений до промышленных предприятий.', 
			'/img/footer-logo.png', 
			conf.url + '/' + this.$route.name  + '/'
		)
  	},
}
</script>

<style lang="scss" scoped>
.link {
  font-size: 20px;
}
</style>
