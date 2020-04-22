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

    if ($('.checklist-wrapper').hasClass('new')) {
        
        //Get position of button using the header height
        var wrapper_pos = $('.checklist-wrapper').offset(),
            wrapper_top = wrapper_pos.top,
            container = $('.email-box-container').offset(),
            container_left = container.left;
        
        console.log('Original wrapper top: ', wrapper_top);

        
        // CHANGE ON RESIZE reset positioning variables
        $( window ).resize(function() {

            wrapper_pos = $('.checklist-wrapper').offset();
            wrapper_top = wrapper_pos.top;
            container = $('.email-box-container').offset();
            container_left = container.left;
            
            console.log('Resized wrapper top; ', wrapper_top);

        }); //End Resize
    
        
        
        var mq = window.matchMedia( "(max-width: 991px)" );
        
        // CHANGE ON SCROLL - using matchMedia for media queries
        $(window).scroll(function(){
          
            if(mq.matches) {
                
                if ($(window).scrollTop() > (wrapper_top)) {
                    
                    console.log(wrapper_top);
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
                    
                    console.log(wrapper_top);
                    
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
        

    } // End if checklist-wrapper.hasClas('new')
    
    

    
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

