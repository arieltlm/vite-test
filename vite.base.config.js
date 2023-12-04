import { defineConfig } from 'vite'
const postcssPresetEnv = require('postcss-preset-env')
const path = require("path")

export default defineConfig({
    envPrefix:'ENV_',
    css:{
        devSourcemap:true,
        preprocessorOptions:{
            less:{ // 整个得配置对象都会最终给到less得执行参数（全局参数）中去，这里可以写的配置可以在https://lesscss.cn/usage/#less-options这块查看
                math:'always', // less编译为css的时候，将比如不带括号的这种100px / 2的是否进行计算得50px，还是原来得写法100px / 2原封不动得复制过去
                globalVars:{ // 全局变量
                    mainColor:"red"
                }
            },
            sass:{}
        },
        postcss:{// 可以在这里写，也可以在根目录下写一个postcss.config.js，vite也会去自动取读取，此处的优先级比postcss.config.js高
            plugins:[
                postcssPresetEnv({// 预设里包括了自动补全、降级等
                    importFrom:path.resolve(__dirname,'./src/moduleCss/variable.css')
                })
            ], 
        }
    }
})