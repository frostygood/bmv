<template>
  <div class="wrapper page-content">
    <div class="text">
      <h1 class="h1 mb32">Системы безопасности и связи в Курске</h1>
	  <p class="p mb16">Мы представляем широкий спектр услуг в области систем безопасности и связи:</p>
	  <p class="p mb16">1. Оборудование и системы видеонаблюдения: видеорегистраторы, платы видеозахвата, 
		  видеокамеры цветные и черно-белые проводные и беспроводные для установки внутри помещений и 
		  уличного исполнения, управляемые, «видеоняня», видеодомофоны.</p>
    </div>
    <div class="floor-contacts mb32" style="padding: 40px;">
      <div class="wrapper">
        <form-contact/>
      </div>
    </div>
    <div class="text">
		<p class="p mb16">2. Охранно-пожарное оборудование и системы: контрольные приборы, 
			проводные и беспроводные пожарные и охранные датчики, периметровые системы охраны, 
			тревожные кнопки, GSM системы, системы оповещения.</p>
		<p class="p mb16">3. Оборудование и системы контроля доступа: шлагбаумы, турникеты, 
			электронные проходные, автоматические ворота (распашные, секционные), электрозамки.</p>
		<p class="p mb16">Также мы можем предложить такие услуги, как техническое обслуживание 
			систем видеонаблюдения, охранно-пожарной сигнализации с подключением на пульт 
			охранных предприятий, систем контроля доступа любой степени сложности, 
			аппаратуры связи и мн. др.</p>
		<h3 class="h2 mb8">КУДА ОБРАЩАТЬСЯ?</h3>
		<p class="p mb32">Мы ценим время и бюджет заказчика, а также руководствуемся принципом 
			прозрачного ценообразования. Пишите на почту {{config.email}}. 
			Звоните по телефону {{config.phone}}. Наши сотрудники бесплатно вас проконсультируют.</p>
    </div>
  </div>
</template>

<script>
import formContact from '~/components/forms/contact-us.vue'
import conf from '~/json/config.json'
export default {
  data: function () {
            return {  
				config: conf
            }
        },
components: {
		formContact
  },
	head () {
		let title = 'Кондиционирование в Курске';
		let description = '«BMV Engineering» профессионально спроектируют и смонтируют системы кондиционирования воздуха на любом объекте, от бытовых помещений до промышленных предприятий.';
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

<style lang="scss" scoped>
.text {
  max-width: 720px;
}
</style>
