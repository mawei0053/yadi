var $container = $('.container');
var $wrapper = $container.find('.wrapper');
var $slides = $wrapper.find('.slide');
var $pagination = $container.find('.pagination');


var len = $slides.length;
var activeIndex = 0;
var timer = "";

for(var i = 0; i < len; i++) {
    $pagination.append('<span></span>')
}
// $slides.eq(0).fadeIn();
change(0)




function change (activeIndex) {
    $slides.eq(activeIndex).fadeIn().siblings().fadeOut();
    $pagination.find('span').eq(activeIndex).addClass('active').siblings().removeClass('active')
}

timer = setInterval(function () {
    $next.click();

    }, 3000)

$pagination.find('span').on('click', function (){
    activeIndex = $(this).index();
    change(activeIndex)
})
$container.hover(function () {
    clearInterval(timer)
}, function () {
    timer = setInterval(function () {
        $next.click();

    }, 3000)
})