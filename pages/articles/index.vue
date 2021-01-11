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
import conf from '~/json/config.json'
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
    return this.$meta_tags.getMeta(
			'Bmvcompany.ru/.ru - статьи о строительстве. Описания, полезные советы и рекомендации', 
			'Статьи на сайте BMV. Вентиляция, кондиционирование, холодильное оборудование, автоматика и монтаж. Статьи, описания, полезные советы и рекомендации для строительства.', 
			'/img/footer-logo.png', 
			conf.url + '/' + this.$route.name
		)
  },
}
</script>

