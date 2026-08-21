export default class PaperAnimation {
    constructor() {
        this.paper = document.querySelector('.paper');
        this.reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    }

    init() {
        if (!this.paper) return;
        
        if (!this.reduceMotion) {
            requestAnimationFrame(() => {
                this.paper.classList.add('is-in');
            });
        } else {
            this.paper.classList.add('is-in');
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const animation = new PaperAnimation();
    animation.init();
});
