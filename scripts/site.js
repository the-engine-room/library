$(document).ready(function() {
    // nav toggle
    $('nav a#toggle').on('click', function() {
        $('nav ul.nav').slideToggle(function complete() {
            if ($(this).css('display') === 'block') {
                $('a#toggle').html("&#8964;"); // chevron down
            } else {
                $(this).removeClass('visible');
                $('a#toggle').html("&#8801;"); // triple bars
            }
        }).addClass('visible');
    });

    $('nav ul.nav li').on('click', function(event) {
        event.preventDefault();

        // animate scroll to top
        var href = $(this).children('a').attr('href');
        var element = $(href);
        var offsetTop = -25;
        $('html, body').animate({
            scrollTop: element.offset().top - element.outerHeight() - offsetTop
        }, 1000);

        // hide mobile nav if visible
        if ($('nav ul.nav').hasClass('visible')) {
            $('nav ul.nav').slideToggle().removeClass('visible');
            // reset content to triple bars
            $('a#toggle').html("&#8801;");
        }
    });

    // if resize, hide mobile nav
    $(window).resize(function() {
        $('nav ul.nav').removeClass('visible');
    });

    $('body').scrollspy({
        target: 'nav'
    });
});
