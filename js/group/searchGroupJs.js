$(document).ready(function(){
//	$(function(){
//		$(".spotImg").css("width",$(".spotImgDiv").eq(0).css("width"));
//	});
//
//	$(function(){
//		$(".gImg").css("width",$(".gPic").eq(0).css("width"));
//		$(".groupImg").css("height",$(".groupImgDiv").eq(0).css("height"));
//		});
//	$(document.body).toggleClass("html-body-overflow");
	
	$(".btn-ca101").click(function(){
		$(this).css("color","white");
		$(this).css("background-color","#72CFD7");
	});
	
	$(".btn-ca101").hover(function(){
		$(this).css("color","white");
	});
	
	$(document).on("mouseenter", ".spotCard", function(){
  		$(this).css("box-shadow","3px 3px 3px 3px #aaa");
  		$(this).css("border-color","#72CFD7");
  		$(this).find(".spotName").css("background-color","#72CFD7");
  		$(this).find("img.spotImg").animate({width:'+=10',height:'+=10',marginTop:'-=5px',marginLeft:'-=5px'},300);
	});

	$(document).on("mouseleave", ".spotCard", function(){
  		$(this).css("box-shadow","");
  		$(this).css("border-color","#bbb");
  		$(this).find(".spotName").css("background-color","#bbb");
  		$(this).find("img.spotImg").css("transform","scale(1)");
  		$(this).find("img.spotImg").animate({width:'-=10px',height:'-=10px',marginTop:'+=5px',marginLeft:'+=5px'},300);
	});
	
	$(document).on("mousedown", ".spotCard", function(){
  		$(this).css("box-shadow","");
  		$(this).css("border-color","#62b2ba");
  		$(this).find(".spotName").css("background-color","#62b2ba");
	});

	$(document).on("mouseup", ".spotCard", function(){
  		$(this).css("box-shadow","2px 2px 2px 2px #9e9e9e");
  		$(this).css("border-color","#72CFD7");
  		$(this).find(".spotName").css("background-color","#72CFD7");
	});
	
	$(document).on("mouseenter", ".groupCardOuter", function(){
  		$(this).css("box-shadow","3px 3px 3px 3px #aaa");
  		$(this).css("border-color","#72CFD7");
  		$(this).find(".groupCardName").css("background-color","#72CFD7");
  		$(this).find("img.groupImg").animate({width:'+=10',height:'+=10',marginTop:'-=5px',marginLeft:'-=5px'},300);
	});

	$(document).on("mouseleave", ".groupCardOuter", function(){
  		$(this).css("box-shadow","");
  		$(this).css("border-color","#bbb");
  		$(this).find(".groupCardName").css("background-color","#bbb");
  		$(this).find("img.groupImg").css("transform","scale(1)");
  		$(this).find("img.groupImg").animate({width:'-=10px',height:'-=10px',marginTop:'+=5px',marginLeft:'+=5px'},300);
	});
	
	$(document).on("mousedown", ".groupCardOuter", function(){
  		$(this).css("box-shadow","");
  		$(this).css("border-color","#62b2ba");
  		$(this).find(".groupCardName").css("background-color","#62b2ba");
	});

	$(document).on("mouseup", ".groupCardOuter", function(){
  		$(this).css("box-shadow","2px 2px 2px 2px #9e9e9e");
  		$(this).css("border-color","#72CFD7");
  		$(this).find(".groupCardName").css("background-color","#72CFD7");
	});
	
	$(".btn-block").hover(function(){
		$(this).css("border-color","#72CFD7");
		$(this).css("background-color","#72CFD7");
		$(this).css("box-shadow","2px 2px 2px 2px #9e9e9e");
	},function(){
		$(this).css("box-shadow","");
	});
	
	$(".btn-block").mousedown(function(){
		$(this).css("border-color","#62b2ba");
		$(this).css("background-color","#62b2ba");
		$(this).css("box-shadow","");
	});
	
	$(".btn-block").mouseup(function(){
		$(this).css("border-color","#72CFD7");
		$(this).css("background-color","#72CFD7");
		$(this).css("box-shadow","2px 2px 2px 2px #9e9e9e");
	});
	
	$("#reset_date").hover(function(){
		$(this).css("box-shadow","2px 2px 2px 2px #9e9e9e");
	},function(){
		$(this).css("box-shadow","");
	});
	
	$("#reset_date").mousedown(function(){
		$(this).css("border-color","#62b2ba");
		$(this).css("background-color","#62b2ba");
		$(this).css("box-shadow","");
	});
	
	$("#reset_date").mouseup(function(){
		$(this).css("border-color","#72CFD7");
		$(this).css("background-color","#72CFD7");
		$(this).css("box-shadow","2px 2px 2px 2px #9e9e9e");
	});
	
	$("input").focus(function(){
		$(this).css("border-color","#72CFD7");
		$(this).css("outline-color","#72CFD7");
	});
	
	$("input").blur(function(){
		$(this).css("border-color","");
		$(this).css("outline-color","");
	});
	
	$("select").focus(function(){
		$(this).css("border-color","#72CFD7");
		$(this).css("outline-color","#72CFD7");
	});
	
	$("select").blur(function(){
		$(this).css("border-color","");
		$(this).css("outline-color","");
	});

});


$(function () {
    $('#start_date').datetimepicker({
    	format: 'YYYY-MM-DD',
    	minDate:new Date()
    });
    $('#end_date').datetimepicker({
    	useCurrent: false,
    	format: 'YYYY-MM-DD'
    });
    $("#start_date").on("dp.change", function (e) {
        $('#end_date').data("DateTimePicker").minDate(e.date);
    });
    $("#end_date").on("dp.change", function (e) {
        $('#start_date').data("DateTimePicker").maxDate(e.date);
    });
    
    
});

$('#reset_date').click(function(){
	$('#end_date').value='';
	$('#start_date').value='';
});