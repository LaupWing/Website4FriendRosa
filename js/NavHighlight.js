export default class NavHighlight{
    constructor(){
        this.whitelist = ['home', 'products', 'about', 'contact'];
        window.addEventListener('scroll', this.handelScroll.bind(this));
    }
    handelScroll(){
        const scrolled = window.scrollY;
        console.log(scrolled);
        this.whitelist.forEach(item=>{
            console.log(document.getElementById(item));
        })
    }
}