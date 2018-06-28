$(document).ready(function(){
	$("#header").css("box-sizing","unset");
	$("#header").find("*").css("box-sizing","unset");
	
	$(".menu").click(function(){ // 左上角的menu抽屜
		if($("#Mdiv").text()=="CLOSE"){
			$(".menu").animate({left:'0px'},200);
			$("#gnav").animate({left:'-266px'},200);
			$("#Mdiv").text("MENU");
			$(".overlay").css("display","none");
			$(".menu > r").html("&#xf0c9;");
			overlayBlurry();
		}else{
			$(".menu").animate({left:'266px'},200);
			$("#gnav").animate({left:'0'},200);
			$("#Mdiv").text("CLOSE");
			$(".overlay").css("display","block");
			$(".menu > r").html("&#xf060;");
			$(".overlay").css("z-index","20");
			$(".overlay").css("filter","blur(3px)");
			overlayBlurry();
		}
	});
	
	$("#emailToUs").click(function(){ // 點擊Email
		$("#sendMailBox").slideDown(200,function(){
			$("#emailText").focus();
			noSendEvent();
		});
		$(".overlay").css("display","block");
		$(".overlay").css("z-index","26");
		$(".overlay").css("filter","blur(3px)");
		overlayBlurry();
	});
	
	$("#donotSend").click(function(){ // 點擊送出Email
		$("#sendMailBox").slideUp(200,function(){
			$("#sendMailBox").find(".textview").val("");
		});
		overlay();
		overlayBlurry();
	});
	
	$("#cleanComt").click(function(){ // 點擊清除
		$("#sendMailBox").find(".textview").val("");
	});
	
	$("#sendEmail").click(sendEmailToUs); // 點擊送出
	
	$("#emailText").blur(noSendEvent);
	$("#titleText").blur(noSendEvent);
	$("#emailComt").blur(noSendEvent);

	$("#signin").click(function(){ // 右上的登入
		if($("#signin .font").html() == "SIGN&nbsp;IN"){
			$("#signinview").slideDown(200,function(){
				$("#username").focus();
			});
			$(".overlay").css("display","block");
			$(".overlay").css("z-index","26");
			$(".overlay").css("filter","blur(3px)");
			overlayBlurry();
		}else{
			$("#signoutview").slideDown(200);
			$(".overlay").css("display","block");
			$(".overlay").css("z-index","26");
			$(".overlay").css("filter","blur(3px)");
			overlayBlurry();
		}
	});

	$("#leave").click(function(){ // 登入畫面的離開
		$("#signinview").slideUp(200,function(){
			$("input[name='username']").val("");
			$("input[name='password']").val("");
			$("#signinResult").html("");
		});
		$(".overlay").css("display","none");
		overlayBlurry();
	});

	$("#submit").click(signIn); // 登入提交

	$(".overlay").click(overlay); // 點擊遮罩
	$(".overlay").click(overlayBlurry);

	$(mouseShadowEvent());

	$(".textview").focus(function(){ // text得到focus
		$(this).css("border-color","#72CFD7");
		$(this).css("outline-color","#72CFD7");
	});

	$(".textview").blur(function(){ // 失去focus
		$(this).css("border-color","#D0D0D0");
		$(this).css("outline-cloor","white");
	});

	$("#yes").click(signOut); // 登出畫面的是

	$("#not").click(function(){ // 登出畫面的否
		$("#signoutview").slideUp(200);
		$(".overlay").css("display","none");
		overlayBlurry();
	});

	$("#signupbtn").hover(function(){ // 註冊按鈕的滑入事件
		$(this).css("font-size","1.1em");
	},function(){
		$(this).css("font-size","12px");
	});

	$("#signupbtn").click(function(){ // 註冊按鈕的點擊事件
		$("#signForm").nextAll().hide();
		$("#signUpForm").nextAll().hide();	
		$("#signinview").animate({width:'0px',height:'0px',marginLeft:'0px',marginTop:'50px',opacity:'0'},200,function(){
				$("#signupview").css("display","block");
				$("#signupview").animate({width:'500px',height:'600px',marginLeft:'-250px',marginTop:'0px',opacity:'1'},200,function(){
				$("#signUpForm").nextAll().show();
				$("#signupResult").css("display","none");
				$("#username2").focus();	
			});
			$(".overlay").unbind();
		});
		$("#signinResult").html("");
	});

	$("#donot").click(function(){ // 離開註冊表單
		$("#signUpForm").nextAll().hide();
		$("#signupview").animate({width:'0px',height:'0px',marginLeft:'0',marginTop:'100px',opacity:'0'},200,function(){			
				$("#signinview").animate({width:'400px',height:'250px',marginLeft:'-200px',marginTop:'0px',opacity:'1'},200,function(){
				$("#signForm").nextAll().show();
				$("#username").focus();
				$(".overlay").click(overlay);
				$(".overlay").click(overlayBlurry);
			});
		});
		$("#signupResult").css("display","none");
		$("#passwordCheckEmail").css("display","none");
		$("#passwordCheck").css("display","none");
		$("input[class='textview signupview']").val("");
		$("input[name='gender']").removeAttr("checked");
		cancelTodoBtn();
	});

	$("#clean").click(function(){ // 註冊畫面上的清空
		$("input[class='textview signupview']").val("");
		$("input[name='gender']").removeAttr("checked");
		$("#male").val("0");
		$("#female").val("1");
		$("#signupResult").css("display","none");
		$("#todo").css("background-color","#72CFD7");
		$("#todo").addClass("mouse");
		cancelTodoBtn();
	});

	$(".menuLi").hover(function(){ // 抽屜裡的部落格,旅行團滑入展開
		$(this).find("ul").stop().slideDown(200);
		$(this).css("color","#9e9e9e");
	},function(){
		$(this).find("ul").stop().slideUp(200);
		$(this).css("color","white");
	});

	$("li>a").hover(function(){ // 抽屜裡div連結滑入樣式
		$(this).css("textShadow","0.1em 0.1em 0.05em #707070");
	},function(){
		$(this).css("textShadow","");
	});

	$("li>a").mousedown(function(){
		$(this).css("textShadow","0em 0em 0em #707070");
	});

	$("li>a").mouseup(function(){
		$(this).css("textShadow","0.1em 0.1em 0.05em #707070");
	});

	$(".divlist").hover(function(){ // 部落格和旅行團的小字滑入樣式
		$(this).css("textShadow","0.1em 0.1em 0.05em #707070");
	},function(){
		$(this).css("textShadow","");
	});

	$(".divlist").mousedown(function(){
		$(this).css("textShadow","0em 0em 0em #707070");
	});

	$(".divlist").mouseup(function(){
		$(this).css("textShadow","0.1em 0.1em 0.05em #707070");
	});

	$("#password1").keyup(function(){ // 密碼確認配對
		var password2 = $("#password2").val();
		var password1 = $("#password1").val();
		if(password2 != password1){
			$("#passwordCheck").css("display","inline");
			todoCheck();
		}else{
			$("#passwordCheck").css("display","none");
			todoCheck();
		}
	});

	$("#password2").keyup(function(){ // 密碼確認配對
		var password2 = $("#password2").val();
		var password1 = $("#password1").val();
		if(password2 != password1){
			$("#passwordCheck").css("display","inline");
			todoCheck();
		}else{
			$("#passwordCheck").css("display","none");
			todoCheck();
		}
	});

	$("#todo").bind("click", singnUpCheck); // 點擊註冊視窗的註冊按鈕
	
	$("#username2").blur(checkEmail); // 離開Email框框

	$(document).on("focus",".chatComtText",function(){
		$(this).css("border-color","white");
		$(this).css("outline-color","white");
	});

	$(document).on("blur",".chatComtText",function(){
		$(this).css("border-color","white");
		$(this).css("outline-cloor","white");
	});

	$("#chatIcon").click(function(){ // 聊天室窗出現
		if($("#chatView").css("display") == "none"){
			$("#chatView").slideDown(300,function(){
				$("#chatText").focus();
			});
			$(".chatBox").eq(0).animate({marginRight : '200px'});
		}else{
			$("#chatView").slideUp(300,function(){
				$("#chatText").val("");
			});
			$(".chatBox").eq(0).animate({marginRight : '0px'});
		}			
	});
	
	$(".searchBar>input").focus(function(){ // 變更聊天室窗搜尋的點擊樣式
		$(this).css("border-color","#72CFD7");
		$(this).css("outline-color","#72CFD7");
	});

	$("#chatText").focus(function(){ // 變更聊天室窗搜尋的點擊樣式
		$(this).css("border-color","#72CFD7");
		$(this).css("outline-color","#72CFD7");
	});

	$(".chatMebs").mouseup(function(){ // 聊天成員事件
		$(this).css("background-color","#72CFD7");
	});

	$(document).on("mouseenter", ".chatMebs", function(){ // 聊天成員事件
  		$(this).css("background-color","#72CFD7");
		$(this).find(".chatMebName").css("color","white");
	});

	$(document).on("mouseleave", ".chatMebs", function(){ // 聊天成員事件
  		$(this).css("background-color","white").css("color","#9e9e9e");
  		$(this).find(".chatMebName").css("color","#9e9e9e");
	});

	$(document).on("mousedown", ".chatMebs", function(){ // 聊天成員事件
  		$(this).css("background-color","#6ac1c9");
	});

	$(document).on("mouseup", ".chatMebs", function(){ // 聊天成員事件
  		$(this).css("background-color","#72CFD7");
	});

//	$("#chatIconInfo").click(function(){ // 點擊個人頁私訊生出聊天框
//		
//		$(this).find(".haveMessageRed").css("display","none"); // 紅點點消失
//		showChatBox();
//	});
	
	$("#chatMeb").on("click",".onseChat",function(){
		showChatBox($(this).attr("id"),$(this).find(".chatMebName").html());
		$(this).find(".haveMessageRed").css("display","none"); // 紅點點消失
	}); // 點擊聊天的會員圈圈,生出聊天框框

	$("#header").on("mouseenter",".chatChangeBarMouse",chaBoxMouseIn); // 滑入聊天Bar

	$("#header").on("mouseleave",".chatChangeBarMouse",chaBoxMouseOut); // 滑出聊天Bar

	$("#header").on("click",".chatChangeBarClick",function(){ // 點擊聊天Bar,聊天框向上
		chatBoxClick($(this));
	});
	
	$("#header").on("mouseenter",".mebChatBarIcon",function(){ // 叉叉的特效
		$(this).css("textShadow","0.1em 0.1em 0.05em #707070");
	});

	$("#header").on("mouseleave",".mebChatBarIcon",function(){ // 叉叉的特效
		$(this).css("textShadow","");
	});

	$("#header").on("mouseup",".mebChatBarIcon",function(){ // 叉叉的特效
		$(this).css("textShadow","0.1em 0.1em 0.05em #707070");
	});

	$("#header").on("mousedown",".mebChatBarIcon",function(){ // 叉叉的特效
		$(this).css("textShadow","");
	});

	$("#header").on("click",".mebChatBarIcon",function(){ // 點擊叉叉刪框框
		disconnect($(this).parent().attr("value"));
		if($("#chatView").css("display") != "none"){
			$(".chatBox").eq(0).css("margin-right","200px");
		}
	});
	
	$(cancelTodoBtn());
	
	$(checkSighIn());
	
	$(window).unload(function(){
		while($(".mebChatBarIcon").length != 0){
			$(".mebChatBarIcon").eq(0).click();
		}
		closeCont($("#logo").attr("value"));
	});
	
	$("#chatMeb").on("click",".groupChat",function(){
		groupChat($(this));
	});
	
	$("#chatText").keydown(function(e){
		if(e.which == 13){
			var keyWord = $("#chatText").val();
			for(var i = 0 ; i < $(".chatMebs").length ; i++){
				if($(".chatMebs").eq(i).find(".chatMebName").text().match(keyWord) == null){
					$(".chatMebs").eq(i).css("display","none");
				}
			}
		}
		if(e.which == 27){
			$("#chatText").val("");
		}
	});
	
	$("#chatText").keyup(function(){
		if($("#chatText").val() == ""){
			$(".chatMebs").css("display","block");
		}
	});
	
	$("#birthday").keyup(function(){
		$(this).val("");
	});
	
	$.datetimepicker.setLocale('zh');
	var date = new Date();
    $('#birthday').datetimepicker({
       theme: '',              //theme: 'dark',
       timepicker:false,       //timepicker:true,
       step: 1,                //step: 60 (這是timepicker的預設間隔60分鐘)
       format:'Y-m-d',         //format:'Y-m-d H:i:s'
    });
    //2.以下為某一天之後的日期無法選擇
	var somedate2 = new Date();
	$('#birthday').datetimepicker({
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

function overlay(){
	$("#signinview").slideUp(200,function(){
		$("input[name='username']").val("");
		$("input[name='password']").val("");
		$("#signinResult").html("");
	});
	$("#sendMailBox").slideUp(200,function(){
		$("#sendMailBox").find(".textview").val("");
	});
	$("#badArea").slideUp(300);
	$("#badText").val("");
	$("#changeIntrArea").slideUp(300);
	$("#changeInfoArea").slideUp(300);
	$("#changePicArea").slideUp(300);
	$(".overlay").css("display","none");
	$("#signoutview").slideUp(200);
	$(".menu").animate({left:'0px'},200);
	$("#gnav").animate({left:'-266px'},200);
	$("#Mdiv").text("MENU");
	$(".overlay").css("display"," ");
	$(".menu > r").html("&#xf0c9;");
}

function overlayBlurry(){
	if($("#divleft").css("-webkit-filter") == "blur(3px)"){
		$("#divleft").css("-webkit-filter","blur(0px)");
		$("#divright").css("-webkit-filter","blur(0px)");
	}else{
		$("#divleft").css("-webkit-filter","blur(3px)");
		$("#divright").css("-webkit-filter","blur(3px)");
	}
}

function mouseShadowEvent(){
	$(".mouseshadow").hover(function(){ // 按鈕的陰影
		$(this).css("box-shadow","2px 2px 2px RGB(86,155,161)");
	},function(){
		$(this).css("box-shadow","");
	});

	$(".mouseshadow").mousedown(function(){ // 按鈕點擊樣式
		$(this).css("box-shadow","0px 0px 0px RGB(0,0,0)");
		$(this).css("background-color","#6ac1c9");
	});

	$(".mouseshadow").mouseup(function(){ // 按鈕鬆開樣式
		$(this).css("box-shadow","2px 2px 2px RGB(86,155,161)");
		$(this).css("background-color","#72CFD7");
	});
}

function groupChat(group){
	if($(".chatBox[value='"+group.attr('id')+"']").length != 0){
		return;
	}
	$.ajax({
 		url: "/CA101_G4/group.do",
 		type: "POST",
 		data:{
 			action : "findGroupChat",
 			groupId : group.attr("id"),
 		},
 		error: function(xhr){
 			alert('groupChat');
 		},
 		success: function(data){
 			data = JSON.parse(data);
			var str = "<div class='chatBox' id='"+group.attr('id')+"' value='"+group.attr('id')+"'><div class='chatMebBar chatChangeBarMouse chatChangeBarClick mouse'><b>"+group.find('.chatMebName').text()+"</b></div><span class='fa mebChatBarIcon mouse'>&#xf00d;</span><span class='haveMessage'></span><div class='chatComtArea'><div class='areaBig'></div></div><div class='chatKeyIn'><input type='text' name='chatWord' class='chatComtText' placeholder='請輸入內容...'></div></div>";
			$("#header").append(str);
			connect(group.attr('id'));
			$(".chatComtText").eq($(".chatComtText").length-1).bind("keydown",goGroupMessage);
			if(data.message != ""){
				showGroupComt(data.groupId,data.message);
			}
			$(".chatBox").eq(0).css("margin-right","200px");
			$(".chatBox[id='"+group.attr('id')+"']").find(".chatMebBar").click();
 		}
 	});
}

function showGroupComt(room, message){
	for(var i = 1 ; i < message.length ; i++){
		var data = JSON.parse(message[i]);
		if(data.userId == $("#logo").attr("value")){
			var str = "<div class='chatLineRight'><div class='chatMebWho chatMebWhoMine'><img src=''></div><div class='chatComtMine'>"+data.message+"</div></div>";
			$(".chatBox[value='"+room+"']").find(".areaBig").append(str);
        	var lastChatMine = $(".chatBox[value='"+room+"']").find(".chatComtMine").last();
	 		var lastChatRight = $(".chatBox[value='"+room+"']").find(".chatLineRight").last();
	 		lastChatRight.css("height",lastChatMine.css("height")).css("height","+=15px");
		}else{
        	var str = "<div class='chatLineLeft'><div class='chatMebWho'><a href='/CA101_G4/front-end/member/aboutMember.jsp?mebId="+data.userId+"'><img src='/CA101_G4/MemberServletPic?mebIdForPic="+data.userId+"'></a></div><div class='chatComt'>"+data.message+"</div></div>"
        	$(".chatBox[value='"+room+"']").find(".areaBig").append(str);
			var lastChat = $(".chatBox[value='"+room+"']").find(".chatComt").last();
			var lastChatLeft = $(".chatBox[value='"+room+"']").find(".chatLineLeft").last();
			lastChatLeft.css("height",lastChat.css("height")).css("height","+=15px");
		}
	}
	$(".chatBox[value='"+room+"']").find(".areaBig").parent().stop().animate({scrollTop: $(".chatBox[value='"+room+"']").find(".areaBig").css("height")});
}

function goGroupMessage(e){
	if(e.which == 13){
		groupMessage($(this).parent().parent().attr("value"), $("#logo").attr("value"));
		return;
	}
	if(e.which == 27){
		$(this).val("");
	}
}

function showChatBox(mebId, mebName){ // 生出聊天框框
 	$.ajax({
 		url: "/CA101_G4/MessageServlet",
 		type: "POST",
 		data:{
 			action : "findChat",
 			myId : $("#logo").attr("value"),
 			hisId : mebId,
 		},
 		error: function(xhr){
 			alert('findChat');
 		},
 		success: function(data){
 			data = JSON.parse(data);
 			var hasRoom = 0;
 			if($(".chatBox[value='"+data.myId+data.hisId+"']").attr("value") == data.myId+data.hisId || $(".chatBox[value='"+data.hisId+data.myId+"']").attr("value") == data.hisId+data.myId){
 				hasRoom = 1;
 			}
 			if(data.whoIsFirst == "me" && hasRoom == 0){
 				var str = "<div class='chatBox' id='"+mebId+"' value='"+data.myId+data.hisId+"'><div class='chatMebBar chatChangeBarMouse chatChangeBarClick mouse'><b>"+mebName+"</b></div><span class='fa mebChatBarIcon mouse'>&#xf00d;</span><span class='haveMessage'></span><div class='chatComtArea'><div class='areaBig'></div></div><div class='chatKeyIn'><input type='text' name='chatWord' class='chatComtText' placeholder='請輸入內容...'></div></div>";
 				$("#header").append(str);
 				connect(data.myId+data.hisId);
 				$(".chatComtText").eq($(".chatComtText").length-1).bind("keydown",goMessage);
 				if(data.message != ""){
 					showComt(data.myId+data.hisId,data.message,data.hisId);
 				}
 				if($("#chatView").css("display") == "block"){
 					$(".chatBox").eq(0).css("margin-right","200px"); 					
 				}
 				$(".chatBox[value='"+data.myId+data.hisId+"']").find(".chatMebBar").click();
 				return;
 			}
 			if(data.whoIsFirst == "he" && hasRoom == 0){
 				var str = "<div class='chatBox' id='"+mebId+"' value='"+data.hisId+data.myId+"'><div class='chatMebBar chatChangeBarMouse chatChangeBarClick mouse'><b>"+mebName+"</b></div><span class='fa mebChatBarIcon mouse'>&#xf00d;</span><span class='haveMessage'></span><div class='chatComtArea'><div class='areaBig'></div></div><div class='chatKeyIn'><input type='text' name='chatWord' class='chatComtText' placeholder='請輸入內容...'></div></div>";
 				$("#header").append(str);
 				connect(data.hisId+data.myId);
 				$(".chatComtText").eq($(".chatComtText").length-1).bind("keydown",goMessage);
 				if(data.message != ""){
 					showComt(data.hisId+data.myId,data.message,data.hisId);
 				}
 				if($("#chatView").css("display") == "block"){
 					$(".chatBox").eq(0).css("margin-right","200px"); 					
 				}
 				$(".chatBox[value='"+data.hisId+data.myId+"']").find(".chatMebBar").click();
 				return;
 			}
 			
 		}
 	});
 	
}

function showComt(room,array,fromWho){
	for(var i = 1 ; i < array.length ; i++){
		var data = JSON.parse(array[i]);
		if(data.userId == $("#logo").attr("value")){
			var str = "<div class='chatLineRight'><div class='chatMebWho chatMebWhoMine'><img src=''></div><div class='chatComtMine'>"+data.message+"</div></div>";
			$(".chatBox[value='"+room+"']").find(".areaBig").append(str);
        	var lastChatMine = $(".chatBox[value='"+room+"']").find(".chatComtMine").last();
	 		var lastChatRight = $(".chatBox[value='"+room+"']").find(".chatLineRight").last();
	 		lastChatRight.css("height",lastChatMine.css("height")).css("height","+=15px");
		}else{
        	var str = "<div class='chatLineLeft'><div class='chatMebWho'><a href='/CA101_G4/front-end/member/aboutMember.jsp?mebId="+fromWho+"'><img src='/CA101_G4/MemberServletPic?mebIdForPic="+fromWho+"'></a></div><div class='chatComt'>"+data.message+"</div></div>"
        	$(".chatBox[value='"+room+"']").find(".areaBig").append(str);
			var lastChat = $(".chatBox[value='"+room+"']").find(".chatComt").last();
			var lastChatLeft = $(".chatBox[value='"+room+"']").find(".chatLineLeft").last();
			lastChatLeft.css("height",lastChat.css("height")).css("height","+=15px");
		}
	}
	$(".chatBox[value='"+room+"']").find(".areaBig").parent().stop().animate({scrollTop: $(".chatBox[value='"+room+"']").find(".areaBig").css("height")});
}

function goMessage(e){
	if(e.which == 13){
		sendMessage($(this).parent().parent().attr("value"), $(this).parent().parent().attr("id"),$("#logo").attr("name"));
		return;
	}
	if(e.which == 27){
		$(this).val("");
	}
}

function chaBoxMouseIn(){
	$(this).css("background-color","#62b2ba");
	$(this).parent().css("border-color","#62b2ba");
}

function chaBoxMouseOut(){
	$(this).css("background-color","#ccc");
	$(this).parent().css("border-color","#ccc");
}

function chatBoxClick(me){ // 點擊聊天框框藍色bar
	me.removeClass("chatChangeBarMouse");
	$(this).find(".haveMessage").css("display","none");
	if(me.parent().css("top") == "916px"){
		me.nextAll().eq(1).css("display","none");
		me.parent().animate({top:'595px'},400);
		me.css("background-color","#62b2ba");
		me.parent().css("border-color","#62b2ba");
	}else{
		me.parent().animate({top:'916px'},400);
		me.css("background-color","#ccc");
		me.parent().css("border-color","#ccc");
		me.addClass("chatChangeBarMouse");
	}
}

function cancelTodoBtn(){
	$("#todo").css("box-shadow","");
	$("#todo").css("background-color","#ccc");
	$("#todo").removeClass("mouseshadow");
	$("#todo").removeClass("mouse");
	$("#todo").unbind();
}

function givTodoBtn(){
	$("#todo").css("background-color","#72CFD7");
	$("#todo").addClass("mouseshadow");
	$("#todo").addClass("mouse");
	$("#todo").unbind("click").bind("click", singnUpCheck);
	mouseShadowEvent();
}

function todoCheck(){
	var password2 = $("#password2").val();
	var password1 = $("#password1").val();
	if(password2 == password1 && password2 != "" && email == "true"){
		givTodoBtn();
		$("#todo").unbind("click").bind("click", singnUpCheck);
		return;
	}
	cancelTodoBtn();
}

function checkSighIn(){
	if($("#logo").attr("value") != "0"){
		var mebVO = $("#logo");
		$("#signin .font").html("SIGN&nbsp;OUT");
		$("#chatIcon").css("display","block");
		$("#mebPic img").attr("src","/CA101_G4/MemberServletPic?mebIdForPic="+mebVO.attr("value")).attr("title",mebVO.attr("name")).attr("id",mebVO.attr("value"));
		$("#mebPic a").attr("href","/CA101_G4/front-end/member/aboutMember.jsp?mebId="+mebVO.attr("value"));
		$("#mebPic").css("display","block");
		$("#icon").html("&#xe566;");
		$("#signinview").slideUp(200,function(){
			$("input[name='username']").val("");
			$("input[name='password']").val("");
			$("#signinResult").html("");
		});
		signConnect();
	}
}

function signIn(){
	$.ajax({
 		url: "/CA101_G4/MemberServlet",
 		type: "POST",
 		data:{
 			action : "signin",
 			email : $("#username").val(),
 			password : $("#password").val(),
 		},
 		error: function(xhr){
 			alert('Ajax request 發生錯誤');
 		},
 		success: function(data){
 			data = JSON.parse(data);
 			if(data.result == "帳號錯誤"){
 				$("#signinResult").html("E-mail錯誤");
 				return;
 			}
 			if(data.result == "密碼錯誤"){
 				$("#signinResult").html("密碼錯誤");
 				return;
 			}
 			
 			$("#signin .font").html("SIGN&nbsp;OUT");
			$("#chatIcon").css("display","block");
			$("#mebPic img").attr("src","/CA101_G4/MemberServletPic?mebIdForPic="+data.memberId).attr("title",data.name).attr("id",data.memberId);
			$("#mebPic a").attr("href","/CA101_G4/front-end/member/aboutMember.jsp?mebId="+data.memberId);
			$("#mebPic").css("display","block");
			$("#icon").html("&#xe566;");
			$("#logo").attr("value",data.memberId).attr("name",data.name);
			$("#signinview").slideUp(200,function(){
				$("input[name='username']").val("");
				$("input[name='password']").val("");
				$("#signinResult").html("");
			});
			$(".overlay").css("display","none");
			overlayBlurry();
			signConnect();
			if(location.href.match("CA101_G4/front-end/spot/searchSpot.jsp") == "CA101_G4/front-end/spot/searchSpot.jsp"){
 				loginSearchLove();
 				return;
 			}
			if(location.href.match("CA101_G4/front-end/member/aboutMember.jsp") == "CA101_G4/front-end/member/aboutMember.jsp"){
				location.reload();
				return;
			}
 		}
 	});
}

function signInContOK(){
	signInMeb($("#mebPic").find("img").attr("id"));
}

function pushMeb(){
	sendSignIn($("#mebPic").find("img").attr("id"), $("#mebPic").find("img").attr("title"));
}

function signOut(){
	$.ajax({
		url: "/CA101_G4/MemberServlet",
		type: "POST",
		data: {
			action: "signout"
		},
		error: function(xhr){
			alert('Ajax request 發生錯誤');
		},
		success: function(data){
			if(data == "OK"){
				while($(".mebChatBarIcon").length != 0){
					$(".mebChatBarIcon").eq(0).click();
				}
				disSignOut($("#mebPic").find("img").attr("id"), $("#mebPic").find("img").attr("title"));
				$("#signoutview").slideUp(200);
				$("#signin .font").html("SIGN&nbsp;IN");
				$("#icon").html("&#xe16a;");
				$("#chatIcon").css("display","none");
				$("#mebPic").css("display","none");
				$(".overlay").css("display","none");
				$("#chatView").slideUp(300,function(){ // 聊天窗收起
					$("#chatText").val("");
				});
				closeCont($("#logo").attr("value"));
				$("#logo").attr("value","0");
				$("#logo").attr("name","0");
				overlayBlurry();
				$(".chatMebs").remove();
				if(location.href.match("CA101_G4/front-end/spot/searchSpot.jsp") == "CA101_G4/front-end/spot/searchSpot.jsp"){
					$("#detailLove").html("&#xf08a;");
	 				$("#detailLove").css("color","#72CFD7");
	 				$("#detailLove").attr("title","加入最愛");
	 				return;
	 			}
				if(location.href.match("CA101_G4/front-end/member/aboutMember.jsp") == "CA101_G4/front-end/member/aboutMember.jsp"){
					location.reload();
					return;
				}
			}
		}
	});
}

var email = "false";
function checkEmail(){
	var reg = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/i;
	if(!(reg.test($("#username2").val()))){
		$("#signupResult").html("E-mail格式不正確");
		$("#signupResult").css("display","block");
		$("#passwordCheckEmail").css("display","inline");
		email = "false"
		todoCheck();
		return;
	}
	$("#passwordCheckEmail").css("display","none");
	$("#signupResult").css("display","none");
	
	$.ajax({
		url: "/CA101_G4/MemberServlet",
		type: "POST",
		data: {
			action: "emailCheck",
			email: $("#username2").val(),
		},
		error: function(xhr){
			alert('Ajax request 發生錯誤');
		},
		success: function(data){
 			if(data == "NOT"){
 				$("#signupResult").html("E-mail重複");
 		  		$("#signupResult").css("display","block");
 	 			$("#passwordCheckEmail").css("display","inline");
 	 			email = "false"
 	 			todoCheck();
 	 			return;
 			}
 			$("#passwordCheckEmail").css("display","none");
 			email = "true";
 			todoCheck();
 		}
	});
}

 function singnUpCheck(){
  	if($.trim($("#username2").val()).length == 0){
  		$("#signupResult").html("表單不可有空");
  		$("#signupResult").css("display","block");
  		return;
  	}
  	if($.trim($("#password1").val()).length == 0){
  		$("#signupResult").html("表單不可有空");
  		$("#signupResult").css("display","block");
  		return;
  	}
  	if($.trim($("#name").val()).length == 0){
  		$("#signupResult").html("表單不可有空");
  		$("#signupResult").css("display","block");
  		return;
  	}
  	if($("input[name='gender']:checked").val() == null){
  		$("#signupResult").html("表單不可有空");
  		$("#signupResult").css("display","block");
  		return;
  	}
  	if($.trim($("#TEL").val()).length == 0){
  		$("#signupResult").html("表單不可有空");
  		$("#signupResult").css("display","block");
  		return;
  	}
  	if($.trim($("#birthday").val()).length == 0){
  		$("#signupResult").html("表單不可有空");
  		$("#signupResult").css("display","block");
  		return;
  	}
  	cancelTodoBtn();
  	var where = location.href;
 	$.ajax({
 		url: "/CA101_G4/MemberServlet",
 		type: "POST",
 		data: {
 			action: "signup",
 			email: $("#username2").val(),
 			password: $("#password1").val(),
 			name: $("#name").val(),
 			gender: $("input[name='gender']:checked").val(),
 			TEL: $("#TEL").val(),
 			birthday: $("#birthday").val(),
 			where: where
 		},
 		error: function(xhr){
 			alert('Ajax request 發生錯誤');
 		},
 		success: function(data){
 			$("#signupResult").html("請至註冊信箱點擊認證連結");
 			$("#signupResult").css("display","block");
 			sendMail();
 		}
 	});
}
 
 function sendMail(){
	$.ajax({
 		url: "/CA101_G4/MemberServlet",
 		type: "POST",
 		data: {
 			action: "sendMail",
 			email: $("#username2").val(),
 		},
 		error: function(xhr){
 			alert('Ajax request 發生錯誤');
 		},
 		success: function(data){
 		}
	});
 }
 
 function loginSearchLove(){
	$.ajax({
		url: "/CA101_G4/SpotFavServlet",
 		type: "POST",
 		datatype: "json",
 		data: {
 			action: "mebSpotLove",
 			mebId: $("#mebPic img").attr("id"),
 			spotId: $("#spotDetailName").attr("value"),
 		},
 		error: function(xhr){
 			alert('Ajax request 發生錯誤');
 		},
 		success: function(data){
 			var data = JSON.parse(data);
 			if(data.result != true){
 				$("#detailLove").html("&#xf08a;");
 				$("#detailLove").css("color","#72CFD7");
 				$("#detailLove").attr("title","加入最愛");
 				return;
 			}
 			$("#detailLove").html("&#xf004;");
 			$("#detailLove").css("color","red");
 			$("#detailLove").attr("title","取消最愛");
 		}
	});
}
 
function noSendEvent(){
	var reg = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/i;
	if(!(reg.test($("#emailText").val())) || $.trim($("#titleText").val()) == "" || $.trim($("#emailComt").val()) == ""){
		$("#sendEmail").css("box-shadow","");
		$("#sendEmail").css("background-color","#ccc");
		$("#sendEmail").removeClass("mouseshadow");
		$("#sendEmail").removeClass("mouse");
		$("#sendEmail").unbind();
		return;
	}
	$("#sendEmail").css("background-color","#72CFD7");
	$("#sendEmail").addClass("mouseshadow");
	$("#sendEmail").addClass("mouse");
	$("#sendEmail").unbind("click").bind("click", sendEmailToUs);
	mouseShadowEvent();
}
 
function sendEmailToUs(){
	$.ajax({
		url: "/CA101_G4/SendEmailToUs",
		type: "POST",
		datatype: "json",
		data: {
			action: "sendEmailToUs",
			email: $("#emailText").val(),
			title: $("#titleText").val(),
			comt: $("#emailComt").val(),
		},
		error: function(xhr){
			alert("Ajax request 發生錯誤");
		},
		success: function(data){
			$("#sendMailBox").slideUp(200,function(){
				$("#sendMailBox").find(".textview").val("");
			});
			overlay();
			overlayBlurry();
			alert("送出成功!!");
		}
	});
}