/*jshint browser: true, devel: true, jquery: true*/

$(document).ready(function () {
    
    /*------------------- Open & close checklist items -------------------*/
     $(".checklist-item-title").on("click", function () {
        $(this).next('.checklist-sub-item-wrapper').slideToggle(600);

         
        if ($(this).closest('.checklist-item').hasClass('open')) {
            $(this).closest('.checklist-item').removeClass('open');
        } else {
            $(this).closest('.checklist-item').addClass('open');
        }
         
     });
    
    /*------------------- Close checklist step button -------------------*/
    $(' .checklist-close-step').on('click', function(){
        //$(this).parents('.checklist-sub-item-wrapper').slideToggle(600);
        $(this).parents('.checklist-item').removeClass('open');
    });
    
    
    /*------------------- Checkbox functionality -------------------*/
    $('.checklist-item-checkbox').on('click', function(){
        if ($(this).parents('.checklist-sub-item').hasClass('done')) {
            $(this).parents('.checklist-sub-item').removeClass('done');
        } else {
            $(this).parents('.checklist-sub-item').addClass('done');
        }
        
        $(this).parents('.checklist-item').find('.checklist-sub-item').each(function(){
            
            var item_completion = false;
            if ($(this).hasClass('done')) {
                item_completion = true;
            } else {
                item_completion = false;
                $(this).parents('.checklist-item').removeClass('item-done');
                return false;
            }
            if (item_completion === true) {
                $(this).parents('.checklist-item').addClass('item-done');
            }
            
        });
    });
    
    
    /*------------------- Email button functionality -------------------*/
    //Get position of main content wrapper
    var btn_position = $('#email-wrapper').position(),
        btn_top = btn_position.top;
        
    $(window).scroll(function () {
        if($(window).scrollTop() >= btn_top) {
            $('#email-wrapper').addClass('minimised');
        } else if ($(window).scrollTop() < btn_top) {
            $('#email-wrapper').removeClass('minimised');
        }
    });

    
}); // END doc ready

