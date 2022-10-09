class FlexContinuousCarousel {
    /* Manages shifting between images in a gallery. */

    constructor(images) {
        this.images = images, this.currentImage = "";
        this.next = this.next.bind(this), this.reset = this.reset.bind(this);
        this.setCurrentImage();
        document.querySelectorAll('.graphic')[0].src = this.getCurrentImage();
    }

    getCurrentImage() { return `images/${this.currentImage}.svg`; }

    setCurrentImage() {
        const images = this.images.filter(i => i !== this.currentImage);
        this.currentImage = images[Math.floor(Math.random() * images.length)]
    }

    next() {
        const [ left, right ] = document.querySelectorAll('.graphic');
        const next = left.style.order == 2 ? left : right;
        this.setCurrentImage();
        next.src = this.getCurrentImage();
        document.querySelector('.graphic-track').style.transition = 'transform 2s ease-in-out';
        document.querySelector('.graphic-track').style.transform = 'translateX(-100%)';
        setTimeout(this.reset, 2000);
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
setInterval(carousel.next, 5000);
