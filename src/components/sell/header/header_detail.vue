<template>
  <div class="header">
    <div class="detail">
      <div class="detail-wrapper clearfix">
        <div class="detail-main">
          <h1 class="name">{{ seller.name }}</h1>
        </div>
      </div>

      <div class="detail-close">
        <i class="icon-close"></i>
      </div>
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
    name: "header_detail",
    props: ['seller']
  }
</script>

<style scoped lang="less">

  .header {
    position   : relative;
    overflow   : hidden;
    color      : #fff;
    background : rgba(7, 17, 27, 0.5);

    .detail {
      position   : fixed;
      z-index    : 100;
      width      : 100%;
      height     : 100%;
      top        : 0;
      left       : 0;
      overflow   : auto;
      background : rgba(7, 17, 27, 0.8);

      .detail-wrapper {
        min-width : 100%;
        width: 100%;

        .detail-main {
          margin-top     : 64px;
          padding-bottom : 64px;

          .name {
            line-height : 16px;
            text-align  : center;
            font-size   : 16px;
            font-weight : 700;
          }
        }
      }

      .detail-close {
        position  : relative;
        width     : 32px;
        height    : 32px;
        margin    : -64px auto 0 auto;
        clear     : both;
        font-size : 32px;

      }
    }
  }


</style>
