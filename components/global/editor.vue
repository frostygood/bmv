<template>
	<div class="editor" v-html="texts"></div>
</template>
<script>
	export default {
		props: {
			texts: {
				type: String,
				default: "...",
			},
		},
		data: function () {
			return {};
		},
	};
</script>
<style lang="scss">
	.editor {
		margin-bottom: 80px;

		h3 {
			font-family: "Inter", Roboto, Arial, sans-serif;
			font-style: normal;
			font-weight: 600;
			font-size: 32px;
			line-height: 40px;
			letter-spacing: -0.03em;
			color: #333333;
			margin: 0 0 16px 0;
			padding: 0;

			@media (max-width: 1149px) {
				font-size: 24px;
				line-height: 32px;
				letter-spacing: -0.02em;
			}
		}

		p {
			font-family: "Inter", Roboto, Arial, sans-serif;
			font-style: normal;
			font-weight: 400;
			font-size: 18px;
			line-height: 32px;
			color: grey;
			margin: 0 0 18px 0;
			padding: 0;

			@media (max-width: 1149px) {
				font-size: 16px;
				line-height: 26px;
				margin: 0 0 16px 0;
			}
		}

		a {
			cursor: pointer;
			color:  #3179cf;
			text-decoration: none;
			outline: none;
			-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
			-webkit-tap-highlight-color: transparent;
			&:hover,
			&:focus,
			&:active {
				text-decoration: underline;
				outline: none;
			}
		}

		ul,
		ol {
			margin-bottom: 40px;

			li {
				padding: 0 0 0 24px;
				background-position: left 10px;
				background-image: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTMiIGhlaWdodD0iMTEiIHZpZXdCb3g9IjAgMCAxMyAxMSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxwYXRoIGQ9Ik0xIDUuMzA3NjlMNC40NzM2OCA5TDEyIDEiIHN0cm9rZT0iIzRDNTY2NiIgc3Ryb2tlLXdpZHRoPSIxLjUiLz4NCjwvc3ZnPg0K");
				background-repeat: no-repeat;
				background-size: 11px;
			}
		}
	}
</style>
