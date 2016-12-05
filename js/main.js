
$(document).ready(function(){

    //toggle menu
    var menu = $('.js-toggleMenu');
    menu.on('click', function(e){
        
        $('body').addClass('has-menu');
    });


    // hero change color
    var hero   = $('.js-hero');
    var circle = $('.js-changeHero');

    circle.hover(function(e){

        e.preventDefault();

        var slideId = $(this).attr('data-slide');

        hero.find('.Hero-bck').removeClass('is-active');
        hero.find('.Hero-bck' + slideId).addClass('is-active');

    });


    // hit  and run
    var hit   = $('.js-hitrun');

    hit.on('click', function(e){
        $('body').addClass('hit-and-run');
    });


    // floating banner
    /*var input   = $('.js-floatingLabel');

    input.on('focus', function(e){
        $('body').addClass('hit-and-run');
    });


    // scroll to div
    var item = $('.js-scrollTo');

    item.on('click', function({
        var scrollTo = $(this).attr('href');

        $(document).scrollTo(scrollTo);
    });
*/



});