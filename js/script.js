$(function() {
  // 웹페이지 로드 후 함수 실행
  // $(window).load(function () {
  var change = $(".change_circle"); //늘어나는 원
  var circle = $(".main_circle"); //고정된 원

  // 함수 실행
  $(window).on('resize', mainAni); //브라우저 창 변경될 때 호출
  $(window).on('scroll', mainAni);

  function mainAni() {
    var windowWidth = $(window).width();
    //해상도 980px 이상일 때만 적용되는 애니메이션
    if (windowWidth > 980) {
      var scrollTop = $(this).scrollTop();

      circle.css({ 'width': 500 + 'px' }); //기존 width 설정
      circle.css({ 'height': 500 + 'px' }); //기존 height 설정
      change.css({ 'width': scrollTop * 3.5 });//변경되는 width 값
      change.css({ 'height': scrollTop * 3.5 });//변경되는 height 값

      // main_title 스크롤을 내릴 때, opicity 0으로 조절
      if (scrollTop < 280) {
        $(".main_title_box").css({ "opacity": (420 - scrollTop) / 420 });
        $(".main_circle").css({ "opacity": (200 - scrollTop) / 200 });
      } else {
        $(".main_title_box").css({ "opacity": 0 });
        $(".main_circle").css({ "opacity": 0 });
      }

      // 스크롤 값이 520보다 작으면 나타나고, 그 이상이면 사라짐
      if (scrollTop < 520) {
        $(".main_title_box").css({ "display": "block" });
      } else {
        $(".main_title_box").css({ "display": "none" });
      }
    } else {
      circle.css({ 'width': 400 + 'px' }); //기존 width 설정
      circle.css({ 'height': 400 + 'px' }); //기존 height 설정
    }
  }
  mainAni();

  // project 영역 스크롤이벤트
  $(window).scroll(function (e) {
    e.preventDefault()
    var sc = $(this).scrollTop();

    for (var i = 1; i <= 6; i++){
      var pj = $(".project_"+i).offset().top;
      if (sc>=pj-320) {
        //i번째 프로젝트의 자식요소 중에서 .project_left를 가진 요소를 선택
        $(".project_"+i+" .project_left").addClass('on')
        $(".project_"+i+" .project_right").addClass('on')
      }
    }
  });

  // menu_btn을 클릭했을 때, 메뉴가 열리도록 설정
  $('.menu_btn').click(function () {
    $(this).toggleClass('active')
    $('.menu_wrap').toggleClass('active');
  })

  // menu의 a를 클릭했을 때, 메뉴가 닫히도록 설정
  $('.menu_wrap .menu_list li a').click(function () {
    // e.preventDefault();를 삭제해야 a와 연결된 링크로 이동
    //기본 클릭 이벤트 동작을 막아줄 때(ex.<a>, <button>)
    $('.menu_wrap').removeClass('active');
    $('.menu_btn').removeClass('active');
  })
});