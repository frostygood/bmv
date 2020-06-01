<template>
	<div class="card">
		<img :src="img" :alt="link">
		<nuxt-link class="link-card" :to="link">{{name}}</nuxt-link>
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
    border-radius: 5px;
    background: $color_grey_light;
    padding: 15px;
    box-sizing: border-box;
	img {
		width: 100%;
		display: block;
		margin-bottom: 20px;
	}
	.link-card {
		font-size: 16px;
		color: #222;
		&:hover {
			text-decoration: underline;
		}
	}
}
</style>

