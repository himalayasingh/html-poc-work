$(document).ready(function(){
	$(document).swipe( {
		
		swipeLeft:function(event, direction, distance, duration) {
		 	if (!$(event.target).hasClass('dragable_icon') && !$(event.target).hasClass('noSwipe') && (!$(event.target).hasClass('noSwipe') && !$(event.target).parents('.noSwipe').length) && !$(event.target).hasClass('ui-draggable')) {			 	
				return false
		 	}
		},
		swipeRight:function(event, direction, distance, duration) { 
		 	if (!$(event.target).hasClass('dragable_icon') && !$(event.target).hasClass('noSwipe') && (!$(event.target).hasClass('noSwipe') && !$(event.target).parents('.noSwipe').length) && !$(event.target).hasClass('ui-draggable')) {						 
				com.veeva.clm.gotoSlide("BRAFTOVI_and_MEKTOVI_iDetail_V1.0_60.00.zip");	
			}				  
		}	

	});  
			
});