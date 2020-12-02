<template>
	<div>
		<div class="floor-main">
			<div class="wrapper">
				<h2 class="h2 white floor-main__h2">Компания BMV Engineering</h2>
				<h1 class="h1 white floor-main__h1">Более 20 лет занимаемся вентиляцией, автоматикой и кондиционированием</h1>
				<a href="/" @click.prevent="$store.commit('openModal', 'contactUs')" class="button big">Бесплатная консультация</a>

				<div class="numbers">
					<div class="numbers__col">
						<div class="numbers__card">
							<span>320</span>
							<p>Российских клиентов</p>
						</div>
					</div>
					<div class="numbers__col">
						<div class="numbers__card">
							<span>400</span>
							<p>Реализованных проектов</p>
						</div>
					</div>
					<div class="numbers__col">
						<div class="numbers__card">
							<span>20 лет</span>
							<p>На российском рынке</p>
						</div>
					</div>
					<div class="numbers__col">
						<div class="numbers__card">
							<span>30</span>
							<p>Поставщиков с нами работает</p>
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="floor-company-info">
			<div class="wrapper">
				<div class="company-info__row">
					<div class="left">
						<h3 class="h3 text-uppercase">19 января<br /> 1999 года — </h3>
					</div>
					<div class="right">
						<div class="p company-info__text">эта дата стала отправной точкой для формирования в Курске крупнейшего поставщика услуг по подбору, поставке и монтажу систем кондиционирования, вентиляции, отопления, промышленного и коммерческого холодоснабжения, систем контроля доступа, пожарной сигнализации и пожаротушения, видеонаблюдения, систем промышленной автоматики.</div>
					</div>
				</div>
				<div class="company-info__row">
					<div class="left">
						<img src="/img/company-info-img.png" class="company-info__img" alt="" />
					</div>
					<div class="right">
						<div class="company-info__today">СЕГОДНЯ</div>
						<h3 class="h3 company-info__bmv-title">«BMV ENGINEERING» — ЭТО:</h3>
						<ul class="company-info__list">
							<li>Официальный дилер и эксклюзивный представитель Fujitsu General Ltd. — лидера в производстве климатического оборудования для промышленных объектов.</li>
							<li>Официальный дилер Mitsubishi Heavy Ind., Hyundai и United Elements, которые известны всему миру как производители надежных систем кондиционирования, вентиляции и отоплении</li>
							<li>Авторизованный сервисный центр по гарантийному ремонту и обслуживанию теплового оборудования «Тропик».</li>
							<li>Поставщик услуг по разработке комплексных решений вентиляции, холодильного оборудования, систем охраны и наблюдения и других для торговых и промышленных объектов, частных клиентов.</li>
						</ul>
					</div>
				</div>
			</div>
		</div>

		<div class="floor-objects">
			<div class="wrapper">
				<div class="objects__title">
					<h3 class="h3 black text-uppercase">Реализованные объекты</h3>
					<div class="display-desktop">
						<nuxt-link to="/objects" class="button transparent-blue">Посмотреть ещё</nuxt-link>
					</div>
				</div>
				<div class="cards objects__cards">
					<card v-for="(item,n) in articles" :key="n" :img="item.imgUrl" :link="item.path"
						  :name="item.title"></card>
				</div>
				<div class="display-mobile">
					<nuxt-link to="/objects" class="button transparent-blue">смотреть все объекты</nuxt-link>
				</div>
				<div class="p objects__text">
					Клиенты «BMV engineering» — это космодром «Восточный», ООО «Грибная долина», более 20 объектов ЗАО «Корпорация «Гринн», сеть супермаркетов «Европа» и другие крупные компании и государственные заказчики. Всю информацию по объектам вы можете прочитать в разделах оборудования.
				</div>
			</div>
		</div>

		<div class="floor-contacts">
			<div class="wrapper">
				<form-contact/>
			</div>
		</div>

		<div class="floor-principles">
			<div class="wrapper">
				<h3 class="h3 black">4 ПРИНЦИПА ЭФФЕКТИВНОЙ РАБОТЫ</h3>
				<h3 class="h3 floor-principles__h3">«BMV ENGINEERING» КУРСК</h3>
				<p class="p floor-principles__p">В работе сотрудники «BMV engineering» Курск руководствуются следующими принципами:</p>

				<div class="principles">
					<div class="principles__item">
						<div class="principles__item-wrap">
							<div class="principles__item-num">01</div>
							<div>
								<h5 class="h5">Прозрачное ценообразование</h5>
								<principles-text>
									<p class="p">Все работы, будь то подключение умного дома или установки пожарной системы на промышленном объекте, согласованы заранее. На первом этапе на объект выезжает наш специалист для предварительной оценки работ, договор вы подписываете только после согласования бюджета.</p>
								</principles-text>
							</div>
						</div>
						<div class="principles__item-quote">
							BMV engineering» Курск не приемлет скрытые и “неожиданные” статьи расходов, ценит и свое время, и бюджет заказчика.
						</div>
					</div>
					<div class="principles__item">
						<div class="principles__item-wrap">
							<div class="principles__item-num">02</div>
							<div>
								<h5 class="h5">Материальная ответственность</h5>
								<principles-text>
									<p class="p">Вы подписываете акт приема только после ввода оборудования в эксплуатацию. На все установленное оборудование предоставляется гарантия производителя: от кондиционеров до источников бесперебойного питания. Аналогичные гарантии предоставляет наша компания на проведение профилактических работ и обслуживание.</p>
								</principles-text>
							</div>
						</div>
					</div>
					<div class="principles__item">
						<div class="principles__item-wrap">
							<div class="principles__item-num">03</div>
							<div>
								<h5 class="h5">Репутация</h5>
								<principles-text>
									<p class="p">За более чем 20 лет работы специалисты «BMV engineering» не сталкивались с отказом со стороны заказчика. Это касается как юридических лиц, так и небольших заказов на установку и обслуживание кондиционеров: отзывы о нашей компании в сети на 100% положительные. Наша репутация среди клиентов складывается из базовых принципов работы: оперативная обратная связь, персональный подход к бюджету и задачам заказчика, ответственности за произведенные работы.</p>
								</principles-text>
							</div>
						</div>
					</div>
					<div class="principles__item">
						<div class="principles__item-wrap">
							<div class="principles__item-num">04</div>
							<div>
								<h5 class="h5">Строгий подбор персонала</h5>
								<principles-text>
									<p class="p">Кадры решают всё — это про «BMV engineering». Для оперативного решения ваших задач созданы подразделения:</p>
									<ul class="principles__item-list">
										<li>Коммерческий отдел и отдел продаж — составляет для вас коммерческие предложения и готовые решения.</li>
										<li>Договорной отдел — отвечает за юридические моменты подписания договора.</li>
										<li>Проектно-сметный отдел — составляет проекты систем вентиляции, кондиционерного оборудования, пожарных и других систем, отвечает за согласование смет.</li>
										<li>Отдел материально-технического обеспечения — поставляет необходимое для реализации вашего проекта оборудование.</li>
										<li>Технический отдел и группа технического обслуживания — участвует в реализации и обслуживании оборудования на объекте.</li>
										<li>Монтажная группа — устанавливает и вводит в эксплуатацию оборудование на вашем объекте.</li>
									</ul>
								</principles-text>
							</div>
						</div>
						<div class="principles__item-quote principles__item-quote_fullwidth">
							«BMV engineering» использует собственные человеческие ресурсы: все монтажники и другие специалисты состоят в нашем штате, что гарантирует нашу материальную ответственность за реализацию проекта.
						</div>
					</div>
				</div>
			</div>
		</div>

	</div>
</template>

<script>
import card from '~/components/blocks/object.vue'
import formContact from '~/components/forms/contact-us.vue'
import principlesText from '~/components/blocks/principles-text.vue'

export default {
	async asyncData({$content, params, error}) {
		let articles
		try {
			articles = await $content('objects').limit(3).fetch();
			//console.log(articles);
		} catch (e) {
			error({message: 'Article not found'})
		}
		return {
			articles,
		}
	},
	components: {
		card,
		formContact,
		principlesText
	},
	data: function () {
		return {
			isOpened: false,
		}
	},
	methods: {
		toggleIsOpened() {
			this.isOpened = !this.isOpened;
		},
	}
}
</script>
