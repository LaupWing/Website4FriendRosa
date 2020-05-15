export default class Panels{
    constructor(){
        this.panels = document.querySelectorAll('.panel');
        this.panels.forEach(panel=>{
            const events = ['click', 'transitionend'];
            events.forEach(evtName=>{
                panel.addEventListener(evtName, this[`${evtName}Handler`]);
            });
        });
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
