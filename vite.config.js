/*
 * @Description: 
 * @Version: 2.0
 * @Autor: Brian
 * @Date: 2021-12-02 17:11:23
 * @LastEditors: Brian
 * @LastEditTime: 2021-12-03 09:56:51
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  outDir: 'deploy',
  plugins: [vue()]
})
