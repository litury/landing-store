let images = [
  {
    src: "assets/images/slider/slider-img-1.jpg",
    title: "test1",
    text: "text1",
  },
  {
    src: "assets/images/slider/slider-img-2.jpg",
    title: "test2",
    text: "text2",
  },
];

// document.getElementById("slider").appendChild(images[1].src);

function initSlider() {
  if (!images || !images.length) return;

  let sliderImages = document.querySelector(".slider__images");
  let sliderArrows = document.querySelector(".slider__arrow");

  initImages();
  initArrows();

  function initImages() {
    images.forEach((image, index) => {
      let imageDiv = `<div class="slider__image n${index} ${index === 0 ? "slider__image_state_active" : ""}" 
                           style="background-image: url(${images[index].src});">
                       </div>`;

      sliderImages.innerHTML += imageDiv;
    });
  }
}

document.addEventListener("DOMContentLoaded", initSlider);
