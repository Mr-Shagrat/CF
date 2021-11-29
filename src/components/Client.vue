<template>
  <div class="client">
    <div class="client__cash">
      <h1 class="client__title">Кошелек</h1>
      <money
        class="client__money"
        v-for="money in clientMoney"
        :key="money.id"
        :money="money"
        @click="moneyClick(money)"
      ></money>
      <div class="client__total">
        <strong>Сумма:</strong> {{ totalCash }} руб
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapGetters, mapState } from "vuex";
export default {
  methods: {
    ...mapMutations({
      moneyClick: "moneyClick",
    }),
  },
  computed: {
    ...mapState({
      clientMoney: (state) => state.money,
    }),
    ...mapGetters({
      totalCash: "totalClientCash",
    }),
  },
};
</script>

<style lang="scss">
.client {
  width: 250px;
  margin-left: 10px;
  border: 2px solid black;
  border-radius: 15px;
  height: 90%;
  &__cash {
    padding: 5px;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
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