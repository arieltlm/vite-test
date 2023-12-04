import componentB from './componentB.module.css'
/* {
    "footer": "_footer_yfky8_1"
} */
console.log("%c Line:2 🥕 componentB", "color:#33a5ff", componentB);

const div = document.createElement('div')
div.innerHTML = "This is a test"

document.body.appendChild(div)

div.className = componentB.footer