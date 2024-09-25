$(document).ready(function () {
    $('.btn_mobile').on('click', function () {
        $('.sub_header').fadeIn();
    }) /* 서서히 나타남 fadeIn(), 서서히 사라짐 fadeOut() */
})
$(document).ready(function () {
    $('.close').on('click', function () {
        $('.sub_header').fadeOut();
    }) /* 서서히 나타남 fadeIn(), 서서히 사라짐 fadeOut() */
})


$(document).ready(function () {
    // href 속성이 '#'인 모든 'a' 태그에 대해 클릭 이벤트 추가
    $('a[href="#"]').click(function (event) {
        // 기본 동작인 페이지 이동을 방지
        event.preventDefault();
        });
})

$(document).ready(function () {
    /* event_close 버튼 */
    $('.btn_close').on('click', function () {
        $('.skip_event').fadeOut();
    }) /* 서서히 나타남 fadeIn(), 서서히 사라짐 fadeOut() */
})

$('.product_list > li > a').on('click', function(e) {
        e.preventDefault();
    })

/* //tab */
$('.product_list li').click(function() {
        var index = $(this).index();
        console.log(index)
        
        $('.product_list li').removeClass('active');
        $('.product_wrap > div').removeClass('active');

        $(this).addClass('active');
        $('.product_wrap > div').eq(index).addClass('active');
    }); /* eq는 nth-child(index) 개념 */

$('.family_site > a').on('click', function () {
    $(this).toggleClass('on');
    $('.family_site > span').toggleClass('on');
})    

var swiper = new Swiper(".rbfy_visual", {
    pagination: {
        el: ".swiper-pagination",
        type: "progressbar",
    },
    /* navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    }, */
});