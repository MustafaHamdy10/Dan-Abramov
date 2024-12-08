
let btnMood=document.querySelector(".btn-mood");
btnMood.onclick=function(){
    document.body.classList.toggle("white-theme");
    btnMood.classList.toggle("fa-sun");
    btnMood.classList.toggle("fa-moon");
}