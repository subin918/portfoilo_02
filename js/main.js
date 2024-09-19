$(document).ready(function () {
  //풀페이지
  $('#fullpage').fullpage({
    navigation: true,
    navigationPosition: 'left',
    anchors: ['menu1', 'menu2', 'menu3', 'menu4' , 'menu5'],
    menu: '.gnb',
    responsiveWidth: 1024,
    autoScrolling: true,
    scrollHorizontally: true,

    onLeave: function (origin, destination, direction, trigger) {
      
      if (destination == 6) {
        $("#fp-nav").fadeOut();
      } else {
        $("#fp-nav").fadeIn();
      }
      if (destination == 2) {
        $("#header").addClass("on");
      } else if (destination == 3) {
        $("#header").addClass("on");
      } else if (destination == 4) {
        $("#header").addClass("on");
      }else if (destination == 5) {
        $("#header").addClass("on");
      }else if (destination == 6) {
        $("#header").addClass("on");
      }

      else {
        $("#header").removeClass("on");
      }
      
      if (destination == 2) {
        $("#fp-nav").addClass("on");
      } else if (destination == 3) {
        $("#fp-nav").addClass("on");
      } else if (destination == 4) {
        $("#fp-nav").addClass("on");
      }else if (destination == 5) {
        $("#fp-nav").addClass("on");
      }else if (destination == 6) {
        $("#fp-nav").addClass("on");
      }

      else {
        $("#fp-nav").removeClass("on");
      }

      
    }

  });


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

  });

  //혁신기술
    $("#skill ul li:nth-child(1)").addClass("active")
    $("#skill ul li").mouseenter(function () {
      $(this).addClass("active").siblings().removeClass("active");
    });
});//초기화