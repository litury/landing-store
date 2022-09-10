let images=[{src:"assets/images/slider/slider-img-1.jpg",city:"Ekaterinburg",area:"666 m2",time:"8 years",cost:"price none"},{src:"assets/images/slider/slider-img-2.jpg",city:"Rostov-on-Don",area:"81 m2",time:"3.5 months",cost:"Upon request"}];function initSlider(t){if(images&&images.length){t=t||{title:!1,dots:!0,autoplay:!1};let s=document.querySelector(".slider__images"),e=document.querySelector(".slider__arrows"),i=document.querySelector(".slider__dots"),l=document.querySelector(".project__statistics");var a;function r(a){if(s.querySelector(".slider__image_state_active").classList.remove("slider__image_state_active"),s.querySelector(".n"+a).classList.add("slider__image_state_active"),t.dots&&(i.querySelector(".active").classList.remove("active"),i.querySelector(".n"+a).classList.add("active")),t.titles){let e=l.querySelector("#city"),t=l.querySelector("#area"),i=l.querySelector("#time"),s=l.querySelector("#cost");e.textContent=images[a].city,t.textContent=images[a].area,i.textContent=images[a].time,s.textContent=images[a].cost}}t.dots&&(images.forEach((e,t)=>{t=`<div class="slider__dots-item n${t} ${0===t?"active":""}" data-index="${t}"></div>`;i.innerHTML+=t}),i.querySelectorAll(".slider__dots-item").forEach(e=>{e.addEventListener("click",function(){r(this.dataset.index)})})),t.titles&&(a=`<div class="project__text">
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
        </div>`,l.innerHTML+=a),t.autoplay&&setInterval(()=>{var e=+s.querySelector(".slider__image_state_active").dataset.index;r(e==images.length-1?0:1+e)},t.autoplayInterval),e.querySelectorAll(".slider__arrow").forEach(i=>{i.addEventListener("click",function(){var e=+s.querySelector(".slider__image_state_active").dataset.index;let t;r(t=i.classList.contains("slider__arrow_route_prev")?0==e?images.length-1:e-1:e==images.length-1?0:1+e)})}),images.forEach((e,t)=>{t=`<div class="slider__image n${t} ${0===t?"slider__image_state_active":""}" style="background-image: url(${images[t].src});" data-index="${t}"> </div>`;s.innerHTML+=t})}}let sliderOptions={dots:!0,titles:!0,autoplay:!0,autoplayInterval:2e3};document.addEventListener("DOMContentLoaded",function(){initSlider(sliderOptions)});