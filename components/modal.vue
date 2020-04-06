<template>
	<div class="box">
		<div class="modal">
			<span class="close" @click="$store.commit('closeAllModals')">×</span>
			<slot/>
		</div>
	</div>
</template>

<script>

export default {
	components: {
	},
	data() {
		return {};
	},
};
</script>
 

<style lang="scss" scoped>
@import "./assets/scss/_variables.scss";
.box {
	display: flex;
	align-items: center;
	justify-content: center;
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	z-index: 5;
}
.modal {
	z-index: 10;
	width: 465px;
	min-height: auto;
	padding: 30px;
	margin-left: 10px;
	margin-right: 10px;
	border-radius: 2px;
	background: #fff;
	box-sizing: border-box;
	position: relative;
	-webkit-box-shadow: 0 27px 24px 0 rgba(0, 0, 0, 0.2),
		0 40px 77px 0 rgba(0, 0, 0, 0.22);
	box-shadow: 0 27px 24px 0 rgba(0, 0, 0, 0.2),
		0 40px 77px 0 rgba(0, 0, 0, 0.22);
	@media (max-width: $sc_small_point) {
		max-width: 465px;
	}
}
.close {
	font-weight: 300;
	font-size: 29px;
	color: #424242;
	text-shadow: 0 1px 0 #424242;
	opacity: 0.7;
	cursor: pointer;
	position: absolute;
	top: 5px;
	right: 15px;
	@include transition(0.1s);
	line-height: 1;
	&:hover, &:focus, &:active {
		opacity: 0.5;
		@include transition(0.1s);
	}
}
</style>

