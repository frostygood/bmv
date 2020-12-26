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
		let title = 'Услуги устройства инженерных сетей в Курске';
		let description = '«BMV Engineering» профессионально спроектируют и смонтируют любые инженерных сетей на любом объекте, от бытовых помещений до промышленных предприятий.';
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
				{ rel: "canonical", href: config.url }
			]
		}
  	},
}
</script>

<style lang="scss" scoped>
.link {
  font-size: 20px;
}
</style>
