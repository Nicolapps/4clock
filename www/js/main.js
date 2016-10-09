var paused = false;

$('.player').stopwatch({
    format: '{MM}:{ss}'
}).stopwatch('start').stopwatch('stop')

$('.player').click(function(){
    $('.player, .pause').removeClass('active')
    $('.player').stopwatch('stop')

    $(this).addClass('active')
    $(this).stopwatch('toggle')
})

$('.pause').click(function(){
    if(!paused) {
        paused = true

        $('.pause').text('✖').addClass('delete')

        $('.player').removeClass('active').stopwatch('stop')
        $('.pause').addClass('active')

    } else {

        $('.player').stopwatch('reset').text('00:00')
        paused = false;
        $('.pause').text('▌▌').removeClass('delete')

    }
})
