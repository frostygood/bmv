<template>
	<nuxt-link class='card' :to="link">
		<div class="img-wrap" :style='url'></div>
		<p class="card__link" :to="link">{{name}}</p>
		<p v-if="desc" class="card__desc" :to="link">{{desc}}</p>
	</nuxt-link>
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
		},
		desc: {
			default: '',
			type: String
		}
	},
	components: {
	},
	data() {
		return {
			url: 'background-image: url("' + this.img + '");'
		};
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
	text-decoration: none;
	margin-bottom: 40px;
	@media (max-width: $sc20_small_point) {
		display: flex;
		flex-wrap: wrap;
		text-align: left;
	}

	.img-wrap {
		position: relative;
		width: 350px;
		height: 260px;
		background-size: cover;
		margin-bottom: 16px;
		overflow: hidden;
		&:after {
			content: "";
			border: 1px solid rgba(255,255,255,0.3);
			position: absolute;
			left: 10px;
			top: 10px;
			right: 10px;
			bottom: 10px;
			transition: .3s;
		}
		@media (max-width: $sc20_small_point) {
			width: 125px;
			height: 125px;
			margin-right: 32px;
		}
	}
	.card__link {
		font-size: 16px;
		color: $color_grey;
		font-weight: 600;
		text-decoration: none;
		margin-bottom: 8px;
		&:visited {
			text-decoration: none;
		}
	}
	.card__desc {
		font-size: 14px;
		color: $color_grey;
		font-weight: 300;
		text-decoration: none;

		overflow: hidden;
		line-clamp: 5;
		box-orient: vertical;
		text-overflow: ellipsis;
		display: -moz-box;
		-moz-box-orient: vertical;
		display: -webkit-box;
		-webkit-line-clamp: 5;
		-webkit-box-orient: vertical;
		height: 80px;
		&:visited {
			text-decoration: none;
		}
		@media (max-width: $sc20_small_point) {
			//padding-bottom: 20px;
			border-bottom: 1px solid grey;
		}
	}
	&:hover {
		.img-wrap {
			&:after {
				left: 3px;
				top: 3px;
				right: 3px;
				bottom: 3px;
			}
		}
		.card__link {
			text-decoration: underline;
			color: $color_primary;
		}
	}
}
</style>

