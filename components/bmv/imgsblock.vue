<template>
<div class="sc20-space" :class="[name_class]">
	<img v-if="first_img" decoding="async" loading="lazy"  :src="first_img" :alt="first_alt">
	<img v-if="second_img" decoding="async" loading="lazy"  :src="second_img" :alt="second_alt">
	<img v-if="third_img" decoding="async" loading="lazy"  :src="third_img" :alt="third_alt">
</div>
</template>

<script>
	export default {
		props: {
			first_img: {
				type: String,
				default: ''
			},
			first_alt: {
				type: String,
				default: ''
			},
			second_img: {
				type: String,
				default: ''
			},
			second_alt: {
				type: String,
				default: ''
			},
			third_img: {
				type: String,
				default: ''
			},
			third_alt: {
				type: String,
				default: ''
			},
		},
	};
</script>

<style lang="scss" scoped>

</style>
