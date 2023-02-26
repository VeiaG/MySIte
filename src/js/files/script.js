// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";
//анімація карток в інструментах
import "./cards_anim.js";


//header scroll anim ,закинути в окремий файл пізніше
window.onscroll = function (event) {
    var header = document.getElementById("headr");
    var scroll = window.pageYOffset;
    var offset = 50;
    if(scroll>offset){
        header.classList.add("scrolled");
        header.classList.remove("idle");
    }
    else{
        header.classList.add("idle");
        header.classList.remove("scrolled");
    }
  };