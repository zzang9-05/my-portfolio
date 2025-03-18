const btnMenu = document.querySelector('.btn_menu');
const btnClose = document.querySelector('.menu_list > p');
const menuList = document.querySelector('.menu_list');
const btnTop = document.getElementById('btn_top');

btnMenu.addEventListener('click', () => {
    menuList.style.display = "block"
});
btnClose.addEventListener('click', () => {
    menuList.style.display = "none";
});


/* top 버튼 기능 */
window.addEventListener('scroll', function() {
    if (this.scrollY > 250) {
        btnTop.classList.add('on');
    } else {
        btnTop.classList.remove('on');
    }
});
btnTop.addEventListener('click', function(e) {
    e.preventDefault();

    window.scrollTo({top: 0, behavior: "smooth"});
})
/* //top 버튼 기능 */