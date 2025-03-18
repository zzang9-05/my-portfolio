
function shuffleArray(randomArray) {
    for (let i = randomArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [randomArray[i], randomArray[j]] = [randomArray[j], randomArray[i]];
    }
    return randomArray;
}
/* gnb > li img 이미지 새로고침 시, 랜덤 변경 (+ li끼리 겹치지 않게) */

window.onload = function() {
    let cateImgs = document.querySelectorAll('.changeImg');
    const newImgSrcs = [
        'img/img_main01.png',
        'img/img_main02.png',
        'img/img_main03.png',
        'img/img_main04.png',
        'img/img_main05.png',
    ];
    // 배열 섞기
    const shuffledImgSrcs = shuffleArray([...newImgSrcs]);

    cateImgs.forEach((cateImg, index) => {
        cateImg.src = shuffledImgSrcs[index];
    });
}


/* total_program 자세히보기 */
const programs = document.querySelectorAll('.program_list > li');

programs.forEach(li_detail => {
    li_detail.addEventListener('mouseover', function() {
        li_detail.querySelector('.move_detail > span').style.visibility = 'visible';
        li_detail.querySelector('.move_detail > span').style.opacity = '1';
    });
    li_detail.addEventListener('mouseleave', function() {
        li_detail.querySelector('.move_detail > span').style.visibility = 'hidden';
        li_detail.querySelector('.move_detail > span').style.opacity = '0';
    });
});
/* // total_program 자세히보기 */
