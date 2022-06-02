var clickHandler = 'click';
var testScroll2 = null;
var tab1track = "False";
var iPrev= null;
var NewrefScroll;
if(sessionStorage.iPrev != undefined ){
	//iPrev=sessionStorage.iPrev;
	//localStorage.removeItem("iPrev");
}



$(document).ready(function() {
	trackAction('tracking_element_id1');
	
	//CLM Slide ‘bounce’ Behavior Change code
	document.addEventListener('touchmove', event=>{
	event.preventDefault()},
	{capture: false, once: false, passive: false});
	//CLM Slide ‘bounce’ Behavior Change code

    if ('ontouchstart' in document.documentElement) {
        clickHandler = "touchstart";
    }	
		
	testScroll  = new iScroll("ssi_content");
	
	
	$('.linktoBavencio').bind('tap', function() {
		com.veeva.clm.gotoSlide('Braftovi_and_Cetuximab_V1.0_00.00.zip, F43FEE94-1B7A-4B32-A46A-D110E20B4D3E');
	});
	$('.dual_indication').bind('tap', function() {
		com.veeva.clm.gotoSlide('BRAFTOVI_Dual_Indication_Summary_iDetail_FEB21_V1_00.00.zip, 788224BE-D7E4-446B-A0D0-33FC261FD578');
	});
	$('.linktoBavencio_global').bind('tap', function() {
		com.veeva.clm.gotoSlide('Braftovi_and_Cetuximab_V1.0_00.00.zip, F43FEE94-1B7A-4B32-A46A-D110E20B4D3E');
	});
	
	$('.linktotraildesign').bind('tap', function() { //alert();
		com.veeva.clm.gotoSlide("BRAFTOVI_and_MEKTOVI_iDetail_V1.0_20.00.zip");
	});
	
		
	/* PDF popup start */
    $('#pdf').bind('tap', function() {
        
        $("#pdf_popup").show();
        $("#pdf").addClass("pdf_active");
        setTimeout(function() {
            $("#global_area").addClass("noLink");
        }, 10);
    });
	
    $('#pdf_close').bind('tap', function() {
        $("#pdf_popup").hide();
        $("#pdf").removeClass("pdf_active");
        $("#global_area").removeClass("noLink");
    });
	
	
	$('.pdf1').bind('tap', function() {
		com.veeva.clm.gotoSlide('BRAFTOVI_MEKTOVI_COVID_19_Considerations_VCC_05Aug2020.zip, 7727CB44-7BA8-4954-9F43-C9C599FE0C37');
	});
	
	$('.pdf2').bind('tap', function() {
		com.veeva.clm.gotoSlide('BRAFTOVIMEKTOVI_TherapyManagement_Guide_27Jan2021.zip, F0B40758-744D-40CF-8C50-135D465A2A27');
	});
	
	$('.pdf3').bind('tap', function() {
		location = "pdf/pdf3.pdf";
	});
	
	$('.pdf4').bind('tap', function() { 
		com.veeva.clm.gotoSlide('PFIZER_ONCOLOGY_TOGETHER_IDETAIL_V4_00.00.zip, CE389174-635F-489A-8059-8397539D82F3');
	});

	
    /* PDF popup end */
	
     	  	testScroll10  = new iScroll("isi_overlay");
	/* isi popup start */
		$('#isi').bind('tap', function() {
			$("#isi_popup").show();
			setTimeout(function(){testScroll10.refresh();},200);
			testScroll10.scrollTo(0,0,0);
			$("#global_pops").addClass("noLink");	
			$("#isi").addClass("isi_active");	
		});
		
		$('#isi_close').bind('tap', function() {
			$("#isi_popup").hide();
			$("#global_pops").removeClass("noLink");	
			$("#isi").removeClass("isi_active");	
		});
	/* isi popup end */
	
	/* ref popup start */
		$('#ref').bind('tap', function() {
			$("#ref_popup").show();
			$("#ref").addClass("ref_active");
			$("#global_pops").addClass("noLink");		
		});
	
		$('#ref_close').bind('tap', function() {
			$("#ref_popup").hide();
			$("#ref").removeClass("ref_active");
			$("#global_pops").removeClass("noLink");
		});
		
	/* ref popup end */
	
	/* Menu popup start */
		$('#menu').bind('tap', function() {
			$("#menu_popup").show(); 
			$("#global_pops").addClass("noLink");		
			$("#menu").addClass("menu_active");		
		});
	
		$('#menu_close').bind('tap', function() {
			$("#menu_popup").hide();
			$("#global_pops").removeClass("noLink");
			$("#menu").removeClass("menu_active");
		});
	
	/* Menu popup end */
	
		$('#pi').bind('tap', function() {
			$("#pi_popup").toggle();	
		});	
	
		$('.braftovi_pi,.braftovi_ssi_pi,.braftovi_ssi_pi1').bind('tap', function() {
			location = "pdf/Braftovi_PI.pdf";
		});

		$('.mektovi_pi,.mektovi_ssi_pi').bind('tap', function() {
			location = "pdf/Mektovi_PI.pdf";
		});

	/* pi popup end */
	
	/* Linking Starts */
		$('.link00_00,.slide1').bind('tap', function() {
			//com.veeva.clm.gotoSlide('BRAFTOVI_and_MEKTOVI_iDetail_V1.0_00.00');
			$("#menu_close").trigger('tap');	
		});
	
		$('.link10_00,.slide2').bind('tap', function() {
			com.veeva.clm.gotoSlide("BRAFTOVI_and_MEKTOVI_iDetail_V1.0_10.00.zip");	
		});
	
		$('.link20_00,.slide3,.link20_00_title').bind('tap', function() {
			com.veeva.clm.gotoSlide("BRAFTOVI_and_MEKTOVI_iDetail_V1.0_20.00.zip");
		});
		$('.link20_10').bind('tap', function() {
			localStorage.tab = 1;
			com.veeva.clm.gotoSlide("BRAFTOVI_and_MEKTOVI_iDetail_V1.0_20.00.zip");	
		});
	
		$('.link30_00,.slide4,.link30_00_title').bind('tap', function() {
			com.veeva.clm.gotoSlide("BRAFTOVI_and_MEKTOVI_iDetail_V1.0_30.00.zip");	
		});
		$('.link30_10').bind('tap', function() {
			localStorage.tab = 1;
			com.veeva.clm.gotoSlide("BRAFTOVI_and_MEKTOVI_iDetail_V1.0_30.00.zip");	
		});
		$('.link30_20').bind('tap', function() {
			localStorage.tab = 2;
			com.veeva.clm.gotoSlide("BRAFTOVI_and_MEKTOVI_iDetail_V1.0_30.00.zip");	
		});
		$('.link30_30').bind('tap', function() {
			localStorage.tab = 3;
			com.veeva.clm.gotoSlide("BRAFTOVI_and_MEKTOVI_iDetail_V1.0_30.00.zip");	
		});
	
		$('.link40_00,.slide5,.link40_00_title').bind('tap', function() {
			com.veeva.clm.gotoSlide("BRAFTOVI_and_MEKTOVI_iDetail_V1.0_40.00.zip");	
		});
		$('.link40_10').bind('tap', function() {
			localStorage.tab = 1;
			com.veeva.clm.gotoSlide("BRAFTOVI_and_MEKTOVI_iDetail_V1.0_40.00.zip");	
		});
	
		$('.link50_00,.slide6,.link50_00_title').bind('tap', function() {
			com.veeva.clm.gotoSlide("BRAFTOVI_and_MEKTOVI_iDetail_V1.0_50.00.zip");	
		});
		$('.link50_10').bind('tap', function() {
			localStorage.tab = 1;
			com.veeva.clm.gotoSlide("BRAFTOVI_and_MEKTOVI_iDetail_V1.0_50.00.zip");	
		});
		$('.link50_20').bind('tap', function() {
			localStorage.tab = 2;
			com.veeva.clm.gotoSlide("BRAFTOVI_and_MEKTOVI_iDetail_V1.0_50.00.zip");	
		});
	
		$('.link60_00,.slide7').bind('tap', function() {
			com.veeva.clm.gotoSlide("BRAFTOVI_and_MEKTOVI_iDetail_V1.0_60.00.zip");	
		});
		$('.link70_00,.slide8').bind('tap', function() {
			com.veeva.clm.gotoSlide("BRAFTOVI_and_MEKTOVI_iDetail_V1.0_70.00.zip");	
		});
	/* Linking Ends */



	
	
	
	
});


