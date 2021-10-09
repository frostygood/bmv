<template>
	<img class="big_img" v-if="img" decoding="async" loading="lazy" :src="img" :alt="alt">
</template>

<script>
	export default {
		props: {
			img: {
				type: String,
				default: '/_vue_builder/bmv_ru_articles_1616684670521_1618069015780_article-kak_schitat_mochnost.jpeg',
				placeholder: 'Загрузка основной картинки',
				order: 1,
				type_admin: "imgs"
			},
			alt: {
				type: String,
				default: '',
				placeholder: 'название и описание картинки для поисковиков',
				order: 2,
				type_admin: "string"
			},
		},
	};
</script>

<style lang="scss" scoped>
.big_img {
	max-height: 400px;
	display: block;
	max-width: 100%;
}
</style>
