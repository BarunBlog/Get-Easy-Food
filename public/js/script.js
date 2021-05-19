$(document).ready(function(){

    $('#menu-bar').click(function(){
        $(this).toggleClass('fa-times');

        $('.navbar').toggleClass('nav-toggle');
    });
    
    $(window).on('scroll load', function(){
        $('#menu-bar').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');

        // scroll spy

        $('section').each(function(){
            let top = $(window).scrollTop(); // Top position of scrollbar
            let offset = $(this).offset().top - 250; // top position of the offset coordinates
            let height = $(this).height(); // height of the current element 
            let id = $(this).attr('id');

            if(top > offset && top < offset + height){
                $('.navbar ul li a').removeClass('active');
                $('.navbar').find(`[href="#${id}"]`).addClass('active');
            }
        })
    });

    $('.menu .list .btn').click(function(){
        $(this).addClass('active').siblings().removeClass('active');

        let src = $(this).attr('data-src');
        $('#menu-img').attr('src', src);
    })
});