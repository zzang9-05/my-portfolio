const wrap = document.getElementById('wrap');
const page = document.querySelectorAll('section');
let move = 0;
const lastMove = page.length - 1;
let isScrolling = false;
//console.log(lastMove);

const loading = document.getElementById('loading');
const header = document.querySelector('header');
const logo = document.querySelector('.logo > a');
const categories = document.querySelectorAll('.gnb > li > a');
const color = document.querySelector('.color');
const gnb = document.querySelectorAll('.gnb > li');
const index = gnb.length;
const about = document.getElementById('about');
const clouttonCandies = document.querySelectorAll('.clouttonCandy');
const clouttonCandy2 = document.querySelector('.clouttonCandy2');

const backToTopButton = document.querySelector('.backToTop');

/* 각 section에 인덱스 설정 */
page.forEach((section, index) => {
    section.setAttribute('data-index', index);
});

/* 로딩 페이지 + 새로고침 시, 스크롤 최상단  */
window.onload = function () {
    console.log("로딩 시작");
    loading.style.opacity = '1';
    loading.style.zIndex = '9999';

    setTimeout(function () {
        console.log("로딩 종료");
        loading.style.opacity = '0';
        loading.style.zIndex = '-9999';
        scrollTo(0, 0);

        //로딩 애니메이션 끝난 뒤 alert 실행
        setTimeout(function () {
            alert('본 페이지는 개인 포트폴리오 용도로만 사용되며, \n1920 x 1024 PC 사이즈에 최적화되어 있습니다.');
        }, 800);
    }, 2500);
}

/* 스크롤 이벤트 */
window.addEventListener('wheel', (e) => {
    e.preventDefault();
    if (isScrolling) return;

    isScrolling = true;

    if (e.deltaY > 0 && move < lastMove) {
        move++;
    } else if (e.deltaY < 0 && move > 0) {
        move--;
    };
    console.log(e.deltaY);

    /* 현재 section에 맞는 gnb li a hover 효과 고정 */
    gnb.forEach((item, index) => {
        item.classList.remove('active');
        if (move === index + 1) {
            item.classList.add('active');
        }
    });

    // 페이지 스크롤
    const targetSection = page[move];
    targetSection.scrollIntoView({ behavior: 'smooth' });

    //스크롤 시, header 상단 고정 + color 바 위치 고정 (width만 바뀜)
    if (move > 0) {
        header.style.position = 'fixed';
        header.style.top = '0';
        header.classList.add('on');
        color.style.position = 'fixed';
        color.style.width = '20px';
        about.classList.add('on');
        // 클로튼 캔디 애니메이션 실행
        setTimeout(() => {
            clouttonCandies.forEach((clouttonCandy) => {
                if (!clouttonCandy.classList.contains('animated')) {
                    clouttonCandy.style.animation = 'shake 2s ease-in-out 4';
                    clouttonCandy.classList.add('animated');
                }
            });
            if (!clouttonCandy2.classList.contains('animated')) {
                clouttonCandy2.style.animation = 'shake-flipped 2.5s ease-in-out 4';
                clouttonCandy2.classList.add('animated');
            }
        }, 300);
    } else {
        header.style.position = 'absolute';
        header.style.top = '';
        header.classList.remove('on');
        color.style.position = 'absolute';
        color.style.width = '80px';
        about.classList.remove('on');

        // 애니메이션 초기화
        clouttonCandies.forEach((clouttonCandy) => {
            clouttonCandy.style.animation = 'none';
            clouttonCandy.classList.remove('animated');
        });
        clouttonCandy2.style.animation = 'none';
        clouttonCandy2.classList.remove('animated');
    }

    setTimeout(() => {
        isScrolling = false;
    }, 800);
}, { passive: false });

/* 헤더 로고 및 카테고리 클릭 시 헤더 위치 세팅 */
logo.addEventListener('click', function () {
    header.style.position = 'absolute';
    header.style.top = '';
    header.classList.remove('on');
    color.style.position = 'absolute';
    color.style.width = '80px';
    move = 0; //첫번째 섹션으로 이동
    page[move].scrollIntoView({ behavior: 'smooth' }); //첫번째 섹션으로 스크롤

    gnb.forEach((item) => {
        item.classList.remove('active');
    });
});

/* 카테고리 클릭 시 해당 섹션으로 이동 및 메뉴 활성화 */
categories.forEach((cate, index) => {
    cate.addEventListener('click', function (e) {
        e.preventDefault();

        //현재 section에 맞는 메뉴 아이템 활성화
        gnb.forEach(item => item.classList.remove('active'));
        gnb[index].classList.add('active');

        const targetSection = page[index];
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' });
            move = index; // move 업데이트
        }

        if (index > 0) {
            header.style.position = 'fixed';
            header.style.top = '0';
            header.classList.add('on');
            color.style.position = 'fixed';
            color.style.width = '20px';
            about.classList.add('on');
            setTimeout(() => {
                clouttonCandies.forEach(clouttonCandy => {
                    clouttonCandy.style.animation = 'shake 2s ease-in-out infinite';
                });
            }, 300);
        } else {
            header.style.position = 'absolute';
            header.classList.remove('on');
            color.style.position = 'absolute';
            color.style.width = '80px';
            about.classList.remove('on');
        }
    });
});
categories.forEach(cate => {
    cate.addEventListener('click', function (e) {
        e.preventDefault(); //기본 링크 클릭 동작 방지

        const index = this.getAttribute('data-index');
        const move = parseInt(index); //인덱스를 정수로 변환

        header.style.position = 'fixed';
        header.style.top = '0';
        header.classList.add('on');
        color.style.position = 'fixed';
        color.style.width = '20px';
        about.classList.add('on');

        const targetSection = page[move];
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
});


/* coding swiper */
var swiper = new Swiper(".myCoding", {
    slidesPerView: 1,
    spaceBetween: 0,
    preventClicks: false,
    preventClicksPropagation: false,
    loop: true,
    speed: 1000,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    autoplay: {
        delay: 4000, // 4초마다 자동으로 넘어감
        disableOnInteraction: false, // 사용자 상호작용 후에도 autoplay 유지
    }
});

/* coding 탭 기능으로 카테고리별로 모아보기 */
$(document).ready(function () {

    // 새로고침 시 기본적으로 'tab-1' 탭을 선택되도록 설정
    let defaultTab = $('ul.tabs li[data-tab="tab-1"]');

    // 기본 탭을 클릭한 것처럼 처리 (탭과 콘텐츠 활성화)
    defaultTab.addClass('current hover-fixed');
    $('#' + defaultTab.attr('data-tab')).addClass('current');

    // 탭 클릭 이벤트 처리
    $('ul.tabs li').click(function () {
        let tab_id = $(this).attr('data-tab');

        // 기존 상태 제거
        $('ul.tabs li').removeClass('current hover-fixed');
        $('.tab-content').removeClass('current');

        // 클릭된 탭과 그에 해당하는 콘텐츠 활성화
        $(this).addClass('current hover-fixed');
        $('#' + tab_id).addClass('current');
    });
})

/* design swiper */
var swiper = new Swiper(".myDesign", {
    slidesPerView: 3,
    spaceBetween: 0,
    centeredSlides: true,
    slidesPerGroupSkip: 1,
    loop: true,
    grabCursor: true,
    keyboard: {
        enabled: true,
    },
    breakpoints: {
        768: {
            slidesPerView: 5,
            slidesPerGroup: 1,
        },
    },
    scrollbar: {
        el: ".swiper-scrollbar",
        draggable: true,
        hide: false,
    },
    on: {
        init: function () {
            setScrollbarDragSize();
            // 초기 탭 콘텐츠 표시
            const initialTab = this.slides[this.activeIndex].getAttribute('data-tab');
            showTabContent(initialTab);
        },
        resize: function () {
            setScrollbarDragSize();
        },
        slideChange: function () {
            setScrollbarDragSize();
            const activeTab = this.slides[this.activeIndex].getAttribute('data-tab');
            //활성화된 슬라이드의 data-tab 값에 따라 .tab 변경
            showTabContent(activeTab);
        }
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: false,
        hide: true,
    },
    slidesPerGroup: 1,
});

// 드래그바 크기 동적 업데이트 함수
function setScrollbarDragSize() {
    const swiperSlides = document.querySelectorAll('.myDesign .swiper-slide');
    const totalSlides = swiperSlides.length; // 전체 슬라이드 개수 (6)
    const dragSize = (100 / totalSlides) * 6; // 보이는 슬라이드의 비율에 맞춰 드래그바 크기 계산
    console.log(dragSize);
    const dragBar = document.querySelector('.swiper-scrollbar-drag');

    // 슬라이드 개수에 맞게 드래그바 너비 업데이트
    if (dragBar) {
        dragBar.style.cssText = `width: ${dragSize}% !important`;
    }
}

// 탭 콘텐츠 보여주는 함수
function showTabContent(tabIndex) {
    // 모든 .tab 요소 숨기기
    document.querySelectorAll('.tab').forEach(tab => {
        tab.style.display = 'none';
    });

    // 현재 활성화된 tab만 표시
    const activeContent = document.querySelector(`.tab[data-content='${tabIndex}']`);
    if (activeContent) {
        activeContent.style.display = 'flex';
    }
}

//topButton
window.addEventListener('scroll', () => {
    if (document.documentElement.scrollTop > 200) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});

// 탑 버튼 클릭 시 스크롤 최상단으로 이동
backToTopButton.addEventListener('click', () => {
    header.style.position = 'absolute';
    header.style.top = '';
    header.classList.remove('on');
    move = 0; //첫번째 섹션으로 이동
    page[move].scrollIntoView({ behavior: 'smooth' }); //첫번째 섹션으로 스크롤
    color.style.position = 'absolute';
    color.style.width = '80px';

    // 클릭 후 이미지를 초기 이미지로 되돌림
    backToTopButton.style.backgroundImage = "url('../img/topbutton/arrow_darkBlue.png')";
});