var tracking_data = 
{
    "tracking_element_id1": {
        "tracking_element_id": "9E6F518F-59AC-4205-8E26-E060785F47CE",
        "tracking_name": "ParentSlide",
        "internal_name": "PFS",
        "version": "1.0.0",
		"external_name": "PFS",
    },
    "tracking_element_id2": {
        "tracking_element_id": "BE099893-571E-4D5E-B09E-8781201EA8BD",
        "tracking_name": "childSlide",
        "internal_name": "OS",
        "version": "1.0.0",
		"external_name": "OS",
    },
    "tracking_element_id3": {
        "tracking_element_id": "4551CBE0-63D2-4CD0-BFAC-4C20B3E502B5",
        "tracking_name": "childSlide",
        "internal_name": "ORR",
        "version": "1.0.0",
		"external_name": "ORR",
    },
    "tracking_element_id4": {
        "tracking_element_id": "D85E082F-DC86-4C39-A57B-206D2EA59F82",
        "tracking_name": "childSlide",
        "internal_name": "DoR",
        "version": "1.0.0",
		"external_name": "DoR",
    }
    
}

function trackAction(arg1){
	try{var tracking_id=tracking_data[arg1]["tracking_element_id"];}
	catch(err){};
	try{var tracking_name=tracking_data[arg1]["tracking_name"];}
	catch(err){};
	try{var internal_name=tracking_data[arg1]["internal_name"];}catch(err){};
	try{var version=tracking_data[arg1]["version"];}catch(err){};
	try{var external_name=tracking_data[arg1]["external_name"];}catch(err){};
	var dt=(new Date()).toISOString();
	
	//alert("tracking_id: "+tracking_id+"tracking_name :"+tracking_name+"Usage_Start_Time_vod__c:"+dt);
	
	
	var clickStream = {};
	clickStream.Track_Element_Id_vod__c = ""+tracking_id;         //captures FUT or trcaking_id
	clickStream.Track_Element_Description_vod__c= ""+tracking_name;  //captures the element on which the action is done
	clickStream.pagename__c = ""+internal_name;  
	clickStream.Usage_Start_Time_vod__c = ""+dt;                              //captures the page name where event occured
    //clickStream.Question_vod__c = ""+servey;  //pass the required concated string /*survey tracking code*/
	setTimeout(function() {
            com.veeva.clm.createRecord("Call_Clickstream_vod__c",clickStream,saveData);
    }, 250);
 }
 
 
 function saveData(){
	var recoreCreated=JSON.stringify(result);
	//alert(recoreCreated);
 }
// trackAction('tracking_element_id1');