<script setup>
import { inject, provide, ref } from 'vue';
import Contents from './Contents.vue';
import Pic from './Pic.vue';
const props = defineProps({
    item: Object
})

const inSomeInterface = inject('inSomeInterface')
let imgSize = ref(inSomeInterface !== 'checkoutList' ? '300rem' : '180rem')

//为所有后代组件提供item属性
provide("item", props.item)
</script>

<template>
    <div class="item" :class="{
        'checkout-item': inSomeInterface === 'checkoutList'
    }">
        <Pic :img-size="imgSize"></Pic>
        <Contents></Contents>
    </div>
</template>

<style scoped>
.item{
    height: v-bind(imgSize);
    width: 100%;

    border: 1rem rgb(202, 202, 202) solid;
    border-left: transparent;
    border-right: transparent;

    /* 布局 */
    display: flex;
}

.checkout-item{
    border: transparent;
    margin: 5rem 0;
}

</style>
