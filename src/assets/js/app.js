// Add class header if scrolling page
$(window).scroll(function() {
    var height = $(window).scrollTop();

    if(height > 0 ){
        $('header').addClass('header-scroll');
    } else {
        $('header').removeClass('header-scroll');
    }
});
 