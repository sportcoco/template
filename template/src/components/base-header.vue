<template>
  <view class="header">
    {{ title }}
  </view>
</template>

<script>
export default {
  name: 'BaseHeader',
  props: {
    // 标题内容
    title: {
      type: String,
      default: 'Uni-App',
    },
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss">
.header {
  font-size: 36rpx;
  color: #666;
  text-align: center;
  padding: 20rpx 0 0 0;
}
</style>
