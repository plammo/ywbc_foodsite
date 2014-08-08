

/*$( '.menu' ).click(function() {
  $( '.row__4' ).slideToggle( "slow", function() {
    // Animation complete.
  });
});

*/ 



// $('#menu').accordion();

/*$(function() {
$( "#accordion" ).accordion();
});*/
 

/*$(document).ready(function(){

  $('.row__mess').fadeIn(17000);
  
});*/

/* three expanding sections ids menu, location and smedia;
three anchors with .collapsebut and hrefs #menu, #location and #smedia.*/

$(document).ready(function() {

	$('.collapsebut').on('click', function(event) {
		event.preventDefault();
		var sectionId = $(this).attr('href');
		$(sectionId).slideToggle('slow');
	});
});