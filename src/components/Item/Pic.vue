<script setup>
import { inject } from 'vue';
const item = inject('item')
const props = defineProps(['imgSize'])
</script>


<template>
    <div class="img-wrapper">
        <img :src="item.img" :alt="item.title">
    </div>
</template>

<style scoped>
    .img-wrapper{
        height: v-bind('props.imgSize');
        width: v-bind('props.imgSize');
    }

    img{
        height: inherit;
        width: inherit;
    }
</style>
