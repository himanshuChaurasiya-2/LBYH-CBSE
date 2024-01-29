let signup = document.querySelector(".signup");
let login = document.querySelector(".login");
let slider = document.querySelector(".slider");
let formSection = document.querySelector(".form-section");

signup.addEventListener("click", () => {
	slider.classList.add("moveslider");
	formSection.classList.add("form-section-move");
});

login.addEventListener("click", () => {
	slider.classList.remove("moveslider");
	formSection.classList.remove("form-section-move");
});


$('.form').find('input, textarea').on('keyup blur focus', function (e) {
  
	var $this = $(this),
		label = $this.prev('label');
  
		if (e.type === 'keyup') {
			  if ($this.val() === '') {
			label.removeClass('active highlight');
		  } else {
			label.addClass('active highlight');
		  }
	  } else if (e.type === 'blur') {
		  if( $this.val() === '' ) {
			  label.removeClass('active highlight'); 
			  } else {
			  label.removeClass('highlight');   
			  }   
	  } else if (e.type === 'focus') {
		
		if( $this.val() === '' ) {
			  label.removeClass('highlight'); 
			  } 
		else if( $this.val() !== '' ) {
			  label.addClass('highlight');
			  }
	  }
  
  });
  
  $('.tab a').on('click', function (e) {
	
	e.preventDefault();
	
	$(this).parent().addClass('active');
	$(this).parent().siblings().removeClass('active');
	
	target = $(this).attr('href');
  
	$('.tab-content > div').not(target).hide();
	
	$(target).fadeIn(600);
	
  });
