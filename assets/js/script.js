$(document).ready(function() {
    $('#fullpage').fullpage({
		sectionsColor: ['#0F2980', '#ffd200', '#c1c1c1'],
		anchors:['firstSection', 'secondSection', 'thirdSection'],
		menu: '.main-nav ul',
	});

	$('.carousel.carousel-multi-item.v-2 .carousel-item').each(function(){
		var next = $(this).next();
		if (!next.length) {
		  next = $(this).siblings(':first');
		}
		next.children(':first-child').clone().appendTo($(this));
	  
		for (var i=0;i<4;i++) {
		  next=next.next();
		  if (!next.length) {
			next=$(this).siblings(':first');
		  }
		  next.children(':first-child').clone().appendTo($(this));
		}
	  });
	  
});

$(window).load(function() {
	$("#buttonExplore").on("click", function() {
	  $("#ex1").modal({
		  fadeDuration: 1000,
		  fadeDelay: 0.50
		});
	});

	$(".slideInRight1").on("click", function() {
		$(".close-modal").trigger("click");
		fullpage_api.moveTo(2, 0);
	});
	$(".slideInRight2").on("click", function() {
		$(".close-modal").trigger("click");
		fullpage_api.moveTo(3, 0);
	});
	$(".slideInRight3").on("click", function() {
		$(".close-modal").trigger("click");
		fullpage_api.moveTo(4, 0);
	});
});