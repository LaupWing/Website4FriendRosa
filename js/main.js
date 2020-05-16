import Panels from './Panels.js';
import NavHighlight from './NavHighlight.js';

function setNavOffset(){
    setTimeout(() => {
        const offset = document.querySelector('nav').getBoundingClientRect().height;
        document.documentElement.style.setProperty('--nav-offset', offset + "px");
    }, 500);
}

function customHomeLink(){
    document.querySelector('nav a').addEventListener('click', e=>{
        e.preventDefault();
        window.scrollTo(0,0);
    })
}

window.addEventListener('DOMContentLoaded', ()=>{
    new Panels();
    new NavHighlight();
    customHomeLink();
    setNavOffset();
});