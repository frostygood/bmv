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
	  <li class="mb32">
		<nuxt-link to="/services/heat">Тепловое оборудование</nuxt-link>
	</li>
	<li class="mb32">
		<nuxt-link to="/services/cool">Холодильное оборудование</nuxt-link>
	</li>
	<li class="mb32">
		<nuxt-link to="/services/security">Системы безопасности и связи</nuxt-link>
	</li>
    </ul>
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
		return this.$meta_tags.getMeta(
			'Услуги устройства инженерных сетей в Курске', 
			'«BMV Engineering» профессионально спроектируют и смонтируют любые инженерных сетей на любом объекте, от бытовых помещений до промышленных предприятий.', 
			'/img/footer-logo.png', 
			conf.url + '/' + this.$route.name 
		)
  	},
}
</script>

<style lang="scss" scoped>
.link {
  font-size: 20px;
}
</style>
