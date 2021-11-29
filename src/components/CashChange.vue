<template>
  <div class="change">
    <h1 class="change__title"><slot></slot></h1>
    <money
      class="change__money"
      v-for="money in moneyChange"
      :key="money.id"
      :money="money"
    ></money>
    <div class="change__total"><strong>Сумма:</strong> {{ totalCash }} руб</div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  props: {
    moneyChange: { type: Array, require: true },
  },
  computed: {
    ...mapGetters({
      totalCash: "totalMachineCash",
    }),
  },
};
</script>

<style lang="scss">
.change {
  padding: 5px;
  width: 100%;
  align-self: flex-end;
  display: flex;
  flex-wrap: wrap;
  border-top: 1px solid black;
  border-radius: 12px;
  &__title {
    flex: 0 0 100%;
    margin-bottom: 5px;
  }
  &__money {
    flex: 0 1 25%;
    margin-bottom: 10px;
    padding: 0 10px;
    width: 50%;
  }
  &__total {
    font-size: 22px;
    flex: 0 0 100%;
  }
}
</style>