<template>
	<div class="default-template">
    <header>
      <transition name="left-in">
        <mobMenu v-show="$store.state.mobileMenu" />
      </transition>
      <mainMenu />
    </header>
		<nuxt />
		<bigFooter />
		<transition name="fade">
			<modal v-show="$store.state.openModals.contactUs">
				<slot>
					<contact-us />
				</slot>
			</modal>
		</transition>
		<transition name="fade">
			<overlay v-show="$store.state.overlay" />
		</transition>
	</div>
</template>

<script>
import mainMenu from "~/components/header.vue";
import bigFooter from "~/components/footer.vue";
import mobMenu from "~/components/mob_menu.vue";
import modal from "~/components/modal.vue";
import overlay from "~/components/overlay.vue";
import contactUs from "~/components/forms/contact-us.vue";

export default {
  components: {
		mainMenu,
		bigFooter,
		mobMenu,
		modal,
		overlay,
		contactUs,
  },
  data() {
		return {
			windowWidth: process.browser ? window.innerWidth : "0",
		};
	},
}
</script>

<style lang="scss">
.default-template {
	min-height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
}
</style>
