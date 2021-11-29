<template>
  <button class="btn" :disabled="isDisabled"><slot></slot></button>
</template>

<script>
export default {
  name: "MyButton",
  props: {
    isDisabled: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss">
.btn {
  cursor: pointer;
  background-color: transparent;
  border: 1px solid black;
  border-radius: 20px;
  font-size: 22px;
  padding: 5px 10px;
  &:disabled {
    color: #666;
    border-color: #666;
    cursor: default;
  }
  &:not(:disabled):hover,
  &:focus {
    border-color: #1f87ef;
    color: #1f87ef;
  }
  &:active,
  &:target {
    border-color: #1867b6;
    color: #1867b6;
  }
}
</style>