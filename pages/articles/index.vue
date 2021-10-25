<template>
  <div class="wrapper page-content">
    <h1 class="h1 mb32">Статьи</h1>
    <div class="cards">
      <card v-for="(item,n) in articles" :key="n" 
        :img="'_vue_builder/' + item.img" 
        :link="'/articles/' + item.path_nuxt"
        :name="item.title"
        :desc="item.description"
        class="mb32"></card>
    </div>
  </div>
</template>

<script>
import conf from '~/json/config.json'
import card from '~/components/blocks/article.vue'
export default {
  async asyncData ({ $content }) {
    let datapage = [];
			await $content('ru', 'articles').fetch().then(docs => {
				docs.forEach(element => {
					datapage.push(element)
				});
			})
			.catch((err) => {
				console.log('Error getting documents', err);
			});

		return {articles: datapage};
  },
  components: {
    card
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
			'Блог Bmvcompany - статьи о строительстве. Полезные советы и рекомендации', 
			'Статьи на сайте BMV. Вентиляция, кондиционирование, холодильное оборудование, автоматика и монтаж. Статьи, описания, полезные советы и рекомендации для строительства.', 
			'/img/footer-logo.png', 
			conf.url + '/' + this.$route.name + '/'
		)
  },
}
</script>

