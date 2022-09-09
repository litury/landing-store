let images = [
  {
    src: "assets/images/slider/slider-img-1.jpg",
    city: "Ekaterinburg",
    area: "666 m2",
    time: "8 years",
    cost: "price none",
  },
  {
    src: "assets/images/slider/slider-img-2.jpg",
    city: "Rostov-on-Don",
    area: "81 m2",
    time: "3.5 months",
    cost: "Upon request",
  },
];

function initSlider(options) {
  if (!images || !images.length) return;
  options = options || {
    title: false,
    dots: true,
    autoplay: false,
  };

  let sliderImages = document.querySelector(".slider__images");
  let sliderArrows = document.querySelector(".slider__arrows");
  let sliderDots = document.querySelector(".slider__dots");
  let sliderInfo = document.querySelector(".project__statistics");

  if (options.dots) {
    initDots();
  }

  if (options.titles) {
    initTitle();
  }

  if (options.autoplay) {
    initAutoplay();
  }

  initArrows();
  initImages();

  function initImages() {
    images.forEach((image, index) => {
      let imageDiv = `<div class="slider__image n${index} ${
        index === 0 ? "slider__image_state_active" : ""
      }" style="background-image: url(${
        images[index].src
      });" data-index="${index}"> </div>`;

      sliderImages.innerHTML += imageDiv;
    });
  }

  function initArrows() {
    sliderArrows.querySelectorAll(".slider__arrow").forEach((arrow) => {
      arrow.addEventListener("click", function () {
        let curNumber = +sliderImages.querySelector(
          ".slider__image_state_active"
        ).dataset.index;
        let nexNumber;

        if (arrow.classList.contains("slider__arrow_route_prev")) {
          nexNumber = curNumber === 0 ? images.length - 1 : curNumber - 1;
        } else {
          nexNumber = curNumber === images.length - 1 ? 0 : curNumber + 1;
        }
        moveSlider(nexNumber);
      });
    });
  }

  function initDots() {
    images.forEach((image, index) => {
      let dot = `<div class="slider__dots-item n${index} ${
        index === 0 ? "active" : ""
      }" data-index="${index}"></div>`;
      sliderDots.innerHTML += dot;
    });
    sliderDots.querySelectorAll(".slider__dots-item").forEach((dot) => {
      dot.addEventListener("click", function () {
        moveSlider(this.dataset.index);
      });
    });
  }

  function moveSlider(num) {
    sliderImages
      .querySelector(".slider__image_state_active")
      .classList.remove("slider__image_state_active");
    sliderImages
      .querySelector(".n" + num)
      .classList.add("slider__image_state_active");
    if (options.dots) {
      sliderDots.querySelector(".active").classList.remove("active");
      sliderDots.querySelector(".n" + num).classList.add("active");
    }
    if (options.titles) changeSlider(num);
  }

  function initTitle() {
    let sliderInfoDiv = `<div class="project__text">
            <h3 class="title title_size_small">
                City:
            </h3>
            <p class="text" id="city" id="city">${images[0].city}</p>
        </div>

        <div class="project__text">
            <h3 class="title title_size_small">
                apartment area:
            </h3>
            <p class="text text_size_small project__text-area" id="area">${images[0].area}</p>
        </div>

        <div class="project__text">
            <h3 class="title title_size_small">
                Repair time:
            </h3>
            <p class="text text_size_small" id="time">${images[0].time}</p>
        </div>

        <div class="project__text">
            <h3 class="title title_size_small">
                Repair Cost:
            </h3>
            <p class="text text_size_small" id="cost">${images[0].cost}</p>
        </div>`;

    sliderInfo.innerHTML += sliderInfoDiv;
  }

  function changeSlider(num) {
    let sliderCity = sliderInfo.querySelector("#city");
    let sliderArea = sliderInfo.querySelector("#area");
    let sliderTime = sliderInfo.querySelector("#time");
    let sliderCost = sliderInfo.querySelector("#cost");

    sliderCity.innerText = images[num].city;
    sliderArea.innerText = images[num].area;
    sliderTime.innerText = images[num].time;
    sliderCost.innerText = images[num].cost;
  }

  function initAutoplay() {
    setInterval(() => {
      let curNumber = +sliderImages.querySelector(".slider__image_state_active").dataset.index;
      let nexNumber = curNumber === images.length - 1 ? 0 : curNumber + 1;
      moveSlider(nexNumber)
    }, options.autoplayInterval);
  }
}

let sliderOptions = {
  dots: true,
  titles: true,
  autoplay: true,
  autoplayInterval: 2000,
};

document.addEventListener("DOMContentLoaded", function () {
  initSlider(sliderOptions);
});
