
//header window expander
$(document).ready(function(){
    $('.header').height($(window).height());
})

//scroll effect
$(".navbar a").click(function(){
    $("body,html").animate({
        scrollTop:$("#" + $(this).data('value')).offset().top
    },1000)
})

//button
$(".fa-bars").click(
    () => $(".fa-home").toggle()
);




