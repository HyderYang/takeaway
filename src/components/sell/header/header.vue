<template>
  <div class="header">
    <div class="content-wrapper">
      <div class="avatar">
        <img :src="seller.avatar" width="64" height="64">
      </div>

      <div class="content">
        <div class="title">
          <span class="brand"></span>
          <span class="name">{{ seller.name }}</span>
        </div>

        <div class="description">
          {{ seller.description }}/{{ seller.deliveryTime }}分钟送达
        </div>

        <div v-if="seller.supports" class="support">
          <span class="icon" :class="classMap[seller.supports[0].type]"></span>
          <span class="text">{{ seller.supports[0].description }}</span>
        </div>

        <div v-if="seller.supports" class="support-count" @click="showDetail">
          <span class="count">{{ seller.supports.length }}个</span>
          <i class="icon-keyboard_arrow_right"></i>
        </div>
      </div>
    </div>

    <div class="bulletin-wrapper" @click="showDetail">
      <span class="bulletin-title"></span>
      <span class="bulletin-text">{{ seller.bulletin }}</span>
      <i class="icon-keyboard_arrow_right"></i>
    </div>

    <div class="background">
      <img :src="seller.avatar" width="100%" height="100%">
    </div>

    <transition name="fade">
      <r-detail :seller="seller" v-show="detailHasShow" @hideDetail="hideDetail"></r-detail>
    </transition>
  </div>
</template>

<script>
  import detail from './header_detail'

  export default {
    name: "header",
    props: {
      seller: {
        type: Object
      }
    },
    data() {
      return {
        detailHasShow: false
      }
    },
    created() {
      this.classMap = ['decrease', 'discount', 'guarantee', 'invoice', 'special']
    },
    components: {
      'r-detail': detail
    },
    methods: {
      showDetail() {
        this.detailHasShow = true
      },
      hideDetail(flag) {
        this.detailHasShow = flag
      }
    }
  }
</script>

<style scoped lang="less">
  @import "../../../../static/css/mixin.less";

  .fade-enter-active, .fade-leave-active {
    background : rgba(7, 17, 27, 0.8);
    transition : opacity .5s;
  }

  .fade-enter, .fade-leave-to {
    background : rgba(7, 17, 27, 0);
    opacity    : 0;
  }

  .header {
    color      : #fff;
    position   : relative;
    overflow   : hidden;
    background : rgba(7, 17, 27, 0.5);

    .content-wrapper {
      position  : relative;
      padding   : 24px 12px 18px 24px;
      font-size : 0;

      .avatar {
        display        : inline-block;
        vertical-align : top;
        border-radius  : 5px;

        img {
          border-radius : 2px;
        }
      }

      .content {
        display     : inline-block;
        font-size   : 14px;
        margin-left : 16px;

        .title {
          margin : 2px 0 8px 0;

          .brand {
            display           : inline-block;
            vertical-align    : top;
            width             : 30px;
            height            : 18px;
            .bg-image('/static/images/sell/header/brand');
            background-size   : 30px 18px;
            background-repeat : no-repeat;
          }

          .name {
            margin-left : 6px;
            font-size   : 16px;
            line-height : 18px;
            font-weight : bold;
          }
        }

        .description {
          margin-bottom : 10px;
          line-height   : 12px;
          font-size     : 12px;
        }
      }

      .support {

        .icon {
          display           : inline-block;
          vertical-align    : top;
          width             : 12px;
          height            : 12px;
          margin-right      : 4px;
          background-size   : 12px 12px;
          background-repeat : no-repeat;

          &.decrease {
            .bg-image('/static/images/sell/header/decrease_1')
          }
          &.discount {
            .bg-image('/static/images/sell/header/discount_1')
          }
          &.guarantee {
            .bg-image('/static/images/sell/header/guarantee_1')
          }
          &.invoice {
            .bg-image('/static/images/sell/header/invoice_1')
          }
          &.special {
            .bg-image('/static/images/sell/header/special_1')
          }
        }

        .text {
          line-height    : 12px;
          vertical-align : top;
          font-size      : 10px;
        }
      }

      .support-count {
        position      : absolute;
        right         : 12px;
        bottom        : 14px;
        padding       : 0 8px;
        height        : 24px;
        line-height   : 24px;
        border-radius : 14px;
        background    : rgba(0, 0, 0, 0.2);
        text-align    : center;

        .count {
          vertical-align : top;
          font-size      : 10px;
        }

        .icon-keyboard_arrow_right {
          line-height : 24px;
          margin-left : 2px;
          font-size   : 10px;
        }

      }
    }

    .bulletin-wrapper {
      position      : relative;
      height        : 28px;
      line-height   : 28px;
      padding       : 0 22px 0 12px;
      white-space   : nowrap;
      overflow      : hidden;
      text-overflow : ellipsis;
      background    : rgba(7, 17, 27, 0.4);

      .bulletin-title {
        display           : inline-block;
        width             : 22px;
        height            : 12px;
        vertical-align    : top;
        .bg-image('/static/images/sell/header/bulletin');
        background-size   : 22px 12px;
        background-repeat : no-repeat;
        margin-top        : 8px;
      }

      .bulletin-text {
        vertical-align : top;
        margin         : 0 4px;
        font-size      : 10px;
      }

      .icon-keyboard_arrow_right {
        position  : absolute;
        font-size : 10px;
        right     : 12px;
        top       : 8px;
      }
    }

    .background {
      position : absolute;
      top      : 0;
      left     : 0;
      width    : 100%;
      height   : 100%;
      z-index  : -1;
      filter   : blur(10px);
    }
  }
</style>
