/*
! Updated on 20:42 | 27 Oct 2020 
*/


//? checks if internet connection is available
if(navigator.onLine == false )	{
	console.log('📶No network detected\nplease connet to internet and try again')
}

//? checks if the device is not mobile screen size
if(screen.width > 615){
	swal("YTCLONE is only intended for mobiles only ");
}

//!starts here
$(function(){
	//!MOVING TO OTHER TABS
	$(".sub-container").hide();	
	$(".settings-container").hide();	

	//!HOME TAB
	$("i").eq(1).click(function(){
		document.title = 'YTCLONEUI | Home';//? change the title

		$(".indicator").css("margin-left","17%");//the tab white indicator
		$('.material-icons').eq(0).css("margin-left","50vw");//aligning the theme button

		$(".container").show();//show the home container
		$(".home").html("Home");// change the title
		$(".settings-container").hide();//hide settings page
		$(".sub-container").hide();	//hide subscriptions content
	})
	
	//!SUBS TAB
	$("i").eq(2).click(function(){
		document.title = 'YTCLONEUI | Subscriptions';//? change the title
		$(".indicator").css("margin-left","44vw");
		$('.material-icons').eq(0).css("margin-left","26vw");// the theme icon button
		$(".container").hide();
		$(".settings-container").hide();
		$(".home").html("Recommended");
		$(".sub-container").show();
	})
	
	//!SETTINGS AND ACCOUNT TAB
	$("i").eq(3).click(function(){ 
		document.title = 'YTCLONEUI | Tools';//? change the title
		$(".indicator").css("margin-left","71vw");
		$('.material-icons').eq(0).css("margin-left","52vw");// the theme icon button
		$(".container").hide();
		$(".sub-container").hide();
		$(".settings-container").show();
		$(".home").html("Tools");

	})

	//!DARK THEME FEATURE
	$('i').eq(0).click(function(){
		$("body").toggleClass('dark');//switches to dark
		$("body").toggleClass('light');//switches back
		$('.avatar').toggleClass('dark-border')// channel icon border also changes
		$('.thumbnail').css('box-shadow','none');
	})

	//! PROFILE INFO POPUP 

	$('.avatar').eq(0).click(function(){
		swal($('.channel-name').eq(0).html(), {
			buttons: {
			  cancel: "Back",
			  catch: {
				text: "Subscribe",
			  }
			},
		  })
		  .then((value) => {
			switch (value) {
		   
			  case "catch":
				swal("Subscribed", "You've subscribed to " + $('.channel-name').eq(0).html() + "\'s channel", "success");
				console.log('subbed')//?print to console
			
				break;
		   
			  default:
				console.log('not subbed')//?print to console
			}
		  });
		
	})

	/*
	!CODE REPETITION UNTIL LINE 341
	!IF YOU CAN HELP REDUCE THIS PLEASE, SEND A PULL REQUEST😢
	*/

	//! Fireship's channel
	var isSubscribedFireship = false;
	window.isSubscribed = isSubscribedFireship //? making the variable accessible/global for the function

	$('.avatar').eq(1).click(function(){
		swal('Fireship' + '\nSubscribed : ' + isSubscribedFireship, {
			buttons: {
			  cancel: "Back",
			  catch: {
				text: "Subscribe",
			  }
			},
		  })
		  .then((value) => {
			
			console.log(isSubscribedFireship)

			if(isSubscribedFireship == false && value != null)//* if not subscribed
			{
				swal("Subscribed", "You're now subscribed to " + $('.channel-name').eq(1).html() + "\'s channel", "success");
				isSubscribedFireship = true;
				
			}
			else if (isSubscribedFireship == true && value != null){
				swal("Subscribed", "You're already subscribed to " + $('.channel-name').eq(1).html() + "\'s channel", "info");
			}
	

		  });

		
	})

	$('.avatar').eq(10).click(function(){
		swal($('.channel-name').eq(1).html()+ '\nSubscribed : ' + isSubscribedFireship, {
			buttons: {
			  cancel: "Back",
			  catch: {
				text: "Subscribe",
			  }
			},
		  })
		  .then((value) => {
			
			console.log(isSubscribedFireship)

			if(isSubscribedFireship == false && value != null)//* if not subscribed
			{
				swal("Subscribed", "You're now subscribed to " + $('.channel-name').eq(1).html() + "\'s channel", "success");
				isSubscribedFireship = true;
				
			}
			else if (isSubscribedFireship == true && value != null){
				swal("Subscribed", "You're already subscribed to " + $('.channel-name').eq(1).html() + "\'s channel", "info");
			}
	

		  });

		
	})

	$('.avatar').eq(3).click(function(){
		swal('Fireship' + '\nSubscribed : ' + isSubscribedFireship, {
			buttons: {
			  cancel: "Back",
			  catch: {
				text: "Subscribe",
			  }
			},
		  })
		  .then((value) => {
			
			console.log(isSubscribedFireship)

			if(isSubscribedFireship == false && value != null)//* if not subscribed
			{
				swal("Subscribed", "You're now subscribed to " + $('.channel-name').eq(1).html() + "\'s channel", "success");
				isSubscribedFireship = true;
				
			}
			else if (isSubscribedFireship == true && value != null){
				swal("Subscribed", "You're already subscribed to " + $('.channel-name').eq(1).html() + "\'s channel", "info");
			}
	

		  });

		
	})

	//! CS Dojo's channel
	var isSubscribedDojo = false;
	window.isSubscribedDojo = isSubscribedDojo //? making the variable accessible/global for the function

	$('.avatar').eq(0).click(function(){
		swal($('.channel-name').eq(0).html() + '\nSubscribed : ' + isSubscribedDojo, {
			buttons: {
			  cancel: "Back",
			  catch: {
				text: "Subscribe",
			  }
			},
		  })
		  .then((value) => {
			
			console.log(isSubscribedDojo)

			if(isSubscribedDojo == false && value != null)//* if not subscribed
			{
				swal("Subscribed", "You're now subscribed to " + $('.channel-name').eq(0).html() + "\'s channel", "success");
				isSubscribedDojo = true;
				
			}
			else if (isSubscribedDojo == true && value != null){
				swal("Subscribed", "You're already subscribed to " + $('.channel-name').eq(0).html() + "\'s channel", "info");
			}
	

		  });

		
	})

	//! Mayuko's channel
	var isSubscribedMayuko = false;
	window.isSubscribedMayuko = isSubscribedTom //? making the variable accessible/global for the function

	$('.avatar').eq(6).click(function(){
		swal($('.channel-name').eq(6).html() + '\nSubscribed : ' + isSubscribedMayuko, {
			buttons: {
			  cancel: "Back",
			  catch: {
				text: "Subscribe",
			  }
			},
		  })
		  .then((value) => {
			
			console.log(isSubscribedMayuko)

			if(isSubscribedMayuko == false && value != null)//* if not subscribed
			{
				swal("Subscribed", "You're now subscribed to " + $('.channel-name').eq(6).html() + "\'s channel", "success");
				isSubscribedMayuko = true;
				
			}
			else if (isSubscribedMayuko == true && value != null){
				swal("Subscribed", "You're already subscribed to " + $('.channel-name').eq(6).html() + "\'s channel", "info");
			}
	

		  });

		
	})

	$('.avatar').eq(8).click(function(){
		swal($('.channel-name').eq(6).html() + '\nSubscribed : ' + isSubscribedMayuko, {
			buttons: {
			  cancel: "Back",
			  catch: {
				text: "Subscribe",
			  }
			},
		  })
		  .then((value) => {
			
			console.log(isSubscribedMayuko)

			if(isSubscribedMayuko == false && value != null)//* if not subscribed
			{
				swal("Subscribed", "You're now subscribed to " + $('.channel-name').eq(6).html() + "\'s channel", "success");
				isSubscribedMayuko = true;
				
			}
			else if (isSubscribedMayuko == true && value != null){
				swal("Subscribed", "You're already subscribed to " + $('.channel-name').eq(6).html() + "\'s channel", "info");
			}
	

		  });

		
	})


	//! Tom Scott's channel
	var isSubscribedTom = false;
	window.isSubscribedTom = isSubscribedTom //? making the variable accessible/global for the function

	$('.avatar').eq(2).click(function(){
		swal($('.channel-name').eq(2).html() + '\nSubscribed : ' + isSubscribedTom, {
			buttons: {
			  cancel: "Back",
			  catch: {
				text: "Subscribe",
			  }
			},
		  })
		  .then((value) => {
			
			console.log(isSubscribedTom)

			if(isSubscribedTom == false && value != null)//* if not subscribed
			{
				swal("Subscribed", "You're now subscribed to " + $('.channel-name').eq(2).html() + "\'s channel", "success");
				isSubscribedTom = true;
				
			}
			else if (isSubscribedTom == true && value != null){
				swal("Subscribed", "You're already subscribed to " + $('.channel-name').eq(2).html() + "\'s channel", "info");
			}
	

		  });

		
	})

	
	//! Game Dev's channel
	var isSubscribedDev = false;
	window.isSubscribedDev = isSubscribedDev //? making the variable accessible/global for the function

	$('.avatar').eq(4).click(function(){
		swal($('.channel-name').eq(4).html() + '\nSubscribed : ' + isSubscribedDev, {
			buttons: {
			  cancel: "Back",
			  catch: {
				text: "Subscribe",
			  }
			},
		  })
		  .then((value) => {
			
			console.log(isSubscribedDev)

			if(isSubscribedDev == false && value != null)//* if not subscribed
			{
				swal("Subscribed", "You're now subscribed to " + $('.channel-name').eq(4).html() + "\'s channel", "success");
				isSubscribedDev = true;
				
			}
			else if (isSubscribedDev == true && value != null){
				swal("Subscribed", "You're already subscribed to " + $('.channel-name').eq(4).html() + "\'s channel", "info");
			}
	

		  });

		
	})

		//! Code Bullets's channel
		var isSubscribedCodeBullet = false;
		window.isSubscribedCodeBullet = isSubscribedCodeBullet //? making the variable accessible/global for the function
	
		$('.avatar').eq(9).click(function(){
			swal($('.channel-name').eq(9).html() + '\nSubscribed : ' + isSubscribedCodeBullet, {
				buttons: {
				  cancel: "Back",
				  catch: {
					text: "Subscribe",
				  }
				},
			  })
			  .then((value) => {
				
				console.log(isSubscribedCodeBullet)
	
				if(isSubscribedCodeBullet == false && value != null)//* if not subscribed
				{
					swal("Subscribed", "You're now subscribed to " + $('.channel-name').eq(9).html() + "\'s channel", "success");
					isSubscribedCodeBullet = true;
					
				}
				else if (isSubscribedCodeBullet == true && value != null){
					swal("Subscribed", "You're already subscribed to " + $('.channel-name').eq(9).html() + "\'s channel", "info");
				}
		
	
			  });
	
			
		})

		//! Pewds's channel
		var isSubscribedPew = false;
		window.isSubscribedPew = isSubscribedPew //? making the variable accessible/global for the function
	
		$('.avatar').eq(5).click(function(){
			swal($('.channel-name').eq(5).html() + '\nSubscribed : ' + isSubscribedPew, {
				buttons: {
				  cancel: "Back",
				  catch: {
					text: "Subscribe",
				  }
				},
			  })
			  .then((value) => {
				
				console.log(isSubscribedPew)
	
				if(isSubscribedPew == false && value != null)//* if not subscribed
				{
					swal("Subscribed", "You're now subscribed to " + $('.channel-name').eq(5).html() + "\'s channel", "success");
					isSubscribedPew = true;
					
				}
				else if (isSubscribedPew == true && value != null){
					swal("Subscribed", "You're already subscribed to " + $('.channel-name').eq(5).html() + "\'s channel", "info");
				}
		
	
			  });
	
			
		})

			//! Tech With Tim's channel
			var isSubscribedTim = false;
			window.isSubscribedTim = isSubscribedTim //? making the variable accessible/global for the function
		
			$('.avatar').eq(7).click(function(){
				swal($('.channel-name').eq(7).html() + '\nSubscribed : ' + isSubscribedTim, {
					buttons: {
						cancel: "Back",
						catch: {
						text: "Subscribe",
						}
					},
					})
					.then((value) => {
					
					console.log(isSubscribedTim)
		
					if(isSubscribedTim == false && value != null)//* if not subscribed
					{
						swal("Subscribed", "You're now subscribed to " + $('.channel-name').eq(7).html() + "\'s channel", "success");
						isSubscribedTim = true;
						
					}
					else if (isSubscribedTim == true && value != null){
						swal("Subscribed", "You're already subscribed to " + $('.channel-name').eq(7).html() + "\'s channel", "info");
					}
			
		
					});
		
				
			})
		
	//? when taps on the options
	$('.option').click(function(){
		swal('currently not functional')
	})

	//* copyright
	let d = new Date
	let year = d.getFullYear();
	$('h6').html('© trintysenpai - ' + year)

})