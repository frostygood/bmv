<!--
	Основные props:
		title (String) - заголовок блока, можно с html-разметкой
		text (String) - текст блока, можно с html-разметкой, если ничего не передавать, то отображаться не будет
		wide (Boolean) - текст на 8 колонок, а не на 6
-->
<template>
<div class="sc20-space" :class="[name_class]">
	<p v-if="note">
		large - 144px, big - 80px, small - 40px, last - 240px
	</p>
</div>
</template>

<script>
	export default {
		props: {
			name_class: {
				type: String,
				default: 'large'
			},
			note: {
				type: Boolean,
				default: false
			}
		},
	};
</script>

<style lang="scss" scoped>
	.sc20-space {
		display: block;
		width: 100%;
		&.large {
			height: 144px;
			@media (max-width: 1149px) {
				height: 96px;
			}
			@media (max-width: 767px) {
				height: 80px;
			}
		}
		&.big {
			height: 80px;
			@media (max-width: 1149px) {
				height: 40px;
			}
		}
		&.small {
			height: 40px;
			@media (max-width: 1149px) {
				height: 24px;
			}
		}
		&.last {
			height: 240px;

			@media (max-width: 1149px) {
				height: 200px;
			}
			@media (max-width: 767px) {
				height: 160px;
			}
		}
	}
</style>
