/*
 * @Description: 
 * @Version: 2.0
 * @Autor: Brian
 * @Date: 2021-12-02 17:11:23
 * @LastEditors: Brian
 * @LastEditTime: 2021-12-06 17:31:13
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig(() => {
    return {
      base: '/testactionsformyself/',
      build: {
        outDir: 'build',
        terserOptions: {
          compress: {
            drop_console: true,
            drop_debugger: true
          }
        }
      },
      plugins: [vue()]
    }
})