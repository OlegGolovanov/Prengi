"use strict";

document.addEventListener("DOMContentLoaded", () => {
    /* После полной загрузки HTML выполняется JS */

    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        document.body.classList.add("mobile");
    } else {
        // код для обычных устройств
    }

    //--------------------Слайдер----------------------//

    const expertNextSlider = document.querySelector(".expert__next-wapper img"),
        expertPreviosSlider = document.querySelector(".expert__previos-wapper img"),
        expertSubWapperSliders = document.querySelector(".expert__sub-wapper-sliders"),
        expertSliders = document.querySelector(".expert__sliders"),
        expertSlide = document.querySelectorAll(".expert__slide"),
        width = window.getComputedStyle(expertSubWapperSliders).width;

    let offset = 0;

    console.log(+width.replace(/\D/g, ""));

    expertNextSlider.addEventListener("click", () => {
        if (offset == (+width.replace(/\D/g, "") * (expertSlide.length - 1))) {
            offset = 0
        } else {
            offset += +width.replace(/\D/g, "");
        }
        expertSliders.style.transform = `translateX(-${offset}px)`;
    })

    expertPreviosSlider.addEventListener("click", () => {
        if (offset == 0) {
            offset = (+width.replace(/\D/g, "") * (expertSlide.length - 1))            
        } else {
            offset -= +width.replace(/\D/g, "");
        }
        expertSliders.style.transform = `translateX(-${offset}px)`;
    });











});