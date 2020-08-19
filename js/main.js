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





$(document).ready(function(){
    const $item = $('.n-i'), $content = $("#content");
    $($item).click(function(){
        if (!$(this).hasClass("active")){
            $($item).removeClass("active");
            $($content).children().hide();


            $(this).addClass("active");
            $($content).children('[data-target="'+ $(this).attr("id") +'"]').fadeIn();
            
       
        }
    })
})