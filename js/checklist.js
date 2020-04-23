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
    if ($('.checklist-wrapper').hasClass('new')) {   
        var wrapper_pos = $('.checklist-wrapper').offset(),
            wrapper_top = wrapper_pos.top,
            wrapper_left = wrapper_pos.left,
            wrapper_width = $('.checklist-wrapper').outerWidth(),
            container_left = wrapper_width + 32 + wrapper_left;
        
         var mq = window.matchMedia( "(max-width: 991px)" );
    }

    // CHANGE ON RESIZE reset positioning variables and reposition element
    $( window ).resize(function() {

        if ($('.checklist-wrapper').hasClass('new')) {
            wrapper_pos = $('.checklist-wrapper').offset();
            wrapper_top = wrapper_pos.top;
            wrapper_left = wrapper_pos.left;
            wrapper_width = $('.checklist-wrapper').outerWidth();
            container_left = wrapper_width + 32 + wrapper_left;
            console.log('Resized container left: ', container_left);        }

        // If screen width LESS than 991 px
        if(mq.matches) {

            if ($(window).scrollTop() > (wrapper_top)) {


                $('#email-btn-wrapper').addClass('minimised');
                $('.checklist-wrapper').addClass('scrolled');

             setTimeout(function () {
                 $('#email-btn-wrapper').css({
                     'transition': 'none',
                     'bottom': '32px',
                     'top': 'auto',
                     'right': '30px',
                     'position': 'fixed'
                 });
             }, 100);

            } 
            else if ($(window).scrollTop() <= (wrapper_top)) {

               // console.log(wrapper_top);

                $('#email-btn-wrapper').css({
                'transition': 'none',
                'top': '32px',
                'bottom': 'auto',
                'right':'0',
                'position':'absolute'
            });
            $('.checklist-wrapper').removeClass('scrolled');

            setTimeout(function(){
                $('#email-btn-wrapper').css('transition','width 2s ease');
                $('#email-btn-wrapper').removeClass('minimised');
            }, 100);
            } 
        }
        //If screen width MORE than 991px
        else {

             if ($(window).scrollTop() > (wrapper_top)) {

                 console.log('scrolled container left: ', container_left);
                // BTN BOX
                $('.email-box-container').css({
                    'top': '32px',
                    'left': container_left,
                    'right':'auto',
                    'position': 'fixed',
                 });
            } 
            else if ($(window).scrollTop() <= (wrapper_top)) {


                // BTN BOX
               $('.email-box-container').css({
                   'right':'-280px',
                    'left':'auto',
                    'position':'absolute',
               });

            }  
        }

    }); //End Resize


    // CHANGE ON SCROLL - using matchMedia for media queries
    $(window).scroll(function(){

        
        if(mq.matches) {

            if ($(window).scrollTop() > (wrapper_top)) {

                //console.log(wrapper_top);
                $('#email-btn-wrapper').addClass('minimised');
                $('.checklist-wrapper').addClass('scrolled');

             setTimeout(function () {
                 $('#email-btn-wrapper').css({
                     'transition': 'none',
                     'bottom': '32px',
                     'top': 'auto',
                     'right': '30px',
                     'position': 'fixed'
                 });
             }, 100);

            } 
            else if ($(window).scrollTop() <= (wrapper_top)) {

               // console.log(wrapper_top);

                $('#email-btn-wrapper').css({
                'transition': 'none',
                'top': '32px',
                'bottom': 'auto',
                'right':'0',
                'position':'absolute'
            });
            $('.checklist-wrapper').removeClass('scrolled');

            setTimeout(function(){
                $('#email-btn-wrapper').css('transition','width 2s ease');
                $('#email-btn-wrapper').removeClass('minimised');
            }, 100);
            } 
        }
        
        else {

             if ($(window).scrollTop() > (wrapper_top)) {

                // BTN BOX
                $('.email-box-container').css({
                    'top': '32px',
                    'left': container_left,
                    'right':'auto',
                    'position': 'fixed',
                 });
            } 
            else if ($(window).scrollTop() <= (wrapper_top)) {

                // BTN BOX
               $('.email-box-container').css({
                   'right':'-280px',
                    'left':'auto',
                    'position':'absolute',
               });

            }  
        }
    });

    

    
    /*------------------- Modal functionality -------------------*/
    // Open modals
    $('#email-btn-wrapper').on('click', function(){
        $('.modal-email-form').addClass('open');
    });
    $('.email-btn-wrapper-2').on('click', function(){
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

