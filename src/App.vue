<script setup>
import CartBar from './components/CartBar/CartBar.vue';
import Filter from './components/Filter/Filter.vue';
import List from './components/List/List.vue';
import Background from './components/UI/Background.vue';
import Mask from './components/UI/Mask.vue';
import { useMealStore } from './store/store';
const mealStore = useMealStore()
</script>

<template>
  <CartBar ></CartBar>
  <!-- 结算层 -->
  <template v-if="mealStore.checkoutListOn">
    <List in-some-interface="checkoutList"></List>
    <Background></Background>
  </template>

  <!-- 中间层 -->
  <List in-some-interface="cartList" v-if="mealStore.cartListOn"></List>
  <Mask v-if="mealStore.cartListOn"></Mask>

  <!-- 最底层， -->
  <Filter></Filter>
  <List in-some-interface="goodsList"></List>
</template>

<style scoped>
  
</style>
