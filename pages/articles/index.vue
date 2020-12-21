<template>
  <div class="wrapper page-content">
    <h1 class="h1 mb32">Статьи</h1>
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
import card from '~/components/blocks/article.vue'
export default {
  async asyncData ({ $content, params, error }) {
    let articles
    try {
      articles = await $content('articles').limit(100).fetch();
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
    return {
      title: "",
      description: "",
			meta: [
				{ hid: 'description', name: 'description', content: "" },
				// Open Graph
				{ hid: 'og:title', property: 'og:title', content: "" },
				{ hid: 'og:description', property: 'og:description', content: "" },
				{ hid: 'og:image', property: 'og:image', content: ""},
				// Twitter Card
				{ hid: 'twitter:title', name: 'twitter:title', content: "" },
				{ hid: 'twitter:description', name: 'twitter:description', content: "" },
				{ hid: 'twitter:image', name: 'twitter:image', content: "" },
				// Google+. Schema.org
				{ itemprop: 'title', content: "" },
				{ itemprop: 'description', content: ""},
				{ itemprop: 'image', content: ""},
			]
    }
  }
}
</script>

