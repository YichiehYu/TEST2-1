$(document).ready(function(){
	var hotheight;
	var newheight;

	$(function(){ // download完設定為new的長度
		hotheight = $("#actionright").css("height");
		newheight = $("#actionleft").css("height");
		$("#cheng").css("height",newheight);
	});

	$("#new").click(function(){ // 右方new事件
		$(this).css("opacity","1"); // 變更按鈕濃淡
		$("#cheng").css("height",newheight); // cheng隨內容高度變化
		$("#hot").css("opacity","0.4");
		$("#rightinner").animate({marginLeft:'0px'},200);
	});

	$("#hot").click(function(){ // 右方hot事件
		$(this).css("opacity","1");
		$("#cheng").css("height",hotheight); // cheng隨內容高度變化
		$("#new").css("opacity","0.4");
		$("#rightinner").animate({marginLeft:'-505px'},200);
	});

		// 動態產生的節點無法套用一般的事件
	$(document).on("mouseenter", ".mouseDiv", function(){
  		$(this).css("box-shadow","2px 2px 2px RGB(86,155,161)");
	});

	$(document).on("mouseleave", ".mouseDiv", function(){
  		$(this).css("box-shadow","0px 0px 0px white");
	});

	$(document).on("mousedown", ".mouseDiv", function(){
  		$(this).css("box-shadow","0px 0px 0px RGB(0,0,0)");
	});

	$(document).on("mouseup", ".mouseDiv", function(){
  		$(this).css("box-shadow","2px 2px 2px RGB(86,155,161)");
	});

	$("#aboutUs").hover(function(){ // 滑入關於我們
		$("#aboutUs").css("backgroundColor","#72CFD7");
		$("#aboutUs").css("color","white");
		$("#aboutUs").css("box-shadow","2px 2px 2px RGB(86,155,161)");
	},function(){
		$("#aboutUs").css("backgroundColor","white");
		$("#aboutUs").css("color","#72CFD7");
		$("#aboutUs").css("box-shadow","0px 0px 0px RGB(86,155,161)");
	});

	$("#aboutUs").mousedown(function(){ // 點下關於我們
		$("#aboutUs").css("backgroundColor","white");
		$("#aboutUs").css("color","#72CFD7");
		$("#aboutUs").css("box-shadow","0px 0px 0px RGB(86,155,161)");
	});

	$("#aboutUs").mouseup(function(){ // 放開關於我們
		$("#aboutUs").css("backgroundColor","#72CFD7");
		$("#aboutUs").css("color","white");
		$("#aboutUs").css("box-shadow","2px 2px 2px RGB(86,155,161)");
	});

	$("a[href='#pagetop']").click(function(){ // 滑動超連結
		$("body").animate({
				scrollTop:$("#height0").offset().top
			}, "show");
		 return false;
	});

	$(function(){
		var $block = $("#ad"),
			$slides = $("#adUl"),
			_width = $block.width(),
			li = $("#adUl li"),
			_animateSpeed = 1000,
			timer,
			_showSpeed = 5000,
			_stop = false;

		var _str = '';
		for(var i = 0 , j = li.length ; i < j ; i++){
			_str += '<li id="playerControl_' + (i+1) + '"></li>';
		}

		var $playerControl = $('<ul class="playerControl"></ul>').html(_str).appendTo($block);

		var $playerControlLi = $playerControl.find("li").click(function(){
			var $this = $(this);
			$playerControlLi.css("background-color","rgba(255, 255, 255, 0.0)"); // 點點變透明
			$playerControlLi.css("border-color","white");// 點點邊框
			$this.css("background-color","#72CFD7"); // 點點變藍色
			$this.css("border-color","#72CFD7"); // 點點邊框

			$this.addClass('current').siblings('.current').removeClass('current');
			// 移動位置到相對應的號碼
			clearTimeout(timer);
			$slides.stop().animate({left: _width * $this.index() * -1}, _animateSpeed,function(){
				// 當廣告移動到正確位置後, 依判斷來啟動計時器
				if(!_stop) {
					timer = setTimeout(move, _showSpeed);
				}
			});
			return false;
		});

		// 一啟動自動點擊第一個圈圈
		$playerControlLi.eq(0).click();

		// 如果滑鼠移入 $block 時
		$block.hover(function(){
			// 關閉開關及計時器
			_stop = true;
			clearTimeout(timer);
		}, function(){
			// 如果滑鼠移出 $block 時,開啟開關及計時器
			_stop = false;
			timer = setTimeout(move, _showSpeed);
		});
 
		// 計時器使用
		function move(){
			var _index = $('.current').index(); // 找到兄弟元素中的索引值
			$playerControlLi.eq((_index + 1) % $playerControlLi.length).click();
		}
	});

	$(showMebBtn()); // 會員圈圈的變換
	$("#mebPushBtn_R").click(function(){
		$("#mebChange").animate({marginLeft:'-=497px'},200);
		mebBtnCount++;
		showMebBtn();
	});

	$("#mebPushBtn_L").click(function(){
		$("#mebChange").animate({marginLeft:'+=497px'},200);
		mebBtnCount--;
		showMebBtn();
	});

	// divleft隨畫面縮小
	$(window).resize(winChange);
	$(winChange());

	$(function(){
		$("#moveCloud_1").animate({left:'-=50px'},2000,function(){
			$("#moveCloud_1").animate({left:'+=50px'},2000);
		});
		setInterval(move,4005);
		function move(){
			$("#moveCloud_1").animate({left:'-=50px'},2000,function(){
			$("#moveCloud_1").animate({left:'+=50px'},2000);
			});
		}
	});

	$(function(){
		$("#moveCloud_2").animate({left:'-=70px'},1800,function(){
			$("#moveCloud_2").animate({left:'+=70px'},1800);
		});
		setInterval(move,3605);
		function move(){
			$("#moveCloud_2").animate({left:'-=70px'},1800,function(){
			$("#moveCloud_2").animate({left:'+=70px'},1800);
			});
		}
	});

	$(function(){
		$("#moveCloud_3").animate({left:'-=40px'},1600,function(){
			$("#moveCloud_3").animate({left:'+=40px'},1600);
		});
		setInterval(move,3205);
		function move(){
			$("#moveCloud_3").animate({left:'-=40px'},1600,function(){
			$("#moveCloud_3").animate({left:'+=40px'},1600);
			});
		}
	});

	$(function(){
		$("#moveCloud_4").animate({left:'-=60px'},2200,function(){
			$("#moveCloud_4").animate({left:'+=60px'},2200);
		});
		setInterval(move,4405);
		function move(){
			$("#moveCloud_4").animate({left:'-=60px'},2200,function(){
			$("#moveCloud_4").animate({left:'+=60px'},2200);
			});
		}
	});

	$(function(){
		$("#moveCloud_5").animate({left:'-=50px'},2000,function(){
			$("#moveCloud_5").animate({left:'+=50px'},2000);
		});
		setInterval(move,4005);
		function move(){
			$("#moveCloud_5").animate({left:'-=50px'},2000,function(){
			$("#moveCloud_5").animate({left:'+=50px'},2000);
			});
		}
	});

	$("#aboutUs").click(function(){ // 點擊關於我們
		$("#divleft").fadeOut(500,function(){
			$("#indexImg").css("display","none");
			$("#aboutMeb").css("display","none");
			$("#aboutUsDiv").css("display","block");
			$("#divleft").css("border-radius","14px");
			$("#divleft").css("border","1px solid #72CFD7");
			$("#divleft").fadeIn(500);
		});
	});

//	$(mebHotBlog());

	$(document).on("mouseenter",".linkBlogCard",function(){
		$(this).find(".blogCardName").css("background-color","#72CFD7").css("color","white");
		$(this).find("img").animate({width:'+=10',height:'+=10',marginTop:'-=5px',marginLeft:'-=5px'},300);
	})

	$(document).on("mouseleave",".linkBlogCard",function(){
		$(this).find(".blogCardName").css("background-color","rgba(0,0,0,0)").css("color","#9e9e9e");
		$(this).css("border-color","#72CFD7");
		$(this).find("img").animate({width:'-=10',height:'-=10',marginTop:'+=5px',marginLeft:'+=5px'},300);
	})

//	$(MebsFlow());

	$(document).on("mouseenter", ".FlowMebs", function(){
  		$(this).css("background-color","#72CFD7");
		$(this).find(".FlowMebsName").css("color","white");
		$(this).find(".ninki").css("color","white");
  		
	});

	$(document).on("mouseleave", ".FlowMebs", function(){
  		$(this).css("background-color","white").css("color","#9e9e9e");
  		$(this).find(".FlowMebsName").css("color","#9e9e9e");
  		$(this).find(".ninki").css("color","#72CFD7");
	});

	$("#mebFFolw").click(function(){
		$("#mebFansLi").stop().fadeOut(300,function(){
			$("#mebFlowLi").fadeIn(300);
		});
		$(this).css("opacity","1");
		$(this).css("border-bottom", "1px solid #72CFD7");
		$("#mebFFans").css("opacity","0.5");
		$("#mebFFans").css("border-bottom", "0px solid #72CFD7");
	});

	$("#mebFFans").click(function(){
		$("#mebFlowLi").stop().fadeOut(300,function(){
			$("#mebFansLi").fadeIn(300);
		});
		$(this).css("opacity","1");
		$(this).css("border-bottom", "1px solid #72CFD7");
		$("#mebFFolw").css("opacity","0.5");
		$("#mebFFolw").css("border-bottom", "");
	});
	
	$(".mebPush").click(mebInfo);
});

function winChange(){
	var winW = $(window).width();
	var mainW = winW-620;
	$("#divleft").css("width",mainW);
	$("#divLeftImg").css("width",mainW);
	$("#aboutUs_footer").css("width",mainW);
}

var mebBtnCount = 0;
function showMebBtn(){
	if(mebBtnCount == 4){
		$("#mebPushBtn_R").hide();
	}else if(mebBtnCount == 0){
		$("#mebPushBtn_L").hide();
	}else{
		$("#mebPushBtn_R").show();
		$("#mebPushBtn_L").show();
	}
}

function mebInfo(){
	$("#divleft").css("display","none");
	var mebId = $(this).attr("value");
	$.ajax({
		url: "MemberServlet",
 		type: "POST",
 		datatype: "json",
 		data: {
 			action: "searchMebInfo",
 			mebId: mebId,
 		},
 		error: function(xhr){
 			alert('MemberServlet');
 		},
 		success: function(data){
 			data = JSON.parse(data);
 			$("#mebImg a").attr("href","/CA101_G4/front-end/member/aboutMember.jsp?mebId="+mebId);
 			$("#mebsName").html("").html(data.memberName);
 			$("#mebsGender").html("").html(data.gender);
 			$("#mebsBirthday").html("").html(data.birthday);
 			$("#introduction").html("").html(data.intro);
 			$("#mebImg img").attr("src","").attr("src",data.pic);
 		}
	});
	$.ajax({
		url: "BlogServlet",
 		type: "POST",
 		datatype: "json",
 		data: {
 			action: "blogByMeb",
 			mebId: mebId,
 		},
 		error: function(xhr){
 			alert('BlogServlet');
 		},
 		success: function(data){
 			data = JSON.parse(data);
 			$(".blogsCard").remove();
 			if(data.length > 0){
 				var str = "";
 				for(var i = 0 ; i < data.length ; i++){
 	 				if(i == 3 || i == 7){
 	 					str += "<div class='mouse linkBlogCard blogsCard blogsCard"+i+"' value='"+data[i].blogId+"'><div class='blogsCardImg'><img src='BlogServletPic?blogIdForPic="+data[i].blogId+"'></div><div class='blogCardName'>"+data[i].blogTitle+"</div></div>";
 	 				}else{
 	 					str += "<div class='mouse linkBlogCard blogsCard' value='"+data[i].blogId+"'><div class='blogsCardImg'><img src='BlogServletPic?blogIdForPic="+data[i].blogId+"'></div><div class='blogCardName'>"+data[i].blogTitle+"</div></div>";
 	 				}
 	 			}
 	 			$("#blogs").append(str);
 			}
 		}
	});
	$.ajax({
		url: "FollowServlet",
 		type: "POST",
 		datatype: "json",
 		data: {
 			action: "myFans",
 			mebId: mebId,
 		},
 		error: function(xhr){
 			alert('FollowServlet1');
 		},
 		success: function(data){
 			data = JSON.parse(data);
 			$(".FlowMebs").parent().remove();
 			var str = "";
 			for(var i = 0 ; i < data.length ; i++){
 				str += "<a href='/CA101_G4/front-end/member/aboutMember.jsp?mebId="+data[i].mebId+"'><div class='mouse FlowMebs' value='"+data[i].mebId+"'><img src='MemberServletPic?mebIdForPic="+data[i].mebId+"' id='FlowMebs_"+i+"' class='FlowMebsImg'><div class='FlowMebsName'>"+data[i].mebName+"</div><div class='fa FlowMebsIcon'>&#xf004;</div><div class='ninki'>"+i+"</div></div></a>"
 			}
 			$("#mebFansLi").append(str);
 		}
	});
	$.ajax({
		url: "FollowServlet",
 		type: "POST",
 		datatype: "json",
 		data: {
 			action: "myFollow",
 			mebId: mebId,
 		},
 		error: function(xhr){
 			alert('FollowServlet2');
 		},
 		success: function(data){
 			data = JSON.parse(data);
 			var str = "";
 			for(var i = 0 ; i < data.length ; i++){
 				str += "<a href='/CA101_G4/front-end/member/aboutMember.jsp?mebId="+data[i].mebId+"'><div class='mouse FlowMebs' value='"+data[i].mebId+"'><img src='MemberServletPic?mebIdForPic="+data[i].mebId+"' id='FlowMebs_"+i+"' class='FlowMebsImg'><div class='FlowMebsName'>"+data[i].mebName+"</div><div class='fa FlowMebsIcon'>&#xf004;</div><div class='ninki'>"+i+"</div></div></a>"
 			}
 			$("#mebFlowLi").append(str);
 			$("#divleft").fadeOut(500,function(){
 				$("#aboutMeb").css("display","block");
 				$("#indexImg").css("display","none");
 				$("#aboutUsDiv").css("display","none");
 				$("#divleft").css("border","0px solid #72CFD7");
 				$("#divleft").css("border-bottom","2px solid #72CFD7");
 				$("#divleft").css("border-radius","0px");
 				$("#divleft").fadeIn(500);
 			});
 		}
	});
}