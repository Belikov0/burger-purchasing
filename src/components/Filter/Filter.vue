<script setup>
import { useMealStore } from '../../store/store';
const mealStore = useMealStore()
</script>


<template>
    <div class="filter">
        <div class="input-wrapper">
            <i class="ri-search-line"></i>
            <input 
            class="input" 
            type="text" 
            placeholder="请输入关键字" 
            v-model="mealStore.keyword"
            />
        </div>
    </div>
</template>

<style scoped>
.filter{
    /* 测试属性 */
    background-color: white;

    /* 盒子样式 */
    width: 100%;
    border-bottom: 1px solid #e6e6e6;

    /* 定位 */
    position: fixed;
    z-index: 3;
    top: 0;
    left: 0;

    /* 布局 */
    padding: 20rem 30rem;
}

.input-wrapper{
    /* 测试属性 */
    background-color: transparent;

    /* 大小 */
    height: 80rem;
    width: 100%;

    /* 弹性盒布局 */
    display: flex;
    justify-content: center;
    align-items: center;

    /* 开启相对定位，使子元素的绝对定位相对于.input-wrapper */
    position: relative;
}

/* 输入框样式 */
.input-wrapper .input{
    
    /* 大小 */
    height: inherit;
    width: inherit;

    background-color: rgb(230,230,230);
    border: none;
    border-radius: 40rem;

    /* 设置输入框位置和样式 */
    padding: 0 80rem;
    font-size: 25rem;
}

.input-wrapper .input:focus
.input-wrapper .input:active{
    border: none;
}

/* 图标字体样式 */
.input-wrapper i{
    /* 使之脱离文档流并定位 */
    position: absolute;
    left: 20rem;

    font-size: 50rem;
    font-weight: bold;

    color: rgb(180, 180, 180)
}

</style>