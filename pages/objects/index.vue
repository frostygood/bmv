<template>
  <div class="wrapper page-content">
    <h1 class="h1 mb32">Реализованные объекты</h1>
    <div class="cards">
      <card v-for="(item,n) in articles" :key="n" 
        :img="item.imgUrl" 
        :link="item.path"
        :name="item.title"
        :desc="item.description"
        class="mb32"></card>
    </div>
  </div>
</template>

<script>
import card from '~/components/blocks/object.vue'
import conf from '~/json/config.json'
export default {
  async asyncData ({ $content, params, error }) {
    let articles
    try {
      articles = await $content('objects').limit(100).fetch();
      //console.log(articles);
    } catch (e) {
      error({ message: 'Article not found' })
    }
    return {
      articles,
    }
  },
  components: {
    card
  },
	head () {
		let title = 'Сданные объекты компанией BMV';
		let description = 'Кондиционер, чиллер, фанкойл, фэнкойл, холодильное оборудование, вентиляция, воздуховод,  тепловое оборудование, автоматика,  видеонаблюдение, General, Fujitsu, McQuay, Sanyo, Mitsubishi Heavy, Курск';
		let img = '/img/footer-logo.png'
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
				{ rel: "canonical", href: conf.url + '/' + this.$route.name }
			]
		}
  	},
}
</script>

