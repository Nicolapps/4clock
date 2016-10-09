var paused = true,
    didTimerStart = false

$('.player').stopwatch({
    format: '{MM}:{ss}'
}).stopwatch('start').stopwatch('stop')

$('.player').click(function(){
    $('.player, .pause').removeClass('active')

    $('.pause').text('▌▌').removeClass('delete')
    paused = false

    didTimerStart = true

    $('.player').stopwatch('stop')

    $(this).addClass('active')
    $(this).stopwatch('toggle')
})

$('.pause').click(function(){
    if(!paused) { // Pause timer

        if(didTimerStart){
            paused = true

            $('.pause').text('✕').addClass('delete')

            $('.player').removeClass('active').stopwatch('stop')
            $('.pause').addClass('active')
        }
        
    } else { // Reset timer

        $('.player').stopwatch('reset').text('00:00')
        paused = true
        didTimerStart = false
        $('.pause').text('▌▌').removeClass('delete')

    }
})
