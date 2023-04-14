<script setup>
import { inject } from 'vue';
import { useMealStore } from '../../store/store';
const mealStore = useMealStore()
const item = inject('item')

function onClickSub(){
    mealStore.subItemFromCart(item)
}

function onClickAdd(){
    mealStore.addItemToCart(item)
}

function getCurrentCount(){
    return mealStore.currentCount(item)
}

</script>

<template>
    <div class="counter">
        <!-- 没有数量时不显示左侧部分 -->
        <template v-if="getCurrentCount() > 0">
            <button class="dec button" @click="onClickSub">
                <i class="ri-subtract-line"></i>
            </button>
            <span>{{ getCurrentCount() }}</span>
        </template>
        <!-- 每时每刻显示右边加号 -->
            <button class="inc button" @click="onClickAdd">
                <i class="ri-add-line"></i>
            </button>
    </div>
</template>

<style scoped>
.counter{
    display: flex;
    justify-content: space-between;
    align-items: baseline;
}

.button{
    width: 36rem;
    height: 36rem;
    border-radius: 50%;
    font-size: 32rem;


    display: flex;
    justify-content: center;
    align-items: center;
}

.counter span{
    text-align: center;
    width: 60rem;
    font-size: 26rem;
}

.inc {
    border: 1px rgb(116, 116, 116) solid;
    background-color: rgb(255, 213, 0);
}

.dec {
    border: black 1px solid;
    background-color: white;
}


</style>
