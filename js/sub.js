$(document).ready(function () {
 //헤더
 $('.depth2 , .depth2_bg').hide();

 $('.gnb>li').mouseenter(function () {
   $('#header').addClass('active');
   $('#header .menu .lang li').addClass('active')
   $(this).find('.depth2').stop().fadeIn();
   $('.depth2_bg').stop().fadeIn();

 })

 $('.gnb>li').mouseleave(function () {
   $('#header').removeClass('active');
   $('#header .menu .lang li').removeClass('active')
   $(this).find('.depth2').stop().fadeOut();
   $('.depth2_bg').stop().fadeOut();
 })

 //영상
 $('.tk_movie').hide();
 $('.movie_open').click(function () {
   $('.tk_movie').fadeIn();
   $('#header').hide();
   $('body').css({ 'overflow': 'hidden' });
   $('.tk_movie video')[0].currentTime = 0;
 });

 $('.movie_close').click(function () {
   $('#header').show();
   $('.tk_movie').fadeOut();
   $('body').css({ 'overflow': 'visible' })
 });

 //제품
 const prd_list = new Swiper(".prd_list", {
   loop: true,
   // autoplay: {
   //   delay: 5000,
   //   disableOnInteraction: false,
   // },
   speed: 1000,
   navigation: { // 방향버튼 - 태그추가
     nextEl: ".swiper-button-next", //다음
     prevEl: ".swiper-button-prev", //이전
   },
   slidesPerView: 2, //모바일에서 보이는개수
   spaceBetween: 30,
   centeredSlides: true,
   breakpoints: {
     768: {  //768px 이상에서
       slidesPerView: 2,
       spaceBetween: 30,
     },
     1200: { // 1200px 이상에서 
       slidesPerView: 3,
       spaceBetween:30,
     },
   },

   // 서브01 제품 스와이퍼

 });
});