 
 $('#lab_video_slider').hide();

 var swiper = new Swiper('.swiper-container', {
        loop: true,
        pagination: '.swiper-pagination',
        paginationClickable: true,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev'
    });

$('#portfolioLin').click(function(){
    
});
$('#aboutLink').click(function(){
    console.log("Hi there");
    $('#softwareList').addClass('animated bounceInRight');
})
// video  gallery 

/*

$("#img1, #img2, #img3 , #img4").click(function(){
    console.log('clicked');
    event.preventDefault();
    $(".swiper-container").load("#slide1");

}); 
*/ 
 
















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

*/ 





  
     

       

