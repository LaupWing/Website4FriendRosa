import Panels from './Panels.js';

function setNavOffset(){
    const offset = document.querySelector('nav').getBoundingClientRect().height;
    document.documentElement.style.setProperty('--nav-offset', offset + "px");
}

window.addEventListener('DOMContentLoaded', ()=>{
    new Panels();
    setNavOffset();
});