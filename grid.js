const slides= document.querySelectorAll('.slides');
const imgslides= document.querySelectorAll('.img-slides');
var slideIndex= 1;

function moveslide(n) {
    slideIndex+= n;
    slideshow(slideIndex);
}

function slideshow(n) {
    var i;
    if (n > slides.length) {
        slideIndex= 1;
    }
    if (n < 1) {
        slideIndex= slides.length;
    }
    for (i=0; i < slides.length; i++) {
        slides[i].style.display="none";
        imgslides[i].style.display="none";
    }
    slides[slideIndex-1].style.display= "block";
    imgslides[slideIndex-1].style.display= "block";
}

moveslide(0);

const nav = document.querySelector('.mobile-nav');
const layer = document.querySelector('.layer');
const open = document.querySelector('.open');
const close = document.querySelector('.close');

open.addEventListener('click', function () {
    nav.classList.add('show');
    nav.classList.remove('disappear');
    layer.style.display="block";
})

close.addEventListener('click', function () {
    nav.classList.add('disappear')
    nav.classList.remove('show');
    layer.style.display="none";
})