"use strict"
// Spoiler
function refresh_audio() {
    $('.item-spoller__title').off('click').on('click', function () {
        $(this).next().slideToggle(250)
    })
}

// Up and down button
$(function(){
	$(window).scroll(function(){
		if($(window).scrollTop() > 100) {
			$('#scroll-btn_top, #scroll-btn_bottom').show();
		} else {
			$('#scroll-btn_top, #scroll-btn_bottom').hide();
		}
	});
 
	$('#scroll-btn_top').click(function(){
		$('html, body').animate({scrollTop: 0}, 600);
		return false;
	});

    $(function(){
        $('#scroll-btn_bottom').click(function(){
            $('html, body').animate({scrollTop: $(document).height() - $(window).height()}, 600);
            return false;
        });
    });
});


// Up button
$(document).ready(function () {

    $(function () {
        $("#up").hide()
        $("#down").hide()

        $(window).scroll(function () {
            if ($(this).scrollTop() > 700) {
                $("#up").fadeIn()
            } else {
                $("#up").fadeOut()
            }
            if ($(this).scrollTop() < $(document).height() - 1500) {
                $("#down").fadeIn()
            } else {
                $("#down").fadeOut()
            }
        })

        $("#up").click(function () {
            $("body,html").animate({
                scrollTop: 0
            }, 800)
            return false
        })
        $("#down").click(function () {
            $("body,html").animate({
                scrollTop: $(document).height()
            }, 800)
            return false
        })
    })
})