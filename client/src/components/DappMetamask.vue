<template>
  <div class="metamask-info">
    <p>네트워크: {{ web3?.networkId }}</p>
    <p>코인베이스 주소: {{ web3?.coinbase }}</p>
    <p>잔액: {{ web3?.balance }}</p>
  </div>
</template>

<script setup>
import { useStore } from "vuex";

const store = useStore();
const web3 = store.state.web3;
</script>

<style lang="scss" scoped></style>
