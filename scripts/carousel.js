class FlexContinuousCarousel {
    /* Manages shifting between images in a gallery. */

    constructor(images) {
        this.images = images;
        this.next = this.next.bind(this), this.reset = this.reset.bind(this);
        document.querySelector('.graphic-track').addEventListener('transitionend', () => this.reset());
        document.querySelectorAll('.graphic')[0].src = this.getRandomImage();
    }

    getRandomImage() { return `images/${this.images[Math.floor(Math.random() * this.images.length)]}.svg`; }

    next() {
        const [ left, right ] = document.querySelectorAll('.graphic');
        const next = left.style.order == 2 ? left : right;
        next.src = this.getRandomImage();
        document.querySelector('.graphic-track').style.transition = 'transform 0.5s ease-in-out';
		document.querySelector('.graphic-track').style.transform = 'translateX(-100%)';
    }

    reset() {
        const [ left, right ] = document.querySelectorAll('.graphic');
        left.style.order = left.style.order == 1 ? 2 : 1;
        right.style.order = right.style.order == 1 ? 2 : 1;
        document.querySelector('.graphic-track').style.transition = 'inherit';
		document.querySelector('.graphic-track').style.transform = 'translateX(0)';
    }
}

const carousel = new FlexContinuousCarousel(['shops', 'calm', 'window', 'branch', 'button', 'numbers', 'time']);
setInterval(carousel.next, 3000);