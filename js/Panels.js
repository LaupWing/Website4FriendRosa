export default class Panels{
    constructor(){
        this.panels = document.querySelectorAll('.panel');
        this.panels.forEach(panel=>{
            const events = ['click', 'transitionend'];
            events.forEach(evtName=>{
                panel.addEventListener(evtName, this[`${evtName}Handler`]);
            });
            setTimeout(()=>{
                this.applyTranstion(panel);
            },1)
        });
    }
    applyTranstion(panel){
        panel.style.transition = 'font-size .7s cubic-bezier(0.61, -0.19, 0.7, -0.11),flex .7s cubic-bezier(0.61, -0.19, 0.7, -0.11),background .2s';
    }
    clickHandler(e){
        const panel = e.target.closest('.panel');
        panel.classList.toggle('open');
    }
    transitionendHandler(e){
        const panel = e.target.closest('.panel');
        
        if(e.propertyName === 'flex-grow'){
            panel.classList.toggle('open-active');
        }
    }
}
