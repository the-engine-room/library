$(document).ready(function() {
    // mobile nav toggle
    $('nav a#toggle').on('click', function() {
        $('nav ul.nav').toggleClass('visible');
    });

    $('body').scrollspy({
        target: 'nav'
    });
});
