var webSocketSignIn;

function signConnect() {
	var MyPoint = "/SignInSoket/"+$("#logo").attr("value");
	var host = window.location.host;
	var path = window.location.pathname;
	var webCtx = path.substring(0, path.indexOf('/', 1));
	var endPointURL = "ws://" + window.location.host + webCtx + MyPoint;

	webSocketSignIn = new WebSocket(endPointURL);
	
	webSocketSignIn.onerror = function(event){
		console.log(event);
	}
	
	webSocketSignIn.onopen = function(event) {
		signInContOK();
	};

	webSocketSignIn.onmessage = function(event) {
		var jsonObj = JSON.parse(event.data);
		if("signInMeb" == jsonObj.action){
			var strSignIn = "";
			var strSignOut = "";
			var strGroup = "";
			if(jsonObj.signInMebs.length == 0){
				$("#chatViewLineSignIn").css("display","none");
			}else{
				$("#chatViewLineSignIn").css("display","block");
			}
			for(var mebInfoIndex in jsonObj.signInMebs){
				var mebInfo = jsonObj.signInMebs[mebInfoIndex];
				if($("#logo").attr("value") == mebInfo[0]){
					continue;
				}
				strSignIn += "<div class='mouse chatMebs onseChat' id='"+mebInfo[0]+"'><img src='/CA101_G4/MemberServletPic?mebIdForPic="+mebInfo[0]+"' id='cahtMeb_"+mebInfo[0]+"' class='chatMebPic'><div class='chatMebName'>"+mebInfo[1]+"</div><div class='haveMessageRed'></div></div>";						
			}
			if(strSignIn != ""){
				$("#chatViewLineSignIn").after(strSignIn);
			}
			
			if(jsonObj.signOutMebs.length == 0){
				$("#chatViewLineSignOut").css("display","none");
			}else{
				$("#chatViewLineSignOut").css("display","block");
			}
			for(var mebInfoIndex in jsonObj.signOutMebs){
				var mebInfo = jsonObj.signOutMebs[mebInfoIndex];
				strSignOut += "<div class='mouse chatMebs onseChat' id='"+mebInfo[0]+"'><img src='/CA101_G4/MemberServletPic?mebIdForPic="+mebInfo[0]+"' id='cahtMeb_"+mebInfo[0]+"' class='chatMebPic'><div class='chatMebName'>"+mebInfo[1]+"</div><div class='haveMessageRed'></div></div>"
			}
			if(strSignOut != ""){
				$("#chatViewLineSignOut").after(strSignOut);
			}
			
			if(jsonObj.tripGroup.length == 0){
				$("#chatViewLineGroup").css("display","none");
			}else{
				$("#chatViewLineGroup").css("display","block");
			}
			for(var groupIndex in jsonObj.tripGroup){
				var groupInfo = jsonObj.tripGroup[groupIndex];
				strGroup += "<div class='mouse chatMebs groupChat' id='"+groupInfo[0]+"'><img src='/CA101_G4/GroupServletPic?groupIdForPic="+groupInfo[0]+"' id='cahtMeb_"+groupInfo[0]+"' class='chatMebPic'><div class='chatMebName'>"+groupInfo[1]+"</div><div class='haveMessageRed'></div></div>"
			}
			if(strGroup != ""){
				$("#chatViewLineGroup").after(strGroup);
			}

			pushMeb();
		}
		
		if("send" == jsonObj.action){
			if($(".chatMebs[id='"+jsonObj.mebId+"']").length == 0){
				return;
			}
			
			var red = "white";
			if($(".chatMebs[id='"+jsonObj.mebId+"']").find(".haveMessageRed").css("display") == "block"){
				red = "red";
			}
			
			$(".chatMebs[id='"+jsonObj.mebId+"']").remove();
			var str = "<div class='mouse chatMebs onseChat' id='"+jsonObj.mebId+"'><img src='/CA101_G4/MemberServletPic?mebIdForPic="+jsonObj.mebId+"' id='cahtMeb_"+jsonObj.mebId+"' class='chatMebPic'><div class='chatMebName'>"+jsonObj.mebName+"</div><div class='haveMessageRed'></div></div>"
			$("#chatViewLineSignIn").after(str);
			$("#chatViewLineSignIn").css("display","block");
			
			if($("#chatViewLineSignOut").next(".chatMebs").length == 0){
				$("#chatViewLineSignOut").css("display","none");
			}
			
			if(red == "red"){
				$(".chatMebs[id='"+jsonObj.mebId+"']").find(".haveMessageRed").css("display","block");	
			}
			return;
		}
		
		if("close" == jsonObj.action){
			if($(".chatMebs[id='"+jsonObj.mebId+"']").length == 0){
				return;
			}
			
			var red = "white";
			if($(".chatBox[id='"+jsonObj.mebId+"']").length == 0){
				red = "red";
			}
			
			$(".chatMebs[id='"+jsonObj.mebId+"']").remove();
			var str = "<div class='mouse chatMebs onseChat' id='"+jsonObj.mebId+"'><img src='/CA101_G4/MemberServletPic?mebIdForPic="+jsonObj.mebId+"' id='cahtMeb_"+jsonObj.mebId+"' class='chatMebPic'><div class='chatMebName'>"+jsonObj.mebName+"</div><div class='haveMessageRed'></div></div>"
			$("#chatViewLineSignOut").after(str);
			$("#chatViewLineSignOut").css("display","block");
			
			if($("#chatViewLineGroup").prev(".chatMebs").length == 0){
				$("#chatViewLineSignIn").css("display","none");
			}
			
			if(red == "red"){
				$(".chatMebs[id='"+jsonObj.mebId+"']").find(".haveMessageRed").css("display","block");	
			}
			
			if($("#logo").attr("value") == jsonObj.mebId){
				closeCont(jsonObj.mebId);
			}
			return;
		}
		
		if("redPoint" == jsonObj.action){
			var jsonObj = JSON.parse(event.data);
			showChatBox(jsonObj.fromMebId, jsonObj.mebName);
//			$(".chatMebs[id='"+jsonObj.fromMebId+"']").find(".haveMessageRed").css("display","block");
		}
	};

	webSocketSignIn.onclose = function(event) {
		
	};
}

function signInMeb(myId){
	var jsonObj = {"myId" : myId, "action" : "signInMeb"};
	webSocketSignIn.send(JSON.stringify(jsonObj));
}

function redPoint(forMebId,fromMebId,mebName){
	var jsonObj = {"mebName" : mebName, "forMebId" : forMebId, "fromMebId" : fromMebId, "action" : "redPoint"};
	webSocketSignIn.send(JSON.stringify(jsonObj));
}

function sendSignIn(mebId, mebName) {
	var jsonObj = {"mebId" : mebId, "mebName" : mebName, "action" : "send"};
	webSocketSignIn.send(JSON.stringify(jsonObj));
}

function disSignOut(mebId, mebName) {
	var jsonObj = {"mebId" : mebId, "mebName" : mebName, "action" : "close"};
	webSocketSignIn.send(JSON.stringify(jsonObj));
}

function closeCont(mebId){
	webSocketSignIn.close(1000,mebId);
}