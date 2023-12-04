## vite 中处理 css

1. vite 在读取到 main.js 中引用到了 Index.css
2. 直接去使用 fs 模块去读取 index.css 中文件内容
3. 直接创建一个 style 标签，将 index.css 中文件内容直接 copy 进 style 标签里
4. 将 style 标签插入到 index.html 的 head 中
5. 将该 CSs 文件中的内容直接换为 s 脚本(方便热更新或者 CSS 模块化)，同时设置 ontent-Type 为从而浏览器以 JS 脚本的形式来执行该 CSS 后缀的文件

**css module 场景:**

- 一个组件最外层的元素类名一般取名 :wrapper
- 一个组件最底层的元素雷明明我们一般取名: footer 你取了 footer 这个名字，别人因为没有看过你这个组件的源代码，也可能去取名 footer 这个类名最终可能会导致样式被覆盖(因为类名重复)，这就是我们在协同开发的时候很容易出现的问题

cssmodule 就是来解决这个问题的

**大概说一下原理:**

全部都是基于 node

- 1. module.css (module 是一种约定，表示需要开启 css 模块化)
- 2.他会将你的所有类名进行一定规则的替换(将 footer 换成 \_footer_i22st_1)
- 3.同时创建一个映射对象{ footer:“\_footer_i22st_1"》
- 4.将替换过后的内容塞进 style 标签里然后放入到 head 标签中 (能够读到 index,html 的文件内容)
- 5.将 componentA.module.css 内容进行全部抹除，替换成 JS 脚本
- 6.将创建的映射对象在脚本中进行默认导出
