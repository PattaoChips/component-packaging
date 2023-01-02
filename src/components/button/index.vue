<template>
  <button
    type="button"
    @click="change"
    class="my-button"
    :disabled="disabled || loading || load"
    :class="[theme, isBorder, isRound, sizes, blockCss]"
    :style="[minWidthCss]"
  >
    <span>
      <i v-if="loading || load" class="iconfont icon-prefix icon-jiazai1"></i>
      <i v-if="iconPerfix" class="iconfont icon-prefix" :class="iconPerfix"></i>
      <slot />
      <i v-if="iconSuffix" class="iconfont icon-suffix" :class="iconSuffix"></i>
    </span>
  </button>
</template>

<script>
export default {
  name: "Button",
  props: {
    type: {
      type: String,
      default: "",
    },
    size: {
      type: String,
      default: "",
    },
    minWidth: {
      type: String,
      default: "",
    },
    perfix: {
      type: String,
      default: "",
    },
    suffix: {
      type: String,
      default: "",
    },
    loading: Boolean,
    border: Boolean,
    round: Boolean,
    disabled: Boolean,
    block: Boolean,
    beforeChange: Function,
  },
  computed: {
    theme() {
      return this.type ? `my-button-${this.type}` : "";
    },
    sizes() {
      return this.size ? `my-button-${this.size}` : "";
    },
    isBorder() {
      return this.border ? "is-border" : "";
    },
    isRound() {
      return this.round ? "is-round" : "";
    },
    minWidthCss() {
      if (!this.minWidth) {
        return "";
      }
      return { "min-width": this.minWidth };
    },
    iconPerfix() {
      return this.perfix ? `icon-${this.perfix}` : "";
    },
    iconSuffix() {
      return this.suffix ? `icon-${this.suffix}` : "";
    },
    blockCss() {
      return this.block ? "my-button-block" : "";
    },
  },
  data() {
    return {
      load: false,
    };
  },
  methods: {
    // 事件回调
    change() {
      if (typeof this.beforeChange === "function") {
        this.load = true;
        this.beforeChange()
          .then((res) => {
            this.load = false;
          })
          .catch(() => {
            this.load = false;
          });
      }
      this.$emit("click");
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./index.scss";
</style>
