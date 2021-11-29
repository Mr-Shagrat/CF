<template>
  <div class="machine">
    <balance :balance="balance"></balance>
    <list-items :items="items"></list-items>
    <cash-change :moneyChange="machineMoney">Остаток монет</cash-change>
  </div>
</template>

<script>
import Balance from "./Balance.vue";
import ListItems from "./ListItems.vue";
import CashChange from "./CashChange.vue";
import { mapState } from "vuex";
export default {
  components: { CashChange, Balance, ListItems },
  computed: {
    ...mapState({
      machineMoney: (state) => state.machineMoney,
      items: (state) => state.items,
      balance: (state) => state.balance,
    }),
  },
};
</script>

<style lang="scss">
.machine {
  width: 800px;
  height: calc(100vh - 10px);
  border: 2px solid black;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
}
</style>