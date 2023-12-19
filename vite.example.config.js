import {defineConfig} from 'vite'
import path from 'path'

export default defineConfig({
    optimizeDeps:{
        exclude:[],// 将指定数组中的依赖不进行预构建
    },
    envPrefix:'ENV_',
    css:{ // 对css的行为进行配置
        // modules配置最终会丢给postcss modules
        modules:{// 是对css模块化的默认行为进行覆盖
            localsConvention:"camelCaseOnly",// 修改生成的配置对象的key的展示形式(驼峰还是中划线形式),camelCase,camelCaseOnly.dash,dashOnly
            sopeBehaviour:"local",// 配置当前的模块化行为是模块化还是全局化(有hash就是开启了模块化的一个标志，因为他可以保证产生不同的hash值来控制我们的样式举名不被覆盖)
            // generateScopedName: "[name]_[locall_[hash:5]"  // 生成的类名的规则(可以配置为函数，也可以配置成字符串规则: https://github,com/webpack/loader-utils#interpolatename)
            generateScopedName: (name, filename, css) => {
                //name->代表的是你此刻css文件中的类名
                //filename->是你当前css文件的绝对路径
                //css-> 给的就是你当前样式
                console,log("name",name,"filename",filename,"css",css); 
                // 配置成函数以后，返回值就决定了他最终显示的类型
                return `$(name)_$(Math.random().tostring(36).substr(3,8)}`;
            },
            // hashPrefix:生成hash会根据你的类名 + 一些其他的字符(文件名 + 他部随机生成一个字符审)去进行生成，如果你想要你生成hash更加的独特一点，你可以配置hashPrefix，你配置的这个字符审会参与到最终的hah生成，(hash:只要你的字符审有一个字不一样，那么生成的hash就完全不一样，但是只要你的字符串完全一样，生成的hash就会一样)
            hashPrefix:"hello",
            globalModulePaths:["./componentB,module,css"],// 代表你不想参与到ss模块化的路径
        },
        preprocessorOptions:{
            less:{ // 整个得配置对象都会最终给到less得执行参数（全局参数）中去，这里可以写的配置可以在https://lesscss.cn/usage/#less-options这块查看
                math:'always', // less编译为css的时候，将比如不带括号的这种100px / 2的是否进行计算得50px，还是原来得写法100px / 2原封不动得复制过去
                globalVars:{ // 全局变量
                    mainColor:"red"
                }
            },
            sass:{}
        },
        devSourcemap:true,
        postcss:{// 可以在这里写，也可以在根目录下写一个postcss.config.js，vite也会去自动取读取，此处的优先级比postcss.config.js高
            plugins:[
                postcssPresetEnv({// 预设里包括了自动补全、降级等
                    importFrom:path.resolve(__dirname,'./src/moduleCss/variable.css')
                })
            ], 
        }

    },
    resolve: {
        alias:{
            "@":path.resolve(__dirname,'./src')
        }
    }
})