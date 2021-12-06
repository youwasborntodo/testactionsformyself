<!--
 * @Description: 
 * @Version: 2.0
 * @Autor: Brian
 * @Date: 2021-12-02 17:11:23
 * @LastEditors: Brian
 * @LastEditTime: 2021-12-06 16:47:04
-->
<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="构建测试！Hello Vue 3 + Vite" />
</template>
<script>
import { defineComponent, reactive } from 'vue'

export default defineComponent({
  setup() {
    const state = reactive({
      name: 'testViteDropTheConsole'
    })
    console.log(state, 'state--->')
  }
})
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
