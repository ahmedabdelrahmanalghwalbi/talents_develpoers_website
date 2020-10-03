/* global $, window, document */
$(function () {
	
	
	'use strict';
	
	$(window).on('scroll', function () {
		
		if ($(this).scrollTop() > 30) {
			
			$('.op, .nav').addClass('opp').fadeIn(1000);
			
			
		} else {
			
			$('.op').removeClass('opp').fadeOut(1000);
		}
	})
	
	$('input').on('click', function () {
		
		$(this).toggleClass('a');
		
		if($(this).hasClass('a')) {
		   	
			$(this).css({
				
				backgroundColor: 'aqua'
			});
			
		} else {
			
			$(this).css({
				
				backgroundColor: 'white'
			});
		}
	})
});











