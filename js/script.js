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

	// Отправка заявки
		
	$(".js-ajax-form").submit(function(event){
		event.preventDefault();
	 
		var form = $(this),
			term = form.serialize(),
			url = form.attr("action");
		
		var valid = true;
		var validate = form.find("#email").val();
		if(validate==""){
			form.addClass("error");
			form.find(".ErrorMessage").text("Email field is empty!");
		}else if(validate.indexOf("@")==-1 || validate.indexOf(".")==-1){
			form.addClass("error");
			form.find(".ErrorMessage").text("Email is not correct!");
		}else{
			form.removeClass("error");
			
			var posting = $.post( url, term );
		 
			posting.done(function(data) {
				if(data.toLowerCase().indexOf("error")!==-1){
					alert("Error");	
				}else{
					alert(data);
				}
			}).fail(function(data){
				alert("Error");	
			});
			
		}
	 
	});

	// // Navigation

	// slick

	if($(".block-5 .slider-1").length>0){
		$(".block-5 .slider-1").each(function(index){
			$(this).slick({  
				dots: false,
				arrows: false,
				slidesToShow: 4,
				infinite: false,
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
				dots: false,
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
	 

	$(".users-block .slider-2 .slick-slide").click(function(){
		var slideNum = $(this).index(); 
		$('.users-block .slider-3').slick('slickGoTo',slideNum);
	});
	
	if($(".block-14 .slider-4").length>0){
		$(".block-14 .slider-4").each(function(index){
			$(this).slick({  
				dots: false,
				arrows: false,
				slidesToShow: 4,	
				infinite: false,
				focusOnSelect: true,					
			});
		}); 
	}	
	
	if($(".block-14 .slider-5").length>0){
		$(".block-14 .slider-5").each(function(index){
			$(this).slick({  
				dots: false,
				arrows: false,
				slidesToShow: 1,
				infinite: false,
				touchThreshold: 20,
				swipe: false,
				adaptiveHeight: true,	 			
			});
		});
	}		

	$(".block-14 .slider-4 .slick-slide").click(function(){
		$('.block-14 .slider-4 .slick-slide').removeClass('slick-current');
		$(this).addClass('slick-current');
		var slideNum = $(this).index(); 
		$('.block-14 .slider-5').slick('slickGoTo',slideNum);
	});	

	//Changing Pricing variants Yearly/Monthly

	$(".block-21 input[type=checkbox]").change(function(){
		if($(this).prop("checked")){
			$(this).closest(".block-21").removeClass("yearly");
			$(this).closest(".block-21").addClass("monthly");
		} else {
			$(this).closest(".block-21").addClass("yearly");
			$(this).closest(".block-21").removeClass("monthly");
		}	
	});		
	
	//Tooltips
	var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
	var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
		return new bootstrap.Tooltip(tooltipTriggerEl)
	}) 
	
	//Pricing opening row
	$(".block-22 .OpenRow .OpenRowHeader").click(function(event){
		if($(this).closest(".block-22 .OpenRow").children('.OpenRowInner').length > 0 && $(this).closest(".block-22 .OpenRow").hasClass("opened")){
			$(this).closest(".block-22 .OpenRow").removeClass("opened");   
		}else{
			$(this).closest(".block-22 .OpenRow").addClass("opened");
		}
	});    

	//FAQ opening Answer
	$(".block-23 .QuestionBlock .QuestionHeader").click(function(event){
		if($(this).closest(".block-23 .QuestionBlock").hasClass("opened")){
			$(this).closest(".block-23 .QuestionBlock").removeClass("opened");   
		}else{
			$(this).closest(".block-23 .QuestionBlock").addClass("opened");
		}
	}); 	
	
	// Filter Blog
	$(".BlogMenu [data-filter]").click(function(event){
		$(".BlogMenu .BlogMenuItem").removeClass("active");
		$(this).addClass("active");
		var filter = $(this).attr("data-filter");
		console.log(filter);
		$(".BlockBlog").addClass("d-none");
		if(filter==""){
			filter = "[data-filter]"; 
		}else{
			filter = "[data-filter='"+filter+"']";
		}
		$(".BlockBlog"+filter).removeClass("d-none").each(function(i,v){
			$(this).attr("data-item-num",i+1);
		});
	}); 	

	// Legal Information left-menu open/close
	$(".menu-block").click(function(){
		if ($(this).hasClass("active")){
			$(this).removeClass("active");
		} else{  
			$(this).addClass('active');   
		}
	});		

});
