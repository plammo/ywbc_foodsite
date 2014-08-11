

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

	//this defines the object and the event to act on
	$('.collapsebut').on('click', function(event) {
		
		event.preventDefault();
		//set the variable rowId to whatever href is being clicked on at that time
		var rowId = $(this).attr('href');
		//then slide that content down and up based on toggle action - slide speed is set to slow
		$(rowId).slideToggle('slow');
	});
});