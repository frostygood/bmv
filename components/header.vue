<template>
	<div class="header">
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
							<li>
								<nuxt-link to="/services/ventilation">Промышленная вентиляция</nuxt-link>
							</li>
							<li><a href="">Кондиционирование</a></li>
							<li><a href="">Видеонаблюдение</a></li>
							<li><a href="">Автоматика</a></li>
						</ul>
					</li>
					<li class="header__menu-item">
						<nuxt-link to="/objects" class="header__link">Наши объекты</nuxt-link>
					</li>
					<li class="header__menu-item">
						<a href="" class="header__link">Статьи</a>
					</li>
					<li class="header__menu-item">
						<nuxt-link to="/contacts" class="header__link" @click.native="mobile = false">Контакты</nuxt-link>
					</li>
				</ul>
				<div class="header__right-info">
					<div class="header__contacts">
						<a href="tel:+7(4712)34-24-33" class="header__phone">+7(4712)34-24-33</a>
						<a href="mailto:manager@bmvcompany.ru" class="header__email">manager@bmvcompany.ru</a>
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
					  <li><a href="">Промышленная вентиляция</a></li>
					  <li><a href="">Кондиционирование</a></li>
					  <li><a href="">Видеонаблюдение</a></li>
					  <li><a href="">Автоматика</a></li>
					</ul>
				</li>
				<li>
					<nuxt-link to="/objects" @click.native="mobile = false">Наши объекты</nuxt-link>
				</li>
				<li><a @click="mobile = false" href="">Статьи</a></li>
				<li><nuxt-link to="/contacts" @click.native="mobile = false">Контакты</nuxt-link></li>
			</ul>
			<div class="header__right-info">
				<div class="header__contacts">
					<a @click="mobile = false" href="tel:+7(4712)34-24-33" class="header__phone">+7(4712)34-24-33</a>
					<a href="mailto:manager@bmvcompany.ru" class="header__email">manager@bmvcompany.ru</a>
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
export default {
	data: function () {
		return {
			mobile: false,
		}
	},
}
</script>