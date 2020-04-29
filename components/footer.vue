<template>
	<footer class="footer">
        <div class="wrapper">
            <p>BMV Engineering &copy; {{ new Date().getFullYear() }}</p>
        </div>
	</footer>
</template>

<script>
    export default {
        data: function () {
            return {  
            }
        },
    }
</script>

<style lang="scss" scoped>
	.footer {
		background: #F2F2F2;
		padding-top: 30px;
        padding-bottom: 30px;
	}
    p {
        font-size: 14px;
        margin: 0;
    }
</style>
