var webSocket
var webName = new Object();
function connect(room) {
	var who = $('#logo').attr('value');
	var MyPoint = "/MessageServer/"+who+"/"+room;
	var host = window.location.host;
	var path = window.location.pathname;
	var webCtx = path.substring(0, path.indexOf('/', 1));
	var endPointURL = "ws://" + window.location.host + webCtx + MyPoint;
	
	webSocket = new WebSocket(endPointURL);

	webSocket.onopen = function(event) {
		webName[room] = webSocket;
	};

	webSocket.onmessage = function(event) {
		var jsonObj = JSON.parse(event.data);
		if("onse" == jsonObj.action){
			var room = jsonObj.room;
			var messagesArea = $(".chatBox[value='"+room+"']").find(".areaBig");
			
			if(jsonObj.userId == who){
				var str = "<div class='chatLineRight'><div class='chatMebWho chatMebWhoMine'><img src=''></div><div class='chatComtMine'>"+jsonObj.message+"</div></div>";
				messagesArea.append(str);
				var lastChatMine = $(".chatBox[value='"+room+"']").find(".chatComtMine").last();
				var lastChatRight = $(".chatBox[value='"+room+"']").find(".chatLineRight").last();
				lastChatRight.css("height",lastChatMine.css("height")).css("height","+=15px");
			}else{
				var str = "<div class='chatLineLeft'><div class='chatMebWho'><a href='/CA101_G4/front-end/member/aboutMember.jsp?mebId="+jsonObj.userId+"'><img src='/CA101_G4/MemberServletPic?mebIdForPic="+jsonObj.userId+"'></a></div><div class='chatComt'>"+jsonObj.message+"</div></div>"
				messagesArea.append(str);
				var lastChat = $(".chatBox[value='"+room+"']").find(".chatComt").last();
				var lastChatLeft = $(".chatBox[value='"+room+"']").find(".chatLineLeft").last();
				lastChatLeft.css("height",lastChat.css("height")).css("height","+=15px");
			}
			
			if($(".chatBox[value='"+room+"']").css("top") >= "900px"){ // 白點點
				$(".chatBox[value='"+room+"']").find(".haveMessage").css("display","block");
			}
			
			messagesArea.parent().stop().animate({scrollTop: messagesArea.css("height")});  
			
			if(jsonObj.listSize < 2){
				redPoint(jsonObj.forMebId,jsonObj.userId,jsonObj.mebName);
			}
			return;
		}
		
		if("group" == jsonObj.action){
			var room = jsonObj.room;
			var messagesArea = $(".chatBox[value='"+room+"']").find(".areaBig");
			
			if(jsonObj.userId == who){
				var str = "<div class='chatLineRight'><div class='chatMebWho chatMebWhoMine'><img src=''></div><div class='chatComtMine'>"+jsonObj.message+"</div></div>";
				messagesArea.append(str);
				var lastChatMine = $(".chatBox[value='"+room+"']").find(".chatComtMine").last();
				var lastChatRight = $(".chatBox[value='"+room+"']").find(".chatLineRight").last();
				lastChatRight.css("height",lastChatMine.css("height")).css("height","+=15px");
			}else{
				var str = "<div class='chatLineLeft'><div class='chatMebWho'><a href='/CA101_G4/front-end/member/aboutMember.jsp?mebId="+jsonObj.userId+"'><img src='/CA101_G4/MemberServletPic?mebIdForPic="+jsonObj.userId+"'></a></div><div class='chatComt'>"+jsonObj.message+"</div></div>"
				messagesArea.append(str);
				var lastChat = $(".chatBox[value='"+room+"']").find(".chatComt").last();
				var lastChatLeft = $(".chatBox[value='"+room+"']").find(".chatLineLeft").last();
				lastChatLeft.css("height",lastChat.css("height")).css("height","+=15px");
			}
			
			if($(".chatBox[value='"+room+"']").css("top") >= "900px"){ // 白點點
				$(".chatBox[value='"+room+"']").find(".haveMessage").css("display","block");
			}
			
			messagesArea.parent().stop().animate({scrollTop: messagesArea.css("height")});
			return;
		}
	};

	webSocket.onclose = function(event) {
	};
}

function groupMessage(room,userId){
	if($(".chatBox[value='"+room+"']").find(".chatComtText").val().trim() == ""){
		return;
	}
	var message = $(".chatBox[value='"+room+"']").find(".chatComtText").val();
	var jsonObj = {"room" : room, "userId" : userId, "message" : message, "action" : "group"};
	webName[room].send(JSON.stringify(jsonObj));
	$(".chatBox[value="+room+"]").find(".chatComtText").val("");
    $(".chatBox[value="+room+"]").find(".chatComtText").focus();
}

function sendMessage(room,forMebId,mebName) {
	if($(".chatBox[value='"+room+"']").find(".chatComtText").val().trim() == ""){
		return;
	}
    var userId = $("#logo").attr("value");
    var message = $(".chatBox[value='"+room+"']").find(".chatComtText").val();
    var jsonObj = {"room" : room, "mebName" : mebName, "userId" : userId, "message" : message, "forMebId" : forMebId, "action" : "onse"};
    webName[room].send(JSON.stringify(jsonObj));
    $(".chatBox[value="+room+"]").find(".chatComtText").val("");
    $(".chatBox[value="+room+"]").find(".chatComtText").focus();
}

function disconnect(room) {
	$(".chatBox[value='"+room+"']").remove();
	webName[room].close(1000);
}
