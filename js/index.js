// Carousel

document.addEventListener("DOMContentLoaded", function () {
  const carouselImages = document.querySelectorAll(".carousel-slide img");
  let currentIndex = 0;

  function showImage(index) {
    carouselImages.forEach((image, i) => {
      if (i === index) {
        image.style.display = "block";
      } else {
        image.style.display = "none";
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

  document.querySelector(".next-btn").addEventListener("click", nextImage);
  document.querySelector(".prev-btn").addEventListener("click", prevImage);
});

// Toggle elementos What do we do..

const toggleButtons = document.querySelectorAll(".toggle-details");

toggleButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // get the next element sibling of the button
    const details = button.nextElementSibling;
    // toggle the display of the details
    details.style.display =
      details.style.display === "block" ? "none" : "block";

    // get the image inside the button
    const iconPlus = document.querySelector(".icon-plus");


    const iconM = button.querySelectorAll(".icon-minus");

    iconM.forEach((icon) => {
      icon.style.display = icon.style.display === "block" ? "none" : "block";
    });

    const iconS = button.querySelectorAll(".icon-plus");

    iconS.forEach((icon) => {
      icon.style.display = icon.style.display === "none" ? "block" : "none";
    });
  });
});


// Carousel we work with:

document.addEventListener("DOMContentLoaded", function () {
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");
  const carouselInner = document.querySelector(".carousel-inner");
  const carouselItems = document.querySelectorAll(".carousel-item");
  let currentIndex = 0;

  nextBtn.addEventListener("click", function () {
    if (currentIndex < carouselItems.length - 4) {
      currentIndex += 4;
      const offset = currentIndex * -25; // 25% de ancho por imagen
      carouselInner.style.transform = `translateX(${offset}%)`;
    }
  });

  prevBtn.addEventListener("click", function () {
    if (currentIndex >= 4) {
      currentIndex -= 4;
      const offset = currentIndex * -25; // 25% de ancho por imagen
      carouselInner.style.transform = `translateX(${offset}%)`;
    }
  });
});

