<!--
 * @Description: 
 * @Version: 2.0
 * @Autor: Brian
 * @Date: 2021-12-06 17:09:39
 * @LastEditors: Brian
 * @LastEditTime: 2021-12-06 17:50:07
-->
<script>
import { defineComponent, toRefs, onMounted } from 'vue'

export default defineComponent({
  setup() {
    const data = {
      nameTest: 'testViteDropTheConsole' + new Date().getTime()
    }
    const state = toRefs(data)
    console.log(state, 'state--->')
    onMounted(()  => {
      console.log('this----mounted->123')
    })
    return {
      ...state
    }
  }
})
</script>
<template>
  <h3>------------00000{{nameTest}}</h3>
</template>