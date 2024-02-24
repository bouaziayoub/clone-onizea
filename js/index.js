document.addEventListener('DOMContentLoaded', function () {
    const carouselImages = document.querySelectorAll('.carousel-slide img');
    let currentIndex = 0;
  
    function showImage(index) {
      carouselImages.forEach((image, i) => {
        if (i === index) {
          image.style.display = 'block';
        } else {
          image.style.display = 'none';
        }
      });
    }
  
    function nextImage() {
      currentIndex++;
      if (currentIndex >= carouselImages.length) {
        currentIndex = 0;
      }
      showImage(currentIndex);
    }
  
    function prevImage() {
      currentIndex--;
      if (currentIndex < 0) {
        currentIndex = carouselImages.length - 1;
      }
      showImage(currentIndex);
    }
  
    function autoChangeImage() {
      setInterval(nextImage, 5000); // Change image every 5 seconds (5000 milliseconds)
    }
  
    showImage(currentIndex);
    autoChangeImage(); // Start auto changing images
  
    document.querySelector('.next-btn').addEventListener('click', nextImage);
    document.querySelector('.prev-btn').addEventListener('click', prevImage);
  });
  