<template>
	<div class="principles__item-text-wrap">
		<div class="principles__item-text"
			 :class="[isOpened ? 'principles__item-text_opened' : '']">
			<slot />
		</div>
		<button type="button" class="principles__item-button" @click="toggleIsOpened">
			подробнее
			<img src="/img/arrow.svg" :class="[isOpened ? 'opened' : '']" alt="" />
		</button>
	</div>
</template>

<script>

export default {
	data: function () {
		return {
			isOpened: false,
		}
	},
	methods: {
		toggleIsOpened() {
			this.isOpened = !this.isOpened;
		},
	}
};
</script>

