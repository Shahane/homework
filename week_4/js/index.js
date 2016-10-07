$('.slidingDiv').hide();
$('.show_hide_btn').show();

$('.show_hide_btn').click(function(event){
 event.preventDefault();
  $(this).next('.slidingDiv').slideToggle();
});





