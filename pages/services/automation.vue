<template>
  <div class="wrapper page-content">
    <div class="text">
      <h1 class="h1 mb32">Автоматика в Курске</h1>

      
    </div>
    <div class="floor-contacts mb32" style="padding: 40px;">
      <div class="wrapper">
        <form-contact/>
      </div>
    </div>
    <div class="text">
 
    </div>
  </div>
</template>

<script>
import formContact from '~/components/forms/contact-us.vue'
import config from '~/json/config.json'
export default {
components: {
		formContact
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
				],
			link: [
				{ rel: "canonical", href: config.url + '/' + this.$route.name }
			]
		}
  	},
}
</script>

<style lang="scss" scoped>
.text {
  max-width: 720px;
}
</style>
