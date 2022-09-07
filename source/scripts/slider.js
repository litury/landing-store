const sliderRoom1 = new Image();
const sliderRoom2 = new Image();

sliderRoom1.src = "assets/images/slider/slider-img-1.jpg";
sliderRoom2.src = "assets/images/slider/slider-img-2.jpg";

let images = [
  {
    src: sliderRoom1,
    title: "test1",
    text: "text1"
  },
  {
    src: sliderRoom2,
    title: "test2",
    text: "text2"
  },
];

document.getElementById("slider").appendChild(sliderRoom2);
