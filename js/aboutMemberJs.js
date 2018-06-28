$(document).ready(function(){
	$(function(){
		if($("#myInfoBar").attr("value") == "YES"){
			$("#heartIconInfo").css("display","none");
			$("#chatIconInfo").css("display","none");
			$("#badIconInfo").css("display","none");
			return;
		}
		$(".editIcon").css("display","none");
		$(".hert").css("display","none");
		$("#heartIconInfo").css("display","block");
		$("#chatIconInfo").css("display","block");
		$("#badIconInfo").css("display","block");
	});
	
	$("#chatIconInfo").click(function(){
		if($("#mebPic").css("display") != "block"){
			$("#signin").click();
			return;
		}
		showChatBox($("#mebInfoName").attr("value"), $("#mebInfoName").text());
	});
	
	$(function(){
		var height = $("#noMean").css("top");
		$("#divright").css("height",height);
	});

	$(".mebTabFans").click(function(){
		tabClick($(".mebTabFans"),$(this));
	});

	$(".mebTabFav").click(function(){
		tabClick($(".mebTabFav"),$(this));
	});

	$(".mebTabGroup").click(function(){
		tabClick($(".mebTabGroup"),$(this));
	});

	$(".mebTabBlog").click(function(){
		tabClick($(".mebTabBlog"),$(this));
	});

	$(".editIcon").mouseenter(function(){
		$(this).css("text-shadow","2px 2px #ddd");
	});

	$(".editIcon").mouseleave(function(){
		$(this).css("text-shadow","");
	});

	$(".editIcon").mouseup(function(){
		$(this).css("text-shadow","2px 2px #ddd");
	});

	$("#heartIconInfo").mousedown(function(){
		$(this).css("text-shadow","");
	});

	$("#heartIconInfo").mouseenter(function(){
		$(this).css("text-shadow","2px 2px pink");
	});

	$("#heartIconInfo").mouseleave(function(){
		$(this).css("text-shadow","");
	});

	$("#heartIconInfo").mouseup(function(){
		$(this).css("text-shadow","2px 2px pink");
	});

	$(".editIcon").mousedown(function(){
		$(this).css("text-shadow","");
	});

	$(".mebInfos").mouseenter(function(){
		$(this).css("text-shadow","2px 2px #9e9e9e");
	});

	$(".mebInfos").mouseleave(function(){
		$(this).css("text-shadow","");
	});

	$(".mebInfos").mouseup(function(){
		$(this).css("text-shadow","2px 2px #9e9e9e");
	});

	$(".mebInfos").mousedown(function(){
		$(this).css("text-shadow","");
	});

	$("#fans").click(function(){
		$(".fansAndFlowDiv").stop().fadeOut(500,function(){
			$("#fansDiv").stop().fadeIn(500);
		});
	});

	$("#flow").click(function(){
		$(".fansAndFlowDiv").stop().fadeOut(500,function(){
			if($("#myInfoBar").attr("value") == "NO"){
				$(".cancel").css("display","none");
			}
			$("#flowDiv").stop().fadeIn(500);
		});
	});

	$(document).on("mouseenter", ".FlowMebs", function(){
  		$(this).css("background-color","#72CFD7");
		$(this).find(".FlowMebsName").css("color","white");
  		
	});

	$(document).on("mouseleave", ".FlowMebs", function(){
  		$(this).css("background-color","white").css("color","#9e9e9e");
  		$(this).find(".FlowMebsName").css("color","#9e9e9e");
	});

	$("#spotFav").click(function(){
		$("#favFade").stop().fadeOut(500,function(){
			$(".blogFavArea").css("display","none");
			$("#favSpot").css("display","block");
			$("#favFade").stop().fadeIn(500);
		});
	});

	$("#blogFav").click(function(){
		$("#favFade").stop().fadeOut(500,function(){
			$(".blogFavArea").css("display","none");
			$("#favBlog").css("display","block");
			$("#favFade").stop().fadeIn(500);
		});
	});

	$("#groupFav").click(function(){
		$("#favFade").stop().fadeOut(500,function(){
			$(".blogFavArea").css("display","none");
			$("#favGroup").css("display","block");
			$("#favFade").stop().fadeIn(500);
		});
	});

	$(document).on("mouseenter",".hert",function(){
		$(this).css("text-shadow","2px 2px #aaa");
	});

	$(document).on("mouseleave",".hert",function(){
		$(this).css("text-shadow","");
	});

	$(document).on("mousedown",".hert",function(){
		$(this).css("text-shadow","");
	});

	$(document).on("click",".hert",function(){
		$(this).css("text-shadow","");
		$(this).parent().remove();
	});

	$("#spotBlog").click(function(){
		$("#blogFade").stop().fadeOut(500,function(){
			$(".myBlogArea").css("display","none");
			$("#myBlogSpot").css("display","block");
			$("#blogFade").stop().fadeIn(500);
		});
	});

	$("#restBlog").click(function(){
		$("#blogFade").stop().fadeOut(500,function(){
			$(".myBlogArea").css("display","none");
			$("#myBlogRest").css("display","block");
			$("#blogFade").stop().fadeIn(500);
		});
	});

	$("#hotelBlog").click(function(){
		$("#blogFade").stop().fadeOut(500,function(){
			$(".myBlogArea").css("display","none");
			$("#myBlogHotel").css("display","block");
			$("#blogFade").stop().fadeIn(500);
		});
	});

	$("#palyBlog").click(function(){
		$("#blogFade").stop().fadeOut(500,function(){
			$(".myBlogArea").css("display","none");
			$("#myBlogPlay").css("display","block");
			$("#blogFade").stop().fadeIn(500);
		});
	});

	$(".changeInfoInput").focus(function(){ // text得到focus
		$(this).css("border-color","#72CFD7");
		$(this).css("outline-color","#72CFD7");
	});

	$(".changeInfoInput").blur(function(){ // 失去focus
		$(this).css("border-color","#D0D0D0");
		$(this).css("outline-cloor","white");
	});

	$("#editIconInfo").click(function(){
		$("#changeInfoArea").slideDown(300).css("z-index","100");
		$(".overlay").css("display","block");
		overlayBlurry();
		var infoName = $("#mebInfoName").html();
		$("#changeInfoName").val(infoName);
		var infoGender = $("#mebInfoGender").html();
		$("#changeInfoGender").val(infoGender);
		var infoBirthday = $("#mebInfoBirthday").html();
		$("#changeInfoBirthday").val(infoBirthday);
	});

	$("#changeInfoBtnR").click(function(){
		$("#changeInfoArea").slideUp(300);
		$(".overlay").css("display","none");
		overlayBlurry();
	});

	$("#editIconTntr").click(function(){
		$("#changeIntrArea").slideDown(300).css("z-index","100");
		$(".overlay").css("display","block");
		overlayBlurry();
		var inter = $("#mebInterArea").html();
		$("#changeIntrText").val(inter);
	});

	$("#changeIntrBtnR").click(function(){
		$("#changeIntrArea").slideUp(300);
		$(".overlay").css("display","none");
		overlayBlurry();
	});

	$("#changeIntrText").focus(function(){ // text得到focus
		$(this).css("border-color","#72CFD7");
		$(this).css("outline-color","#72CFD7");
	});

	$("#changeIntrText").blur(function(){ // 失去focus
		$(this).css("border-color","#D0D0D0");
		$(this).css("outline-cloor","white");
	});

	$(document).on("mouseenter",".cancel",function(){
		$(this).css("border","1px solid white");
		$(this).css("box-shadow","2px 2px #ccc");
	});

	$(document).on("mouseleave",".cancel",function(){
		$(this).css("border","");
		$(this).css("box-shadow","");
	});

	$(document).on("mousedown",".cancel",function(){
		$(this).css("box-shadow","");
	});
	
	$(document).on("mouseenter",".linkBlogCard",function(){
		$(this).find(".blogCardName").css("background-color","#72CFD7").css("color","white");
		$(this).find("img").animate({width:'+=10',height:'+=10',marginTop:'-=5px',marginLeft:'-=5px'},300);
		$(this).css("box-shadow","3px 3px #ddd");
	});

	$(document).on("mouseleave",".linkBlogCard",function(){
		$(this).find(".blogCardName").css("background-color","rgba(0,0,0,0)").css("color","#9e9e9e");
		$(this).css("border-color","#72CFD7");
		$(this).find("img").animate({width:'-=10',height:'-=10',marginTop:'+=5px',marginLeft:'+=5px'},300);
		$(this).css("box-shadow","");
	});

	$(document).on("mouseup",".linkBlogCard",function(){
		$(this).find(".blogCardName").css("background-color","#72CFD7").css("color","white");
		$(this).css("box-shadow","3px 3px #ddd");
	});

	$(document).on("mousedown",".linkBlogCard",function(){
		$(this).find(".blogCardName").css("background-color","#62b2ba");
		$(this).css("border-color","#72CFD7");
		$(this).css("box-shadow","");
	});

	$("a[href='#top']").click(function(){ // 滑動超連結
		$("body").animate({scrollTop:$("#aTopDiv").offset().top}, "show");
		 return false;
	});

	$("a[href='#fav']").click(function(){ // 滑動超連結
		$("body").animate({scrollTop:$("#aFavDiv").offset().top}, "show");
		 return false;
	});

	$("a[href='#blog']").click(function(){ // 滑動超連結
		$("body").animate({scrollTop:$("#aBlogDiv").offset().top}, "show");
		 return false;
	});

	$("#changePicInput").change(function(event){
		var objectURL = window.URL.createObjectURL(event.target.files[0]);
		$("#myPicUpload img").attr("src",objectURL);
		$("#myPicUpload").css("display","bolck");
	});

	$("#editIconImg").click(function(){
		$("#changePicArea").slideDown(300);
		$(".overlay").css("display","block");
		overlayBlurry();
	});

	$("#changePicBtnR").click(function(){
		$("#changePicArea").slideUp(300);
		$(".overlay").css("display","none");
		overlayBlurry();
	});
	
	$("#favSpot").on("click",".removeSpotFav",function(){ // 刪除最愛景點
		$.ajax({
			url: "/CA101_G4/SpotFavServlet",
	 		type: "POST",
	 		datatype: "json",
	 		data: {
	 			action: "deleteSpotLove",
	 			mebId: $("#logo").attr("value"),
	 			spotId: $(this).attr("id"),
	 		},
	 		error: function(xhr){
	 			alert('Ajax request 發生錯誤');
	 		},
	 		success: function(data){

	 		}
		});
	});
	
	$("#divouter").on("click","#heartIconInfo",function(){ // 追蹤取消追蹤
		if($("#heartIconInfo").attr("title") == "追蹤"){
			creatFollow();
		}else{
			unFollow();
		}
	});
	
	$(isFollow()); // 判斷是否已加入追蹤
	
	$("#mebRightBlockFlow").on("click",".cancel",function (){ // 追蹤管理退追蹤
		cancelFollow($(this));
	});
	
	$("#changeInfoBtnL").click(changeInfo); // 修改資料
	
	$("#changeIntrBtnL").click(changeIntr); // 修改自我介紹
	
	$("#changePicBtnL").click(changPic); // 變更大頭照
	
	$("#changePicBtnR").click(function(){
		
	});
	
	$("#badIconInfo").click(function(){
		if($("#mebPic").css("display") != "block"){
			$("#signin").click();
			return;
		}
		$("#badArea").slideDown(300);
		$("#badArea").slideDown(300).css("z-index","100");
		$(".overlay").css("display","block");
		overlayBlurry();
	});
	
	$("#badText").focus(function(){ // text得到focus
		$(this).css("border-color","#72CFD7");
		$(this).css("outline-color","#72CFD7");
	});

	$("#badText").blur(function(){ // 失去focus
		$(this).css("border-color","#D0D0D0");
		$(this).css("outline-cloor","white");
	});
	
	$("#badBtnR").click(function(){
		$("#badArea").slideUp(300);
		$(".overlay").css("display","none");
		$("#badText").val("");
		overlayBlurry();
	});
	
	$("#badBtnL").click(checkBad);
	
	$.datetimepicker.setLocale('zh');
	var date = new Date($('#changeInfoBirthday').val());
    $('#changeInfoBirthday').datetimepicker({
       theme: '',              //theme: 'dark',
       timepicker:false,       //timepicker:true,
       step: 1,                //step: 60 (這是timepicker的預設間隔60分鐘)
       format:'Y-m-d',         //format:'Y-m-d H:i:s'
    });
    //2.以下為某一天之後的日期無法選擇
	var somedate2 = new Date();
	$('#changeInfoBirthday').datetimepicker({
	    beforeShowDay: function(date) {
	    	if (  date.getYear() >  somedate2.getYear() || 
		         (date.getYear() == somedate2.getYear() && date.getMonth() >  somedate2.getMonth()) || 
		         (date.getYear() == somedate2.getYear() && date.getMonth() == somedate2.getMonth() && date.getDate() > somedate2.getDate())
	        ) {
	             return [false, ""]
	        }
	        return [true, ""];
	}});
});
function checkBad(){
	if($("#badText").val().length == 0){
		return;
	}
	$.ajax({
		url: "/CA101_G4/ReportServlet",
		type: "POST",
		datatype: "json",
		data:{
			action: "badMebReport",
			badMeb: $("#mebInfoName").attr("value"),
			mebId: $("#logo").attr("value"),
			cont: $("#badText").val(),
		},
		error: function(xhr){
			alert("badMebReport");
		},
		success: function(data){
			$("#badArea").slideUp(300);
			$(".overlay").css("display","none");
			$("#badText").val("");
			overlayBlurry();
		}
	});
}

function creatFollow(){
	if($("#mebPic").css("display") != "block"){
		$("#signin").click();
		return;
	}
	$.ajax({
		url: "/CA101_G4/FollowServlet",
 		type: "POST",
 		datatype: "json",
 		data: {
 			action: "creatFollow",
 			mebId: $("#mebInfoName").attr("value"),
 			myId: $("#logo").attr("value"),
 		},
 		error: function(xhr){
 			alert('creatFollow');
 		},
 		success: function(data){
 			$("#heartIconInfo").html("&#xf004;");
			$("#heartIconInfo").attr("title","取消追蹤");
 		}
	});
}

function unFollow(){
	$.ajax({
		url: "/CA101_G4/FollowServlet",
 		type: "POST",
 		datatype: "json",
 		data: {
 			action: "unFollow",
 			mebId: $("#mebInfoName").attr("value"),
 			myId: $("#logo").attr("value"),
 		},
 		error: function(xhr){
 			alert('unFollow');
 		},
 		success: function(data){
 			$("#heartIconInfo").html("&#xf08a;");
			$("#heartIconInfo").attr("title","追蹤");
 		}
	});
}

function isFollow(){
	$("#heartIconInfo").html("&#xf08a;");
	$("#heartIconInfo").attr("title","追蹤");
	if($("#logo").attr("value") == "0"){
		return;
	}
	$.ajax({
		url: "/CA101_G4/FollowServlet",
 		type: "POST",
 		datatype: "json",
 		data: {
 			action: "isFollow",
 			mebId: $("#mebInfoName").attr("value"),
 			myId: $("#logo").attr("value"),
 		},
 		error: function(xhr){
 			alert('isFollow');
 		},
 		success: function(data){
 			data = JSON.parse(data);
 			if(data.result == "OK"){
 				$("#heartIconInfo").html("&#xf004;");
 	 			$("#heartIconInfo").attr("title","取消追蹤");
 			}
 		}
	});
}

function cancelFollow(who){
	$.ajax({
		url: "/CA101_G4/FollowServlet",
 		type: "POST",
 		datatype: "json",
 		data: {
 			action: "unFollow",
 			mebId: who.attr("id"),
 			myId: $("#logo").attr("value"),
 		},
 		error: function(xhr){
 			alert('unFollow');
 		},
 		success: function(data){
 			who.parent().remove();
 		}
	});
}

function changeInfo(){
	$.ajax({
		url: "/CA101_G4/MemberServlet",
 		type: "POST",
 		datatype: "json",
 		data: {
 			action: "changeInfo",
 			mebName: $("#changeInfoName").val(),
 			mebTEL: $("#changeInfoTEL").val(),
 			mebBirthday: $("#changeInfoBirthday").val(),
 			mebId: $("#logo").attr("value"),
 		},
 		error: function(xhr){
 			alert('changeIntr');
 		},
 		success: function(data){
 			location.reload();
 		}
	});
}

function changeIntr(){
	$.ajax({
		url: "/CA101_G4/MemberServlet",
 		type: "POST",
 		datatype: "json",
 		data: {
 			action: "changeIntr",
 			mebIntr: $("#changeIntrText").val(),
 			mebId: $("#logo").attr("value"),
 		},
 		error: function(xhr){
 			alert('changeIntr');
 		},
 		success: function(data){
 			location.reload();
 		}
	});
}

function changPic(){
	var pic = new FormData();
	pic.append("newPic",$("#changePicInput")[0].files[0]);
	pic.append("action","changPic");
	pic.append("mebId",$("#logo").attr("value"));
	$.ajax({
		url: "/CA101_G4/MemberServlet",
 		type: "POST",
 		datatype: "json",
 		contentType: false,
 		processData: false,
 		data: pic,
 		error: function(xhr){
 			alert('changeIntr');
 		},
 		success: function(data){
 			location.reload();
 		}
	});
}

function tabClick(tab,hello){
	tab.css("background-color","#62b2ba");
	tab.css("color","white");
	hello.css("background-color","white");
	hello.css("color","#72CFD7");
}