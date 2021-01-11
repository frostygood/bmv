<template>
  <div class="wrapper page-content">
    <div class="text">
      <h1 class="h1 mb32">Холодильное оборудование в Курске</h1>
	  <p class="p mb16">Холодильное оборудование используется во многих видах деятельности. 
		  Например, в супермаркетах, на пивоваренных заводах и мясокомбинатах, на химических 
		  комбинатах, сыродельнях и молокозаводах.</p>
    </div>
    <div class="floor-contacts mb32" style="padding: 40px;">
      <div class="wrapper">
        <form-contact/>
      </div>
    </div>
    <div class="text">
		<h3 class="h2 mb8">Наша компания занимается централизованным холодоснабжением торговых комплексов, а также продажей и установкой:</h3>
		<ul class="mb32">
			<li><p class="p">холодильной арматуры</p></li>
			<li><p class="p">холодильных и морозильных складов</p></li>
			<li><p class="p">холодильных компрессоров</p></li>
			<li><p class="p">электрооборудования</p></li>
			<li><p class="p">автоматики и мн. др.</p></li>
		</ul>
		<p class="p mb16">Также мы занимаемся ремонтом и техническим обслуживанием холодильного оборудования.</p>
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
		return this.$meta_tags.getMeta(
			'Холодильное оборудование в Курске', 
			'«BMV Engineering» профессионально спроектируют и смонтируют холодильное оборудование на любом объекте, от бытовых помещений до промышленных предприятий.', 
			'/img/footer-logo.png', 
			conf.url + this.$route.path
		)
  	},
}
</script>

<style lang="scss" scoped>
.text {
  max-width: 720px;
}
</style>
