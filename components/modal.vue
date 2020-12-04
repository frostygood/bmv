<template>
	<div class="box">
		<div class="modal">
			<span class="close" @click="$store.commit('closeAllModals')"></span>
			<slot/>
		</div>
		<div class="overlay" @click="$store.commit('closeAllModals')"></div>
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
	z-index: 4;
}
.modal {
	z-index: 10;
	min-height: auto;
	padding: 56px 30px 30px 30px;
	margin-left: 10px;
	margin-right: 10px;
	border-radius: 2px;
	background: #fff;
	box-sizing: border-box;
	position: relative;
	background: $color_primary;
	-webkit-box-shadow: 0 27px 24px 0 rgba(0, 0, 0, 0.2),
		0 40px 77px 0 rgba(0, 0, 0, 0.22);
	box-shadow: 0 27px 24px 0 rgba(0, 0, 0, 0.2),
		0 40px 77px 0 rgba(0, 0, 0, 0.22);
	@media (max-width: $sc20_small_point) {
		max-width: 465px;
	}
}
.close {
	display: inline-block;
	cursor: pointer;
	position: absolute;
	top: 24px;
	right: 24px;
	width: 25px;
	height: 25px;
	background: url(/img/close.svg) no-repeat;
	background-size: cover;
}
.overlay {
    display: block;
    width: 100%;
    min-width: 100vw;
    height: 100%;
    min-height: 100vh;
    background: rgba(0,0,0,.88);
    position: fixed;
    z-index: 5;
    cursor: pointer;
  }
</style>

