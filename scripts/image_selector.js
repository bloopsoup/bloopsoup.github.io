var images = ['images/shops.svg', 'images/calm.svg', 'images/window.svg', 'images/branch.svg', 'images/button.svg', 'images/numbers.svg', 'images/time.svg'];

/* Picks a random image and displays it in the randomImage <img> tag. */
function displayRandomImage() {
    document.getElementById("random-display").src = images[Math.floor(Math.random() * images.length)];
}
displayRandomImage();
