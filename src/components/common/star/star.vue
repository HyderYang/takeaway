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
      starType(){
        return 'star-' + this.size
      }
    }
  }
</script>

<style scoped lang="less">

</style>
