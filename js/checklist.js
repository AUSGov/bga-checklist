/*jshint browser: true, devel: true, jquery: true*/

$(document).ready(function () {
    
   $(".checklist-item-title").on("click", function(){
       console.log($(this).closest('.checklist-item'));
       if ($(this).closest('.checklist-item').hasClass('open')) { 
           $(this).closest('.checklist-item').removeClass('open');
       } 
       else {
           $(this).closest('.checklist-item').addClass('open');
       }
   });
    
}); // END doc ready

