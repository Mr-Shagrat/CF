<template>
  <div class="balance">
    <div class="balance__title">
      <strong>Внесено:</strong> {{ totalBalance }} руб
    </div>
    <my-button @click="clearBalance" :isDisabled="totalBalance === 0"
      >Вернуть сдачу</my-button
    >
  </div>
</template>

<script>
import { mapMutations, mapState } from "vuex";
export default {
  props: {
    balance: {
      type: Array,
      require: true,
    },
  },
  computed: {
    ...mapState({
      totalBalance: (state) => state.totalBalance,
    }),
  },
  methods: {
    ...mapMutations({
      clearBalance: "clearBalance",
    }),
  },
};
</script>

<style lang='scss'>
.balance {
  padding: 5px 5px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-bottom: 1px solid black;
  width: 100%;
  border-radius: 15px;
  &__title {
    font-size: 30px;
    margin-bottom: 20px;
  }
}
</style>