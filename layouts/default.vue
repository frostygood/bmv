<template>
	<div class="default-template">
    <header>
      <mainMenu />
    </header>
		<nuxt />
		<bigFooter />
		<transition name="fade">
			<modal v-show="$store.state.openModals.contactUs">
				<slot>
					<contact-us style="padding: 0;"/>
				</slot>
			</modal>
		</transition>
	</div>
</template>

<script>
import mainMenu from "~/components/header.vue";
import bigFooter from "~/components/footer.vue";
import modal from "~/components/modal.vue";

export default {
  components: {
		mainMenu,
		bigFooter,
		modal,
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
