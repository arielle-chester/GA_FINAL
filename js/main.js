//setTimeout(function(){ 
//	document.getElementById("IMAGES/welcome.mov").play();
//}, 5000);

//welcome takeover

$(document).ready(function () {
$('.welcomevideo').show(0).delay(5000).hide(0);
});
//timeline scroll

$(function(){
	$('a[href="#y1940"]').click(function(e){
		e.preventDefault();
		var targetOffset = $('a[name="y1940"]').offset().top;
		$('body').animate(
			{scrollTop: targetOffset}, 
			3000
			);
	});
});

$(function(){
	$('a[href="#y1950"]').click(function(e){
		e.preventDefault();
		var targetOffset = $('a[name="y1950"]').offset().top;
		$('body').animate(
			{scrollTop: targetOffset}, 
			3000
			);
	});
});

$(function(){
	$('a[href="#y1960"]').click(function(e){
		e.preventDefault();
		var targetOffset = $('a[name="y1960"]').offset().top;
		$('body').animate(
			{scrollTop: targetOffset}, 
			3000
			);
	});
});

$(function(){
	$('a[href="#y1970"]').click(function(e){
		e.preventDefault();
		var targetOffset = $('a[name="y1970"]').offset().top;
		$('body').animate(
			{scrollTop: targetOffset}, 
			3000
			);
	});
});

$(function(){
	$('a[href="#y1980"]').click(function(e){
		e.preventDefault();
		var targetOffset = $('a[name="y1980"]').offset().top;
		$('body').animate(
			{scrollTop: targetOffset}, 
			3000
			);
	});
});

$(function(){
	$('a[href="#y1990"]').click(function(e){
		e.preventDefault();
		var targetOffset = $('a[name="y1990"]').offset().top;
		$('body').animate(
			{scrollTop: targetOffset}, 
			3000
			);
	});
});

$(function(){
	$('a[href="#y2000"]').click(function(e){
		e.preventDefault();
		var targetOffset = $('a[name="y2000"]').offset().top;
		$('body').animate(
			{scrollTop: targetOffset}, 
			3000
			);
	});
});

$(function(){
	$('a[href="#d2000"]').click(function(e){
		e.preventDefault();
		var targetOffset = $('a[name="d2000"]').offset().top;
		$('body').animate(
			{scrollTop: targetOffset}, 
			3000
			);
	});
});

//popup info


  $(document).ready(function () {
 //hide hider and popup_box
 $("#hider402").hide();
 $("#popup_box402").hide();

        //on click show the hider div and the message
 $("#block402").click(function () {
 $("#hider402").fadeIn("slow");
 $('#popup_box402').fadeIn("slow");
        
    });
        //on click hide the message and the
$("#buttonClose402").click(function () {

$("#hider402").fadeOut("slow");
$('#popup_box402').fadeOut("slow");
  
   });

   });

  $(document).ready(function () {
 //hide hider and popup_box
 $("#hider503").hide();
 $("#popup_box503").hide();

        //on click show the hider div and the message
 $("#block503").click(function () {
 $("#hider503").fadeIn("slow");
 $('#popup_box503').fadeIn("slow");
        
    });
        //on click hide the message and the
$("#buttonClose503").click(function () {

$("#hider503").fadeOut("slow");
$('#popup_box503').fadeOut("slow");
  
   });

   });

  $(document).ready(function () {
 //hide hider and popup_box
 $("#hider601").hide();
 $("#popup_box601").hide();

        //on click show the hider div and the message
 $("#block601").click(function () {
 $("#hider601").fadeIn("slow");
 $('#popup_box601').fadeIn("slow");
        
    });
        //on click hide the message and the
$("#buttonClose601").click(function () {

$("#hider601").fadeOut("slow");
$('#popup_box601').fadeOut("slow");
  
   });

   });

    $(document).ready(function () {
 //hide hider and popup_box
 $("#hider702").hide();
 $("#popup_box702").hide();

        //on click show the hider div and the message
 $("#block702").click(function () {
 $("#hider702").fadeIn("slow");
 $('#popup_box702').fadeIn("slow");
        
    });
        //on click hide the message and the
$("#buttonClose702").click(function () {

$("#hider702").fadeOut("slow");
$('#popup_box702').fadeOut("slow");
  
   });

   });

      $(document).ready(function () {
 //hide hider and popup_box
 $("#hider804").hide();
 $("#popup_box804").hide();

        //on click show the hider div and the message
 $("#block804").click(function () {
 $("#hider804").fadeIn("slow");
 $('#popup_box804').fadeIn("slow");
        
    });
        //on click hide the message and the
$("#buttonClose804").click(function () {

$("#hider804").fadeOut("slow");
$('#popup_box804').fadeOut("slow");
  
   });

   });

   $(document).ready(function () {
 //hide hider and popup_box
 $("#hider902").hide();
 $("#popup_box902").hide();

        //on click show the hider div and the message
 $("#block902").click(function () {
 $("#hider902").fadeIn("slow");
 $('#popup_box902').fadeIn("slow");
        
    });
        //on click hide the message and the
$("#buttonClose902").click(function () {

$("#hider902").fadeOut("slow");
$('#popup_box902').fadeOut("slow");
  
   });

   });

   $(document).ready(function () {
 //hide hider and popup_box
 $("#hider003").hide();
 $("#popup_box003").hide();

        //on click show the hider div and the message
 $("#block003").click(function () {
 $("#hider003").fadeIn("slow");
 $('#popup_box003').fadeIn("slow");
        
    });
        //on click hide the message and the
$("#buttonClose003").click(function () {

$("#hider003").fadeOut("slow");
$('#popup_box003').fadeOut("slow");
  
   });

   });

//watch tv

var totalVideos = $("video").length;
var currentVideoIndex;

$(".btn-next").on("click", function(){
  currentVideoIndex = $(".active").prev().index();

  if (currentVideoIndex >= 0 && currentVideoIndex < totalVideos) {
    $(".active").removeClass("active").prev().addClass("active");
  }
   $(".active").find("video").get(0).pause();
  $(".active").find("video").get(0).play();

  
});

$(".btn-prev").on("click", function(){
  currentVideoIndex = $(".active").next().index();

  if (currentVideoIndex >= 0 && currentVideoIndex < totalVideos) {
    $(".active").removeClass("active").next().addClass("active");
  }

    $(".active").find("video").get(0).pause();
  $(".active").find("video").get(0).play();
});

