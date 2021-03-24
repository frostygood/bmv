<!--
	Основные props:
		tooltip (String) - основной текст блока, можно разметку
-->
<template>
	<span
		class="gtooltip"
		v-on:mouseover="open($event.target)"
    	v-on:mouseleave="close()">
		<slot />
		<transition name="fade">
			<div class="gtooltip_popup" 
				v-if="show"
				:style="{'left': toleft}"
				v-html="tooltip"></div>
		</transition>
	</span>
</template>
<script>
	export default {
		props: {
			tooltip: {
				type: String,
				default: "Enter your tooltip text here",
			}
		},
		data: function () {
			return {
				toleft: '-50px',
				show: false
			};
		},
		methods: {
			open(event) {
				if (event.getBoundingClientRect().left < 120) this.toleft = '0px';
				else if ((document.documentElement.clientWidth - event.getBoundingClientRect().left) < 120) this.toleft = '-170px'
				else this.toleft = '-50px'
				this.show = true;
			},
			close() {
				this.show = false;
			}
		}
	};
</script>
<style lang="scss" scoped>
.gtooltip {
	position: relative;
	border-bottom: 1px dotted #4C5666;
	cursor: pointer;
	&_popup {
		display: block;
		position: absolute;
		background-color: black;
		padding: 5px 8px;
		border-radius: 5px;
		bottom: 100%;
		width: 200px;
		font-size: 14px;
		line-height: 1.3;
		color: #bbbbbb;
	}
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>