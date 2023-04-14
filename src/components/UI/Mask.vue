<script setup>
import { useMealStore } from '../../store/store';
</script>
<template>
    <div class="mask" @click="useMealStore().switchCartList()" @touchmove.prevent ></div>
</template>

<style scoped>
    .mask{
        position: fixed;
        z-index: 4;
        
        height: 100vh;
        width: 100vw;
        background-color: rgba(150,150,150, 0.5);
    }
</style>