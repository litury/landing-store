let images=[{src:"assets/images/slider/slider-img-1.jpg",title:"test1",text:"text1"},{src:"assets/images/slider/slider-img-2.jpg",title:"test2",text:"text2"}];function initSlider(){if(images&&images.length){let t=document.querySelector(".slider__images");document.querySelector(".slider__arrow");images.forEach((e,i)=>{i=`<div class="slider__image n${i} ${0===i?"slider__image_state_active":""}" 
                           style="background-image: url(${images[i].src});">
                       </div>`;t.innerHTML+=i}),initArrows()}}document.addEventListener("DOMContentLoaded",initSlider);