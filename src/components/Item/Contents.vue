<script setup>
import { inject,ref } from 'vue';
import Counter from './Counter.vue';
import BottomGroup from './BottomGroup.vue';
import Desc from './Desc.vue'



</script>


<template>
    <div class="contents">
        <!-- 上半部分，名称+描述 -->
        <div class="top-group">
            <Desc></Desc>
        </div>

        <!-- 下半部分，价格+计数器 -->
        <BottomGroup></BottomGroup>
    </div>
</template>



<style scoped>
.contents{
    display: flex;
    flex-direction: column;
    justify-content: space-evenly; 
    width: 100%;
    margin: 0 20rem;
}



</style>
