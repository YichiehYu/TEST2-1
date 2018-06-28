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

$(function () {
    $('#voteDate1').datetimepicker({
    	format: 'YYYY-MM-DD',
        minDate:new Date()
    });
});

$(function () {
    $('#voteDate2').datetimepicker({
    	format: 'YYYY-MM-DD',
        minDate:new Date()
    });
});

$(function () {
    $('#voteDate3').datetimepicker({
    	format: 'YYYY-MM-DD',
        minDate:new Date()
    });
});

$('#num').change(function(){
	if($('#num').val()==2){
		$('#voteDate3').data("DateTimePicker").disable();
		$('.date3text').css("color","#ddd");
		$("#voteDate3").show();
		$('#date3display').show();
	}else{
		$('#voteDate3').data("DateTimePicker").enable();
		$('.date3text').css("color","#000");
		$("#voteDate3").hidden();
		$('#date3display').hidden();
	}
});
Date.prototype.addDays = function(days) {
	  this.setDate(this.getDate() + days);
	  return this;
	};

$("#voteDate1").on("dp.change", function (e) {
	var c = new Date(e.date);
	var d = new Date(e.date);
	d.addDays(parseInt($('#itinDays').val()));
	var dateString=c.getUTCFullYear()+"/"+(c.getUTCMonth()+1)+"/"+c.getUTCDate()+"到"+d.getUTCFullYear()+"/"+(d.getUTCMonth()+1)+"/"+d.getUTCDate();
	$('#date1display').text(dateString);
});
$("#voteDate2").on("dp.change", function (e) {
	var c = new Date(e.date);
	var d = new Date(e.date);
	d.addDays(parseInt($('#itinDays').val()));
	var dateString=c.getUTCFullYear()+"/"+(c.getUTCMonth()+1)+"/"+c.getUTCDate()+"到"+d.getUTCFullYear()+"/"+(d.getUTCMonth()+1)+"/"+d.getUTCDate();
	$('#date2display').text(dateString);
});
$("#voteDate3").on("dp.change", function (e) {
	var c = new Date(e.date);
	var d = new Date(e.date);
	d.addDays(parseInt($('#itinDays').val()));
	var dateString=c.getUTCFullYear()+"/"+(c.getUTCMonth()+1)+"/"+c.getUTCDate()+"到"+d.getUTCFullYear()+"/"+(d.getUTCMonth()+1)+"/"+d.getUTCDate();
	$('#date3display').text(dateString);
});




function readURL(input){
	  if(input.files && input.files[0]){
	    var reader = new FileReader();
	    reader.onload = function (e) {
	       $("#preview_img").attr('src', e.target.result);
	    }
	    reader.readAsDataURL(input.files[0]);
	    $("#preview_img").show();
	  }
	}

function deadlineChange(){
	var str="出團時間";
	str+=$("#deadline").val();
	str+="天前停止招人"
	$(".deadlineText").text(str);
	console.log(str);
};

