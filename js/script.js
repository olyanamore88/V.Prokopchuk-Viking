$(function(){
  
$('[data-fancybox]').fancybox({
youtube: {
  // controls:0,
  // showinfo: 0 
}

});

$('.heroes__slider-img').slick({
   prevArrow: '<button type="button" class="slick-prev"><img src="images/arrow-left.png" alt="prev"></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="images/arrow-right.png" alt="next"></button>',  
   slidesToShow: 1,
   slidesToScroll: 1,
   asNavFor: '.heroes__slider-text',
   responsive: [
    {
       breakpoint: 500,
       settings: {
         arrows:false,
         infinite: true,
         dots: true
       }
    }
 ]
 });
 $('.heroes__slider-text').slick({
   slidesToShow: 1,
   slidesToScroll: 1,
   asNavFor: '.heroes__slider-img',
   fade: true,

 });

// $('.heroes__slider-img').slick({
//    prevArrow: '<button type="button" class="slick-prev"><img src="images/arrow-left.png" alt=""></button>',
//    nextArrow: '<button type="button" class="slick-next"><img src="images/arrow-right.png" alt=""></button>',  
//    dots: false,
//    responsive: [
//       {
//          breakpoint: 715,
//          settings: {
//            arrows:false,
//            infinite: true,
//            autoplay: true,
//            dots: true
//          }
//       }
//    ]
// });

$('.menu__btn').click(function (event) {
  $('.menu__btn,.menu__list').toggleClass('active');
  $('body').toggleClass('lock');
});

});