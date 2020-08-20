
$(window).on("load", function() {
    

    $('.loading').remove();

    });

/**  Toggle show my works  **/
$(document).ready(function(){
    const $but = $('.k-w'), $content = $(".tab-content");
    $($but).click(function(){
        if (!$(this).hasClass("active")){
            $($but).removeClass("active");
            $(this).addClass("active");
            $($content).hide();
            $('[data-target="'+ $(this).attr("id") +'"]').fadeIn();
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
            $($content).children('[data-target="'+ $(this).attr("data-target") +'"]').fadeIn();
            
       
        }
    })
})


$(document).ready(function(){
    const $cir = $("#nav-circle");

    $($cir).click(function(){
        if($("#nav-sec ul").hasClass('show')){
            $("#nav-sec ul").removeClass("show")
            $("#nav-sec ul").hide();
        }else{
            $("#nav-sec ul").addClass("show")
            $("#nav-sec ul").fadeIn();;
        }

    })
})