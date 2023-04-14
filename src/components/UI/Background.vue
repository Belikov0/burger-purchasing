<script setup>
import { useMealStore } from '../../store/store';


const mealStore = useMealStore()

function closeCheckout(){
    mealStore.switchCheckoutList()
}

</script>

<template>
    <div class="checkout-background" @touchmove.prevent>
        <div class="close" @click="closeCheckout()" >
            <i class="ri-close-line"></i>
        </div>
    </div>
</template>

<style scoped>
.checkout-background{
    width: 100%;
    height: 100%;
    background-color: rgb(218, 218, 218);

    position: fixed;
    top: 0;
    z-index: 4;
}

.close{
    height: 80rem;
    font-size: 50rem;
    font-weight: bold;
    position: absolute;
    top: 5rem;
    left: 5rem;
}
</style>