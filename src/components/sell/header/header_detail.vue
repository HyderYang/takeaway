<template>
  <div>
    <transition name="fade">
      <div class="header">
        <div class="detail">
          <div class="detail-wrapper clearfix">
            <div class="detail-main">
              <h1 class="name">{{ seller.name }}</h1>

              <div class="star-wrapper">
                <r-star :size="48" :score="seller.score"></r-star>
              </div>

              <div class="title">
                <div class="line"></div>
                <div class="text">优惠信息</div>
                <div class="line"></div>
              </div>

              <ul v-if="seller.supports" class="supports">
                <li class="support-item" v-for="(item, index) in seller.supports">
                  <span class="icon" :class="classMap[seller.supports[index].type]"></span>
                  <span class="text">{{ seller.supports[index].description }}</span>
                </li>
              </ul>

              <div class="title">
                <div class="line"></div>
                <div class="text">商家公告</div>
                <div class="line"></div>
              </div>

              <div class="bulletin">
                <p class="content">{{ seller.bulletin }}</p>
              </div>
            </div>
          </div>

          <div class="detail-close" @click="hideDetail">
            <i class="icon-close"></i>
          </div>
        </div>
      </div>
    </transition>
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

  import star from '../../common/star/star'

  export default {
    name: "header_detail",
    components: {
      'r-star': star
    },
    created() {
      this.classMap = ['decrease', 'discount', 'guarantee', 'invoice', 'special']
    },
    methods: {
      //关闭商家详情弹窗
      hideDetail() {
        this.$emit('hideDetail', false)
      }
    },
    props: ['seller']
  }
</script>

<style scoped lang="less">
  @import "../../../../static/css/mixin.less";

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
        width     : 100%;

        .detail-main {
          margin-top     : 64px;
          padding-bottom : 64px;

          .name {
            line-height : 16px;
            text-align  : center;
            font-size   : 16px;
            font-weight : 700;
          }

          .star-wrapper {
            margin-top : 18px;
            padding    : 2px 0;
            text-align : center;
          }

          .title {
            display : flex;
            width   : 80%;
            margin  : 28px auto 24px auto;

            .line {
              flex          : 1;
              position      : relative;
              top           : -6px;
              border-bottom : 1px solid rgba(255, 255, 255, 0.2);
            }
            .text {
              padding     : 0 12px;
              font-weight : 700;
              font-size   : 14px;
            }
          }

          .supports {
            width  : 80%;
            margin : 0 auto;

            .support-item {
              padding       : 0 12px;
              margin-bottom : 12px;
              font-size     : 0;

              &:last-child {
                margin-bottom : 0;
              }

              .icon {
                display           : inline-block;
                width             : 16px;
                height            : 16px;
                vertical-align    : top;
                margin-right      : 6px;
                background-size   : 16px 16px;
                background-repeat : no-repeat;

                &.decrease {
                  .bg-image('/static/images/sell/header/decrease_2')
                }
                &.discount {
                  .bg-image('/static/images/sell/header/discount_2')
                }
                &.guarantee {
                  .bg-image('/static/images/sell/header/guarantee_2')
                }
                &.invoice {
                  .bg-image('/static/images/sell/header/invoice_2')
                }
                &.special {
                  .bg-image('/static/images/sell/header/special_2')
                }
              }

              .text {
                font-size   : 12px;
                line-height : 16px;
              }
            }
          }

          .bulletin {
            width  : 80%;
            margin : 0 auto;
            .content {
              padding     : 0 12px;
              line-height : 24px;
              font-size   : 14px;
            }
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
