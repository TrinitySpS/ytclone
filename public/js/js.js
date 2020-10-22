// while (navigator.onLine == false )	{
// 	alert('📶No network detected\nplease connet to internet and try again')
// 	if(navigator.onLine == true){
// 	window.location.reload()
// 	break		
// 	}
// } 

while (screen.width > 700){
	new jBox('Modal', {
		attach: '.thumbnail',
		title: 'Device not supported',
		content: 'your device is not supported',
		color: 'red'
	})}//close showaccount function
	
$(function(){
	//MOVING TO OTHER TABS
	$(".sub-container").hide();	
	//HOME TAB
	$(".material-icons").eq(1).click(function(){
		$(".indicator").css("margin-left","16%");//the tab white indicator
		$('.material-icons').eq(0).css("margin-left","50vw");//aligning the theme button

		$(".container").show();//show the home container
		$(".home").html("Home");// change the title
		$(".sub-container").hide();	//hide subscriptions content
	})
	
	//SUBS TAB
	$(".material-icons").eq(2).click(function(){
		$(".indicator").css("margin-left","43vw");
		$('.material-icons').eq(0).css("margin-left","26vw");// the theme icon button
		$(".container").hide();
		$(".home").html("Recommended");
		$(".sub-container").show();
	})
	
	//SETTINGS AND ACCOUNT TAB
	$(".material-icons").eq(3).click(function(){
		$(".indicator").css("margin-left","70vw");
		$('.material-icons').eq(0).css("margin-left","52vw");// the theme icon button
		$(".container").hide();
		$(".sub-container").hide();
		$(".home").html("Tools");

	})

	themes = [1,2];
	let theme;
	theme = themes[0];
	//DARK THEME FEATURE
	$('.material-icons').eq(0).click(function(){
		$("body").toggleClass('dark');//switches to dark
		$("body").toggleClass('light');//switches back
		
		if (theme == 2)
		{
			$('.material-icons').css('color','black');
		}
		else if (theme == 1){
			$('.material-icons').css('color','white');

		}
		console.log(theme)
		$('.material-icons').toggleClass('dark-icon');

		$('.avatar').toggleClass('dark-border')
		$('.thumbnail').css('box-shadow','none');
	})
	
	let d = new Date
	let year = d.getFullYear();
	$('h6').html('© trintysenpai - ' + year)

})
