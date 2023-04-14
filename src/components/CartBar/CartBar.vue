<script setup>
//引入文件
import { useMealStore } from '../../store/store'
import bag from '../../assets/bag.png'
import { inject } from 'vue';


//定义需要的属性
//引入属性
const mealStore = useMealStore()
const props = defineProps({
    inSomeInterface: String
})

//从状态中获取当前的属性

//根据属性值的不同引入不同的样式
//（样式的引入函数的参数有 1.组件名称 2.组件所处的位置 3.特定数据的状态
// 暂时不实现

function showCartList(){
    if (!mealStore.checkoutListOn){
        mealStore.switchCartList()
    }
}

function onClickGoCheckout(){
    if (!mealStore.checkoutListOn){
        mealStore.switchCheckoutList()
    }
}

function onClickGoPay(){

}


</script>


<template>
    <!-- 在checkout界面中禁用点击CartBar事件 -->
    <div class="cart-bar" >
        <div class="cart-bag" v-show="!mealStore.checkoutListOn" @click="showCartList">
            <img :src="bag" alt="">
            <span class="total-count" v-show="!mealStore.isEmpty">{{ mealStore.totalCount }}</span>
        </div>

        <div class="total-amount" :class="{'checkout-amount': mealStore.checkoutListOn && !mealStore.isEmpty}">
            <span class="no-goods" v-if="mealStore.isEmpty">未选购商品</span>
            <span class="have-goods" v-else>{{ mealStore.totalPrice }}</span>
        </div>

        <!-- 没有数量时为灰色且禁用点击事件 -->
        <button :class="{ 
            'inactive': mealStore.totalCount === 0,
            'go-checkout': 1
            // !mealStore.checkoutListOn,
            // 'go-pay': mealStore.checkoutListOn
        }" @click.prevent.stop="onClickGoCheckout()"
            :disabled="mealStore.cartData.size === 0">{{ mealStore.checkoutListOn ?  '去支付' : '去结算'  }}
        </button>
    </div>
</template>

<style scoped >
/* 
    可以根据数据状态和组件关系确定样式
    暂时先写在组件里，然后拆分从.css文件引入
    根据上述状态确定引入路径
*/
.cart-bar {
    /* 测试属性 */


    /* 定位，水平居中 */
    position: fixed;
    z-index: 99;
    left: 0;
    right: 0;
    bottom: 30rem;
    margin: 0 auto;

    /* 自身样式 */
    width: 690rem;
    height: 100rem;
    background-color: rgb(58, 58, 58);
    border-radius: 50rem;
    font-weight: bold;
}

.cart-bag img {
    position: absolute;
    bottom: -10rem;
    width: 100rem;
    height: 120rem;
}

.cart-bag .total-count {
    position: absolute;
    height: 40rem;
    width: 40rem;
    background-color: red;
    top: -10rem;
    left: 80rem;
    border-radius: 50%;

    /* 文字样式 */
    line-height: 30rem;
    text-align: center;
    color: white;
}

.total-amount {
    height: 100%;
    line-height: 100rem;
    margin-left: 120rem;
    vertical-align: baseline;
}

.no-goods {
    color: rgb(156, 156, 156);
    font-size: 30rem;
}

.have-goods {
    color: white;
    font-size: 30rem;
}

.have-goods::before {
    content: '￥';
    font-size: 24rem;
}

.go-checkout {
    /* 定位：上下居中，靠右 */
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto 0;

    /* 盒子样式 */
    border-radius: 50rem;
    height: 100%;
    width: 180rem;
    background-color: rgb(248, 188, 0);

    /* 文字定位 */
    line-height: 100rem;
    text-align: center;

    /* 文字样式 */
    font-size: 34rem;
    font-weight: bold;
    color: rgb(100, 100, 100);

    /* 细节 */
    box-sizing: content-box;
    border: 1px rgb(248, 188, 0) solid;
}

.inactive {
    background-color: rgb(156, 156, 156);
    border: 1px rgb(156, 156, 156) solid;
}

.checkout-amount{

}

.checkout-amount::before{
    position: absolute;
    left: 70rem;
    content: '合计';
    font-size: 24rem;
    font-weight: normal;
    color: white;
}

</style>