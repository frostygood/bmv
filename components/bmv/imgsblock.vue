<template>
	<div class="block_imgs">
		<img v-if="first_img" decoding="async" loading="lazy"  :src="first_img" :alt="first_alt">
		<img v-if="second_img" decoding="async" loading="lazy"  :src="second_img" :alt="second_alt">
		<img v-if="third_img" decoding="async" loading="lazy"  :src="third_img" :alt="third_alt">
	</div>
</template>

<script>
	export default {
		preview: "",
        category: "For Pictures",
		name: "imgsblock",
		props: {
			first_img: {
				type: String,
				default: '/_vue_builder/bmv_ru_articles_1616684670521_1618069015780_article-kak_schitat_mochnost.jpeg',
				placeholder: 'Первая картинка (если не загружать, то ничего не покажется)',
				order: 1,
				type_admin: "imgs"
			},
			first_alt: {
				type: String,
				default: '',
				placeholder: 'Название и описание первой картинки для поисковиков',
				order: 2,
				type_admin: "boolean"
			},
			second_img: {
				type: String,
				default: '/_vue_builder/bmv_ru_articles_1616684670521_1618069015780_article-kak_schitat_mochnost.jpeg',
				placeholder: 'Вторая картинка (если не загружать, то ничего не покажется)',
				order: 3,
				type_admin: "imgs"
			},
			second_alt: {
				type: String,
				default: '',
				placeholder: 'Название и описание второй картинки для поисковиков',
				order: 4,
				type_admin: "boolean"
			},
			third_img: {
				type: String,
				default: '/_vue_builder/bmv_ru_articles_1616684670521_1618069015780_article-kak_schitat_mochnost.jpeg',
				placeholder: 'Третья картинка (если не загружать, то ничего не покажется)',
				order: 5,
				type_admin: "imgs"
			},
			third_alt: {
				type: String,
				default: '',
				placeholder: 'Название и описание третьей картинки для поисковиков',
				order: 6,
				type_admin: "boolean"
			},
		},
	};
</script>

<style lang="scss" scoped>
.block_imgs img {
	max-height: 230px;
	display: inline-block;  
	max-width: 100%;
}
</style>
