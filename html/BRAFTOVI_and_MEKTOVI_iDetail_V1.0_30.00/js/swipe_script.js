$(document).ready(function(){
	$(document).swipe( {
		
		swipeLeft:function(event, direction, distance, duration) {
		 	if (!$(event.target).hasClass('dragable_icon') && !$(event.target).hasClass('noSwipe') && (!$(event.target).hasClass('noSwipe') && !$(event.target).parents('.noSwipe').length) && !$(event.target).hasClass('ui-draggable')) {			 	
				com.veeva.clm.gotoSlide("BRAFTOVI_and_MEKTOVI_iDetail_V1.0_40.00.zip");	
		 	}
		},
		swipeRight:function(event, direction, distance, duration) { 
		 	if (!$(event.target).hasClass('dragable_icon') && !$(event.target).hasClass('noSwipe') && (!$(event.target).hasClass('noSwipe') && !$(event.target).parents('.noSwipe').length) && !$(event.target).hasClass('ui-draggable')) {	 	
				com.veeva.clm.gotoSlide("BRAFTOVI_and_MEKTOVI_iDetail_V1.0_20.00.zip");
			}				  
		}	

	});  
	
	
	$("#container").swipe( {
		
		swipeUp:function(event, direction, distance, duration) {
		 	if (!$(event.target).hasClass('dragable_icon') && !$(event.target).hasClass('noSwipe') && (!$(event.target).hasClass('noSwipe') && !$(event.target).parents('.noSwipe').length) && !$(event.target).hasClass('ui-draggable')) {
				
				if($('#page1').is(":visible")) {		 	
					$(".tab2").trigger('tap');
				} else if($('#page2').is(":visible")) { 	
					$(".tab3").trigger('tap');
				} else if($('#page3').is(":visible")) { 	
					$(".tab4").trigger('tap');
				}
				
		 	}
		},
		swipeDown:function(event, direction, distance, duration) { 
		 	if (!$(event.target).hasClass('dragable_icon') && !$(event.target).hasClass('noSwipe') && (!$(event.target).hasClass('noSwipe') && !$(event.target).parents('.noSwipe').length) && !$(event.target).hasClass('ui-draggable')) {	 	
				
				if($('#page2').is(":visible")) {		 	
					$(".tab1").trigger('tap');
				} else if($('#page3').is(":visible")) { 	
					$(".tab2").trigger('tap');
				} else if($('#page4').is(":visible")) { 	
					$(".tab3").trigger('tap');
				}
				
			}				  
		}	

	}); 
	
			
});