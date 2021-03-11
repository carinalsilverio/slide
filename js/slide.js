export default class Slide {
    constructor(slide, wrapper) {
        this.slide = document.querySelector(slide)
        this.wrapper = document.querySelector(wrapper);
    }

    onStart(event) {
        event.preventDefault();
        this.wrapper.addEventListener('mousemove', this.onMove);
    }

    onMove (event){

    }

    onEnde(event) {
        this.wrapper.removeEventListener('mousemove', this.onMove);

    }

    addSlideEvents() {
        this.wrapper.addEventListener('mousedown', this.onStart);
        this.wrapper.addEventListener('mouseup', this.onEnde);

    }

    bindEvents() {
        this.onStart = this.onStart.bind(this);
        this.onStart = this.onMove.bind(this);
        this.onStart = this.onEnde.bind(this);

    }
    
    init() {
        this.bindEvents();
        this.addSlideEvents();        
        return this;
    }
}