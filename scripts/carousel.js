/** Manages shifting between images in a gallery via Flexbox. 
 *  @memberof Scripts */
class FlexContinuousCarousel {
    /** @type {Array<string>} */
    #images
    /** @type {string} */
    #currentImage

    /** Create the carousel.
     *  @param {Array<string>} images - A list of image names to loop through. */
    constructor(images) {
        this.#images = images;
        this.#currentImage = "";
        this.#setCurrentImage();
        document.querySelectorAll('.graphic')[0].src = this.#getCurrentImage();
    }

    /** Gets the current image as a path to the actual image file.
     *  @returns {string} The path to the image file. */
    #getCurrentImage() { return `images/${this.#currentImage}.svg`; }

    /** Changes the current image to another random image. */
    #setCurrentImage() {
        const images = this.#images.filter(i => i !== this.#currentImage);
        this.#currentImage = images[Math.floor(Math.random() * images.length)]
    }

    /** Resets the attributes of the carousel to allow for continuous looping. */
    #reset() {
        const [ left, right ] = document.querySelectorAll('.graphic');
        left.style.order = left.style.order == 1 ? 2 : 1;
        right.style.order = right.style.order == 1 ? 2 : 1;
        document.querySelector('.graphic-track').style.transition = 'inherit';
        document.querySelector('.graphic-track').style.transform = 'translateX(0)';
    }

    /** Changes the attributes of the carousel to get a moving transition, then
     *  resets the attributes 2 seconds later. */
    next() {
        const [ left, right ] = document.querySelectorAll('.graphic');
        const next = left.style.order == 2 ? left : right;
        this.#setCurrentImage();
        next.src = this.#getCurrentImage();
        document.querySelector('.graphic-track').style.transition = 'transform 2s ease-in-out';
        document.querySelector('.graphic-track').style.transform = 'translateX(-100%)';
        setTimeout(this.#reset, 2000);
    }
}

const carousel = new FlexContinuousCarousel(['shops', 'calm', 'window', 'branch', 'button', 'numbers', 'time', 'world']);
setInterval(() => carousel.next(), 5000);
