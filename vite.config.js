import { defineConfig,loadEnv } from 'vite'

import viteBaseConfig from './vite.base.config'
import viteDevConfig from './vite.dev.config'
import viteProdConfig from './vite.prod.config'

const envResolver = {
    "build":() => {
        console.log('生产环境')
        return {...viteBaseConfig,...viteProdConfig}
    },
    "serve":() => {
        console.log('开发环境')
        return Object.assign(viteBaseConfig,viteDevConfig)
    }
}

export default defineConfig(({command,mode}) => {
    // optimizeDeps:{
    //     exclude:["lodash-es"]// 将指定数组中的依赖不进行依赖预构建
    // }
    // command: "build" | "serve"
    // console.log('process',process.env)
    console.log('mode',mode)
    console.log('process.cwd()',process.cwd())
    const env = loadEnv(mode,process.cwd())

    console.log("%c Line:25 🎂 env", "color:#ea7e5c", env);
   return envResolver[command]()
})
