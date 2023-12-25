$(function(){
    
});

$(window).scroll(function(){
    $('.header').toggleClass('header--scroll', $(this).scrollTop() > 20);
});