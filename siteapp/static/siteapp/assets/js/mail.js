
$(document).ready(function() {

	//E-mail Ajax Send
	$("#give-price-form").submit(function() { //Change
		var th = $(this);
		$.ajax().done(function() {
			$("#form-from").fadeOut(0).after($('<div class="thanks"><p><b>Спасибо за доверие.</b> Мы свяжемся с Вами в ближайшее время.</p></div>').fadeIn(500).delay(4500).fadeOut(500)).delay(5500).fadeOut(500);
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 5000);
            
		});
		return false;
	});

});

