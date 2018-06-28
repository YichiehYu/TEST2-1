$(document).ready(function(){	
	$(function(){

	//$(".spotImg").css("height",$(".spotImgDiv").eq(0).css("height"));
	$(".spotImg").css("width",$(".spotImgDiv").eq(0).css("width"));
	});
	$("#group_pic").change(function(){ 
	     readURL(this);
	});

});


$(function () {
    $('#first_date').datetimepicker({
    	format: 'YYYY-MM-DD',
        minDate:new Date()
    });
});


function readURL(input){
	  if(input.files && input.files[0]){
	    var reader = new FileReader();
	    reader.onload = function (e) {
	       $("#preview_img2").attr('src', e.target.result);
	    }
	    reader.readAsDataURL(input.files[0]);
	    $("#preview_img2").show();
	  }
	}






