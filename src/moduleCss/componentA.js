import componentA from './componentA.module.css'
import componetAless from './componetA.module.less'
/* {
    "footer": "_footer_1r916_1"
} */
console.log("%c Line:2 🥕 componentA", "color:#33a5ff", componentA); // 

const div = document.createElement('div')

document.body.appendChild(div)

div.className = componentA.footer
const div1 = document.createElement('div')

document.body.appendChild(div1)

div1.className = componetAless.content