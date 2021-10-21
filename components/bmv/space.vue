<template>
<div class="sc20-space" :class="[name_class]">
</div>
</template>

<script>
	export default {
		preview: "",
        category: "Blocks of page",
		name: "space",
		props: {
			name_class: {
				type: String,
				default: 'large',
				type_admin: "selects",
				selects: ["large", "big", "small", "last"],
				placeholder: "Высота отступа",
				order: 1
			}
		},
	};
</script>

<style lang="scss" scoped>
	.sc20-space {
		display: block;
		width: 100%;
		&.large {
			height: 144px;
			@media (max-width: 1149px) {
				height: 96px;
			}
			@media (max-width: 767px) {
				height: 80px;
			}
		}
		&.big {
			height: 80px;
			@media (max-width: 1149px) {
				height: 40px;
			}
		}
		&.small {
			height: 40px;
			@media (max-width: 1149px) {
				height: 24px;
			}
		}
		&.last {
			height: 240px;

			@media (max-width: 1149px) {
				height: 200px;
			}
			@media (max-width: 767px) {
				height: 160px;
			}
		}
	}
</style>
