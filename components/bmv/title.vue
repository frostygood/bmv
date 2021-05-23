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
				default: 'H1 заголовок',
				placeholder: "Главный заголовок страницы (не больше одного на страницу, в html разметке выглядит как H1)",
				order: 1,
				type_admin: "string",
			}
		},
	};
</script>

<style lang="scss" scoped>
.h1 {
  	max-width: 900px;
}
</style>
