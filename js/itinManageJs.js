$(document).ready(function(){
	let path = window.location.pathname;
	const host = window.location.host;
	const webCtx = path.substr(0, path.indexOf("/", 1));	
	const controller = `${webCtx}/ItineraryServlet`;
	const mebId = $("#logo").attr("value");
	
	getDateStatus();
	
	function getDateStatus(){
		for(let i = 0; i < localStorage.getItem(mebId+"dates"); i++){
			addDateOfItin(i+1);
			$(".day-tab.act").removeClass("act");
			$(".day-tab-list li:eq(0)").addClass("act");
			$(".day-list.act").removeClass("act");
			$(".day-list:eq(0)").addClass("act");
		}
		localStorage.getItem(mebId+"dayAct");
		$(".day-list-blk").html(localStorage.getItem(mebId+"dayAct"));
		if($(".day-list-blk li").length==0){
			$(".day-list-blk").append($("<ul>").addClass("day-list ui-sortable act"));
		}
	}
	
	$.ajax({
		url: controller,
		data: {
			action: "getAllSpotByFavorite",
			mebId: mebId,
			cityId: " ",
			presentPage: 1
		},
		dataType: "json",
		type: "post",
		success: function(data, textStatus, jqXHR){
			$("#point-list").empty();
			$(".totalPages").text(data.totalPages);
			$.each(data.list, function(index, spotVO){
				$("<li>").attr({"id":spotVO.spotId, "lat": spotVO.spotLat , "lng": spotVO.spotLng})
						 .append($("<img>").attr("src", `${webCtx}/ItineraryShowPic?spotId=${spotVO.spotId}`))
						 .append($("<span>").addClass("name").text(spotVO.spotName))
						 .append($("<a>").addClass("remove").attr("href","javascript:void(0)"))
						 .append($("<span>").addClass("addr").text(spotVO.spotAddress))
						 .append($("<span>").addClass("tel").text(spotVO.spotTel))
						 .appendTo("#point-list");
			})
		},
		error: function(jqXHR, textStatus, errorThrown){
			console.log(textStatus);
			$(".loading-overlay").addClass("show");
		}
	}) // End of AJAX getAllSpotByFavorite
	
	$(".category-item").on("click", function(event){
		let typeId = $(this).attr("id");
		let cityId = $(".city-item.show").attr("id");
		$(".category-label").text($(`.category-item[id='${typeId}']`).text());
		$(`.category-item[id='${typeId}']`).addClass("show");
		$(`.category-item:not([id='${typeId}'])`).removeClass("show");
		$.ajax({
			url: controller,
			data: queryString(typeId, cityId, $("#logo").attr("value"), "1"),
			dataType: "json",
			type: "post",
			success: function(data, textStatus, jqXHR){
				$("#point-list").empty();
				$("#point-list-blk").scrollTop();
				$(".totalPages").text(data.totalPages);
				$(".presentPage").text(data.presentPage);
				$.each(data.list, function(index, spotVO){
					$("<li>").attr({"id":spotVO.spotId, "lat": spotVO.spotLat , "lng": spotVO.spotLng})
							 .append($("<img>").attr("src", `${webCtx}/ItineraryShowPic?spotId=${spotVO.spotId}`))
							 .append($("<span>").addClass("name").text(spotVO.spotName))
							 .append($("<a>").addClass("remove").attr("href","javascript:void(0)"))
							 .append($("<span>").addClass("addr").text(spotVO.spotAddress))
							 .append($("<span>").addClass("tel").text(spotVO.spotTel))
							 .appendTo("#point-list");
				})
			},
			error: function(jqXHR, textStatus, errorThrown){
				console.log(textStatus);
				$(".loading-overlay").addClass("show");
			}
		}); // End of AJAX getAllSpotByTypeCity
	}) // End of category-item click
	
	
	$(".city-item").on("click", function(event){
		let cityId = $(this).attr("id");
		let typeId = $(".category-item.show").attr("id");
		$(".city-label").text($(`.city-item[id='${cityId}']`).text());
		$(`.city-item[id='${cityId}']`).addClass("show");
		$(`.city-item:not([id='${cityId}'])`).removeClass("show");
		$.ajax({
			url: controller,
			data: queryString(typeId, cityId, $("#logo").attr("value"), "1"),
			dataType: "json",
			type: "post",
			success: function(data, textStatus, jqXHR){
				$("#point-list").empty();
				$("#point-list-blk").scrollTop();
				$(".totalPages").text(data.totalPages);
				$(".presentPage").text(data.presentPage);
				$.each(data.list, function(index, spotVO){
					$("<li>").attr({"id":spotVO.spotId, "lat": spotVO.spotLat , "lng": spotVO.spotLng})
							 .append($("<img>").attr("src", `${webCtx}/ItineraryShowPic?spotId=${spotVO.spotId}`))
							 .append($("<span>").addClass("name").text(spotVO.spotName))
							 .append($("<a>").addClass("remove").attr("href","javascript:void(0)"))
							 .append($("<span>").addClass("addr").text(spotVO.spotAddress))
							 .append($("<span>").addClass("tel").text(spotVO.spotTel))
							 .appendTo("#point-list");
				})
			},
			error: function(jqXHR, textStatus, errorThrown){
				console.log(textStatus);
				$(".loading-overlay").addClass("show");
			}
		}) // End of AJAX 
	}) // End of city-item click
	
	$(".point-list-blk").scroll(function(event) {
		let presentPage = parseInt($(".presentPage").text());
		let totalPages = parseInt($(".totalPages").text());
		let top = $(this).scrollTop() + $(this).innerHeight();
	    if(top >= $(this).prop("scrollHeight")-1 && presentPage < totalPages ) {
	    	$(".presentPage").text(parseInt(presentPage)+1);
			$.ajax({
				url: controller,
				data: queryString($(".category-item.show").attr("id"), $(".city-item.show").attr("id"), $("#logo").attr("value"), (parseInt(presentPage)+1).toString()),
				dataType: "json",
				type: "post",
				success: function(data, textStatus, jqXHR){
					$.each(data.list, function(index, spotVO){
						$("<li>").attr({"id":spotVO.spotId, "lat": spotVO.spotLat , "lng": spotVO.spotLng})
								 .append($("<img>").attr("src", `${webCtx}/ItineraryShowPic?spotId=${spotVO.spotId}`))
								 .append($("<span>").addClass("name").text(spotVO.spotName))
								 .append($("<a>").addClass("remove").attr("href","javascript:void(0)"))
								 .append($("<span>").addClass("addr").text(spotVO.spotAddress))
								 .append($("<span>").addClass("tel").text(spotVO.spotTel))
								 .appendTo("#point-list");
					})
				},
				error: function(jqXHR, textStatus, errorThrown){
					console.log(textStatus);
					$(".loading-overlay").addClass("show");
				}
			}) // End of AJAX 
	    }
	}) // End of point-list-block scroll
	
	function queryString(...query){
		let queryArray = [];
		for (let str of query){
			if(str == "myFav"){
				queryArray.push("action=getAllSpotByFavorite");
			}else if(str == "All"){
				queryArray.push(`cityId= `);
			}else if(str.indexOf("C")==0){
				queryArray.push(`cityId=${str}`);
			}else if(str.indexOf("ST")==0 || str.indexOf(" ")==0){
				queryArray.push("action=getAllSpotByTypeCity");
				queryArray.push(`typeId=${str}`);
			}else if(str.indexOf("M")==0){
				queryArray.push(`mebId=${str}`)
			}else{
				queryArray.push(`presentPage=${str}`);
			}
		}
		let qs = queryArray.join("&");
		return qs;
	}
	
	function addSpotToDaylist(spotInfo){
		$("<li>").attr({"id": spotInfo.spotId, "lat": spotInfo.spotLat , "lng": spotInfo.spotLng, "date":$(".day-tab.act").text()}).addClass("tooltip")
				 .append($("<img>").attr("src", spotInfo.spotSrc))
				 .append($("<span>").addClass("name").text(spotInfo.spotName))
				 .append($("<a>").addClass("remove").attr("href", "javascript:void(0)"))
				 .append($("<span>").addClass("addr").text(spotInfo.spotAddr))
				 .append($("<span>").addClass("tel").text(spotInfo.spotTel))
				 .append($("<abbr>").addClass("time").attr("title",spotInfo.startTime+' - '+spotInfo.endTime).text(timeDuration(spotInfo.endTime, spotInfo.startTime)))
				 .append($("<span>").addClass("tooltiptext").text($(".spot-anno").val()))
				 .appendTo(".day-list.act");

		$(".selectTime-blk").removeClass("show");
		$(`.point-list li[id=${spotInfo.spotId}]`).remove();
		sortDayList($(".day-tab.act").text());
		for(let i = 0; i<$(".day-list.act li").length-1;i++){
			timeDefer($(".day-list.act li")[i], $(".day-list.act li")[i+1])
		}
		$(".duration-label").text("");
		$(".spot-anno").val("");
		$(".btn-time-submit").attr("disabled", true).removeClass("available");
	}
	
	
	
	
	
	
	$(document).on("click", ".point-list li", function(event){
		$(".selectTime-blk").addClass("show").attr("id", $(this).attr("id"));
		$(".selectTime-container option:not(:contains('請選擇'))").remove();
		for(let i=0; i<24 ; i++){
			$("<option>").text((i<10)? `0${i}` : i ).val((i<10)? `0${i}` : i ).appendTo(".start-hour");
		}
		for(let i=0; i<6 ; i++){
			$("<option>").text(`${i}0`).val(`${i}0`).appendTo(".start-minute");
		}
			   
	});
	
	$(document).on("change", ".start-time select", function(){
		$(".btn-time-submit").attr("disabled", true).removeClass("available");
		$(".duration-label").text("");
		$(".end-time option:not(:contains('請選擇'))").remove();
		if($(".start-hour").val()!="請選擇" && $(".start-minute").val()!="請選擇"){
			$(".end-time option:not(:contains('請選擇'))").remove();
			for(let i=parseInt($(".start-hour").val()); i<24 ; i++){
				$("<option>").text((i<10)? `0${i}` : i ).val((i<10)? `0${i}` : i ).appendTo(".end-hour");
			}
		}
	});

	$(document).on("change", ".change-start-time select", function(){
		$(".btn-changeTime-submit").attr("disabled", true).removeClass("available");
		$(".duration-label").text("");
		$(".change-end-time option:not(:contains('請選擇'))").remove();
		if($(".change-start-hour").val()!="請選擇" && $(".change-start-minute").val()!="請選擇"){
			$(".change-end-time option:not(:contains('請選擇'))").remove();
			for(let i=parseInt($(".change-start-hour").val()); i<24 ; i++){
				$("<option>").text((i<10)? `0${i}` : i ).val((i<10)? `0${i}` : i ).appendTo(".change-end-hour");
			}
		}
	});

	$(document).on("change", ".end-time .end-hour", function(){
		$(".duration-label").text("");
		$(".btn-time-submit").attr("disabled", true).removeClass("available");
		if($(".end-hour").val()== $(".start-hour").val()){
			$(".end-minute option:not(:contains('請選擇'))").remove();
			
			for(let i=parseInt($(".start-minute").val())/10+1; i<6 ; i++){
				$("<option>").text(`${i}0`).val(`${i}0`).appendTo(".end-minute");
			}
		}else{
			$(".end-minute option:not(:contains('請選擇'))").remove();
			
			for(let i=0; i<6 ; i++){
				$("<option>").text(`${i}0`).val(`${i}0`).appendTo(".end-minute");
			}
		}
	});
	
	$(document).on("change", ".change-end-time .change-end-hour", function(){
		$(".duration-label").text("");
		$(".btn-time-submit").attr("disabled", true).removeClass("available");
		if($(".change-end-hour").val()== $(".change-start-hour").val()){
			$(".change-end-minute option:not(:contains('請選擇'))").remove();
			
			for(let i=parseInt($(".change-start-minute").val())/10+1; i<6 ; i++){
				$("<option>").text(`${i}0`).val(`${i}0`).appendTo(".change-end-minute");
			}
		}else{
			$(".change-end-minute option:not(:contains('請選擇'))").remove();
			
			for(let i=0; i<6 ; i++){
				$("<option>").text(`${i}0`).val(`${i}0`).appendTo(".change-end-minute");
			}
		}
	});
	
	$(document).on("change", ".end-time .end-minute", function(){
		let startTime = `${$(".start-hour").val()}:${$(".start-minute").val()}`;
		let endTime = `${$(".end-hour").val()}:${$(".end-minute").val()}`;
		$(".duration-label").text(timeDuration(endTime, startTime))
		$(".btn-time-submit").attr("disabled", false).addClass("available");
	});
	
	$(document).on("change", ".change-end-time .change-end-minute", function(){
		let cStartTime = `${$(".change-start-hour").val()}:${$(".change-start-minute").val()}`;
		let cEndTime = `${$(".change-end-hour").val()}:${$(".change-end-minute").val()}`;
		$(".duration-label").text(timeDuration(cEndTime, cStartTime))
		$(".btn-changeTime-submit").attr("disabled", false).addClass("available");
	});
	
	function timeDuration(a, b){
		let aDate = (parseInt(a.substr(0,2))<parseInt(b.substr(0,2))? '1970/01/02 ': '1970/01/01 ');
		let duration = (new Date(aDate + a) - new Date('1970/01/01 ' + b))/1000/60;
		let hrs = (Math.floor(duration/60)==0)? '': `${Math.floor(duration/60)}小時`;
		let mins = (duration%60==0)? '': `${duration%60}分鐘`;
		return hrs+mins;
	}
	
	$(".btn-time-submit").on("click", function(event){
		let spotId = $(".selectTime-blk.show").attr("id");
		let spotLat = $(`.point-list li[id=${spotId}]`).attr("lat");
		let spotLng = $(`.point-list li[id=${spotId}]`).attr("lng");
		let spotSrc = $(`.point-list li[id=${spotId}]`).children("img").attr("src");
		let spotName = $(`.point-list li[id=${spotId}]`).children("span.name").text();
		let spotAddr = $(`.point-list li[id=${spotId}]`).children("span.addr").text();
		let spotTel = $(`.point-list li[id=${spotId}]`).children("span.tel").text();
		let startTime = `${$(".start-hour").val()}:${$(".start-minute").val()}`;
		let endTime = `${$(".end-hour").val()}:${$(".end-minute").val()}`;
		
		let jsonObj={};
		jsonObj.action = "addSpotToDayList";
		jsonObj.spotId = spotId;
		jsonObj.spotLat = spotLat;
		jsonObj.spotLng = spotLng;
		jsonObj.spotSrc = spotSrc;
		jsonObj.spotName = spotName;
		jsonObj.spotAddr = spotAddr;
		jsonObj.spotTel = spotTel;
		jsonObj.startTime = startTime;
		jsonObj.endTime = endTime;
		
		if($(".collabo-status").attr("status")=="connected"){
			collaboWebSocket.send(JSON.stringify(jsonObj))
		}else{
			addSpotToDaylist(jsonObj);
		}
		
	})
	
	$(document).on("click", ".btn-changeTime-submit", function(event){
		let cStartTime = `${$(".change-start-hour").val()}:${$(".change-start-minute").val()}`;
		let cEndTime = `${$(".change-end-hour").val()}:${$(".change-end-minute").val()}`;
		let spotId = $(".changeTime-blk").attr("id");
		$(`.day-list li[id=${spotId}] .tooltiptext `).text($(".change-spot-anno").val());
		$(`.day-list li[id=${spotId}] .time `).attr("title",cStartTime+' - '+cEndTime).text(timeDuration(cEndTime, cStartTime));
		$(".changeTime-blk").removeClass("show");
		sortDayList($(".day-tab.act").text());
		for(let i = 0; i<$(".day-list li").length-1;i++){
			timeDefer($(".day-list li")[i], $(".day-list li")[i+1])
		}
		$(".duration-label").text("");
		$(".change-spot-anno").val("");
		$(".btn-changeTime-submit").attr("disabled", true).removeClass("available");
	})
	
	$(".btn-time-cancel").on("click", function(event){
		$(".selectTime-blk").removeClass("show");
		$(".duration-label").text("");
		$(".spot-anno").val("");
		$(".btn-time-submit").attr("disabled", true).removeClass("available");
	})
	
	$(document).on("click", ".btn-changeTime-cancel", function(event){
		$(".changeTime-blk").removeClass("show");
		$(".duration-label").text("");
		$(".change-spot-anno").val("");
		$(".btn-changeTime-submit").attr("disabled", true).removeClass("available");
	})
	
	$(document).on("click", ".point-list a.remove", function(event){
		event.stopPropagation();
		
		if (confirm("確定要刪除嗎?") == true) {
			let target = $(this).parent();
			$.ajax({
				url: controller,
				data: {
					action: "deleteSpotFavorite",
					mebId: mebId,
					spotId: $(this).parent().attr("id")
				},
				type: "post",
				dataType: "json",
				success: function(data, textStatus, jqXHR){
					if(data.result == "OK"){
						target.remove();
					}
				},
				error: function(jqXHR, textStatus, errorThrown){
					console.log(textStatus);
					$(".loading-overlay").addClass("show");
				}
			});
	    }
	});
	
	
	$(document).on("click", ".day-list a.remove", function(event){
		event.stopPropagation();
		for(let i = 0; i<$(".point-list li").size(); i++){
			let idString = $(".point-list li").get(i).id;
			let targetId = parseInt($(".point-list li").get(i).id.substr(1));
			let selfId = parseInt($(this).parent().attr("id").substr(1));
			if(targetId > selfId){
				$(`.point-list li[id='${idString}']`).before($("<li>").attr({"id":$(this).parent().attr("id"), "lat": $(this).attr("lat") , "lng": $(this).attr("lng")})
					      .append($("<img>").attr("src", $(this).parent().find("img").attr("src")))
				 	      .append($("<span>").addClass("name").text($(this).parent().find(".name").text()))
					      .append($("<a>").addClass("remove").attr("href", "javascript:void(0)"))
					      .append($("<span>").addClass("addr").text($(this).parent().find(".addr").text()))
					      .append($("<span>").addClass("tel").text($(this).parent().find(".tel").text())));
				$(this).parent().remove();
				break;
			}
			
		}
		$(".point-list").append($("<li>").attr({"id":$(this).parent().attr("id"), "lat": $(this).attr("lat") , "lng": $(this).attr("lng")})
			      .append($("<img>").attr("src", $(this).parent().find("img").attr("src")))
		 	      .append($("<span>").addClass("name").text($(this).parent().find(".name").text()))
			      .append($("<a>").addClass("remove").attr("href", "javascript:void(0)"))
			      .append($("<span>").addClass("addr").text($(this).parent().find(".addr").text()))
			      .append($("<span>").addClass("tel").text($(this).parent().find(".tel").text())));
		$(this).parent().remove();

	});
	
	function deleteDaySpot(event){
		let spotId = $(".selectTime-blk.show").attr("id");
		let spotLat = $(`.point-list li[id=${spotId}]`).attr("lat");
		let spotLng = $(`.point-list li[id=${spotId}]`).attr("lng");
		let spotSrc = $(`.point-list li[id=${spotId}]`).children("img").attr("src");
		let spotName = $(`.point-list li[id=${spotId}]`).children("span.name").text();
		let spotAddr = $(`.point-list li[id=${spotId}]`).children("span.addr").text();
		let spotTel = $(`.point-list li[id=${spotId}]`).children("span.tel").text();
		
		let jsonObj={};
		jsonObj.action = "deleteDaySpot";
		jsonObj.spotId = spotId;
		jsonObj.spotLat = spotLat;
		jsonObj.spotLng = spotLng;
		jsonObj.spotSrc = spotSrc;
		jsonObj.spotName = spotName;
		jsonObj.spotAddr = spotAddr;
		jsonObj.spotTel = spotTel;
		
		if($(".collabo-status").attr("status")=="connected"){
			collaboWebSocket.send(JSON.stringify(jsonObj))
		}else{
			addSpotToDaylist(jsonObj);
		}
	}
	
	function sortDayList(date){
		$(`.day-list:eq(${date-1})`).append($(`.day-list:eq(${date-1}) li`).detach().sort(function(a, b){
			var date1 = new Date('1970/01/01 '+ $(a).children('abbr').attr('title').substr(0,5));
			var date2 = new Date('1970/01/01 '+ $(b).children('abbr').attr('title').substr(0,5));
			return date1 - date2;
		}));
	}
	
	function timeDefer(a,b){
	    let aE = $(a).children('abbr').attr('title').substr(8);
	    let bS = $(b).children('abbr').attr('title').substr(0,5);
	    let diff = new Date('1970/01/01 '+$(b).children('abbr').attr('title').substr(8))-new Date('1970/01/01 '+bS);
	        if(aE>bS){
				bS=aE;
				let bE=new Date('1970/01/01 '+bS);
				bE.setMilliseconds(bE.getMilliseconds()+diff);
				$(b).children('abbr').attr('title',bS+' - '+(bE.getHours()<10?`0${bE.getHours()}`: bE.getHours())+':'+(bE.getMinutes()==0?`0${bE.getMinutes()}`:bE.getMinutes()));
	        }
	}
	
	$(document).on("click", ".mode-switch-blk button:not(.btn-mode, .btn-invite)", function(event){
		let token = $(this).attr("id");
		$(`.modal-blk.${token}`).addClass("show");
		let text = ((token=="save"|| token=="load")==true ? (token=="save"? "取代":"讀取") : (token=="manage"? "刪除": "分享"));
		$.ajax({
			url: controller,
			data: {
				action: "getAllByMebId",
				mebId: mebId
			},
			type: "post",
			dataType: "json",
			success: function(data, textStatus, jqXHR){
				$(".modal-blk.show ul").empty();
				if(token=="load"){
					$(".modal-blk.show ul").append($("<li>").append("擁有行程").addClass("itin-info"));
				}else if (token=="manage"){
					$(".modal-blk.show ul").append($("<li>").append("管理行程").addClass("itin-info"));
				}
				if(token=="share"){
					$.each(data.list, function(index, itinVO){
						$(".modal-blk.show ul").append(
							`<li id="${itinVO.itinId}">
								<strong>${itinVO.itinTitle}</strong>
								<button class="btn-modal-${token}">${text}</button>
								<input type="text" class="meb-id-b" placeholder="被分享人ID">
							</li>`
						);
					});
				}else{
					$.each(data.list, function(index, itinVO){
						$(".modal-blk.show ul").append(
							`<li id="${itinVO.itinId}">
								<strong>${itinVO.itinTitle}</strong>
								<button class="btn-modal-${token}">${text}</button>
							</li>`
						);
					});
				}
			
				
				if(token=="save"){
					if($(".itin-save-list").prop("scrollHeight") > $(".itin-save-list").innerHeight()){
						$(".save-content").css("padding-right", "29px");
					}else{
						$(".save-content").css("padding-right", "15px");
					}
					
				}else if(token=="load"){
					$.ajax({
						url: controller,
						data: {
							action: "getAllByOthers",
							mebId: mebId
						},
						type: "post",
						dataType: "json",
						success: function(data, textStatus, jqXHR){
							$(".modal-blk.show ul").append($("<li>").append("受分享行程").addClass("itin-info"));
							$.each(data.list, function(index, itinVO){
								$(".modal-blk.show ul").append(
									`<li id="${itinVO.itinId}">
										<strong>${itinVO.itinTitle} (分享人ID:${itinVO.mebId})</strong>
										<button class="btn-modal-${token}">${text}</button>
									</li>`
								);
							});
						},
						error: function(jqXHR, textStatus, errorThrown){
							console.log(textStatus);
							$(".loading-overlay").addClass("show");
						}
					});
				}else if (token=="manage"){
					$.ajax({
						url: controller,
						data: {
							action: "getAllBySelf",
							mebId: mebId
						},
						type: "post",
						dataType: "json",
						success: function(data, textStatus, jqXHR){
							$(".modal-blk.show ul").append($("<li>").append("所分享行程").addClass("itin-info"));
							$.each(data.list, function(index, itinVO){
								$(".modal-blk.show ul").append(
									`<li id="${itinVO.itinId}">
										<strong>${itinVO.itinTitle} (被分享人ID:${itinVO.mebId})</strong>
										<button class="btn-modal-cancel">取消</button>
									</li>`
								);
							});
						},
						error: function(jqXHR, textStatus, errorThrown){
							console.log(textStatus);
							$(".loading-overlay").addClass("show");
						}
					});
					
					$.ajax({
						url: controller,
						data: {
							action: "getAllByOthers",
							mebId: mebId
						},
						type: "post",
						dataType: "json",
						success: function(data, textStatus, jqXHR){
							$(".modal-blk.show ul").append($("<li>").append("受分享行程").addClass("itin-info"));
							$.each(data.list, function(index, itinVO){
								$(".modal-blk.show ul").append(
									`<li id="${itinVO.itinId}">
										<strong>${itinVO.itinTitle} (分享人ID:${itinVO.mebId})</strong>
										<button class="btn-modal-cancel">取消</button>
									</li>`
								);
							});
						},
						error: function(jqXHR, textStatus, errorThrown){
							console.log(textStatus);
							$(".loading-overlay").addClass("show");
						}
					});
				}
			},
			error: function(jqXHR, textStatus, errorThrown){
				console.log(textStatus);
				$(".loading-overlay").addClass("show");
			}
		});
	});
	
	$(".btn-save-submit").on("click", function(){
		let datas = $('.day-list').find("li").map(function(){
			let data = {};
			data.id= $(this).attr("id");
			data.date = $(this).attr("date");
			data.strTime = $(this).children('abbr').attr('title').substr(0,5);
			data.endTime = $(this).children('abbr').attr('title').substr(8);
			data.spotAnno = $(this).children('span.tooltiptext').text();
			return data;
		});
		let data = {};
		for(let i =0 ; i< datas.length; i++){
			data[`data${i}`]=datas[i];
		}
		
		$.ajax({
			url: controller,
			data: {
				action: "insert",
				mebId: mebId,
				itinTitle: $("#itin-title").val(),
				data: JSON.stringify(data)
			},
			type: "post",
			dataType: "json",
			success: function(data, textStatus, jqXHR){
				if(data.status == "OK"){
					alert("儲存成功");
					$(".itin-title").val("");
					$(".modal-blk.show").removeClass("show");
					$(".itin-title").val("");
					localStorage.setItem(mebId+"dayAct", $(".day-list.act").prop("outerHTML"))
					localStorage.setItem(mebId+"dates", $(".day-tab-list li").length-1);
				}
			},
			error: function(jqXHR, textStatus, errorThrown){
				console.log(textStatus);
				$(".loading-overlay").addClass("show");
			}
		});
	});
	
	$(document).on("keydown", function(event){
		if(event.keyCode == 27 && $(".loading-overlay.show").length==1){
			$(".loading-overlay").removeClass("show");
		}
		if(event.keyCode == 27){
			$(".modal-blk.show, .selectTime-blk.show, .changeTime-blk.show").removeClass("show");
			$(".duration-label").text("");
			$(".btn-time-submit").attr("disabled", true).removeClass("available");
		}else{
			return;
		}
	});
	
	$(document).on("click", ".btn-close", function(){
		$(".modal-blk.show").removeClass("show");
		$(".itin-title").val("");
	})
	
	$(document).on("click", ".modal-container .btn-modal-save",function(event){
		let itinId = $(this).parent().attr("id");
		let datas = $('.day-list.act').find("li").map(function(){
			let data = {};
			data.id= $(this).attr("id");
			data.date = $(this).attr("date");
			data.strTime = $(this).children('abbr').attr('title').substr(0,5);
			data.endTime = $(this).children('abbr').attr('title').substr(8);
			data.spotAnno = $(this).children('span.tooltiptext').text();
			return data;
		});
		let data = {};
		for(let i =0 ; i< datas.length; i++){
			data[`data${i}`]=datas[i];
		}
		
		$.ajax({
			url: controller,
			data: {
				action: "updateOne",
				mebId: mebId,
				itinTitle: $("#itin-title").val(),
				itinId: itinId,
				data: JSON.stringify(data)
			},
			type: "post",
			dataType: "json",
			success: function(data, textStatus, jqXHR){
				if(data.status == "OK"){
					alert("取代成功");
					$(".modal-blk.show").removeClass("show");
					$(".itin-title").val("");
					localStorage.setItem(mebId+"dayAct", $(".day-list.act").prop("outerHTML"))
					localStorage.setItem(mebId+"dates", $(".day-tab-list li").length-1);
				}
			},
			error: function(jqXHR, textStatus, errorThrown){
				console.log(textStatus);
				$(".loading-overlay").addClass("show");
			}
		});
	});
	
	$(document).on("click", ".modal-container .btn-modal-load", function(){
		let itinId = $(this).parent().attr("id");
		let dateOfItin = $(".day-tab.act").text();
		
		$.ajax({
			url: controller,
			data: {
				action: "getAllByLoad",
				dateOfItin: dateOfItin,
				itinId: itinId
			},
			type: "post",
			dataType: "json",
			success: function(data, textStatus, jqXHR){
				if(data.status == "OK"){
					alert("讀取成功");
					
					$(".modal-blk.show").removeClass("show");
					$(".day-list").empty();
					for(let i=0; i<data.list.length; i++){
						$(`.day-list:eq(${data.list[i][0].dateOfItin-1})`).append($("<li>").attr({"id":data.list[i][0].spotId, "lat": data.list[i][1].spotLat , "lng": data.list[i][1].spotLng, "date":data.list[i][0].dateOfItin}).addClass("tooltip")
													  .append($("<img>").attr("src", `${webCtx}/ItineraryShowPic?spotId=${data.list[i][0].spotId}`))
													  .append($("<span>").addClass("name").text(data.list[i][1].spotName))
													  .append($("<a>").addClass("remove").attr("href", "javascript:void(0)"))
												  	  .append($("<span>").addClass("addr").text(data.list[i][1].spotAddress))
												  	  .append($("<span>").addClass("tel").text(data.list[i][1].spotTel))
													  .append($("<abbr>").addClass("time").attr("title",data.list[i][0].strTime+' - '+data.list[i][0].endTime).text(timeDuration(data.list[i][0].endTime, data.list[i][0].strTime)))
													  .append($("<span>").addClass("tooltiptext").text(data.list[i][0].spotAnno)));
					};
				};
				for(let i=1;i<=$(".day-tab").length;i++){
					sortDayList(i);
				};
			},
			error: function(jqXHR, textStatus, errorThrown){
				console.log(textStatus);
				$(".loading-overlay").addClass("show");
			}
		});
		
		let typeId = $(".category-item.show").attr("id");
		let cityId = $(".city-item.show").attr("id");
		$(".category-label").text($(`.category-item[id='${typeId}']`).text());
		$(`.category-item[id='${typeId}']`).addClass("show");
		$(`.category-item:not([id='${typeId}'])`).removeClass("show");
		$.ajax({
			url: controller,
			data: queryString(typeId, cityId, $("#logo").attr("value"), "1"),
			dataType: "json",
			type: "post",
			success: function(data, textStatus, jqXHR){
				$("#point-list").empty();
				$("#point-list-blk").scrollTop();
				$(".totalPages").text(data.totalPages);
				$(".presentPage").text(data.presentPage);
				$.each(data.list, function(index, spotVO){
					if($(`.day-list li[id=${spotVO.spotId}]`).length == 0){
						$("<li>").attr({"id":spotVO.spotId, "lat": spotVO.spotLat , "lng": spotVO.spotLng})
								 .append($("<img>").attr("src", `${webCtx}/ItineraryShowPic?spotId=${spotVO.spotId}`))
								 .append($("<span>").addClass("name").text(spotVO.spotName))
								 .append($("<a>").addClass("remove").attr("href","javascript:void(0)"))
								 .append($("<span>").addClass("addr").text(spotVO.spotAddress))
								 .append($("<span>").addClass("tel").text(spotVO.spotTel))
								 .appendTo("#point-list");
					}
				})
			},
			error: function(jqXHR, textStatus, errorThrown){
				console.log(textStatus);
				$(".loading-overlay").addClass("show");
			}
		}); // End of AJAX getAllSpotByTypeCity
	});
	
	$(document).on("click", ".modal-container .btn-modal-manage",function(){
		let itinId = $(this).parent().attr("id");
		if (confirm("確定要刪除嗎?") != true) {
	        return;
	    }
		$.ajax({
			url: controller,
			data: {
				action: "delete",
				itinId: itinId
			},
			type: "post",
			dataType: "json",
			success: function(data, textStatus, jqXHR){
				if(data.status == "OK"){
					alert("刪除成功");
					$(".modal-blk.show").removeClass("show");
				}
			},
			error: function(jqXHR, textStatus, errorThrown){
				console.log(textStatus);
				$(".loading-overlay").addClass("show");
			}
		});
	});

	$(document).on("click", ".modal-container .btn-modal-share",function(){
		let itinId = $(this).parent().attr("id");
		let mebIdB = $(this).next().val();
		
		if (confirm("確定要分享嗎?") != true) {
	        return;
	    }
		$.ajax({
			url: controller,
			data: {
				action: "shareItin",
				mebIdA: mebId,
				mebIdB: mebIdB,
				itinId: itinId
			},
			type: "post",
			dataType: "json",
			success: function(data, textStatus, jqXHR){
				if(data.status == "OK"){
					alert("分享成功");
					$(".modal-blk.show").removeClass("show");
				}
			},
			error: function(jqXHR, textStatus, errorThrown){
				console.log(textStatus);
				$(".loading-overlay").addClass("show");
			}
		});
	});
	
	$(document).on("click", ".day-list li abbr.time", function(event){
		event.stopPropagation();
		$(".changeTime-blk").addClass("show").attr("id", $(this).parent().attr("id"));
		$(".changeTime-container option:not(:contains('請選擇'))").remove();
		for(let i=0; i<24 ; i++){
			$("<option>").text((i<10)? `0${i}` : i ).val((i<10)? `0${i}` : i ).appendTo(".change-start-hour");
		}
		for(let i=0; i<6 ; i++){
			$("<option>").text(`${i}0`).val(`${i}0`).appendTo(".change-start-minute");
		}
	});
	
	$(document).on("click", ".day-list li span.addr", function(event){
		event.stopPropagation();
		let spotId = $(this).parent().attr("id");
		let lat = parseFloat($(this).parent().attr("lat"));
		let lng = parseFloat($(this).parent().attr("lng"));
		
		$(".btn-map-mode").click();
		
		if($(this).parent().prev().length==1){
			let spots=[];
			spots.push({lat: parseFloat($(this).parent().prev().attr("lat")), lng: parseFloat($(this).parent().prev().attr("lng"))});
			spots.push({lat: lat, lng: lng});
			
			addSpotTravel(spots);
		}else{
			addMarker(lat, lng);
		}
	});
	
	$(document).on("click", ".modal-container .btn-modal-cancel", function(){
		let itinId = $(this).parent().attr("id");
		if (confirm("確定要取消分享嗎?") != true) {
	        return;
	    }
		$.ajax({
			url: controller,
			data: {
				action: "cancelShare",
				itinId: itinId
			},
			type: "post",
			dataType: "json",
			success: function(data, textStatus, jqXHR){
				if(data.status == "OK"){
					alert("取消成功");
					$(".modal-blk.show").removeClass("show");
				}
			},
			error: function(jqXHR, textStatus, errorThrown){
				console.log(textStatus);
				$(".loading-overlay").addClass("show");
			}
		});
	})
	
	$(document).on("click", ".day-list li", function(){
		$(this).toggleClass("show");
	});
	
	$(document).on("click", ".btn-day-remove", function(){
		if (confirm("確定要刪除整日行程嗎?") == true) {
			deleteDate();
	    }
	})
	
	function deleteDate(){
		$(".day-list.act li a.remove").click();
		$(".day-list.act").remove();
		if($(".day-tab.act").prev().length!=0){
			$(".day-tab.act").prev().addClass("act");
			$(".day-tab.act").next().removeClass("act");
		}
		$(`.day-tab-list li:eq(${$('.day-tab').length-1})`).remove();
		$(`.day-list:eq(${$('.day-tab.act').text()-1})`).addClass("act")
	}
	
	$(document).on("click", ".btn-mode:not(.act)", function(){
		$(".btn-mode").toggleClass("act");
		if($(".btn-map-mode.act").length==1){
			$(".map-blk").animate({"margin-left": "395px"}, 200);
			let spotArr=[];
			
			for(i=0;i<$(".point-list li").length;i++){
				var latlng={};
				latlng.lat= parseFloat($($(".point-list li")[i]).attr("lat"));
				latlng.lng= parseFloat($($(".point-list li")[i]).attr("lng"));
				spotArr.push(latlng);
			}
			
			addClusterMarker(spotArr);
		}else{
			$(".map-blk").animate({"margin-left": "100%"}, 200);
		}
	})
	
	$(".btn-day-optimize").on("click", function(){
		$(".btn-map-mode").click();
		var spotArr=[];
		
		for(i=0;i<$(".day-list li").length;i++){
			var latlng={};
			latlng.lat= parseFloat($($(".day-list li")[i]).attr("lat"));
			latlng.lng= parseFloat($($(".day-list li")[i]).attr("lng"));
			spotArr.push(latlng);
			clearMarkers();
			addSpotTravel(spotArr);
		}
	});
	
	$(".btn-invite").on("click", function(){
		$(".modal-blk.invite").addClass("show");
		$.ajax({
			url: controller,
			data: {
				action: "getFriendList",
				mebIdA: mebId
			},
			type: "post",
			dataType: "json",
			success: function(data, textStatus, jqXHR){
				$.each(data.list, function(index, memberVO){
					if($(`.itin-invite-list li[mebId='${memberVO.mebId}']`).length==0){
						$(".itin-invite-list").append($("<li>").attr("mebId", memberVO.mebId)
															   .append($("<img>").attr("src", `${webCtx}/ItineraryShowPic?mebId=${memberVO.mebId}`))
															   .append($("<span>").text(`${memberVO.mebName} (ID: ${memberVO.mebId})`))
															   .append($("<button>").addClass("btn-invite-submit").text("邀請")));
					}
				});
			},
			error: function(jqXHR, textStatus, errorThrown){
				console.log(textStatus);
				$(".loading-overlay").addClass("show");
			}
		});
	})
	
	$(document).on("click", ".invite .btn-invite-submit", function(){
		if($(this).text()!="邀請"){return}
		if (confirm("確定送出邀請嗎?") == true) {
			$(this).addClass("locked").text("鎖定");
			$(".modal-blk.invite").removeClass("show");
			let myCollaboPoint =`/CollaborativeEdit/${mebId}/${$(this).parent().attr("mebId")}`;
			let conllaboEndPointURL = "ws://" + host + webCtx + myCollaboPoint;
			console.log(conllaboEndPointURL);
			collaboConnect(conllaboEndPointURL);
	    }
	})
	
	$(document).on("click", ".btn-day-add", function(){
		if($(".day-tab-list li").length <= 7){
			addDateOfItin();
		}
	})
	
	$(document).on("click", ".day-tab-list .day-tab", function(){
		changeDate($(this).text());
	})
	
	function addDateOfItin(i){
		$(".day-tab-list li.act").removeClass("act");
		$(".day-list.act").removeClass("act");
		$(".btn-day-add").before($("<li>").addClass("day-tab ui-sortable-handle act").text($(".day-tab-list li").length));
		$(".day-list-blk").append($("<ul>").addClass("day-list ui-sortable act"));
	}
	
	function changeDate(index){
		$(".day-tab.act").removeClass("act");
		$(".day-list.act").removeClass("act");
		$(`.day-tab:eq(${index-1})`).addClass("act");
		$(`.day-list:eq(${index-1})`).addClass("act");
		
	}
	
//	----------------------------------------- WebSocket ----------------------------------------------------------------
	
	
	
	let collaboStatus = document.querySelector(".collabo-status");
	let collaboWebSocket;

	function collaboConnect(conllaboEndPointURL) {
		collaboWebSocket = new WebSocket(conllaboEndPointURL);
		
		collaboWebSocket.onopen = function(event) {
			collaboStatus.innerHTML = "行程共同編輯中．．．";
			collaboStatus.setAttribute("status", "connected");
		};

		collaboWebSocket.onmessage = function(event) {
			let jsonObj = JSON.parse(event.data);
			if(event.data.action = "addSpotToDayList"){
				addSpotToDaylist(jsonObj);
			}
			
			
			
			
		};

		collaboWebSocket.onclose = function(event) {
			collaboStatus.innerHTML = "";
		};
	}
		
	function collaboDisconnect() {
		collaboWebSocket.close();
		collaboStatus.setAttribute("status", "disconnected");
	}
	
	
	
	
	
	
	
	
}) // End of document ready





