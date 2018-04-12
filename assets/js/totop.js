$(function($) {
    function scrollToPos() {
        var title = "回到顶部";
        $('<a href="#" id="to-top" title="' + title + '"> <div class="to-top-wrap"></div></a>').appendTo("body");
        var $e = $('#to-top')
        $(window).scroll(function() {
            $(window).scrollTop() > $(window).height() ? $e.fadeIn(500) : $e.fadeOut(500)
        })
        $e.click(function(event) {
            event.preventDefault();
            $("html,body").animate({
                scrollTop: 0
            }, 600)
        })
    }
    scrollToPos();
})
