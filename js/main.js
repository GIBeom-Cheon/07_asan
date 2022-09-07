const elFooter = document.querySelector("footer");
const elConWrap = document.querySelector("#con_wrap");

// #con_wrap의 높이 구하기 -footer에 fixed 사용 안하때

let winH = $(window).height(); // 열려져 있는 화면의 높이
const headerH = $('header').height();
const footerH  = elFooter.offsetHeight; // footer 높이 (자바스크립트)

console.log(`현재 화면 높이 ${winH} / header의 높이 ${headerH} / footer 의높이 ${footerH}`);

// #con_wrap 의 높이는 화면전체 세로에서 헤더, 푸터 높이를 빼준 값

let con_wrap_Height = winH - (headerH + footerH);
// ${"#con_wrap"}.css({height: con_wrap_Height});


elConWrap.style.height = `${con_wrap_Height}px`;


function resizeWid(){
    let winH = $(window).height();
    let con_wrap_Height = winH - (headerH + footerH);
    elConWrap.style.height = `${con_wrap_Height}px`;
}

window.addEventListener("resize", resizeWid);




//  lnb 슬라이드 메뉴 !!! ex) 01
const du = 400;
let open = 0;

$(".lnb_btn").click(function(){
    if( open == 0){
        $('#wrap').animate({left:274},du);
        $('#lnb').animate({left:0},du);
        $(".cover").fadeIn(du);
        $('.lnb_btn').find('img').attr({'src':'img/bg_header_lnb_active.png','alt':'메뉴닫기'});
        open = 1;
    }
    else{
        $('#wrap').animate({left:0},du);
        $('#lnb').animate({left:-274},du);
        $(".cover").fadeOut(du);
        $('.lnb_btn').find('img').attr({'src':'img/bg_header_lnb.png','alt':'메뉴열기'});
        open = 0;
    }
});











//  lnb 슬라이드 메뉴 !!! js 버전 해보기  .ing


// const lnbBtn = document.querySelector(".lnb_btn");

// function lnbEvent(){

// }


// lnbBtn.addEventListener("click", lnbEvent);



//lnb 의 호버시 background color js로  짜보기