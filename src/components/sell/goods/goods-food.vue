<template>
  <div>
    <ul ref="foodWrapper">
      <li v-for="item in goods" class="food-list food-list-hook">
        <h1 class="title">{{ item.name }}</h1>

        <ul>
          <li v-for="food in item.foods" class="food-item .border-1px">
            <div class="icon">
              <img width="57" height="57" :src="food.icon">
            </div>

            <div class="content">
              <h2 class="name">{{ food.name }}</h2>

              <p class="desc">{{ food.description }}</p>

              <div class="extra">
                <span>月售{{ food.sellCount }}份</span>
                <span>好评率{{food.rating}}%</span>
              </div>

              <div class="price">
                <span class="now">¥{{ food.price }}</span>
                <span class="old" v-show="food.oldPrice">¥{{ food.oldPrice }}</span>
              </div>

              <div class="cartcontrol-wrapper">
                <r-cartcontrol :food="food" @cart-add="cartAdd"></r-cartcontrol>
              </div>
            </div>
          </li>
        </ul>
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
  import cartcontrol from '../../common/cartcontrol/cartcontrol'

  export default {
    name: "goods-food",
    data() {
      return {}
    },
    props: {
      goods: {
        type: Array
      }
    },
    created() {
    },
    methods: {
      cartAdd(target){
        this.$emit('add-cart', target);
      }
    },
    components: {
      'r-cartcontrol': cartcontrol
    }
  }
</script>

<style scoped lang="less">
  @import "../../../../static/css/mixin.less";

  .title {
    padding-left : 14px;
    height       : 26px;
    line-height  : 26px;
    border-left  : 2px solid #d9dde1;
    font-size    : 12px;
    color        : rgb(147, 153, 159);
    background   : #f3f5f7;
  }

  .food-item {
    display       : flex;
    margin        : 18px;
    border-bottom : 18px;
    .border-1px(rgba(7, 17, 27, 0.1));

    &:last-child {
      &:after {
        display       : none;
        margin-bottom : 0;
      }
    }

    .icon {
      flex         : 0 0 57px;
      margin-right : 10px;
    }

    .content {
      flex : 1;

      .name {
        margin      : 2px 0 8px 0;
        height      : 14px;
        line-height : 14px;
        font-size   : 14px;
        color       : rgb(7, 17, 27);
      }

      .desc, .extra {
        line-height : 10px;
        font-size   : 10px;
        color       : rgb(147, 153, 159);
      }

      .desc {
        line-height   : 12px;
        margin-bottom : 8px;
      }

      .extra {
        .count {
          margin-right : 12px;
        }
      }

      .price {
        font-weight : 700;
        line-height : 24px;

        .now {
          margin-right : 8px;
          font-size    : 14px;
          color        : rgb(240, 20, 20);
        }

        .old {
          text-decoration : line-through;
          font-size       : 10px;
          color           : rgb(147, 153, 159);
        }
      }

      .cartcontrol-wrapper {
        position : absolute;
        right    : 0;
        bottom   : -5px;
      }
    }
  }
</style>
