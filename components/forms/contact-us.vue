<template>
	<div>
		<h2>Заказать звонок</h2>
		<form action="">
			<input type="email" placeholder="+7 999 999-99-99">
			<button>Отправить</button>
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
h2 {
	font-size: 50px;
    line-height: 1em;
    letter-spacing: -.78px;
	margin: 0 0 25px;
    max-width: 540px;
	font-weight: 500;
	color: #4D515C;
}
input {
	font-weight: 500;
    font-size: 50px;
    letter-spacing: -.78px;
    height: 52px;
    line-height: 50px;
    padding-bottom: 8px;
	border: none;
    border-bottom: 2px solid #b5b6be;
	transition: .2s;
	color: #4D515C;
	margin-right: 30px;
	max-width: 500px;
	width: 100%;
	@media (max-width: $min_point){
		max-width: 100%;
		font-size: 30px;
	}
	&:hover {
		outline: none;
		border-bottom: 2px solid #4D515C;
	}
	&:focus {
		outline: none;
		border-bottom: 2px solid #4D515C;
	}
}
button {
	font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    letter-spacing: .4px;
    color: #fff;
    text-align: center;
    text-decoration: none;
    padding: 16px 24px 17px;
    min-width: 264px;
    max-width: 100%;
    margin: 40px 0;
    background: #b71921;
    border: 0;
    border-radius: 0;
    cursor: pointer;
}
</style>
