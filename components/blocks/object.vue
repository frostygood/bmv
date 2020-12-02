<template>
	<div class="card">
		<div class="img-wrap">
			<img :src="img" :alt="link">
		</div>
		<nuxt-link class="card__link" :to="link">{{name}}</nuxt-link>
	</div>
</template>

<script>

export default {
	props: {
		img: {
			default: '',
			type: String
		},
		link: {
			default: '',
			type: String
		},
		name: {
			default: '',
			type: String
		}
	},
	components: {
	},
	data() {
		return {};
	},
};
</script>
 

<style lang="scss" scoped>
@import "./assets/scss/_variables.scss";
.card {
	width: 100%;
	padding: 0 16px;
	text-align: center;
	box-sizing: border-box;

	@media (max-width: $sc20_small_point) {
		display: flex;
	}

	.img-wrap {
		position: relative;
		&:after {
			content: "";
			border: 1px solid rgba(255,255,255,0.3);
			position: absolute;
			left: 10px;
			top: 10px;
			right: 10px;
			bottom: 10px;
		}
	}

	img {
		width: 100%;
		display: block;
		margin-bottom: 32px;
		border-radius: 2px;

		@media (max-width: $sc20_small_point) {
			width: 125px;
			margin-right: 32px;
		}
	}
	.card__link {
		font-size: 16px;
		color: $color_grey;
		font-weight: 300;
		text-decoration: none;

		&:hover {
			text-decoration: underline;
			color: $color_primary;
		}
	}
}
</style>

