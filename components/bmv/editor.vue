<template>
	<div class="wrapper">
		<div class="editor" v-html="texts"></div>
	</div>
</template>
<script>
	export default {
		preview: "",
        category: "Content in page",
		name: "editor",
		props: {
			texts: {
				type: String,
				default: "...",
				placeholder: "Большой текст со стилизацией",
				order: 1,
				type_admin: "editor"
			},
		},
		data: function () {
			return {};
		},
	};
</script>
<style lang="scss" scoped>
	/deep/ .editor {
		max-width: 720px;
		margin-right: auto;
		h2 {
			//font-family: Roboto, Arial, sans-serif;
			font-style: normal;
			font-weight: 600;
			font-size: 32px;
			line-height: 40px;
			letter-spacing: -0.03em;
			color: #333333;
			margin: 0 0 16px 0;
			padding: 0;
			color: #27357e;
			@media (max-width: 1149px) {
				font-size: 24px;
				line-height: 32px;
				letter-spacing: -0.02em;
			}
		}
		h3 {
			//font-family: Roboto, Arial, sans-serif;
			font-style: normal;
			font-weight: 600;
			font-size: 24px;
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
			//font-family: Roboto, Arial, sans-serif;
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

		ul{
			padding: 0;
			margin: 0;
			margin-bottom: 40px;
			list-style: none;
			li {
				position: relative;
				padding: 0;
				margin: 0;
				padding-left: 15px;
				margin-left: 20px;
				margin-bottom: 10px;
				line-height: 1.3;
				p {
					margin: 0;
					line-height: 1.3;
				}
				&::before {
					content: "";
					position: absolute;
					width: 6px;
					height: 6px;
					border-radius: 50%;
					background-color: #222;
					left: 0;
					top: 9px;
					@media (max-width: 1149px) {
						top: 8px;
					}
				}
			}
		}
	}
</style>
