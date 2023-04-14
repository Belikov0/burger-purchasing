<script setup>
import { inject } from 'vue';


const item = inject('item')
const inSomeInterface = inject('inSomeInterface')


</script>


<template>
    <div class="desc">
        <div class="title">
            <p>{{ item.title }}</p>
        </div>
        <div class="desc" :class="{ invisible: inSomeInterface !== 'goodsList' }" 
        v-show="inSomeInterface === 'goodsList'">
            <p>{{ item.desc }}</p>
        </div>
    </div>
</template>

<style scoped>
.title {
    font-size: 30rem;
    color: black;
}

.desc {
    color: #777777;
}

.invisible {
    visibility: hidden;
}
</style>
