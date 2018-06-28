$(document).ready(function(){
	$(".language").click(function(){
		$.ajax({
			url: "/CA101_G4/ChangeLanguage",
	 		type: "POST",
	 		datatype: "json",
	 		data: {
	 			action: "changeLanguage",
	 			language: $(this).attr("id"),
	 		},
	 		error: function(xhr){
	 			alert('language');
	 		},
	 		success: function(data){
	 			location.reload();
	 		}
		});
	});
	
	$(function(){
		if($("#japanese").attr("value") == "yes"){
			base();
			if(location.href.match("CA101_G4/index.jsp") == "CA101_G4/index.jsp"){
				indexLanguage();
				return;
			}
			if(location.href.match("CA101_G4/front-end/spot/searchSpot.jsp") == "CA101_G4/front-end/spot/searchSpot.jsp"){
 				spotLanguage();
 				return;
 			}
			if(location.href.match("CA101_G4/front-end/member/aboutMember.jsp") == "CA101_G4/front-end/member/aboutMember.jsp"){
				memberLanguage();
				return;
			}
			if(location.href.match("CA101_G4/front-end/event/eventCalender.jsp") == "CA101_G4/front-end/event/eventCalender.jsp"){
				eventLanguage();
				return;
			}
		}
	})
});

function base(){
	$(".divlist").eq(0).find("b").html("スポットサーチ");
	$(".divlist").eq(1).find("b").html("スケージュール");
	$(".divlist").eq(2).find("b").html("イベントリスト");
	$("#blog b").html("ブログ");
	$("#spot li").eq(0).find("a").html("スポット");
	$("#spot li").eq(1).find("a").html("紀行");
	$("#spot li").eq(2).find("a").html("ホテル");
	$("#spot li").eq(3).find("a").html("レストラン");
	$("#groupf b").html("グループ旅");
	$("#group li").eq(1).find("a").html("グループ旅サーチ");
	$("#group li").eq(2).find("a").html("マイグループ旅");
	$("#signForm b").html("ログイン");
	$("#passlabel").html("パスワード");
	$("#submit").html("次へ");
	$("#leave").html("前に");
	$("#signup").html("初めての方へ");
	$("#signupbtn").html("会員登録");
	$("#signUpForm b").html("会員登録");
	$("#passlabel1").html("パスワード");
	$("#passlabel2").html("パスワード確認");
	$("#namelabel").html("名前");
	$("#gender").html("男女");
	$("#TELlabel").html("番号");
	$("#birthdaylabel").html("生年月日");
	$("#todo").html("登録");
	$("#clean").html("直し");
	$("#donot").html("前に");
	$("#signoutview b").html("ログアウト");
	$("#yesorno").html("ログアウトですか");
	$("#yes").html("✔");
	$("#not").html("✖");
	$("#chatText").attr("placeholder","キーワード");
	$("#chatViewLineSignIn b").html("インライン");
	$("#chatViewLineGroup b").html("グループ旅");
	$("#chatViewLineSignOut b").html("アウトライン");
}

function indexLanguage(){
	$("#mebText b").html("人気会員");
	$("#newSopt b").html("スポット");
	$("#newPlay b").html("紀行");
	$("#newRest b").html("レストラン");
	$("#newHotel b").html("ホテル");
	$("#newGroup b").html("グループ旅");
	$("#mebText b").html("人気会員");
	$("#hotSpot b").html("スポット");
	$("#hotPlay b").html("紀行");
	$("#hotRest b").html("レストラン");
	$("#hotHotel b").html("ホテル");
	$("#hotGroup b").html("グループ旅");
	$("#pageTopDiv").find("div a[id='pageTop']").html("ページトップ");
	$("#aboutUs b").html("利用方向");
	$("#aboutMebTop").html("人気会員");
	$("#mebInfo1 b").html("自己紹介");
	$("#mebInfoTitle b").html("個人情報");
	$("#mebInfos div").eq(0).find("span").eq(0).html("名前：");
	$("#mebInfos div").eq(1).find("span").eq(0).html("男女：");
	$("#mebInfos div").eq(2).find("span").eq(0).html("生年月日：");
	$("#mebBlog b").html("人気ブログ");
	$("#mebFFans b").html("ファン");
	$("#mebFFolw b").html("フォロー");
	$("#mebimg img").attr("title","個人ページへ");
}

function spotLanguage(){
	$("#searchSpotBarText").attr("placeholder","キーワード");
	$("#spotType").html("-スポットタイプ-");
	$("#spotTypeUl li").eq(0).html("スポット");
	$("#spotTypeUl li").eq(1).html("レストラン");
	$("#spotTypeUl li").eq(2).html("ホテル");
	$("#spotCity").html("-県、市-");
	$("#spotAreas").html("-区-");
	$("#linkBlog").html("関連ブログ");
}

function memberLanguage(){
	$("#mebInfosName b").html("個人情報");
	$("#mebInfosIntr b").html("自己紹介");
	$("#mebInfosFlow b").html("フォロー");
	$("#mebInfosFav b").html("お気に入り");
	$("#mebInfosBlog b").html("マイブログ");
	$("#mebRightBlockInfo b").html("個人情報");
	$("#mebRightBlockInter b").html("自己紹介");
	$("#mebRightBlockFlow b").html("フォロー");
	$("#fans").html("ファン");
	$("#flow").html("フォロー");
	$("#mebRightBlockFav b").html("お気に入り");
	$("#spotFav").html("スポット");
	$("#blogFav").html("ブログ");
	$("#groupFav").html("グループ旅");
	$("#mebRightBlockBlog b").html("マイブログ");
	$("#spotBlog").html("スポット");
	$("#restBlog").html("ホテル");
	$("#hotelBlog").html("レストラン");
	$("#palyBlog").html("紀行");
	$("#changeInfoBar b").html("個人情報変更");
	$(".changeInfoTitle").eq(0).html("名前");
	$(".changeInfoTitle").eq(1).html("番号");
	$(".changeInfoTitle").eq(2).html("生年月日");
	$("#changeInfoBtnL").html("次へ");
	$("#changeInfoBtnR").html("前に");
	$("#changeIntrAreaBar b").html("自己紹介変更");
	$("#changeIntrBtnL").html("次へ");
	$("#changeIntrBtnR").html("前に");
	$("#changePicAreaBar b").html("写真アップロード");
	$("#changePicBtnL").html("次へ");
	$("#changePicBtnR").html("前に");
	$(".ninki").html("消す");
	$(".removeSpotFav").attr("title","消す");
	$("#chatIconInfo").attr("title","メッセージ");
	$("#badIconInfo").attr("title","告発");
	$("#badAreaBar b").html("会員告発");
	$("#badBtnL").html("次へ");
	$("#badBtnR").html("前に");
}

function eventLanguage(){
	var date = new Date();
	var year = date.getFullYear();
	$("#calenderBar").html(year+"年各地のイベントカレンダー");
}
