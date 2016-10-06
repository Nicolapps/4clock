
$('.player').stopwatch({
    format: '{MM}:{ss}'
}).stopwatch('start').stopwatch('stop')

$('.player').click(function(){
    $('.player, .pause').removeClass('active')
    $('.player').stopwatch('stop')

    $(this).addClass('active');
    $(this).stopwatch('toggle')
})

$('.pause').click(() => {
    $('.player').removeClass('active').stopwatch('stop');
    $('.pause').addClass('active');
})
