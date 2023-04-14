# meal-project-2

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
yarn
```

### Compile and Hot-Reload for Development

```sh
yarn dev
```

### Compile and Minify for Production

```sh
yarn build
```

## 项目说明

#### 	基本说明

​	此项目是个人初学`vue`练手的项目，项目搭建使用`vue+vite+pinia`，`vue`使用的是`vue3`组合式api风格进行开发。实现了基本的购物操作功能。

#### 	学习收获

- 页面布局
  - 尝试移动端布局
  - 对定位，弹性盒布局有进一步的理解

- 将`vue`的组件开发和面向对象进行类比思考
  - 通过`props`向子组件传值，根据父组件传值，渲染不同的子组件
  - 通过**依赖注入**向所有后代组件提供可能需要的属性
  - 尽量不要在`vue`中使用原生`dom`进行操作
- 对使用`pinia`进行状态管理有进一步的熟悉和了解
  - 子组件在不同的父组件中渲染时，通过传入的属性条件渲染组件（组件父子关系作为渲染条件）
  - 根据界面不同的状态，将不同的数据状态打包成对应的`getters`，即`vue`中的计算属性
    根据计算属性进行条件渲染或者动态绑定样式和`class`（界面数据状态决定渲染条件）
  - 涉及到状态变化，在`store`中定义`actions`来完成状态操作
  - 经常需要被多个组件共用的属性，提升到`state`中进行管理

#### 	思考与不足

- 大局观不足
  - 在进行布局的时候没有思考清除布局的需求，调整`css`尚不足够熟练
  - 在确定状态与状态管理时没有系统的方法论来决定某些状态、计算属性或者方法是否必要
- 事件对象与原生`dom`处理经验不足
  - 在`vue`中处理事件时，很容易陷入使用原生`dom`处理的思维中
- 项目框架与结构不够整洁易读
  - 父子组件关系没有在文件目录中有明确的提示
  - 父子组件之间缺少明确的语义关系
  - 组件划分上存在些许问题，在组件语义上和代码结构清晰上进行过多的权衡

#### 	遗留问题

- 点击购物车后，在购物车界面进行拖拽依然能触发商品列表的拖拽事件，暂时没有办法解决
- 如何在`vue`的单文件组件中动态引入`css`样式文件

#### 	短期学习目标

- 进一步熟悉`vue`开发框架，深入学习`vue`组件开发的思想
  - 将`vue`的一些知识点进行补全，如生命周期，服务端渲染等
  - 熟悉组合式API，并学习`vue2`的内容
- 熟练原生`Javascript`
  - 代理对象与响应式对象
  - 对象、数组、字符串方法的熟练使用
