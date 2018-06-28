
	var MyPoint = "/front-end/group/groupChat/";
	var host = window.location.host;
	var path = window.location.pathname;
	var webCtx = path.substring(0, path.indexOf('/', 1));
	var endPointURL = "ws://" + window.location.host + webCtx + MyPoint+$("#myGroup").val();

	var webSocket;
	
	var myName=$("#header>a>img").attr("name");

	function connect() {
		// create a websocket
		webSocket = new WebSocket(endPointURL);
		console.log(endPointURL);

		webSocket.onopen = function(event) {
			updateStatus("WebSocket Connected");
		};

		webSocket.onmessage = function(event) {
			var chatRoomText = document.getElementById("chatRoomText");
			var jsonObj = JSON.parse(event.data);
			//var message = jsonObj.userName + ": " + jsonObj.message + "\r\n";
			//chatRoomText.value = chatRoomText.value + message;
			//chatRoomText.scrollTop = chatRoomText.scrollHeight;
			
			if (jsonObj.userName==myName){
				var message="<div class='chatRoomTextDiv'><div class='chatRoomTextLineMine'>"+jsonObj.message+"</div></div>";
				
				$("#chatRoomText").append(message);
				//$("#chatRoomText").append(chatRoomText.html+message);
			}else{
				var message="<div class='chatRoomTextDiv'><div class='chatRoomTextLine'>"+jsonObj.userName + ": "+jsonObj.message+"</div></div>";
				
				$("#chatRoomText").append(message);
			}
			chatRoomText.scrollTop = chatRoomText.scrollHeight;
		};

		webSocket.onclose = function(event) {
			updateStatus("WebSocket Disconnected");
		};
	}


	function sendMessage() {

		var inputMessage = document.getElementById("chatRoomInput");
		var message = inputMessage.value.trim();

		if (message == "") {
			//alert("Input a message");
			inputMessage.focus();
		} else {
			var jsonObj = {
				"message" : message
			};
			webSocket.send(JSON.stringify(jsonObj));
			inputMessage.value = "";
			inputMessage.focus();
		}
	}

	function disconnect() {
		webSocket.close();
	}

	function updateStatus(newStatus) {
		console.log(newStatus);
	}