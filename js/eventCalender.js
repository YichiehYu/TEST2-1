$(document).ready(function(){
	$("#calenderCity").hover(function(){
		$(this).stop().animate({height : "500px"});
		$("#cityLong div").css("display","inline-block");
		$("#monthCircular").fadeOut(300);
		$("#cityLong").css("display","block");
		$(".cityBigIcon").css("display","block");
		$("#cityLong").scroll(function(){
			if($("#cityLong").height() - $(this).scrollTop() <= 244){
				$(".cityBigIcon").css("display","none");
			}else{
				$(".cityBigIcon").css("display","block");
			}
		});
	},function(){
		$(this).stop().animate({height : "60px"},function(){
			$("#cityLong").css("display","none");
			$("#cityLong div").css("display","none");
		});
		$("#monthCircular").fadeIn(300);
		$(".cityBigIcon").css("display","none");
	});

	$("#cityLong").on("click","div",function(){
		var city = $(this).text();
		var cityId = $(this).attr("id");
		$("#witchCity").text(city);
		$("#witchCity").attr("value", cityId);
		searchEvent();
	});
	
	$("#cityLong").find("div").eq(18).click();


	$("#calenderInner").on("mouseenter",".eventBar",function(){
		back =  $(this).find(".eventDate").css("background-color");
		$(this).find(".eventDate").css("background-color","#72CFD7").css("color","white");
		$(this).stop().animate({height:'200px'},300);
		$(this).find(".events").css("display","block");
		
	});

	$("#calenderInner").on("mouseleave",".eventBar",function(){
		$(this).find(".eventDate").css("background-color",back).css("color","#aaa");
		$(this).stop().animate({height:'40px'},300,function(){
			$(this).find(".events").css("display","none");
		});
	});

	$(".monthNumber").hover(function(){
		$(this).css("background-color","white");
		$(this).css("color","#72CFD7");		
	},function(){
		$(this).css("background-color","rgb(255,255,255,0)");
		$(this).css("color","white");	
	});

	$(".monthNumber").click(function(){
		$("#circularBar").attr("value",$(this).text());
		whichNum($(this));
		getEvent($(this));
		searchEvent($(this));
	});
	
	$(clickNow());
});
var back;

function whichNum(num){
	var index = num.index()-1;
	var howMouch = index*30;
	$("#circularBar").css("transform",'rotate('+howMouch+'deg)');
}

function searchEvent(){
	var who = $("#circularBar").attr("value");
	var date = new Date();
	var year = date.getFullYear();
	var witchMonthfirst = new Date(year,who-1);
	var witchMonthlast = new Date(year,who,0);
	var startMonth = witchMonthfirst.getTime();
	var endMonth = witchMonthlast.getTime();
	var cityId = $("#witchCity").attr("value");
	
	if(cityId == null){
		return;
	}
	
	$.ajax({
		url: "/CA101_G4/EventServlet",
 		type: "POST",
 		datatype: "json",
 		data: {
 			action: "searchEvent",
 			startMonth: startMonth,
 			endMonth: endMonth,
 			cityId: cityId,
 		},
 		error: function(xhr){
 			alert('EventServlet');
 		},
 		success: function(data){
 			data = JSON.parse(data);
 			var array = data.eventList;
 			$(".events > div").remove();
 			for(var i = 0 ; i < array.length ; i++){
 				var startDate = array[i].eventStart.substr(8,2);
 				var endDate = array[i].eventEnd.substr(8,2);
 				var eventName = array[i].eventName;
 				var eventId = array[i].eventId;
 				var eventSide = array[i].eventSide;
 				
 				if(array[i].eventStart.substr(5,2)/10 != who/10 && array[i].eventEnd.substr(5,2)/10 != $("#monthNum").html()/10){
 					for(var j = 1 ; j <= witchMonthlast.getDate() ; j++){
 						var number = Math.floor((j)/10)=="0" ? "0"+j : j;
 						$(".eventDate[value='"+number+"']").next(".events").append("<div class='eventDiv' id='"+eventId+"'><a href='"+eventSide+"' title='"+eventName+"' target='_blank'><img src='/CA101_G4/EventServletPic?eventIdForPic="+eventId+"'><div>"+eventName+"</div></a></div>");
 					}
 				}else if(array[i].eventStart.substr(5,2)/10 != who/10 && array[i].eventEnd.substr(5,2)/10 == $("#monthNum").html()/10){
 					for(var j = 1 ; j <= endDate ; j++){
 						var number = Math.floor((j)/10)=="0" ? "0"+j : j;
 						$(".eventDate[value='"+number+"']").next(".events").append("<div class='eventDiv' id='"+eventId+"'><a href='"+eventSide+"' title='"+eventName+"' target='_blank'><img src='/CA101_G4/EventServletPic?eventIdForPic="+eventId+"'><div>"+eventName+"</div></a></div>");
 					}
 				}else if(array[i].eventStart.substr(5,2)/10 == who/10 && array[i].eventEnd.substr(5,2)/10 != $("#monthNum").html()/10){
 					for(var j = startDate ; j <= witchMonthlast.getDate() ; j++){
 						var number = Math.floor((j)/10)=="0" ? "0"+j : j;
 						$(".eventDate[value='"+number+"']").next(".events").append("<div class='eventDiv' id='"+eventId+"'><a href='"+eventSide+"' title='"+eventName+"' target='_blank'><img src='/CA101_G4/EventServletPic?eventIdForPic="+eventId+"'><div>"+eventName+"</div></a></div>");
 					}
 				}else{
 					for(var j = startDate ; j <= endDate ; j++){
 						var number = Math.floor((j)/10)=="0" ? "0"+j : j;
 						$(".eventDate[value='"+number+"']").next(".events").append("<div class='eventDiv' id='"+eventId+"'><a href='"+eventSide+"' title='"+eventName+"' target='_blank'><img src='/CA101_G4/EventServletPic?eventIdForPic="+eventId+"'><div>"+eventName+"</div></a></div>");
 					}
 				}
 			}
 		}
	});
}

function clickNow(){
	var date = new Date();
	var month = date.getMonth();
	$(".monthNumber").eq(month).click();
}

function getEvent(month){
	var date = new Date();
	var year = date.getFullYear();
	var witchMonthfirst = new Date(year,month.index());
	var witchMonthlast = new Date(year,month.index(),0);

	var whatDay = witchMonthfirst.getDay();
	var allDay = witchMonthlast.getDate();

	if($("#japanese").attr("value") == "yes"){
		$("#calenderBar").html(year+"年各地のイベントカレンダー");
	}else{
		$("#calenderBar").html(year+"年各縣市活動月曆");		
	}

	var str = "";
	$(".eventBar").remove();
	for(var i = 0 ; i < allDay ; i++){
		str += "<div class='eventBar'><div class='eventDate'></div><div class='events'></div></div>";
	}
	$("#calenderInner").append(str);

	for(var i = 0 ; i < allDay ; i++){
		$(".eventDate").eq(i).html(Math.floor((i+1)/10)=="0" ? "0"+(i+1) : (i+1)).attr("value",Math.floor((i+1)/10)=="0" ? "0"+(i+1) : (i+1));
	}
	$(".eventDate:even").css("background-color","white");
}