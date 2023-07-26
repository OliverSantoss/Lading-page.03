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

    var qta;
    var delay = 3000;
    var curIndex;

    initSlider();
    autoPlay();

    function initSlider() {
        qta = $('.sobre-author').length;
        let sizeContainer = 100 * qta;
        let sizeBoxSingle = 100 / qta;

        $('.sobre-author').css('width', sizeBoxSingle + '%');
        $('.scroll-wraper').css('width', sizeContainer +'%');

        for (var i = 0; i < qta; i++){
            if (i == 0) {
                $('.slider-bullets').append('<span style="background-color: rgb(150,150,150);"></span>');
            } else {
                $('.slider-bullets').append('<span></span>');
            }
        }   
    }

    function autoPlay() {
        setInterval(() => {
            curIndex++;
            if (curIndex == qta) {
                curIndex = 0;
                goToSlider(curIndex);
            }
        },delay);

        function goToSlider(curIndex) {
            var offsetX = $('.sobre-author').eq(curIndex).offset().left();
            alert(offsetX);
            $('.scrollEquipe').animate({ 'scrollleft': offsetX });
        }
    }
});