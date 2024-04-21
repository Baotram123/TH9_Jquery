$(document).ready(function() {
    $("nav li:has(.dropdown)").hover(function() {
      $(this).find(".dropdown").slideDown("fast");
    }, function() {
      $(this).find(".dropdown").slideUp("fast");
    });
  });
  
 