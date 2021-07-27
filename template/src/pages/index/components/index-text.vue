<template>
  <view class="text">{{ title }}</view>
</template>

<script>
export default {
  name: 'IndexText',
  props: {
    title: {
      type: String,
      default: 'Hellow',
    },
  },
};
</script>

<style lang="scss" scoped>
$text-color: #2b9939;
.text {
  font-size: 40rpx;
  color: $text-color;
  text-align: center;
  padding: 20rpx;
}
</style>
