gsap.from(".text-inner > *", 2, {
    opacity: 0,
    delay: 2,
    stagger: 0.2
})
gsap.from(".btn > *", 2, {
    opacity: 0,
    delay: 2,
    stagger: 0.2
})
gsap.from(".stripe1 img", 2, {
    y: 400,
    opacity:0,
    stagger: 0.4,
    delay:5,
})
gsap.from(".stripe2 img", 2, {
    opacity:0,
    stagger: 0.4,
    delay:5,
})

gsap.from(".menu", 2, {
    opacity:0,
    stagger: 0.4,
    delay:3,
})
gsap.from(".social", 2, {
    opacity:0,
    stagger: 0.4,
    delay:3,
})
gsap.from(".social a", 2, {
    opacity:0,
    stagger: 0.4,
    delay:3,
})

var main = document.querySelector('.hero');
var nav = document.querySelector('.menu');


window.onscroll = function () {

    if (window.pageYOffset > (main.offsetHeight - nav.offsetHeight)) {
        nav.classList.remove('bottom-nav');
        nav.classList.add('top-nav');
    } else {
        nav.classList.add('bottom-nav');
        nav.classList.remove('top-nav');

    }
}



// $('#album__photos__mix').mixItUp({});

// function mixClear() {
//   setTimeout(function() {
//     $('#album__photos__mix').removeClass('waypoint');
//   }, 2000);
// }



$(function(){
    $('.list').click(function(){
        const value = $(this).attr('data-filter');
        if (value == 'all'){
            $('.photos__box').show('3000');
        }
        else{
            $('.photos__box').not('.' + value).hide('3000');
            $('.photos__box').filter('.' + value).show('3000');
        }
    })
    $('.list').click(function(){
        $(this).addClass('active').siblings().removeClass('active');
    })
})



