<script setup>
import Counter from './Counter.vue';
import { inject } from 'vue';
const item = inject('item')
const inSomeInterface = inject('inSomeInterface')


function getItemPrice() {
    return item.price
}
</script>

<template>
    <template v-if="inSomeInterface !== 'checkoutList'">
        <div class="bottom-group">
            <div class="price">
                <span>{{ getItemPrice() }}</span>
            </div>
            <Counter></Counter>
        </div>
    </template>
    <template v-else>
        
        <div class="bottom-group">
            <Counter></Counter>
            <div class="price">
                <span>{{ getItemPrice() }}</span>
            </div>
        </div>
    </template>
</template>

<style scoped>
.bottom-group {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    font-weight: bold;
}

.price {
    font-size: 36rem;
}

.price::before {
    content: '￥';
    font-size: 28rem;
}
</style>