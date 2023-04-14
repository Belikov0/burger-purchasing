<script setup>
import { inject } from 'vue';
import { useMealStore } from '../../store/store';



const inSomeInterface = inject('inSomeInterface')
const mealStore = useMealStore()
</script>

<template>
    <div class="list-footer">
        <div class="border-line"></div>
        <div class="decoration">
            <div class="spot"></div>
            <div class="spot"></div>
        </div>
        <div class="total-wrapper">
            <div class="total">
                合计<span>{{ mealStore.totalPrice }}</span>
            </div>
        </div>
    </div>
</template>

<style scoped>
.list-footer {
    height: 200rem;
    width: 100%;
    /* background-color: pink; */
    position: absolute;
    bottom: 0;

    border-radius: 0 0 50rem 50rem;
}

.border-line {
    height: 1px;
    display: block;
    width: 90%;
    background-color: rgb(224, 224, 224);
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    margin: 0 auto;
}

.decoration{
    position: relative;
    top: -10rem;

    display: flex;
    justify-content: space-between;

    transform: scale(1.05);
}

.spot{
    width: 30rem;
    height: 30rem;
    border-radius: 50%;
    background-color: rgb(218, 218, 218);
}

.total-wrapper{
    width: 100%;
    height: calc(100% - 60rem);
    display: flex;
    justify-content: flex-end;
    align-items: center;
}

.total{
    font-size: 25rem;
    width: 150rem;
    vertical-align: baseline;
}

.total span{
    font-weight: bold;
    font-size: 32rem;

}
.total span::before{
    content: '￥';
    font-size: 28rem;
    font-weight: 100;
}
</style>