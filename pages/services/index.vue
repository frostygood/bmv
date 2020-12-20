<template>
  <div class="wrapper" style="padding-top: 70px; padding-bottom: 70px;">
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
  </div>
</template>

<script>
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
