import { createStore } from 'vuex'

export default createStore({
  state: () => ({
    totalBalance: 0,
    items: [
      {
        id: 1,
        title: "Чай",
        default: 10,
        current: 10,
        price: 13,
        image: require("../assets/tea1.png"),
      },
      {
        id: 2,
        title: "Кофе",
        default: 20,
        current: 20,
        price: 18,
        image: require("../assets/coffee1.png"),
      },
      {
        id: 3,
        title: "Кофе с молоком",
        default: 20,
        current: 20,
        price: 21,
        image: require("../assets/coffee1.png"),
      },
      {
        id: 4,
        title: "Сок",
        default: 15,
        current: 15,
        price: 35,
        image: require("../assets/juice1.png"),
      },
    ],
    machineMoney: [
      {
        id: 1,
        title: "1 рубль",
        default: 100,
        current: 100,
        value: 1,
        image: require("../assets/1rub.png"),
      },
      {
        id: 2,
        title: "2 рубля",
        default: 100,
        current: 100,
        value: 2,
        image: require("../assets/2rub.png"),
      },
      {
        id: 3,
        title: "5 рублей",
        default: 100,
        current: 100,
        value: 5,
        image: require("../assets/5rub.png"),
      },
      {
        id: 4,
        title: "10 рублей",
        default: 100,
        current: 100,
        value: 10,
        image: require("../assets/10rub.png"),
      },
    ],
    money: [
      {
        id: 1,
        title: "1 рубль",
        default: 10,
        current: 10,
        value: 1,
        image: require("../assets/1rub.png"),
      },
      {
        id: 2,
        title: "2 рубля",
        default: 30,
        current: 30,
        value: 2,
        image: require("../assets/2rub.png"),
      },
      {
        id: 3,
        title: "5 рублей",
        default: 20,
        current: 20,
        value: 5,
        image: require("../assets/5rub.png"),
      },
      {
        id: 4,
        title: "10 рублей",
        default: 15,
        current: 15,
        value: 10,
        image: require("../assets/10rub.png"),
      },
    ],
  }),
  mutations: {
    clearBalance(state) {
      const cash = [10, 5, 2, 1];
      for (let i = 0; i < cash.length; i++) {
        state.money.map((money) => {
          if (money.value === cash[i]) {
            money.current += Math.floor(state.totalBalance / cash[i])
            state.machineMoney.map(Cash => {
              if (Cash.value === cash[i]) { Cash.current -= Math.floor(state.totalBalance / cash[i]) }
            })
          }
        }
        );
        state.totalBalance = state.totalBalance % cash[i];
      }
      state.totalBalance = 0;
    },
    moneyClick(state, Money) {
      if (Money.current > 0) {
        state.money.map((cash) => {
          if (cash.id === Money.id) {
            cash.current -= 1
          }
        });
        state.machineMoney.map((cash) => {
          if (cash.id === Money.id) {
            cash.current += 1
          }
        });
        state.totalBalance += Money.value
      } else {
        alert(`Монтены номиналом ${Money.value} руб закончились`);
      }

    },
    itemClick(state, activeItem) {
      if (state.totalBalance >= activeItem.price && activeItem.current > 0) {
        state.items.map(money => {
          if (money.id === activeItem.id) {
            money.current -= 1
          }
        })
        state.totalBalance -= activeItem.price
        alert('Спасибо за покупку!')
      } else if (activeItem.current === 0) {
        alert(`${activeItem.title} закончился`)
      } else {
        alert('Недостаточно средств')
      }
    }
  },
  getters: {
    totalClientCash(state) {
      return state.money.reduce(
        (acc, value) => acc + value.value * value.current,
        0
      );
    },
    totalMachineCash(state) {
      return state.machineMoney.reduce(
        (acc, value) => acc + value.value * value.current,
        0
      );
    },
  },
})
