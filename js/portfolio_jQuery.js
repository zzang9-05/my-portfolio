$(document).ready(function () { /* coding 탭 기능으로 카테고리별로 모아보기 */
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
    
    /* $('ul.tabs li').click(function () {
        let tab_id = $(this).attr('data-tab');

        $('ul.tabs li').removeClass('current hover-fixed');
        $('.tab-content').removeClass('current');

        $(this).addClass('current hover-fixed');
        $('#' + tab_id).addClass('current');
    }) */
});