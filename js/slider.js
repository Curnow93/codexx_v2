/*$(document).ready(function(){
	alert("hello");
	var startNum = 0,
	sliderImg = $(".slider .container"),
	imgCount = sliderImg.length;
	console.log(imgCount + " slider images.");
	var sec = 2;
	var autoslide = setInterval(function(){
		var item = $(".slider div").eq(currentIndex);
	}, 2000);
	
	for(i = startNum; i <= imgCount; i++){
		sliderImg[(i - 1)].hide();
		sliderImg[i].show();
	}
	
	autoslide();
})();*/

$(document).ready(function(){
	//alert("jQuery Loaded!");
	var currentIndex = 0;
	var items = $(".slider div");
	var itemAmt = items.length;
	function cycleItems(){
		var item = $(".slider div").eq(currentIndex);
		items.hide();
		item.css("display", "inline-block");
	}
	var autoSlide = setInterval(function(){
		currentIndex += 1;
		if (currentIndex > itemAmt - 1){
			currentIndex = 0;
		}
		cycleItems();
	}, 3000);
	$(".slider > h3:first").on("click", function(){
		clearInterval(autoSlide);
		currentIndex -= 1;
		if(currentIndex < 0){
			currentIndex = itemAmt -1;
		}
		cycleItems();
	});
	$(".slider > h3:last").on("click", function(){
		clearInterval(autoSlide);
		currentIndex -=1
		if (currentIndex < 0) {
			currentIndex = itemAmt -1;
		}
		cycleItems();
	})
	$(".ajaxNav").on("click", ".skills", function(){
		alert("skills clicked...");
		$.ajax("../html/skills.html", {
			success: function(response){
				$('.response').hide().html(response).slideDown('slow');
			},
			error: function(response){
				$('.response').hide().text('Error: content could not be loaded').slideDown('slow');
			},
			timeOut: 3000,
			beforeSend: function(){
				$('.response').addClass('loading');
			},
			complete: function(){
				$('.response').addClass('done');
			}
		});
	});
	$(".ajaxNav").on("click", ".story", function(){
		alert("story clicked...");
		$.get("../html/story.php", function(response){
			$(".response").hide().html(response).slideDown('slow');
		});
	});
});