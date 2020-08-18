/**  Toggle show my works  **/
$(document).ready(function(){
    const $but = $('.k-w'), $content = $(".tab-content");
    $($but).click(function(){
        if (!$(this).hasClass("active")){
            $($but).removeClass("active");
            $(this).addClass("active");
            $($content).hide("slow");
            $('[data-target="'+ $(this).attr("id") +'"]').show("slow");
        }
    })
})

$('body').scrollspy({ target: '#nav' })
$(window).scroll(function(){
    let i = $(".list-group-item");
    if( window.scrollY == 0 ){
        $(i[0]).addClass("active");
    }
})