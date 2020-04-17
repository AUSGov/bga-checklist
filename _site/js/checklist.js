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
        $(this).parents('.checklist-sub-item-wrapper').hide();
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
    //Get position of button using the header height
    var wrapper_pos = $('#email-wrapper').position(),
        wrapper_top = wrapper_pos.top,
        btn_pos = $('.email-btn-wrapper').position(),
        btn_left = btn_pos.left,
        btn_left_minimised = btn_left + 80 + 194 + 56;
       
    console.log(btn_left);
        
    $(window).scroll(function () {
        if($(window).scrollTop() >= (wrapper_top)) {
            $('#email-wrapper').addClass('minimised');
            
            setTimeout(function() {
                //$('#email-wrapper').addClass('fixed');
                //$('.email-btn-wrapper').addClass('fixed');
                //$('#email-wrapper').css({'left':btn_left_minimised, }); 
                //$('.email-btn-wrapper').css('background-color', 'aquamarine');
            }, 1000);
        } else if ($(window).scrollTop() < wrapper_top) {
            $('#email-wrapper').removeClass('minimised');
             setTimeout(function() {
                //$('#email-wrapper').removeClass('fixed');
               // $('#email-wrapper').css({'left':btn_left_minimised}); 
            }, 1000);
        }
    });
    
    
    
    //https://stackoverflow.com/questions/2202749/jquery-can-i-animate-the-positionabsolute-to-positionrelative
    
    
    
    
    /*$(window).resize(function(){
        var checklist_pos = $('.checklist-item:first-of-type').position(),
            checklist_top = checklist_pos.top;
            //header_height = $('#page-header').height(),
            //btn_top = header_top + header_height;
        //console.log(header_top);
        console.log(checklist_pos);
        console.log(checklist_top);
        
        $(window).scroll(function () {
            if($(window).scrollTop() >= (checklist_top)) {
                $('#email-wrapper').addClass('minimised');
            } else if ($(window).scrollTop() < checklist_top) {
                $('#email-wrapper').removeClass('minimised');
            }
        });
    });*/
    
    
    /*------------------- Modal functionality -------------------*/
    // Open modals
    $('.email-btn-wrapper').on('click', function(){
        $('.modal-email-form').addClass('open');
    });
    $('#send-email .combo-button').on('click', function(){
        $('.modal-email-form').removeClass('open');
        $('.modal-success-message').addClass('open');
    });
    
    // Close modals on close btn click
    $('.modal-close').on('click', function(){
        $('.modal').removeClass('open');
    });
    
    // Close modals on click outside modal   
    $('.modal-overlay').on('click', function(){   
        $('.modal').removeClass('open');
    });

    
}); // END doc ready

