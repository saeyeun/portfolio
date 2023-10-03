
$(document).ready(function () {
  $(window).load(function () {
    var change = $(".change_circle"); //늘어나는 원
    var circle = $(".main_circle"); //고정된 원

    mainAni();
    inEvent();

    function inEvent() { //함수실행
      $(window).on('resize', mainAni);
      $(window).on('scroll', mainAni);
      // $(window).on('scroll', scrollAni);   
    }

    function mainAni() {
      var windowWidth = $(window).width();
      //해상도 980px 이상일 때만 적용되는 애니메이션
      if (windowWidth > 980) {
        var scrollTop = $(this).scrollTop();
        var currentWidth = change.width(); //현재 너비 가져오기
        var currentHeight = change.height(); //현재 높이 가져오기

        circle.css({ 'width': 500 + 'px' }); //기존 너비 설정
        circle.css({ 'height': 500 + 'px' }); //기존 높이 설정
        change.css({ 'width': scrollTop * 3.5 });//너비 변경
        change.css({ 'height': scrollTop * 3.5 });//높이 변경

        // main_title 스크롤을 내릴 때, opicity 0으로 조절
        var max = 420; //투명도가 0이 되는 스크롤 위치
        if (scrollTop < max) {
          $(".main_title_box").css({ "opacity": (max - scrollTop) / max });
        } else {
          $(".main_title_box").css({ "opacity": 0 });
        }
      } else {
        circle.css({ 'width': 400 + 'px' }); //기존 너비 설정
        circle.css({ 'height': 400 + 'px' }); //기존 높이 설정
      }


    }
  })
});