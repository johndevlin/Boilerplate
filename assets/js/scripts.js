

/********************************

	Some scripts I regularly use. 
	-----------------------------
	
	It's doubtful these will be
	used in every project, please
	remove any unused script. 
	
*/


// Add current year to .current-year
var currentYear = (new Date).getFullYear();
$('.current-year').text(currentYear)

// Debounced Resize function
$(window).on("debouncedresize", function( event ) {
	
});

// Return false class for buttons
$('.return-false').click(function() {
	return false;
});

// Do X ESC 
$(document).keyup(function(e) {
	
	if (e.keyCode == 27) { 
		// Guff
	}
	
}); 


// Validation 
function validateEmail(email) { 
	var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(email);
} 

function validation() {
	
	var name = $('input[name=name]').val();
	var email = $('input[name=email]').val();
	var message = $('textarea[name=message]').val();
	
	var err_name = 0, err_email = 0, err_message = 0;
	
	if(name == '' || name == undefined || name.length < 6){
		err_name = 1;
		$('.name_err').addClass('show-error');
	} else {
		err_name = 0;
		$('.name_err').removeClass('show-error');
	}
	
	if(email == '' || email == undefined || !validateEmail(email)){
		err_email = 1;
		$('.email_err').addClass('show-error');
	} else {
		err_email = 0;
		$('.email_err').removeClass('show-error');
	}
	
	if(message == '' || message == undefined || message.length < 6){
		err_message = 1;
		$('.message_err').addClass('show-error');
	} else {
		err_message = 0;
		$('.message_err').removeClass('show-error');
	}
	
	if(err_name == 0 && err_email == 0 && err_message == 0){
		return true;
	}
	
	return false;
}


