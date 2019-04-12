<template>
  <div class="ripple-btn" :class="{'ripple':isRipple}" :style="{color:color,borderColor:color}" @click="onClick">
    <slot></slot>
  </div>
</template>

<script>
/**
 * 水波纹 按钮
 */
export default {
  name: "ripple-btn",
  props: {
    isRipple: {
      type: Boolean,
      default: true
    },
    color:{
      type:String,
      default:'#f6ac18'
    }
  },
  data() {
    return {};
  },
  methods: {
    onClick() {
      this.$emit("onClick");
    }
  }
};
</script>

<style lang="stylus">
$btn-color=#ffcd32
.ripple-btn
  display inline-block
  min-width 100px
  padding 10px 15px
  border-radius 4px
  border 1px solid $btn-color
  text-align center
  color $btn-color
  font-size 14px
  letter-spacing 1px
  user-select none
  cursor pointer

.ripple
  position relative
  overflow hidden

.ripple:after
  content ''
  display block
  position absolute
  width 100%
  height 100%
  top 0
  left 0
  pointer-events none
  background-image radial-gradient(circle, #e5e5e5 10%, transparent 10%)
  background-repeat no-repeat
  background-position 50%
  transform scale(16)
  opacity 0
  transition transform 0.3s, opacity 0.5s

.ripple:active::after
  transform scale(0)
  opacity 0.3
  transition 0s
</style>
