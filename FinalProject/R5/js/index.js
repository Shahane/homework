 /* $('section').hide();
$('#home').show();

$(function() {
    $('#homeLink').click(function(){
        $('section').hide();
        $('#home').show();
    });
    
    $('li').click(function(){
        //get the name from the <li> tag
        var name = $(this).attr('name');

        //make the clicked <li> "active"
        $('li').removeClass();
        $(this).addClass('active');

        //show the corresponding <section>
        $('section').hide();
        $('#' + name).show();
    });
});


//form 

$(function(){
    $('#emailForm').submit(function(submitEvent){
        submitEvent.preventDefault();
    })
    
    $('#send').click(function(clickEvent){
        var email = $('#email').val();
        var subject = $('#subject').val();
        var message = $('#message').val();

        $('#strEmail').html(email);
        $('#strSubject').html(subject);
        $('#strMessage').html(message);
    });
});



// video fram home page 
iframe = $('#projectplayer')[0]; //if you give your player a different ID, change it here
player = $f(iframe);
player.api('setVolume',1); //this will unmute the video


$(document).ready(function () { 
    
    $('iframe[src*="vimeo.com"]').wrap('<div class="vimeoWrapper" />');
   
});



// video  gallery 

var urls = ['url1','url2','etc'];
var index = 0;

$('#left').click(function(){
});

 $('#left').click(function(){
 if(index==0)
 {
   index = urls.length -1;
 } else {
   index--;
 }
 console.log(index);
});

$('#right').click(function(){
 if(index==urls.length-1)
 {
   index = 0;
 } else {
   index++;
 }
 console.log(index);
});


<!-- Swiper JS -->
  
      <!-- Initialize Swiper -->
      
        var swiper = new Swiper('.swiper-container', {
            pagination: '.swiper-pagination',
            paginationClickable: true,
            nextButton: '.swiper-button-next',
            prevButton: '.swiper-button-prev',
            spaceBetween: 30,
            autoplay: 5000,
            autoplayDisableOnInteraction: false
        });
*/ 
       

