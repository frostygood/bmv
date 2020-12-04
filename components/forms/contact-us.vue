<template>
	<div class="contacts__form">
		<h4 class="h4 text-uppercase">Заказать звонок</h4>
		<form action="">
			<input type="email" placeholder="+7 999 999-99-99">
			<a href="#" class="button transparent-white">Отправить</a>
		</form>
	</div>
</template>

<script>
export default {
	data() {
		return {}
	},
	methods: {

	},
	computed: {},

};
</script>
<style lang="scss" scoped>
@import "~/assets/scss/_variables.scss";
.contacts__form {
	display: flex;
	align-items: center;
	justify-content: space-between;

	@media (max-width: $sc20_middle_point) {
		flex-direction: column;
		align-items: start;
		max-width: 636px;
		margin: 0 auto;
	}
	@media (max-width: $sc20_small_point) {
		align-items: center;
	}

	.h4 {
		margin-right: 20px;
	}
}
form {
	display: flex;
	align-items: center;
	justify-content: space-between;
	flex-shrink: 0;

	@media (max-width: $sc20_middle_point) {
		margin-top: 10px;
	}

	@media (max-width: $sc20_small_point) {
		flex-direction: column;
		width: 100%;

		.button {
			width: 100%;
			margin-top: 12px;
		}
	}
}
input {
	font-weight: 300;
    font-size: 14px;
    padding: 0 26px;
	border-radius: 2px;
	box-sizing: border-box;
    height: 60px;
	border: none;
	transition: .2s;
	color: $color_grey;
	margin-right: 26px;
	width: 378px;

	@media (max-width: $sc20_small_point) {
		width: 100%;
		margin-right: 0;
	}
}
</style>
