<template>
  <div class="wrapper">
    <h1 class="h1 mb32">Контакты</h1>
    <div class="right">
      <h2 class="h1 mb16">Офис</h2>
      <h3 class="h3 mb16">{{config.address}}</h3>
      <p class="p">Телефон: <a :href="'tel:' + config.phone">{{config.phone}}</a><br>
      E-mail: <a :href="'mailto:' + config.email">{{config.email}}</a><br>
      Понедельник — пятница, c 9:00 до 18:00</p>
    </div>
    <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A4dec71f8d2895eae8f9a4d4d22da0cdc4b3e2a5fed88ef68526fd6eb075035ff&amp;source=constructor" frameborder="0"></iframe>
<br><br><br><br><br><br>
        <div class="right">
      <h2 class="h1 mb16">Производственная база</h2>
      <h3 class="h3 mb16">Россия, Курск, улица Малых, 44АК1</h3>
      <p class="p">Понедельник — пятница, c 9:00 до 18:00</p>
    </div>
    <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3Ab4a5f14bb66292d7e3e377c832ed889507efcd11c7f83e12658b724b619951e7&amp;source=constructor" frameborder="0"></iframe>
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
			'Контакты - БМВ Курск - BMV Engineering', 
			this.config.phone + ' - ' + this.config.address, 
			'/img/footer-logo.png', 
			conf.url + '/' + this.$route.name + '/'
		)
  },
}
</script>

<style lang="scss" scoped>
@import "~/assets/scss/_variables.scss";
.wrapper {
  margin-bottom: auto;
  padding-top: 50px;
  padding-bottom: 150px;
}
iframe {
  width: 500px;
  height: 400px;
  @media (max-width: $sc_medium_point){
    width: 400px;
    height: 300px;
  }
  @media (max-width: $sc20_small_point){
    width: 100%;
    height: 250px;
  }
}
.right {
  float: right;
  width: calc(100% - 550px);
  @media (max-width: $sc_medium_point){
    width: calc(100% - 450px);
  }
  @media (max-width: $sc20_small_point){
    float: none;
    display: block;
    padding-bottom: 30px;
    width: 100%;
  }
}
h2.h1 {
  @media (max-width: $sc20_small_point){
    display: none;
  }
}
</style>
