$(document).ready(function(){
	$(".ajaxNav").on("click", "h2:nth-child(1)", function(){
		$(this).css("color", "limegreen");
		$.ajax("../skills.html", {
			success: function(response){
				$(".descarea").hide().html(response).slideDown();
			},
			error: function(reponse){
				$(".descarea").hide().text("Error").slideDown();
			}
		});
	});
})();