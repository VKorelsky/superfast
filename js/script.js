// Scroll.js
// Work with Cookies

function setCookie(cname,cvalue,exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  var expires = "expires=" + d.toGMTString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

$(document).ready(function(){
	$('a[href^="#"]').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash;
		if(target != ""){
			$('html, body').stop().animate({
				'scrollTop': $(target).offset().top
			}, 1000, 'swing', function () {
				window.location.hash = target;
			});
		}
	}); 
	
	// Navigation
	


	// slick
	if($(".block-5 .slider-1").length>0){
		$(".block-5 .slider-1").each(function(index){
			$(this).slick({  
				dots: false,
				arrows: false,
				slidesToShow: 4,
				infinite: true,
				touchThreshold: 20,
				responsive: [
					{
					  breakpoint: 1199.98,
					  settings: {
						slidesToShow: 3
					  }
					},
					{
					  breakpoint: 991.98,
					  settings: {
						slidesToShow: 2
					  }
					},
					{
					  breakpoint: 575.98,
					  settings: {
						slidesToShow: 1
					  }
					}
				]				
			});
		});
	}	

	if($(".users-block .slider-2").length>0){
		$(".users-block .slider-2").each(function(index){
			$(this).slick({  
				dots: true,
				arrows: false,
				slidesToShow: 5,	
				infinite: true,
				focusOnSelect: true,
				responsive: [
					{
					  breakpoint: 1199.98,
					  settings: {
						slidesToShow: 4
					  }
					},
					{
					  breakpoint: 991.98,
					  settings: {
						slidesToShow: 3
					  }
					},
					{
					  breakpoint: 767.98,
					  settings: {
						slidesToShow: 2
					  }
					},					
					{
					  breakpoint: 575.98,
					  settings: {
						slidesToShow: 1
					  }
					}
				]					
			});
		}); 
	}
});
