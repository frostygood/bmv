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
  async asyncData ({ $content, error, $get_article }) {
    return {articles: await $get_article.getAllArticles('objects', { $content, error })}
  },
  components: {
    card
  },
	head () {
    return this.$meta_tags.getMeta(
			'Сданные объекты компанией BMV', 
			'Кондиционер, чиллер, фанкойл, фэнкойл, холодильное оборудование, вентиляция, воздуховод,  тепловое оборудование, автоматика,  видеонаблюдение, General, Fujitsu, McQuay, Sanyo, Mitsubishi Heavy, Курск', 
			'/img/footer-logo.png', 
			conf.url + '/' + this.$route.name 
		)
  },
}
</script>

