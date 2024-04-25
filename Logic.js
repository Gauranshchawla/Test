document.addEventListener("DOMContentLoaded", function() {
    var images = [
        "./Images/photo-gallery1.jpg",
        "./Images/photo-gallery2.jpg",
        "./Images/photo-gallery3.jpg",
        "./Images/photo-gallery4.jpg",
        "./Images/photo-gallery5.jpg",
        "./Images/photo-gallery6.jpg",
        "./Images/photo-gallery7.jpg",
        "./Images/photo-gallery8.jpg",
        "./Images/photo-gallery9.jpg"
    ];

    var imgElements = document.querySelectorAll('.img-fluid');
    var currentIndex = 0;

    // Preload images
    images.forEach(function(imageSrc) {
        var img = new Image();
        img.src = imageSrc;
    });

    // Function to flip two random images
    function flipImages() {
        // Generate two random indices
        var index1 = Math.floor(Math.random() * imgElements.length);
        var index2 = Math.floor(Math.random() * imgElements.length);

        // Ensure indices are different
        while (index1 === index2) {
            index2 = Math.floor(Math.random() * imgElements.length);
        }

        // Flip the images at the selected indices
        imgElements[index1].classList.toggle('flipped');
        imgElements[index2].classList.toggle('flipped');

        // Change image source after animation
        setTimeout(function() {
            imgElements[index1].src = images[Math.floor(Math.random() * images.length)];
            imgElements[index2].src = images[Math.floor(Math.random() * images.length)];
            imgElements[index1].classList.toggle('flipped');
            imgElements[index2].classList.toggle('flipped');
        }, 500); // Adjust according to your flip animation duration
    }

    // Set interval to flip images every 4 seconds with two random images at a time
    setInterval(function() {
        flipImages();
    }, 2000); // Flip images every 2 seconds
});


