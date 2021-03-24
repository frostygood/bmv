<template>
<div :class="[{'floor-contacts': pageBlock}, {'mb32': pageBlock}]" style="padding: 40px;">
<div :class="{'wrapper': pageBlock}">
	<div class="contacts__form">
		<h4 class="h4 text-uppercase">Заказать звонок</h4>
		<form action="" ref="whitePaperForm">
			<input 
				type="tel" 
				:class="{'error': email && !validPhone}" 
				placeholder="+7 999 999-99-99" 
				v-model.trim.lazy="email">
			<button @click.prevent="send()" class="button transparent-white">Отправить</button>
		</form>
	</div>
</div>
</div>
</template>

<script>
import Axios from 'axios'
export default {
	props: {
		pageBlock: {
			type: Boolean,
			default: false
		}
	},
	data() {
		return {
			access: false,
			email: ''
		}
	},
	computed: {
		validPhone() {
			return /^[0-9()+-]*$/i.test(this.email);
		}
	},
	mounted() {
		setTimeout(() => this.access = true, 3000);
	},
	methods: {
		send() {
			if (this.access && /^[0-9()+-]*$/i.test(this.email)) {
				let form = this.$refs.whitePaperForm;
				let oData = new FormData(form);
				oData.append("url", window.location.href);
				oData.append("email", this.email);
				Axios({
					method: "post",
					url: "/subscribe.php",
					data: oData
				}).then(response => {
					alert("Мы получили Ваш запрос и свяжемся в ближайшее время!")
					this.email = '';
					return console.log(response);
				}).catch(error => {
					return console.log(["Error", error.response]);
				});
			}
		}
	}
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
	&:focus {
		outline: none;
	}
	&.error {
		border: 1px solid red;
	}
	@media (max-width: $sc20_small_point) {
		width: 100%;
		margin-right: 0;
	}
}
.floor-contacts {
	background: url("https://www.bmvcompany.ru/img/call-bg.png") top center repeat-x;
	background-size: cover;
	padding: 36px 0;
}
</style>
