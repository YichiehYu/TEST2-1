$(document).ready(function(){
	$("#joinGroup").hover(function(){
		$(this).css("color","white");
		$(this).css("border-color","#72CFD7");
		$(this).css("background-color","#72CFD7");
		$(this).css("box-shadow","2px 2px 2px 2px #9e9e9e");
	},function(){
		$(this).css("box-shadow","");
	});
	
	//是否關注過
	if($("#favorite").val()==="1"){
		var endPointURL= "http://"+window.location.host+window.location.pathname.substring(0, window.location.pathname.indexOf('/', 1))+"/img/heart.png";
		$(".heart").attr("src",endPointURL);
	}
	
	$(function(){
		$(".spotImg").css("width",$(".spotImgDiv").eq(0).css("width"));
	});
	
	$(".gB1").click(function(){
	  	$(".showItinerary").show();
	  	$(".groupDetail").hide();
		$(".gB1").css("background-color","#72CFD7");
		$(".gB2").css("background-color","#ddd");
		$(function(){
			$(".gImg").css("width",$(".gPic").eq(0).css("width"));
		});
	});
	$(".gB2").click(function(){
	  	$(".showItinerary").hide();
	  	$(".groupDetail").show();
	  	$(".gB1").css("background-color","#ddd");
		$(".gB2").css("background-color","#72CFD7");
	});

//	$(function(){
//	$(".gImg").css("width",$(".gPic").eq(0).css("width"));
//	$(".gImg").css("height",$(".gPic").eq(0).css("height"));
//	$(".groupImg").css("height",$(".groupImgDiv").eq(0).css("height"));
//	});
	
	$(document.body).toggleClass("html-body-overflow");
	$(".itB1").show();
	
	//關注揪團
	$(".heart").click(function(){
		if($("#mebId").val()==""){
			alert("請先登入才能關注揪團喔!");
		}else{
			if($("#favorite").val()==="0"){
				var path = window.location.pathname;
				var endPointURL= "http://"+window.location.host+path.substring(0, path.indexOf('/', 1))+"/img/heart.png";
				$(".heart").attr("src",endPointURL);

				$("#favorite").val("1");
			}else{
				var path = window.location.pathname;
				var endPointURL= "http://"+window.location.host+path.substring(0, path.indexOf('/', 1))+"/img/heart2.png";
				$(".heart").attr("src",endPointURL);

				$("#favorite").val("0");
			}
			var path = window.location.pathname;
			var endPointURL= "http://"+window.location.host+path.substring(0, path.indexOf('/', 1))+"/GroupFavServlet";
			var data_info="action=fav";
			var memberDetail="";
			data_info+="&groupId="+$("#myGroup").val();
			jQuery.post(endPointURL,
			  	data_info,
			  	function(response){}
			 );
		}
	});

	//檢舉
	$('.exclamation').click(function(){
		if($("#mebId").val()==""){
			alert("請先登入才能檢舉喔!");
		}else{
			if(confirm("你確定要檢舉嗎?")){
				var person = prompt("請輸入檢舉相關訊息!", "");
				if (person != null) {
					var data_info="action=exclamation";
					data_info+="&groupId="+$("#myGroup").val();
					data_info+="&murmur="+person;
					jQuery.post("group.do",
							data_info,
							function(response){
								console.log(response);
								var myjson = JSON.parse(response);
								console.log(myjson);
								if(myjson.errorMsgs==null){
									alert("已發出檢舉!");
								}else{
									alert("發生異常");
								}
				            }
					);
				}
			}
		}
	});

	$(".votepic1").click(function(){
		$(".groupContent").hide();
		$("#voteBox").show();
		
		$(".votepic1").hide();
		$(".votepic2").show();
	});

	$(".votepic2").click(function(){
		$(".groupContent").show();
		$("#voteBox").hide();
		
		$(".votepic1").show();
		$(".votepic2").hide();
	});



	$(".menu").click(function(){
		if($("#Mdiv").text()=="CLOSE"){
			$(".heart").show("slow");
			$(".exclamation").show("slow");
			$(".votepic0").show("slow");
			$(".votepic1").show("slow");
			$(".votepic2").show("slow");
		}else{
			$(".heart").hide();
			$(".exclamation").hide();
			$(".votepic0").hide();
			$(".votepic1").hide();
			$(".votepic2").hide();
		}
		
	});


	Date.prototype.addDays = function(days) {
		  this.setDate(this.getDate() + days);
		  return this;
	};
		
	$(document).unload(function(){
		disconnect();
	});

	//行程明細
	$(".iB1").click(function(){
		$(".iTextCover").hide();
	  	$(".itB1").show();
	  	$(".itineraryBar").css("background-color","#ddd");
		$(".iB1").css("background-color","#7FDFDF");
	});
	$(".iB2").click(function(){
		$(".iTextCover").hide();
	  	$(".itB2").show();
	  	$(".itineraryBar").css("background-color","#ddd");
		$(".iB2").css("background-color","#7FDFDF");
	});
	$(".iB3").click(function(){
		$(".iTextCover").hide();
	  	$(".itB3").show();
	  	$(".itineraryBar").css("background-color","#ddd");
		$(".iB3").css("background-color","#7FDFDF");
	});
	$(".iB4").click(function(){
		$(".iTextCover").hide();
	  	$(".itB4").show();
	  	$(".itineraryBar").css("background-color","#ddd");
		$(".iB4").css("background-color","#7FDFDF");
	});
	$(".iB5").click(function(){
		$(".iTextCover").hide();
	  	$(".itB5").show();
	  	$(".itineraryBar").css("background-color","#ddd");
		$(".iB5").css("background-color","#7FDFDF");
	});
	$(".iB6").click(function(){
		$(".iTextCover").hide();
	  	$(".itB6").show();
	  	$(".itineraryBar").css("background-color","#ddd");
		$(".iB6").css("background-color","#7FDFDF");
	});
	$(".iB7").click(function(){
		$(".iTextCover").hide();
	  	$(".itB7").show();
	  	$(".itineraryBar").css("background-color","#ddd");
		$(".iB7").css("background-color","#7FDFDF");
	});
	$(".iB8").click(function(){
		$(".iTextCover").hide();
	  	$(".itB8").show();
	  	$(".itineraryBar").css("background-color","#ddd");
		$(".iB8").css("background-color","#7FDFDF");
	});
	$(".iB9").click(function(){
		$(".iTextCover").hide();
	  	$(".itB9").show();
	  	$(".itineraryBar").css("background-color","#ddd");
		$(".iB9").css("background-color","#7FDFDF");
	});
	$(".iB10").click(function(){
		$(".iTextCover").hide();
	  	$(".itB10").show();
	  	$(".itineraryBar").css("background-color","#ddd");
		$(".iB10").css("background-color","#7FDFDF");
	});
	$(".iB11").click(function(){
		$(".iTextCover").hide();
	  	$(".itB11").show();
	  	$(".itineraryBar").css("background-color","#ddd");
		$(".iB11").css("background-color","#7FDFDF");
	});
	$(".iB12").click(function(){
		$(".iTextCover").hide();
	  	$(".itB12").show();
	  	$(".itineraryBar").css("background-color","#ddd");
		$(".iB12").css("background-color","#7FDFDF");
	});


	//切換行程與詳情
	$(".gB1").click(function(){
	  	$(".showItinerary").show();
	  	$(".groupDetail").hide();
	  	//$(".memberList").hide();
		
		$(".gB1").css("background-color","#72CFD7");
		$(".gB2").css("background-color","#ddd");
		//$(".gB3").css("background-color","#ddd");

		$(function(){
		// $(".gImg").css("height",$(".gPic").eq(0).css("height"));
		$(".gImg").css("width",$(".gPic").eq(0).css("width"));
		});
	});
	$(".gB2").click(function(){
	  	$(".showItinerary").hide();
	  	$(".groupDetail").show();
	  	//$(".memberList").hide();

	  	$(".gB1").css("background-color","#ddd");
		$(".gB2").css("background-color","#72CFD7");
		//$(".gB3").css("background-color","#ddd");
	});


	//集合時間
	$('#gathertimepicker').datetimepicker({
	    format: 'hh:mm A',
	    stepping:5
	});

	//發起人修改文字
	$('.update').click(function(){
		$('.update').hide();
		$('.gName').hide();
		$('.gText').hide();
		$('#venueCover').hide();
		$('.gTips').hide();
		$('#gatherCover').hide();

		$('.okay').show();
		$('.cancel').show();
		$('#gNameInput').show();
		$('#gTextInput').show();
		$('#venueInputCover').show();
		$('#gTipsInput').show();
		$('#gatherInputCover').show();
		

		$("#gNameInput").attr('value',$('.gName').text());
		$('#gTextInput').text($('.gText').text());
		
		$(".venueInput").attr('value',$('#venue').text());
		$('#gTipsInput').text($('.gTips').text());
		$("#gatherInput").attr('value',$('#gather').text());
		initMap2();
	});

	//發起人完成編極
	$('.okay').click(function(){
		var data_info="action=updateText";
		data_info+="&groupId="+$("#myGroup").val();
		data_info+="&first_date="+$("#myTime").val();
		data_info+="&max_meb="+$("#myMeb").val();
		data_info+="&groupName="+$("#gNameInput").val();
		data_info+="&groupContext="+$("#gTextInput").val();
		data_info+="&venue="+$(".venueInput").val();
		data_info+="&memo="+$("#gTipsInput").val();
		data_info+="&gather="+$("#gatherInput").val();
		data_info+="&venueLat="+venue_Lat;
		data_info+="&venueLng="+venue_Lng;
		data_info+="&gather="+$("#gatherInput").val();
		data_info+="&itinerary="+$("#myItin").val();
		
		var url="group.do?"+data_info;

		jQuery.post("group.do",
				data_info,
				function(response){
					console.log(response);
					var myjson = JSON.parse(response);
					console.log(myjson);
					if(myjson.errorMsgs==null){
						$('.gName').text($("#gNameInput").val());
						$('.gText').text($("#gTextInput").val());
						$('#venue').text($(".venueInput").val());
						$('.gTips').text($("#gTipsInput").val());
						$('#gather').text($("#gatherInput").val());
						alert("已修改成功!");

					}else{
							alert("團名,介紹不可空白");//"團名,介紹不可空白"
					}
	            }
		);
		
		$('.update').show();
		$('.gName').show();
		$('.gText').show();
		$('#venueCover').show();
		$('.gTips').show();
		$('#gatherCover').show();
		
		$('.okay').hide();
		$('.cancel').hide();
		$('#gNameInput').hide();
		$('#gTextInput').hide();
		$('#venueInputCover').hide();
		$('#gTipsInput').hide();
		$('#gatherInputCover').hide();
		
		$("#myLat").attr('value',venue_Lat);
		$("#myLng").attr('value',venue_Lng);
		initMap();
	});

	//發起人取消編輯
	$('.cancel').click(function(){
		$('.update').show();
		$('.gName').show();
		$('.gText').show();
		$('#venueCover').show();
		$('.gTips').show();
		$('#gatherCover').show();
		
		$('.okay').hide();
		$('.cancel').hide();
		$('#gNameInput').hide();
		$('#gTextInput').hide();
		$('#venueInputCover').hide();
		$('#gTipsInput').hide();
		$('#gatherInputCover').hide();
		initMap();
	});

	//顯示投票結果
	if ($("#myState").attr('value')=="0"){
	}else{
		var c = new Date($("#voteVOdate1").val());
		var d = new Date($("#voteVOdate1").val());
		d.addDays(parseInt($('#itinDays').val()));
		var dateString1=c.getUTCFullYear()+"/"+(c.getUTCMonth()+1)+"/"+c.getUTCDate()+"到"+d.getUTCFullYear()+"/"+(d.getUTCMonth()+1)+"/"+d.getUTCDate();
		
		c = new Date($("#voteVOdate2").val());
		d = new Date($("#voteVOdate2").val());
		d.addDays(parseInt($('#itinDays').val()));
		var dateString2=c.getUTCFullYear()+"/"+(c.getUTCMonth()+1)+"/"+c.getUTCDate()+"到"+d.getUTCFullYear()+"/"+(d.getUTCMonth()+1)+"/"+d.getUTCDate();
		
		c = new Date($("#voteVOdate3").val());
		d = new Date($("#voteVOdate3").val());
		d.addDays(parseInt($('#itinDays').val()));
		var dateString3=c.getUTCFullYear()+"/"+(c.getUTCMonth()+1)+"/"+c.getUTCDate()+"到"+d.getUTCFullYear()+"/"+(d.getUTCMonth()+1)+"/"+d.getUTCDate();
		
		$("#result1").text(dateString1);
		$("#result2").text(dateString2);
		$("#result3").text(dateString3);
		
		var Date_A = new Date();
		var Date_B = new Date($("#voteEnd").val());
		Date_B-=1000*60*60*8;
		var diff = Date_B - Date_A;

		var leftDays = Math.floor(diff/60/60/1000/24);
		if(leftDays > 0) diff = diff - (leftDays * 60*60*1000*24);
		
		var leftHours = Math.floor(diff/60/60/1000);
		if(leftHours > 0) diff = diff - (leftHours * 60*60*1000);

		var leftMins = Math.floor(diff/60/1000);
		if(leftMins >0) diff = diff - (leftMins * 60*1000);
		
		var leftSecs = Math.floor(diff/1000);
		
		var str="距離投票截止還有"+leftDays+"天"+leftHours+"小時"+leftMins+"分";
		
		$(".voteDeadline").text(str);
		
		if($("#voteResult").val()==="0"){//還沒投票
			$(".votepic1").show();
			$("#voteForm").append("<select class='form-control' id='voteDate' name='voteDate'></select>");
			$("#voteForm").append("<div class='text-center'><button class='btn btn-primary' id='voteSend'>送出</button></div>")
			
			var el = document.getElementById("voteDate");
			el.add(new Option(dateString1, "1"), null);
			el.add(new Option(dateString2, "2"), null); 
			el.add(new Option(dateString3, "3"), null);
		}else if($("#voteResult").val()==="1"){
			$(".votepic1").remove();
			$("#result1").css("background-color","rgb(114,207,215,0.3)");
		}else if($("#voteResult").val()==="2"){
			$(".votepic1").remove();
			$("#result2").css("background-color","rgb(114,207,215,0.3)");
		}else if($("#voteResult").val()==="3"){
			$(".votepic1").remove();
			$("#result3").css("background-color","rgb(114,207,215,0.3)");
		}
		//console.log($("#voteResult").val());
	  	$(".showItinerary").hide();
	  	$(".groupDetail").show();

	  	$(".gB1").css("background-color","#ddd");
		$(".gB2").css("background-color","#72CFD7");
		
		//成員清單
		var path = window.location.pathname;
		var endPointURL= "http://"+window.location.host+path.substring(0, path.indexOf('/', 1))+"/MemberServlet";
		var num=$(".member>input").length;
		
		 $("input[class='memberssss']").each(function(){
			 var mebId=this.value;
			 var memberName;
			 var data_info="action=searchMebInfo";
			 var memberDetail="";
			 
			 var thisForm = this;
		  	 data_info+="&mebId="+mebId;
		  	 jQuery.get(endPointURL,
		  				data_info,
		  				 function(response){
		  					var myjson = JSON.parse(response);
		  					memberName=myjson.memberName;
		  					
		  					memberDetail = "<div class='memberHead'><a href='/CA101_G4/front-end/member/aboutMember.jsp?mebId="+mebId+"'><div id='groupMeb'><img src='"+endPointURL+"Pic?mebIdForPic="+mebId+"' class='memberHeadImg' title='"+memberName+"'></div><div class='memberName'>"+memberName+"</div></a></div>";
		  						
//		  					memberDetail="<div class='memberName'>"+memberName+"</div>";
//					  	 	$(thisForm).after(memberDetail);
//		  					
//		  					memberDetail="<div class='memberHead'><a href='";
//		  					memberDetail+=endPointURL+"?action=mebVOForPage&mebIdPage="+mebId+"'>";
//
//		  					memberDetail+="<img class='memberHeadImg' title='"+memberName;
//		  					memberDetail+="' src='"+endPointURL+"Pic?mebIdForPic=";
//		  					memberDetail+=mebId+"'></a></div>";//製造出一個<img>
		  					$(".member").append(memberDetail);
		  	            }
		  		);
			 });
		$(".memberHeadImg").css("width",$(".memberHead").eq(0).css("width"));
		$(".memberHeadImg").css("height",$(".memberHead").eq(0).css("height"));
	}
});
function addCheck(){
	if(confirm("你確定要加入嗎?")){
		document.getElementById("form1").submit();
	}else{
	}
};

function quitCheck(){
	if(confirm("你確定要退出嗎?")){
		document.getElementById("form3").submit();
	}else{
	}
};
