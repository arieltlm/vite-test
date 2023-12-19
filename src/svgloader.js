import svgIcon from "./assets/del.svg?url"
import svgRaw from "./assets/del.svg?raw";
console.log("svgIcon", svgIcon, svgRaw);

// 第一种使用svg的方式
// const img = document.createElement("img");
// img.src = svgIcon
// document.body.appendChild(img)

// 第二种
document.body.innerHTML = svgRaw;
const svgElement = document.getElementsByTagName("svg")[0];
svgElement.onmouseenter = function() {// 不是去改他的background 也不是color
// 而是fill属性
this.style.fill = "red";
}