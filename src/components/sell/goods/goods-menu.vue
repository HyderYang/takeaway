<template>
  <div>
    <ul>
      <li v-for="item in goods" class="menu-item">
        <span class="text border-1px">
          <span v-show="item.type > 0" class="icon" :class="classMap[item.type]"></span>
          {{ item.name }}
        </span>
      </li>
    </ul>
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
    name: "goods-menu",
    props: {
      goods: {
        type: Array
      }
    },
    created() {
      this.classMap = ['decrease', 'discount', 'guarantee', 'invoice', 'special']
    }
  }
</script>

<style scoped lang="less">
  @import "../../../../static/css/mixin.less";

  .menu-item {
    display     : table;
    height      : 54px;
    width       : 56px;
    line-height : 14px;
    padding     : 0 12px;

    .icon {
      display           : inline-block;
      vertical-align    : top;
      width             : 12px;
      height            : 12px;
      margin-right      : 2px;
      background-size   : 12px 12px;
      background-repeat : no-repeat;

      &.decrease {
        .bg-image('/static/images/sell/goods/decrease_3')
      }
      &.discount {
        .bg-image('/static/images/sell/goods/discount_3')
      }
      &.guarantee {
        .bg-image('/static/images/sell/goods/guarantee_3')
      }
      &.invoice {
        .bg-image('/static/images/sell/goods/invoice_3')
      }
      &.special {
        .bg-image('/static/images/sell/goods/special_3')
      }
    }

    .text {
      font-size      : 12px;
      display        : table-cell;
      width          : 56px;
      vertical-align : middle;
      .border-1px(rgba(7, 17, 27, 0.1))
    }
  }

</style>
