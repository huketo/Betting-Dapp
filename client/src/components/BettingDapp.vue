<template>
  <DappMetamask></DappMetamask>
</template>

<script setup>
import DappMetamask from "./DappMetamask.vue";
import { useStore } from "vuex";

const store = useStore();
console.log("resisterWeb3 Action dispatched");
store.dispatch("registerWeb3");
</script>

<style lang="scss" scoped></style>
