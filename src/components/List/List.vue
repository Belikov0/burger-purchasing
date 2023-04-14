<script setup>
import ListHeader from './ListHeader.vue';
import ListFooter from './ListFooter.vue'
import { useMealStore } from '../../store/store'
import Item from '../Item/Item.vue';
import { provide } from 'vue';
const mealStore = useMealStore()
const props = defineProps({
    inSomeInterface: String
})
const inSomeInterface = props.inSomeInterface

//为所有后代组件提供需要的属性
provide("inSomeInterface", inSomeInterface)


</script>

<template>
    <div :class="{
        'cart-list': inSomeInterface === 'cartList',
        'item-list': inSomeInterface === 'goodsList',
        'checkout-list': inSomeInterface == 'checkoutList'
    }">
        <!-- 在goodsList中不显示 -->
        <ListHeader v-show="inSomeInterface !== 'goodsList'"></ListHeader>

        <template v-show="mealStore.listData(inSomeInterface).length === 0">
            <h1>没有找到你想要的商品</h1>
        </template>

        <div class="list-wrapper">

            <template v-show="mealStore.listData(inSomeInterface).length === 0">
                <h1>购物车目前为空</h1>
            </template>

            <!-- 使用v-for渲染时注意设置key值防止diff算法导致不符合预期的渲染 -->
            <Item v-for="item of mealStore.listData(inSomeInterface)" :item="item" :key="item.id"></Item>
        </div>
        <!-- 当且仅当结账的时候显示 -->
        
        <ListFooter v-show="inSomeInterface === 'checkoutList'"></ListFooter>
    </div>
</template>

<style scoped>
/* 购物界面样式 */
.item-list {
    background-color: white;

    /* 定位 */
    position: absolute;
    top: 0rem;
    width: 100%;
}

.list-wrapper{
    position: absolute;
    top: 120rem;
    height: calc(100vh - 120rem);
    padding-bottom: 130rem;
    overflow: auto;
}


/* 提示文字样式 */
.item-list h1 {
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: rgb(188, 188, 188);
    font-size: 30rem;
}

/* 购物车界面样式 */
.cart-list {
    background-color: white;

    height: calc(100vh - 240rem);
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    margin: 0 auto;
    width: 98%;

    /* 设置层级 */
    z-index: 8;
    border-radius: 50rem 50rem 0 0;
}
.checkout-list .list-wrapper,
.cart-list .list-wrapper{
    width: 100%;
    height: calc(100vh - 360rem);
    overflow: auto;
}

.checkout-list .list-wrapper{
    height: 680rem;
    overflow: auto;
    padding-bottom: 0;
}

.cart-list .list-wrapper h1{
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: rgb(188, 188, 188);
    font-size: 28rem;

}

/* 结算界面样式 */
.checkout-list{
    background-color: white;

    
    height: 1000rem;
    position: fixed;
    left: 0;
    right: 0;
    top: 80rem;
    margin: 0 auto;

    width: 98%;

    /* 设置层级 */
    z-index: 8;

    /* 商品可能溢出，设置滚动条 */

    border-radius: 50rem ;
}

.border-line{
    height: 1rem;
    display: block;
    width: 90%;
    background-color: rgb(175, 175, 175);
    position: absolute;
    bottom: 0rem;
    left: 0;
    right: 0;
    margin: 0 auto;
}


</style>