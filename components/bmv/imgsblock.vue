<template>
	<div class="block_imgs">
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
				default: '/_vue_builder/bmv_ru_articles_1616684670521_1618069015780_article-kak_schitat_mochnost.jpeg'
			},
			first_alt: {
				type: String,
				default: ''
			},
			second_img: {
				type: String,
				default: '/_vue_builder/bmv_ru_articles_1616684670521_1618069015780_article-kak_schitat_mochnost.jpeg'
			},
			second_alt: {
				type: String,
				default: ''
			},
			third_img: {
				type: String,
				default: '/_vue_builder/bmv_ru_articles_1616684670521_1618069015780_article-kak_schitat_mochnost.jpeg'
			},
			third_alt: {
				type: String,
				default: ''
			},
		},
	};
</script>

<style lang="scss" scoped>
.block_imgs img {
	height: 230px;
	display: inline-block;  
}
</style>
