// while (navigator.onLine == false )	{
// 	alert('📶No network detected\nplease connet to internet and try again')
// 	if(navigator.onLine == true){
// 	window.location.reload()
// 	break		
// 	}
// }
notify = confirm('This is only fit for mobile devices');

$(function(){
	//MOVING TO OTHER TABS
	$(".sub-container").hide();	
	$(".settings-container").hide();	

	//HOME TAB
	$("i").eq(1).click(function(){
		$(".indicator").css("margin-left","17%");//the tab white indicator
		$('.material-icons').eq(0).css("margin-left","50vw");//aligning the theme button

		$(".container").show();//show the home container
		$(".home").html("Home");// change the title
		$(".settings-container").hide();//hide settings page
		$(".sub-container").hide();	//hide subscriptions content
	})
	
	//SUBS TAB
	$("i").eq(2).click(function(){
		$(".indicator").css("margin-left","44vw");
		$('.material-icons').eq(0).css("margin-left","26vw");// the theme icon button
		$(".container").hide();
		$(".settings-container").hide();
		$(".home").html("Recommended");
		$(".sub-container").show();
	})
	
	//SETTINGS AND ACCOUNT TAB
	$("i").eq(3).click(function(){
		$(".indicator").css("margin-left","71vw");
		$('.material-icons').eq(0).css("margin-left","52vw");// the theme icon button
		$(".container").hide();
		$(".sub-container").hide();
		$(".settings-container").show();
		$(".home").html("Tools");

	})

	themes = [1,2];
	let theme;
	theme = themes[0];
	//DARK THEME FEATURE
	$('i').eq(0).click(function(){
		$("body").toggleClass('dark');//switches to dark
		$("body").toggleClass('light');//switches back
		
		if (theme == 2)
		{
			$('i').css('color','black');
		}
		else if (theme == 1){
			$('i').css('color','white');

		}
		console.log(theme)
		$('i').toggleClass('dark-icon');

		$('.avatar').toggleClass('dark-border')
		$('.thumbnail').css('box-shadow','none');
	})
	
	let d = new Date
	let year = d.getFullYear();
	$('h6').html('© trintysenpai - ' + year)

})