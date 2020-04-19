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
    
    
    /*------------------- Open & close sub-checklist items -------------------*/
     $(".checklist-sub-item-title").on("click", function () {

        $(this).next('.content-wrapper').slideToggle(600);
         
        if ($(this).closest('.checklist-sub-item').hasClass('open')) {
            $(this).closest('.checklist-sub-item').removeClass('open');
        } else {
            $(this).closest('.checklist-sub-item').addClass('open');
        }
         
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
    var wrapper_pos = $('.checklist-wrapper').offset(),
        wrapper_top = wrapper_pos.top,
        btn_pos = $('#email-btn-wrapper').offset(), //calculate so btn can return to original pos
        btn_left = btn_pos.left,
        btn_left_min = btn_left + 200 + 32; //left pos + btn width(200px) + gutter(32px)
        
     
    console.log('Checklist top position: ', wrapper_top);
    console.log('Button left position: ', btn_left);
    console.log('Button left position - minimised: ', btn_left_min);

    
    $(window).scroll(function(){
         if ($(window).scrollTop() > (wrapper_top)) {
             $('#email-btn-wrapper').addClass('minimised');
             $('.checklist-wrapper').addClass('scrolled');
             
             /*$('#email-btn-wrapper').css({
                     //'transition': 'none',
                     'top': '32px',
                     'left': btn_left_min,
                     'position': 'fixed',
                 });*/
             
             setTimeout(function () {
                 $('#email-btn-wrapper').css({
                     'transition': 'none',
                     'top': '32px',
                     'left': btn_left_min,
                     'position': 'fixed',
                 });

             }, 100);
        }   
        else if ($(window).scrollTop() <= (wrapper_top)) {
            $('#email-btn-wrapper').css({
                'transition': 'none',
                'top': '32px',
                'left':'auto',
                'position':'absolute',
            });
            $('.checklist-wrapper').removeClass('scrolled');
            
            /*$('#email-btn-wrapper').css('transition','right .05s ease');
            $('#email-btn-wrapper').removeClass('minimised');*/
            
            setTimeout(function(){
                $('#email-btn-wrapper').css('transition','all .05s ease');
                $('#email-btn-wrapper').removeClass('minimised');
            }, 100);
        } 
    });
    
    
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
    $('#email-btn-wrapper').on('click', function(){
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

