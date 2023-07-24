$(document).ready(function() {
    $('.sidebar-trigger').click(function(){
		
		$('body').addClass('no-scroll');
		$('.lightbox-sidebar-hamburguer').fadeIn('fast');
        $('div.sidebar-hamburguer-container ul.list-group').find('button.close-sidebar').focus();
		
		$('.sidebar-hamburguer-container').animate({
			'left': '0px'
		  }, 100, function() {
			// Animation complete.
		});
	});
	
	$('.close-sidebar').click(function(){
		$('.lightbox-sidebar-hamburguer').fadeOut('fast');
		$('body').removeClass('no-scroll');
		$('ol.breadcrumb li:first-child a').focus();
		
		$('.sidebar-hamburguer-container').animate({
			'left': '-400px'
		  }, 100, function() {
			// Animation complete.
		  }); 
	});
	
	$('div.sidebar-hamburguer-container #sair').focusout(function() {
		var activeMenu = $('body').hasClass('no-scroll');
		if(activeMenu){
			$('div.sidebar-hamburguer-container ul.list-group').find('button.close-sidebar').focus();
		}
	});
	
	$('div.sidebar-hamburguer-container #sair').focusin(function() {
		var activeMenu = $('body').hasClass('no-scroll');
		if(activeMenu == false){
			$('.sidebar-trigger').focus();
		}
	});
	
	$('div.sidebar-hamburguer-container ul.list-group').find('button.close-sidebar').focusin(function() {
		var activeMenu = $('body').hasClass('no-scroll');
		if(activeMenu == false){
			$('ol.breadcrumb li:first-child a').focus();
		}
	});
	
	$('.sidebar-hamburguer-container ul li ul').hide();
	$('.sidebar-hamburguer-container ul li a').click(function(){
		$('.sidebar-hamburguer-container ul li ul').not($(this).next('ul')).slideUp('fast');
		$(this).next('ul').slideToggle('fast');
		$(this).closest('.sidebar-hamburguer-container').find('li.active-opt').not($(this).closest('li')).removeClass('active-opt');
		$(this).closest('li').addClass('active-opt');
	});
});


	