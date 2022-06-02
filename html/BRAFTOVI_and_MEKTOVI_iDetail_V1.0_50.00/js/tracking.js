var tracking_data = 
{
    "tracking_element_id1": {
        "tracking_element_id": "3EA9F3F4-A013-4D23-8CE1-80BBEAE29E2C",
        "tracking_name": "ParentSlide",
        "internal_name": "Dosing and administration",
        "version": "1.0.0",
		"external_name": "Dosing and administration",
    },
    "tracking_element_id2": {
        "tracking_element_id": "DA7B873D-057D-498E-91A6-EC49029B195E",
        "tracking_name": "childSlide",
        "internal_name": "Dose reductions",
        "version": "1.0.0",
		"external_name": "Dose reductions",
    },
    "tracking_element_id3": {
        "tracking_element_id": "F45F8A75-90E2-4643-9BCE-F7CF0E652946",
        "tracking_name": "childSlide",
        "internal_name": "Admin and storage",
        "version": "1.0.0",
		"external_name": "Admin and storage",
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