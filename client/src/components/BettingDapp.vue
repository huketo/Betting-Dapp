<template>
  <DappMetamask></DappMetamask>
  <BettingComponent></BettingComponent>
</template>

<script setup>
import DappMetamask from "./DappMetamask.vue";
import { useStore } from "vuex";
import BettingComponent from "./BettingComponent.vue";

const store = useStore();
console.log("resisterWeb3 Action dispatched");
store.dispatch("registerWeb3");
</script>

<style lang="scss" scoped></style>
