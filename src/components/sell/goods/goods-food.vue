<template>
	<div class="goods">
    <div class="foods-wrapper">

    </div>
	</div>
</template>

<script>
	/**
	 * 组件概述:
	 *
	 * 使用方法:
	 *
	 *
	 * author:
	 *
	 * 时间   :
	 */
	export default {
		name: "goods-food",
    props: {
		  goods: {
		    type: Object
      }
    }
	}
</script>

<style scoped lang="less">
  .goods {
    position : absolute;
    width    : 100%;
    top      : 174px;
    bottom   : 46px;
    display  : flex;
    overflow : hidden;

    .foods-wrapper {
      float : 1;
    }
  }
</style>
