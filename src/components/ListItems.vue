<template>
  <div class="items">
    <h1 class="items__title">Товары</h1>
    <my-item
      v-for="newItem in items"
      :key="newItem.id"
      :newItem="newItem"
      @click="itemClick(newItem)"
    ></my-item>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  props: {
    items: { type: Array, require: true },
  },
  methods: {
    ...mapMutations({
      itemClick: "itemClick",
    }),
  },
};
</script>

<style lang="scss">
.items {
  width: 100%;
  height: 400px;
  padding: 5px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  border-top: 1px solid black;
  border-bottom: 1px solid black;
  border-radius: 15px;
  &__title {
    flex: 0 0 100%;
    margin-bottom: 10px;
  }
}
</style>