<script setup>
import { useMealStore } from '../../store/store';
import { inject } from 'vue';



const inSomeInterface = inject('inSomeInterface')
</script>

<template>
    <!-- 
        该组件在cart和和checkout中出现
    -->
    <header class="header" :class="{'cart-list-header': inSomeInterface === 'checkoutList'}">
        <div class="header-title">
            <p>餐品详情</p>
        </div>

        <!-- 欠缺一个清空的提示功能，待实现 -->
        <div class="clear-cart" 
            :class="{'invisible': inSomeInterface === 'checkoutList'}" 
            @click="useMealStore().clearCart()">
            <i class="ri-delete-bin-5-line"></i>
            <p>清空购物车</p>
        </div>

        <div class="border-line" v-show="inSomeInterface === 'checkoutList'"></div>
    </header>
</template>

<style scoped>

.header {
    /* background-color: aqua; */
    background-color: white;
    border-radius: 50rem 50rem 0 0;
    width: 100%;
    
    position: absolute;
    z-index: 10;

    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 120rem;
}

.header .header-title {
    padding: 0 30rem;
    font-size: 32rem;
    font-weight: bold;
}

.header .clear-cart {
    display: flex;
    justify-content: space-evenly;
    align-items: baseline;
    width: 220rem;
    color: rgb(188, 188, 188);
}

.cart-list-header{
   
}

.border-line{
    height: 1px;
    display: block;
    width: 90%;
    background-color: rgb(224, 224, 224);
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    margin: 0 auto;
}

.invisible{
    visibility: hidden;
}


</style>