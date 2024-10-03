const images = document.querySelectorAll('.grid-item img');

images.forEach(image => {
    image.addEventListener('click', () => {
        alert('Image clicked: ' + image.alt);
    });
});
