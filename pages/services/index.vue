<template>
  <div class="wrapper" style="padding-top: 70px; padding-bottom: 70px;">
    <h1 class="h1 mb32">Наши услуги</h1>
    <ul>
      <li class="mb32">
        <nuxt-link to="/services/ventilation">Промышленная вентиляция</nuxt-link>
      </li>
      <li class="mb32">
        <nuxt-link to="/services/cold">Кондиционирование</nuxt-link>
      </li>
      <li class="mb32">
        <nuxt-link to="/services/video">Видеонаблюдение</nuxt-link>
      </li>
      <li class="mb32">
        <nuxt-link to="/services/automation">Автоматика</nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
import config from '~/json/config.json'
export default {
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
			],
			link: [
				{ rel: "canonical", href: config.url + '/' + this.$route.name }
			]
    }
  }
}
</script>

<style lang="scss" scoped>
.link {
  font-size: 20px;
}
</style>
