<!--
	Основные props:
		title (String) - заголовок блока
-->
<template>
	<div class="wrapper">
		<h1 class="h1">{{title}}</h1>
	</div>
</template>

<script>
	export default {
		props: {
			title: {
				type: String,
				default: 'H1 заголовок'
			}
		},
	};
</script>

<style lang="scss" scoped>
.h1 {
  	max-width: 900px;
}
</style>
