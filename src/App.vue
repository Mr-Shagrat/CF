<template>
  <div class="wrapper">
    <machine></machine>
    <client></client>
  </div>
</template>

<script>
import Client from "./components/Client.vue";
import Machine from "./components/machine.vue";
export default {
  components: { Client, Machine },
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.wrapper {
  display: flex;
  justify-content: center;
  padding: 5px 0;
}
</style>