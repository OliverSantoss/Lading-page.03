$(function () {
    var mobile = $('.mobile-menu');
    mobile.click(function () {
        $(this).find('ul').slideToggle();
    });

    $('nav a').click(function () {
        let href = $(this).attr('href');
        let offsetTop = $(href).offset().top;

        $('html,body').animate({'scrollTop':offsetTop});
        return false;
    });
});