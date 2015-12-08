$(document).ready(function() {
    // mobile nav toggle
    $('nav a#bars').on('click', function() {
        $('nav ul.sidebar').toggle();
    });

    $('body').scrollspy({
        target: 'nav'
    });
});
