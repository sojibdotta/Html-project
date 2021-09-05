// for typign effect 
// selecting elements 

var typedTextSpan = document.querySelector('.typed-text');
var cursorSpan = document.querySelector('.cursor');

// Initialization 

var textArray = ['Shop 2018.', 'Shop 2019.', 'Shop 2020.'];
var typingDelay = 200;
var erasingDelay = 200;
var nextTextDelay = 200;
var textArrayIndex =0;
var charArrayIndex =0;

function type(){
    if(!(cursorSpan.classList.contains('typing'))){
        cursorSpan.classList.add('typing')
    }
    if(charArrayIndex < textArray[textArrayIndex].length){
        typedTextSpan.textContent += textArray[textArrayIndex].charAt(charArrayIndex);
        charArrayIndex ++;
        setTimeout(type, typingDelay)
    }else{
        cursorSpan.classList.remove('typing')
        setTimeout(erase, nextTextDelay)
    }
}

function erase(){
    if(!(cursorSpan.classList.contains('typing'))){
        cursorSpan.classList.add('typing')
    }
    if(charArrayIndex > 0){
        typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charArrayIndex -1)
        charArrayIndex --;
        setTimeout(erase, erasingDelay)
    }else{
        cursorSpan.classList.remove('typing')
        textArrayIndex ++;
        if(textArrayIndex >= textArray.length){
            textArrayIndex = 0;
        }
        setTimeout(type, typingDelay)
    }
}
document.addEventListener('DOMContentLoaded', () =>{
    if(textArray.length){
        setTimeout(type, nextTextDelay +250)
    }
})

// for menu 
function openMenu(){
    document.getElementById('mbMenu').style.height="100%"
}
function closeMenu(){
    document.getElementById('mbMenu').style.height="0%"
}
// for menu 

// jquery start 
// for slider 
$(document).ready(function(){
    $('.slider').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 1000,
      arrows: false,
      dots:false,
      responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 1,
              infinite: true,
              dots: false
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
    });
  });

  // for counter 
  $(function(){

    $('.counter').counterUp({
        delay: 40,
        time: 4000
    });

})