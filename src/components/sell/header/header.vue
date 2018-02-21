<template>
	<div class="header">
		头部展示占位
	</div>
</template>

<script>
	export default {
		name: "header",
    data: {},
    created() {
		  this.$http.get('/api/seller').then((res) => {

      })
    }
	}
</script>

<style scoped lang="less">

</style>
