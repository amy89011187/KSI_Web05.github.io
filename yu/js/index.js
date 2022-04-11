
    $(window).on("load", function() { // makes sure the whole site is loaded
      //preloader
      $("#status").fadeOut(1200); 
      $("#preloader").delay(1000).fadeOut("slow"); 
      $(document).masonry();    
    });

var menubtn = document.getElementById('menubtn');
var closebtn =document.getElementById('closebtn');
var navbox =document.getElementById('navbox');
$(document).ready(function() {
    $('#menubtn').click(function() {
        // $('#navbox').fadeIn(500);
        $('#menubtn').hide(1000);
        $('#navbox').css({"display":"block"}),
        $('#navbox').animate({
            height:'100%',
            width: '15%',
        })
      });
 $('#closebtn').click(function() {
    $('#menubtn').show(400);
    $('#navbox').css({"display":"none"}),
    $('#navbox').animate({
        height:'0',
        width: '0',
    })
  });
});

// menubtn.onclick=function(){
//     navbox.style.display="block";
//     menubtn.style.display="none";
// }
// closebtn.onclick=function(){
//     navbox.style.display="none";
//     menubtn.style.display="block";
// }

var mySwiper = new Swiper('.swiper-container', {//初始化Swiper
    autoplay: {//自動切換
        delay: 15000,
        stopOnLastSlide: false,
        disableOnInteraction: false,
    },
        navigation: {//前進後退
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {//分頁器
        el: '.swiper-pagination',
        clickable :true,
    },
        loop : true,//循環
    })

  //active menu
    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        $(document).off("scroll");
   
        $('a').each(function () {
          $(this).removeClass('active');
        })
        $(this).addClass('active');
   
        var target = this.hash;
        $target = $(target);
        $('html, body').stop().animate({
          'scrollTop': $target.offset().top+2
        }, 500, 'swing', function () {
          window.location.hash = target;
          $(document).on("scroll", onScroll);
        });
      });
      //scroll js
    smoothScroll.init({
        selector: '[data-scroll]',
        selectorHeader: '[data-scroll-header]', 
        speed: 500, 
        easing: 'easeInOutCubic', 
        updateURL: true, 
        offset: 0,
        callback: function ( toggle, anchor ) {}
      });
      //Top
      $(document).ready(function() {

        $('.top a').click(function(event) {
         event.preventDefault(); //默認動作
         $('html,body').animate({
           scrollTop: 0
         }, 1000);
        });
       
       });
