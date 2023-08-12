import './index.css'
import imgObj from '../assets/wjw-yyt.png'
const theImg = document.createElement('img')
theImg.src = imgObj
document.querySelector('.Love').appendChild(theImg)
function toggleSidebar() {
    var sidebar = document.getElementById("sidebar");
    sidebar.classList.toggle("open");
}
function toggleImage() {
    var loveDiv = document.querySelector('.Love');
    loveDiv.classList.toggle('show-image');
}
document.querySelector('.menu-button').addEventListener( 'click', ()=> {
    toggleSidebar()
})
document.querySelector('.custom-button').addEventListener( 'click', ()=> {
    toggleImage()
})
document.querySelector('.heart-button').addEventListener( 'click', ()=>{
    window.location.href = "../snow-flowers/index.html";
})