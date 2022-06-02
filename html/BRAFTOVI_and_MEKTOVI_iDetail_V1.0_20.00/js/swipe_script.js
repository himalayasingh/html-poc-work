$(document).ready(function(){
	$(document).swipe( {
		
		swipeLeft:function(event, direction, distance, duration) {
		 	if (!$(event.target).hasClass('dragable_icon') && !$(event.target).hasClass('noSwipe') && (!$(event.target).hasClass('noSwipe') && !$(event.target).parents('.noSwipe').length) && !$(event.target).hasClass('ui-draggable')) {			 	
				com.veeva.clm.gotoSlide("BRAFTOVI_and_MEKTOVI_iDetail_V1.0_30.00.zip");	
		 	}
		},
		swipeRight:function(event, direction, distance, duration) { 
		 	if (!$(event.target).hasClass('dragable_icon') && !$(event.target).hasClass('noSwipe') && (!$(event.target).hasClass('noSwipe') && !$(event.target).parents('.noSwipe').length) && !$(event.target).hasClass('ui-draggable')) {	 	
				com.veeva.clm.gotoSlide("BRAFTOVI_and_MEKTOVI_iDetail_V1.0_10.00.zip");
			}				  
		}	

	});  
	
	
	$("#container").swipe( {
		
		swipeUp:function(event, direction, distance, duration) {
		 	if (!$(event.target).hasClass('dragable_icon') && !$(event.target).hasClass('noSwipe') && (!$(event.target).hasClass('noSwipe') && !$(event.target).parents('.noSwipe').length) && !$(event.target).hasClass('ui-draggable')) {			 	
				$(".tab2").trigger('tap');					
/*				if(tab2track == "True")	{ 
							trackAction('tracking_element_id2');
							tab1track = "True";                                
							tab2track = "False";  
					}*/	
		 	}
		},
		swipeDown:function(event, direction, distance, duration) { 
		 	if (!$(event.target).hasClass('dragable_icon') && !$(event.target).hasClass('noSwipe') && (!$(event.target).hasClass('noSwipe') && !$(event.target).parents('.noSwipe').length) && !$(event.target).hasClass('ui-draggable')) {	 	
				$(".tab1").trigger('tap');				
/*				if(tab1track == "True")	{ 
							trackAction('tracking_element_id1');
							tab1track = "False";                                
							tab2track = "True";  
					}*/	
			}				  
		}	

	}); 
	
			
});