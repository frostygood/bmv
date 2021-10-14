<template>
	<div class="header" :class="{'content': $route.path != '/'}">
		<nav class="wrapper header__menu-wrap">
			<div class="header__logo">
				<a href="/" title="На главную">
					<img src="/img/logo.png" alt="logo-bmv">
				</a>
			</div>
			<div class="header__info">
				<ul class="header__menu">
					<li class="header__drop-menu">
						<a @click.prevent href="" class="header__link">
							<svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
								<g data-name="menu " id="menu_" fill="#ffffff">
									<path d="M29,6H3A1,1,0,0,0,3,8H29a1,1,0,0,0,0-2Z"/>
									<path d="M3,17H16a1,1,0,0,0,0-2H3a1,1,0,0,0,0,2Z"/>
									<path d="M25,24H3a1,1,0,0,0,0,2H25a1,1,0,0,0,0-2Z"/>
								</g>
							</svg>
							Услуги</a>
						<ul class="header__sub-menu">
							<li v-for="(item, i) in page" :key='i'>
								<nuxt-link :to="'/services/'+item.path_nuxt">{{item.title.replace("в Курске", "")}}</nuxt-link>
							</li>
						</ul>
					</li>
					<li class="header__menu-item">
						<nuxt-link to="/objects" class="header__link">Наши объекты</nuxt-link>
					</li>
					<li class="header__menu-item">
						<nuxt-link to="/articles" class="header__link">Статьи</nuxt-link>
					</li>
					<li class="header__menu-item">
						<nuxt-link to="/contacts" class="header__link" @click.native="mobile = false">Контакты</nuxt-link>
					</li>
				</ul>
				<div class="header__right-info">
					<div class="header__contacts">
						<a :href="'tel:' + config.phone" class="header__phone">{{config.phone}}</a>
						<a :href="'mailto:' + config.email" class="header__email">{{config.email}}</a>
					</div>
					<div class="header__phone-icon">
						<a href="#" @click.prevent="$store.commit('openModal', 'contactUs')">
							<img src="/img/phone.svg" alt="">
						</a>
					</div>
				</div>
			</div>
			<div class="header__icons_mobile">
				<div class="header__phone-icon header__phone-icon_mobile display-mobile">
					<a href="#" @click.prevent="$store.commit('openModal', 'contactUs')">
						<img src="/img/phone.svg" alt="">
					</a>
				</div>
				<div class="header__burger" @click="mobile = true">
					<svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
						<g data-name="menu " id="menu_" fill="#ffffff">
							<path d="M29,6H3A1,1,0,0,0,3,8H29a1,1,0,0,0,0-2Z"/>
							<path d="M3,17H16a1,1,0,0,0,0-2H3a1,1,0,0,0,0,2Z"/>
							<path d="M25,24H3a1,1,0,0,0,0,2H25a1,1,0,0,0,0-2Z"/>
						</g>
					</svg>
				</div>
			</div>
		</nav>
		<div class="header__menu_mobile" :class="{'open': mobile}">
			<div class="header__menu-close_mobile" @click="mobile = false"></div>
			<ul class="header__menu-list">
				<li>
					<nuxt-link to="/services" @click.native="mobile = false">Услуги</nuxt-link>
					<ul class="header__submenu_mobile">
						<li v-for="(item, i) in page" :key='i'>
							<nuxt-link @click.native="mobile = false" :to="'/services/'+item.path_nuxt">{{item.title.replace("в Курске", "")}}</nuxt-link>
						</li>
					</ul>
				</li>
				<li>
					<nuxt-link to="/objects" @click.native="mobile = false">Наши объекты</nuxt-link>
				</li>
				<li>
					<nuxt-link to="/articles" @click.native="mobile = false">Статьи</nuxt-link>
				</li>
				<li>
					<nuxt-link to="/contacts" @click.native="mobile = false">Контакты</nuxt-link>
				</li>
			</ul>
			<div class="header__right-info">
				<div class="header__contacts">
					<a @click="mobile = false" :href="'tel:' + config.phone" class="header__phone">{{config.phone}}</a>
					<a :href="'mailto:' + config.email" class="header__email">{{config.email}}</a>
				</div>
				<div class="header__phone-icon">
					<a href="#" @click.prevent="$store.commit('openModal', 'contactUs')">
						<img src="/img/phone.svg" alt="">
					</a>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import conf from '~/json/config.json'
export default {
	async asyncData({ $content }) {
		let datapage = [];
			await $content('ru', 'services').fetch().then(docs => {
				docs.forEach(element => {
					datapage.push(element)
				});
			})
			.catch((err) => {
				console.log('Error getting documents', err);
			});

		return {page: datapage};
	},
	created() {
		  this.getServices()
	},
	data: function () {
		return {
			mobile: false,
			config: conf,
			page: []
		}
	},
	methods: {
		async getServices() {
			let datapage = [];
				await this.$content('ru', 'services').fetch().then(docs => {
					docs.forEach(element => {
						datapage.push(element)
					});
					this.page = datapage
				})
				.catch((err) => {
					console.log('Error getting documents', err);
				});
		},
	}
}
</script>