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
		$(".indicator").css("margin-left","17%");//the tab white indicator
		$('.material-icons').eq(0).css("margin-left","50vw");//aligning the theme button

		$(".container").show();//show the home container
		$(".home").html("Home");// change the title
		$(".settings-container").hide();//hide settings page
		$(".sub-container").hide();	//hide subscriptions content
	})
	
	//!SUBS TAB
	$("i").eq(2).click(function(){
		$(".indicator").css("margin-left","44vw");
		$('.material-icons').eq(0).css("margin-left","26vw");// the theme icon button
		$(".container").hide();
		$(".settings-container").hide();
		$(".home").html("Recommended");
		$(".sub-container").show();
	})
	
	//!SETTINGS AND ACCOUNT TAB
	$("i").eq(3).click(function(){
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
	
	//? FOR ALL CHANNELS USING SWITCH AND CASE 
	$('.avatar').eq(1).click(function(){
		swal($('.channel-name').eq(1).html(), {
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
				swal("Subscribed", "You've subscribed to " + $('.channel-name').eq(1).html() + "\'s channel", "success");
				console.log('subbed')//?print to console
			
				break;
		   
			  default:
				console.log('not subbed')//?print to console
			}
		  });
		
	})

	
	$('.avatar').eq(2).click(function(){
		swal($('.channel-name').eq(2).html(), {
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
				swal("Subscribed", "You've subscribed to " + $('.channel-name').eq(2).html() + "\'s channel", "success");
				console.log('subbed')//?print to console
			
				break;
		   
			  default:
				console.log('not subbed')//?print to console
			}
		  });
		
	})

	$('.avatar').eq(3).click(function(){
		swal($('.channel-name').eq(3).html(), {
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
				swal("Subscribed", "You've subscribed to " + $('.channel-name').eq(3).html() + "\'s channel", "success");
				console.log('subbed')//?print to console
			
				break;
		   
			  default:
				console.log('not subbed')//?print to console
			}
		  });
		
	})

	$('.avatar').eq(4).click(function(){
		swal($('.channel-name').eq(4).html(), {
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
				swal("Subscribed", "You've subscribed to " + $('.channel-name').eq(4).html() + "\'s channel", "success");
				console.log('subbed')//?print to console
			
				break;
		   
			  default:
				console.log('not subbed')//?print to console
			}
		  });
		
	})

	$('.avatar').eq(5).click(function(){
		swal($('.channel-name').eq(5).html(), {
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
				swal("Subscribed", "You've subscribed to " + $('.channel-name').eq(5).html() + "\'s channel", "success");
				console.log('subbed')//?print to console
			
				break;
		   
			  default:
				console.log('not subbed')//?print to console
			}
		  });
		
	})

	$('.avatar').eq(6).click(function(){
		swal($('.channel-name').eq(6).html(), {
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
				swal("Subscribed", "You've subscribed to " + $('.channel-name').eq(6).html() + "\'s channel", "success");
				console.log('subbed')//?print to console
			
				break;
		   
			  default:
				console.log('not subbed')//?print to console
			}
		  });
		
	})

	
	$('.avatar').eq(7).click(function(){
		swal($('.channel-name').eq(7).html(), {
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
				swal("Subscribed", "You've subscribed to " + $('.channel-name').eq(7).html() + "\'s channel", "success");
				console.log('subbed')//?print to console
			
				break;
		   
			  default:
				console.log('not subbed')//?print to console
			}
		  });
		
	})


	$('.avatar').eq(8).click(function(){
		swal($('.channel-name').eq(8).html(), {
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
				swal("Subscribed", "You've subscribed to " + $('.channel-name').eq(8).html() + "\'s channel", "success");
				console.log('subbed')//?print to console
			
				break;
		   
			  default:
				console.log('not subbed')//?print to console
			}
		  });
		
	})

	
	$('.avatar').eq(9).click(function(){
		swal($('.channel-name').eq(9).html(), {
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
				swal("Subscribed", "You've subscribed to " + $('.channel-name').eq(9).html() + "\'s channel", "success");
				console.log('subbed')//?print to console
			
				break;
		   
			  default:
				console.log('not subbed')//?print to console
			}
		  });
		
	})

	
	$('.avatar').eq(10).click(function(){
		swal('Fireship', {
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
				swal("Already Subscribed", "You've already subscribed to " + "Fireship\'s channel", "info");
				console.log('already subbed')//?print to console
			
				break;
		   
			  default:
				console.log('not subbed')//?print to console
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
