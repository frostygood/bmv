<template>
	<img class="big_img" v-if="img" decoding="async" loading="lazy"  :src="img" :alt="alt">
</template>

<script>
	export default {
		props: {
			img: {
				type: String,
				default: '/_vue_builder/bmv_ru_articles_1616684670521_1618069015780_article-kak_schitat_mochnost.jpeg'
			},
			alt: {
				type: String,
				default: ''
			},
		},
	};
</script>

<style lang="scss" scoped>
.big_img {
	height: 400px;
	display: block;  
}
</style>
