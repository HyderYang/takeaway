<template>
  <div class="star" :class="starType">
    <span v-for="itemClass in itemClasses" :class="itemClass" class="star-item"></span>
  </div>
</template>

<script>
  /**
   * 组件概述:  评论星星展示(允许半星)
   *
   * 使用方法:
   *
   *
   * author:  Hyder
   *
   * 时间   :
   */

  const LENGTH = 5
  const CLS_ON = 'on'
  const CLS_HALF = 'half'
  const CLS_OFF = 'off'

  export default {
    name: "star",
    props: {
      //类型约束 数字类型 size 星星大小
      size: {
        type: Number
      },
      //类型约束 数字类型 score 分数值
      score: {
        type: Number
      }
    },
    computed: {
      //计算属性拼接设置星星大小
      starType() {
        return 'star-' + this.size
      },
      //评价分数
      itemClasses() {
        //星星数组
        let result = []
        // 算分 例如 4.3 * 2 = 8.6 向下取整为8 除2 为4
        // 4.5 * 2 = 9 向下取证为9 除2 为4.5
        // 4.6 * 2 = 9.2 向下取证为9 除2 为4.5
        let score = Math.floor(this.score * 2) / 2
        let hasDecimal = score % 1 !== 0
        let integer = Math.floor(score)
        for(let i = 0; i < integer; i++){
          result.push(CLS_ON)
        }

        if(hasDecimal){
          result.push(CLS_HALF)
        }

        while(result.length < LENGTH){
          result.push(CLS_OFF)
        }

        return result;
      }
    }
  }
</script>

<style scoped lang="less">
  .bg-image(@url){
    background-image: url("@{url}@2x.png");
    @media (-webkit-min-device-pixel-ratio: 3),(min-device-pixel-ratio: 3){
      background-image: url("@{url}@3x.png");
    }
  }

  .star {
    font-size : 0;

    .star-item {
      display           : inline-block;
      background-repeat : no-repeat;
    }

    &.star-48 {
      .star-item {
        width           : 20px;
        height          : 20px;
        margin-right    : 22px;
        background-size : 20px 20px;

        &:last-child {
          margin-right : 0;
        }
        &.on {
          .bg-image('./img/star48_on');
        }
        &.half {
          .bg-image('./img/star48_half');
        }
        &.off {
          .bg-image('./img/star48_off');
        }
      }
    }

    &.star-36 {
      .star-item {
        width           : 15px;
        height          : 15px;
        margin-right    : 6px;
        background-size : 15px 15px;

        &:last-child {
          margin-right : 0;
        }
        &.on {
          .bg-image('/static/images/sell/star/star36_on');
        }
        &.half {
          .bg-image('/static/images/sell/star/star36_half');
        }
        &.off {
          .bg-image('/static/images/sell/star/star36_off');
        }
      }
    }

    &.star-24 {
      .star-item {
        width           : 10px;
        height          : 10px;
        margin-right    : 3px;
        background-size : 10px 10px;

        &:last-child {
          margin-right : 0;
        }
        &.on {
          .bg-image('/static/images/sell/star/star24_on');
        }
        &.half {
          .bg-image('/static/images/sell/star/star24_half');
        }
        &.off {
          .bg-image('/static/images/sell/star/star24_off');
        }
      }
    }
  }
</style>
