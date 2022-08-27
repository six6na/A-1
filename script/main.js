$(document).ready(function(){
  $(".subMenu").hide();

  $(".mainMenu > a").mouseover(function(){
    $(".subMenu").stop().slideDown(300);
  }).mouseout(function(){
    $(".subMenu").stop().slideUp(300);
  });

  var imgs = 2;
  var now = 0;

  start();

  function start() {
    $(".imgSlide > a").eq(0).siblings().animate({marginTop:"-300px"});

    setInterval(function(){
      now = now==imgs ? 0 : now+=1;

      $(".imgSlide > a").eq(now-1).animate({marginTop:"-300px"});
      $(".imgSlide > a").eq(now).animate({marginTop:"0px"});
    },3000);
  }

  $(function(){
    $(".tabMenu > li > a").click(function(){
      $(this).parent().addClass("active").siblings().removeClass("active");
    });
  });

  $(".notice li:first").click(function(){
    $("#modalWrap").addClass("active");
  });
  $(".btn").click(function(){
    $("#modalWrap").removeClass("active");
  });
});