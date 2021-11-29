<template>
  <div class="item">
    <div
      class="item__img"
      :style="{ backgroundImage: `url('${newItem.image}')` }"
    ></div>
    <div class="item__title">{{ newItem.title }}</div>
    <div
      :class="[
        newItem.default === newItem.current ||
        newItem.current > newItem.default - Math.floor(newItem.default / 3)
          ? 'item__stock green'
          : newItem.current <= Math.floor(newItem.default / 3)
          ? 'item__stock red'
          : 'item__stock yellow',
      ]"
    >
      {{ newItem.current > 0 ? newItem.current + " шт" : "Закончился" }}
    </div>
    <div class="item__price" v-if="newItem.price !== 0">
      {{ newItem.price + " руб" }}
    </div>
  </div>
</template>

<script>
export default {
  name: "MyItem",
  props: {
    newItem: { type: Object, require: true },
  },
};
</script>

<style lang="scss">
.item {
  padding: 3px;
  overflow: hidden;
  cursor: pointer;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding-bottom: 3px;
  border: 1px solid gray;
  align-items: center;
  width: 160px;
  height: 160px;
  border-radius: 10px;
  background-color: #eee;
  &:hover {
    border-color: #1f87ef;
  }
  &__img {
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    width: 70px;
    height: 70px;
    margin-bottom: 5px;
  }
  &__title {
    position: relative;
    z-index: 2;
    text-align: center;
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 5px;
  }
  &__stock {
    text-align: center;
    padding: 1px;
    position: relative;
    z-index: 2;
    width: 80%;
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
  &__price {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 5;
    // color: red;
    font-weight: 700;
    font-size: 22px;
    padding: 3px;
  }
}
</style>