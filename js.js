$(function(){
$('h3').hide()
	$(".nav").eq(0).click(function(){
		$(".indicator").css("margin-left","17%")
		$(".container").show()
		$(".home").html("Home")
		$("h3").hide()
	})
	
	$(".nav").eq(1).click(function(){
		$(".indicator").css("margin-left","45%")
		$(".container").hide()
		$(".home").html("Subscriptions")
		$('h3').html('No Subscriptions')
		$("h3").show()
	})
	
	$(".nav").eq(2).click(function(){
		$(".indicator").css("margin-left","74%")
		$(".container").hide()
		$(".home").html("Tools")
		$('h3').html('Login/Sign Up to view')
		$("h3").show()
	})
	
})
