import { defineStore } from "pinia";
import { goodsData } from "../../public/goodsData";

export const useMealStore = defineStore("meal",{
    state: () =>({
        //所有的商品数据
        data: goodsData,

        //购物列表的商品数据
        cartData: new Map(),

        //设置界面状态
        cartListOn: false,
        checkoutListOn: false,
        
        //搜索框的关键词
        keyword: ""
    }),
    getters: {
        //实现filter搜索功能功能
        filterItem: (state) =>{
            return state.data.filter(
                // indexOf可以在字符串中查询子串第一次出现的位置
                (item)=> item.title.indexOf(state.keyword) != -1
            )
        },

        //计算商品的总数量
        totalCount: (state) =>{
            let count = 0
            for (let value of state.cartData.values()){
                count += value
            }
            return count
        },

        //计算商品的总价格
        totalPrice: (state) =>{
            let total = 0
            for (let [key, value] of state.cartData.entries()){
                total += key.price*value
            }
            return total
        },

        //计算商品列表是否为空
        isEmpty: (state) =>{
            return state.cartData.size === 0
        },

        //根据条件返回各个列表中的商品数据
        listData(state){
            return (inSomeInterface) =>{
                let res;
                if (inSomeInterface === 'goodsList'){
                    res = this.filterItem
                } 
                else{
                     res = Array.from(state.cartData.keys())
                }
                return res
            }
        },

        //查询返回某个商品当前的数量
        currentCount: (state) =>{
            return (item) =>{
                return state.cartData.has(item) ? state.cartData.get(item) : 0
            }
        },

    },

    actions: {
        //添加商品
        addItemToCart(item){
            if (this.cartData.has(item)){
                let cnt = this.cartData.get(item)
                this.cartData.set(item, cnt+1)
            }else{
                this.cartData.set(item, 1)
            }
        },

        //删除商品,当且仅当存在时可以访问到
        subItemFromCart(item){
            let cnt = this.cartData.get(item)
            if (cnt === 1){
                this.cartData.delete(item)
            }else{
                this.cartData.set(item ,cnt-1)
            }
        },

        clearCart(){
            this.cartData.clear()
        },

        //切换购物车列表的显示
        switchCartList(){
            this.cartListOn = !this.cartListOn
            const a = document.querySelector('.item-list .list-wrapper')
            if (this.cartListOn){
                // 尝试设置取消后面事件的滚动

                document.addEventListener('touchmove', (e) =>{
                    // console.log(e.target)
                    e.stopPropagation()
                })
            }
        },

        //切换显示
        switchCheckoutList(){
            this.checkoutListOn = !this.checkoutListOn
            this.cartListOn = false
        }
    }
})