$(document).ready(function() {
    
    //duplicate and fill in translations with en when missing
    /**
     * Books Object
     * holds list of HTML objects (BookLists),
     * array of references(BookIndexes) and
     * function(BookIndexer) to parse the DOM into the reference array
     * */
    var Books = {
        BookLists: {
            en: $('#books[lang="en"]').find('.ref'),
            fr: $('#books[lang="fr"]').find('.ref'),
            id: $('#books[lang="id"]').find('.ref')
        },
        BookIndexes: [],
        BookIndexer: function() {
            var indexer = [];
            $.each(this.BookLists, function(lang, list){
                indexer[lang] = [];
                $.each(list, function(i, e){
                    var ref = $(e).data('ref');
                    indexer[lang].push( ref );
                });
            });
            this.BookIndexes = indexer;
        }
    };
    
    Books.BookIndexer();
    console.log(Books.BookIndexes);
    
    // cycle over BookIndexes.en 
    $.each(Books.BookIndexes.en, function(i, ref){
        // check if ref exists in fr/id
        if(Books.BookIndexes.fr.indexOf(ref) < 0) {
            // if not, clone from en
            $('#en-' + ref).clone().appendTo('#books[lang="fr"] div.fr-last-row').addClass('greyed');
        }
        console.log(Books.BookIndexes.id.indexOf(ref));
        if(Books.BookIndexes.id.indexOf(ref) < 0) {
            // if not, clone from en
            $('#en-' + ref).clone().appendTo('#books[lang="id"] div.id-last-row').addClass('greyed');
        }
        // else do nothing
    // end
    });
    
    
    // translation toggles
    $('nav.lang-nav > ul > li > a').click(function(e){
        e.preventDefault();
        var targetLang = $(this).data('lang-target');
        
        $('nav.lang-nav > ul > li > a').removeClass('active');
        $(this).addClass('active');
        
        $('div.lang-box.lang-show').removeClass('lang-show').addClass('lang-hidden');
        $('div.lang-box[lang="' + targetLang + '"]').removeClass('lang-hidden').addClass('lang-show');
    });
    
    
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
        var offsetTop = $('nav ul.nav').hasClass('visible') ? 45 : -45;
        $('html, body').animate({
            scrollTop: element.offset().top - element.outerHeight() - offsetTop
        }, 1000);
        window.location.hash = href;

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
        if (window.innerWidth > 550) { // desktop
            $('nav ul.nav').css({'display': 'block'});
        } else { // phablet or smaller
            $('nav ul.nav').css({'display': 'none'});
        }
    });

    $('body').scrollspy({
        target: 'nav'
    });
});
