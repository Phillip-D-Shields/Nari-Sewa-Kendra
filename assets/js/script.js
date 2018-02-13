$(document).ready(function () {
   
    var lastScrollTop = 0;
    
    $(window).scroll(function () {
        var scrollTop = $(this).scrollTop();
        if (scrollTop - lastScrollTop > 50) {
            var navHeight = $('.nav-bar').css('height');
            $('.nav-bar').animate({
                top: '-' + navHeight
            }, 150);
            lastScrollTop = scrollTop;
        } else if (lastScrollTop - scrollTop > 50) {
            $('.nav-bar').animate({
                top: '0px'
            }, 150);
            lastScrollTop = scrollTop;
        }
    });
});