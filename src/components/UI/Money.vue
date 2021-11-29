<template>
  <div class="money">
    <div
      class="money__img"
      :style="{ backgroundImage: `url('${money.image}')` }"
    ></div>
    <div
      :class="[
        money.current > money.default ||
        money.default === money.current ||
        money.current > money.default - Math.floor(money.default / 3)
          ? 'money__stock green'
          : money.current <= Math.floor(money.default / 3)
          ? 'money__stock red'
          : 'money__stock yellow',
      ]"
    >
      {{ money.current > 0 ? money.current + " шт" : "Нет монет" }}
    </div>
  </div>
</template>

<script>
export default {
  name: "Money",
  props: {
    money: { type: Object, require: true },
  },
};
</script>

<style lang="scss">
.money {
  overflow: hidden;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  width: 100px;
  &__img {
    background-position: center;
    background-repeat: no-repeat;
    background-size: 90px;
    width: 90px;
    height: 90px;
    margin-bottom: 5px;
  }
  &__stock {
    text-align: center;
    padding: 1px;
    position: relative;
    z-index: 2;
    width: 100%;
    border-radius: 12px;
    font-weight: 600;
    &.green {
      background-color: green;
    }
    &.yellow {
      background-color: yellow;
    }
    &.red {
      background-color: red;
    }
  }
}
</style>