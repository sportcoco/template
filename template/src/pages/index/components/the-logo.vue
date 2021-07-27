<template>
  <view class="image-wrap">
    <image class="logo" :src="src"></image>
  </view>
</template>

<script>
export default {
  name: 'TheLogo',
  data() {
    return {
      src: '/static/logo.png',
    };
  },
  onLoad() {},
  methods: {},
};
</script>

<style>
.logo {
  height: 200rpx;
  width: 200rpx;
  margin: 50rpx auto;
}
</style>
