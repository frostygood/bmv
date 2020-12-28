<template>
	<footer class="footer">
        <div class="wrapper">
			<div class="footer__row">
				<div class="footer__left">
					<div class="footer__list-wrap">
						<div class="footer__list">
							<div class="footer__title">услуги</div>
							<ul>
								<li>
									<nuxt-link to="/services/ventilation">Промышленная вентиляция</nuxt-link>
								</li>
								<li>
									<nuxt-link to="/services/cold">Кондиционирование</nuxt-link>
								</li>
								<li>
									<nuxt-link to="/services/video">Видеонаблюдение</nuxt-link>
								</li>
								<li>
									<nuxt-link to="/services/automation">Автоматика</nuxt-link>
								</li>
								<li>
									<nuxt-link to="/services/heat">Тепловое оборудование</nuxt-link>
								</li>
								<li>
									<nuxt-link to="/services/cool">Холодильное оборудование</nuxt-link>
								</li>
								<li>
									<nuxt-link to="/services/security">Системы безопасности и связи</nuxt-link>
								</li>
							</ul>
						</div>
						<div class="footer__copy_mobile">BMV Engineering &copy; {{ new Date().getFullYear() }}</div>
					</div>
					<div class="footer__info">
						<div class="footer__text">{{config.address}}</div>
						<div class="footer__phone">{{config.phone}}</div>
						<div class="footer__text"><a :href="'mailto:' + config.email" class="footer__email">{{config.email}}</a></div>
						<div class="footer__text display-desktop">Понедельник — пятница, c 9:00 до 18:00</div>
						<div class="footer__copy_mobile display-mobile">BMV Engineering &copy; {{ new Date().getFullYear() }}</div>
					</div>
				</div>
				<div class="footer__right">
					<img src="/img/footer-logo.png" alt="logo-bmv">
					<div class="footer__text">BMV Engineering &copy; {{ new Date().getFullYear() }}</div>
				</div>
			</div>
        </div>
	</footer>
</template>

<script>
import conf from '~/json/config.json'
    export default {
        data: function () {
            return {  
				config: conf
            }
        },
    }
</script>
