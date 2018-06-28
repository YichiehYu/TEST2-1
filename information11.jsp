<%@ page language="java" contentType="text/html; charset=BIG5"
    pageEncoding="BIG5"%>
      <%@ page import="com.member.model.*" %>
      <%@ page import="com.follow.model.*" %>
      <%@ page import="com.blogfav.model.*" %>
      <%@ page import="com.blog.model.*" %>
      <%@ page import="com.groupfav.model.*" %>
      <%@ page import="com.spotfav.model.*" %>
      <%@ page import="java.util.List" %>

<% 

     String mebIdB= request.getParameter("mebIdB");
     if(mebIdB==null)
      mebIdB="M00011";
   %>
      
     
      <% 

     String mebIdA= request.getParameter("mebIdA");
     if(mebIdA==null)
      mebIdA="M00008"; %>
   
<% 
MemberDAO memberDAO = new MemberDAO();
MemberVO memberVO = memberDAO.findByPrimaryKey(mebIdB);
//MemberVO memberVO = (MemberVO) request.getAttribute("memberVO");
pageContext.setAttribute("memberVO", memberVO);
%>






<%
BlogDAO blogDAO = new BlogDAO();

//BlogVO blogVO = (BlogVO) request.getAttribute("blogVO");
pageContext.setAttribute("memberVO", memberVO);
%>



<%  
FollowService fSvc = new FollowService();
List<FollowVO> followerlist = fSvc.getOneFollowAll(mebIdB);

%>

<%
FollowService fedSvc = new FollowService();
 List<FollowVO> followedlist = fedSvc.getOneFollowedAll(mebIdA) ;
  
%>



<% 
   SpotFavService sSvc = new SpotFavService();
	List<SpotFavVO> spotfavlist = sSvc.getOneSpotFavAll(mebIdB) ;
   pageContext.setAttribute("spotfavlist",spotfavlist);
%>

<% 
    GroupFavService gSvc = new GroupFavService();
List<GroupFavVO> groupfavlist = gSvc.getOneGroupFavAll(mebIdB) ;
   pageContext.setAttribute("groupfavlist",groupfavlist);
%>

<% 
    BlogFavService Svc = new BlogFavService();
List<BlogFavVO> blogfavlist = Svc.getOneBlogFavAll(mebIdB) ;
   pageContext.setAttribute("blogfavlist",blogfavlist);
%>

  <!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
  <html>
  <head>
  <meta http-equiv="Content-Type" content="text/html; charset=BIG5">
   <meta http-equiv="Content-Type" content="text/html;charset=UTF-8">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="css/baseCss.css">
      <link rel="stylesheet" href="css/infoCss.css">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Nova+Round" rel="stylesheet">
    <script src="http://code.jquery.com/jquery-1.10.1.min.js"></script>
    <script type="text/javascript" src="js/baseJs.js"></script>
  <title>伴旅 - travel 個人頁面</title>
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.0/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
  <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
  <meta name="Keywords" content="HTML,CSS,JavaScript,SQL,PHP,jQuery,XML,DOM,Bootstrap,Web development,W3C,tutorials,programming,training,learning,quiz,primer,lessons,references,examples,source code,colors,demos,tips">
  <meta name="Description" content="Well organized and easy to understand Web building tutorials with lots of examples of how to use HTML, CSS, JavaScript, SQL, PHP, and XML.">
  <link rel="icon" href="/favicon.ico" type="image/x-icon">
  <link rel="stylesheet" href="/w3css/4/w3.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
  </head>
  <body>
   <div id='nav_references' class='w3-bar-block w3-card-2'>
        <span onclick='w3_close_nav("references")' class='w3-button w3-xlarge w3-right' style="position:absolute;right:0;font-weight:bold;">&times;</span>
        <div class='w3-row-padding' style="padding:24px 48px">
        </div>
        <br>
      </div>
  
  <div class='w3-sidebar w3-collapse' id='sidenav'>
    <div id='leftmenuinner'>
      <div class='w3-light-grey' id='leftmenuinnerinner'>
    
  
  <br>
    <div class="card">
    <img src="information.do?mebIdForPic=${memberVO.mebId}" alt="John" style="width:100%;height:200px">
    	
  <div class="container">
  
  </div>
   <table>
              <tr>
                  <tr><td class="font1" style="font-size: 25px">${memberVO.mebName}</td></tr>
                 <tr><td class="font1" style="font-size: 22px">電話：<br>${memberVO.tel }</td></tr>
                 <tr><td class="font1" style="font-size: 21px">電子信箱：${memberVO.email }</td></tr>
                 <tr><td class="font1" style="font-size: 22px">生日：${memberVO.birthday }</td></tr>
                  <tr><td class="font1" style="font-size: 22px">性別：${(memberVO.gender==0) ? '男':'女'}</td></tr>
               
                  <tr><td><a id="edit" href="#">
                   <button type="button" class="btn btn-info btn-lg"><span class="glyphicon glyphicon-plus">編輯</button></a></td></tr>
              </tr>
          </table>
          <script>
         
              var statu = 0;
              var edit = document.getElementById('edit');
              var item = document.getElementsByTagName('td');
              var item_length = item.length-1
              var item_value = new Array(item_length);
               
              for(i = 0; i < item_length; i++){
                  item_value[i] = item[i].innerHTML;
              }
               
              edit.onclick =function(){
                  if(statu == 0){
                      edit.innerHTML= '<button type="button" class="btn btn-info btn-lg"><span class="glyphicon glyphicon-plus">儲存變更</button>';
                      for(i = 0; i < item_length; i++){
                          item[i].innerHTML = '<input type="txt" class="item_input" value="'+item_value[i]+'">';
                      }
                      statu = 1;
                  }else{
                      edit.innerHTML= '<button type="button" class="btn btn-info btn-lg"><span class="glyphicon glyphicon-plus">編輯</button>';
                      var item_input = document.getElementsByClassName('item_input');
                      for(i = 0; i < item_length; i++){
                          item_value[i] = item_input[i].value;
                      }
                      for(i = 0; i < item_length; i++){
                          item[i].innerHTML = item_value[i];
                      }
                      statu = 0
                  }
                  return false;
              }
          </script>
  
  
  
  </div>
  
  
  <br>
  <br>
  <br>
  <br>
  <br>
  
      </div>
    </div>
  </div>
  
  
  <br>
        <br><br>
  
  
  <div class='w3-main w3-light-grey' id='belowtopnav' style='margin-left:220px;'>
    <div class='w3-row w3-white'>
      <div class='w3-col l10 m12' id='main'>
  <hr>
  <h1 id="main1" style="font-size: 40px;font-family:Microsoft JhengHei;text-align:center;color: #72CFD7">自我介紹</h1>
  <hr>
  <form action="textarea.jsp" method="post">
  <textarea style="font-size: 20px;height: 180px;width: 750px;color: #72CFD7" name="textarea">${memberVO.intro }</textarea>
  <form action="info.jsp" method="post">
   
  <input type="submit"  style="background:#72CFD7" class="btn btn-info btn-lg" value="確認">
  </form>
  <br>
  <br>
  <br>  
  <hr>
  
  
  
  
  <h1 id="main1" style="font-size: 40px;font-family:Microsoft JhengHei;text-align:center;color: #72CFD7">追蹤管理</h1>
  <hr>
    <p class="text-left"><img src="img/follow.png">朋友</p>


  <div class="w3-bar w3-light-grey">
    <button class="w3-bar-item w3-button" style="color:#72CFD7;font-family:Microsoft JhengHei" onclick="openCity('follow')">追蹤名單</button>
    <button class="w3-bar-item w3-button" style="color:#72CFD7;font-family:Microsoft JhengHei" onclick="openCity('followed')">追蹤者</button>
  </div>
  
  <div id="follow" class="w3-container city">
    <%
      for (int i = 0; i < followerlist.size(); i++){
        
    %>
      <div class="responsive">
        <div class="gallery">
      <div class="btn-group">
        <button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown"><span class="glyphicon glyphicon-ok">朋友
          <span class="caret"></span>
        </button>
        <ul class="dropdown-menu" role="menu">
          <li><a href="javascript: void(0)">接收通知</a></li>
          <li class="divider"></li>
          <li><a href="javascript: void(0)">取消朋友關係</a></li>
          
      </div>
          <a target="_blank" href="<%=request.getContextPath()%>/MemberServlet?mebIdB=<%=followerlist.get(i).getMebIdB()%>&action=getOne_For_Display">
            <img src="information.do?mebIdForPic=<%=followerlist.get(i).getMebIdB() %>" alt="我追蹤的人" width="600" height="400">
          </a>
          <div class="desc"><p><%=followerlist.get(i).getMebIdB() %></p></div>
        </div>
      </div>
    <% } %>
    
  </div>
  
  <div id="followed" class="w3-container city" style="display:none">
   <% 
    for (int i = 0; i < followedlist.size(); i++){
      
   %>  

    <div class="responsive">
      <div class="gallery">
    <div class="btn-group">
      <button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown"><span class="glyphicon glyphicon-ok">朋友
        <span class="caret"></span>
      </button>
      <ul class="dropdown-menu" role="menu">
        <li><a href="javascript: void(0)">接收通知</a></li>
        <li class="divider"></li>
        <li><a href="javascript: void(0)">封鎖</a></li>
      </ul>
    </div>
        <a target="_blank" href="<%=request.getContextPath()%>/MemberServlet?mebIdB=<%=followedlist.get(i).getMebIdA()%>&action=getOne_For_Display">
          <img src="information.do?mebIdForPic=<%=followedlist.get(i).getMebIdA() %>" alt="追蹤我的人" width="600" height="400">
        </a>
        <div class="desc"><p><%=followedlist.get(i).getMebIdA() %></p></div>
      </div>
    </div>
    <% }%>
  </div>
  
  
  <script>
  function openCity(cityName) {
      var i;
      var x = document.getElementsByClassName("city");
      for (i = 0; i < x.length; i++) {
         x[i].style.display = "none";  
      }
      document.getElementById(cityName).style.display = "block";  
  }
  </script>
  <br>
  <br>
  <br>
   <hr>
  <h1 id="main1" style="font-size: 40px;font-family:Microsoft JhengHei;text-align:center;color: #72CFD7">最愛管理</h1>
  <hr>

  
  <div class="w3-bar w3-light-grey">
    <button class="w3-bar-item w3-button" style="color:#72CFD7;font-family:Microsoft JhengHei" onclick="openCity('blog')">部落格</button>
    <button class="w3-bar-item w3-button" style="color:#72CFD7;font-family:Microsoft JhengHei" onclick="openCity('Group')">旅遊</button>
  </div>
  
  <div id="blog" class="w3-container city">
  
  <% 
    for (int i = 0; i < blogfavlist.size(); i++) {
      BlogFavVO blog = blogfavlist.get(i);
  %>
  <div class="responsive">
    <div class="gallery">
  <div class="btn-group">
    <button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown"><span class="glyphicon glyphicon-ok">已說讚
      <span class="caret"></span>
    </button>
    <ul class="dropdown-menu" role="menu">
      <li><a href="#">收回讚</a></li>
      
    </ul>
  </div>
      <a target="_blank" href="#">
        <img src="img/logo.png" alt="部落格" width="600" height="400">
        
      </a>
      <div class="desc"><p><%=blog.getBlogId() %></p></div>
    </div>
  </div>
  <% } %>
  </div>
   
  <div id="Group" class="w3-container city" style="display:none">
   
   <% 
    for (int i = 0; i < groupfavlist.size(); i++) {
      GroupFavVO group= groupfavlist.get(i);
  %>

  
  <div class="responsive">
    <div class="gallery">
  <div class="btn-group">
    <button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown"><span class="glyphicon glyphicon-ok">已說讚
      <span class="caret"></span>
    </button>
    <ul class="dropdown-menu" role="menu">
      <li><a href="#">收回讚</a></li>
    </ul>
  </div>
      <a target="_blank" href="#">
        <img src="img/logo.png" alt="旅遊" width="600" height="400">
      </a>
      <div class="desc"><p> <%=group.getGroupId() %></p></div>
     </div>
  </div>
  <% } %>
  </div>
  
  
  <script>
  function openCity(cityName) {
      var i;
      var x = document.getElementsByClassName("city");
      for (i = 0; i < x.length; i++) {
         x[i].style.display = "none";  
      }
      document.getElementById(cityName).style.display = "block";  
  }
  </script>
   <br>
  <br>
  <br>
  <hr>
  <h1 id="main1" style="font-size: 40px;font-family:Microsoft JhengHei;text-align:center;color: #72CFD7">最愛的景點</h1>
  <hr>
  <hr>
  
  </script>
  
  <br>
  <div class="main">
  
   
  
  <div id="myBtnContainer">
    <button class="btn1 active" style="font-size: 20px;font-family:Microsoft JhengHei;text-align:center;color: #72CFD7" onclick="filterSelection('all')">最愛的景點</button>
  
  </div>
  
  <!-- Portfolio Gallery Grid -->
     <% 
    for (int i = 0; i < spotfavlist.size(); i++) {
      SpotFavVO spot= spotfavlist.get(i);
  %>
  <div class="row">
    <div class="column all">
      <div class="content">
        <img src="img/logo.png" alt="Mountains" style="width:100%">
        <p><%=spot.getSpotId() %></p>
      </div>
    </div>
    <% } %>

  <!-- END GRID -->
  
  <!-- END MAIN -->
  
  <script>
  filterSelection("all")
  function filterSelection(c) {
    var x, i;
    x = document.getElementsByClassName("column");
    if (c == "all") c = "";
    for (i = 0; i < x.length; i++) {
      w3RemoveClass(x[i], "show");
      if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
    }
  }
  
  function w3AddClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
      if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
    }
  }
  
  function w3RemoveClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
      while (arr1.indexOf(arr2[i]) > -1) {
        arr1.splice(arr1.indexOf(arr2[i]), 1);     
      }
    }
    element.className = arr1.join(" ");
  }
  
  
  // Add active class to the current button (highlight it)
  var btnContainer = document.getElementById("myBtnContainer");
  var btns = btnContainer.getElementsByClassName("btn");
  for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function(){
      var current = document.getElementsByClassName("active");
      current[0].className = current[0].className.replace(" active", "");
      this.className += " active";
    });
  }
  </script>
  
    <a id="pagetop"></a>
    <header id="header">
      <span class="fa menu mouse"><r>&#xf0c9;</r><div class ="font" id="Mdiv">MENU</div></span>
      <span class="signin mouse" id="mebPic"><img src="img/logo.png"></span>
      <span class="signin mouse fa" id="chatIcon" style="width: 80px;font-size: 35px"><r>&#xf27a;</r><div class="font">CHAT</div></span>
      <span class="signin mouse material-icons" id="signin" style="width: 80px;font-size: 35px"><r id="bag">&#xe16a;</r><div class="font">SIGN&nbsp;IN</div></span>
      <a href="index.html" title="GoHome"><img id="logo" src="img/logo.png"></a>
      <nav id="gnav">
        <div id="list">
          <ul>
            <div class="divlist"><a href="searchSpot.html"><span class="fa">&#xf041;</span><b>景點查詢</b></a></div>
  
            <div class="_div"><b>-</b></div>
            <li id="blog" class="menuLi mouse"><span class="fa">&#xf0f6;</span><b>部落格</b>
              <ul class="nonelist" id="spot">
                <li><a href="#">景點</a></li>
                <li><a href="#">遊記</a></li>
                <li><a href="#">旅館</a></li>
                <li><a href="#">餐廳</a></li>
              </ul>
            </li>
  
            <div class="_div"><b>-</b></div>
            <div class="divlist"><a href="#"><span class="fa">&#xf040;</span><b>行程管理</b></a></div>
  
            <div class="_div"><b>-</b></div>
            <li id="groupf" class="menuLi mouse"><span class="fa">&#xf0c0;</span><b>旅行團</b>
              <ul class="nonelist" id="group">
                <li style="height: 8px"></li>
                <li><a href="#">查詢旅行團</a></li>
                <li><a href="#">查看個人紀錄</a></li>
              </ul>
            </li>
  
            <div class="_div"><b>-</b></div>
            <div class="divlist"><a href="#"><span class="fa">&#xf073;</span><b>活動月曆</b></a></div>
          </ul>
        </div>
      </nav>
      <div class="overlay"></div>
      <div id="signinview">
        <div class="svbar" id="signForm"><b>會員登入</b></div>
        <form>
          <label for="username">E-mail</label><input type="text" name="username" class="textview" size="25" id="username"><br>
          <label for="password" id="passlabel">密碼</label><input type="password" name="password" class="textview" size="25" id="password"><br>
        </form>
        <span class="mouse mouseshadow btnleft" name="submit" id="submit">登入</span>
        <span class="mouse mouseshadow btnright" name="leave" id="leave">離開</span>
        <div id="signup">非會員請點擊此連結</div><div class="mouse" id="signupbtn">註冊</div>
      </div>
      <div id="signoutview">
        <div class="svbar"><b>會員登出</b></div>
        <div id="yesorno">是否登出?</div>
        <span class="mouse mouseshadow btnleft sovbtn" name="yes" id="yes">是</span>
        <span class="mouse mouseshadow btnright sovbtn" name="not" id="not">否</span>
      </div>
  
      <div id="signupview">
        <div class="svbar" style="margin-bottom: 50px;" id="signUpForm"><b>會員註冊</b></div>
        <form id="signupform">
          <label for="username2">E-mail</label><input type="email" name="username" class="textview signupview" size="25" id="username2"><br>
          <label for="password1" id="passlabel1">密碼</label><input type="password" name="password" class="textview signupview" size="25" id="password1"><br>
          <label for="password2" id="passlabel2">密碼確認</label><input type="password" name="password2" class="textview signupview" size="25" id="password2"><div class="fa false" id="passwordCheck">&#xf00d;</div><br>
          <label for="name" id="namelabel">姓名</label><input type="text" name="name" class="textview signupview" size="25" id="name"><br>
          <div>
            <span id="gender">性別</span>
            <label for="male" id="malelabel" class="mouse fa">&#xf183;</label><input type="radio" name="gender" value="male" class="textview signupview" id="male" >
            <label for="female" id="femalelabel" class="mouse fa">&#xf182;</label><input type="radio" name="gender" value="female" class="textview signupview" id="female">
          </div>
          <label for="TEL" id="TELlabel">電話號碼</label><input type="text" name="TEL" class="textview signupview" size="25" id="TEL"><br>
          <label for="birthday" id="birthdaylabel">出身年月日</label><input type="text" name="birthday" class="textview signupview" size="25" id="birthday"><br>
        </form>
        <span class="mouse mouseshadow btnleft sovbtn" name="signup" id="todo">註冊</span>
        <span class="mouse mouseshadow btnright sovbtn" name="donotsignup" id="clean">清空</span>
        <span class="mouse mouseshadow btnright sovbtn" name="donotsignup" id="donot">取消</span>
      </div>
  
      <div id="dataWait">
        <img id="waitImg" src="img/logo.gif" width="100px" height="100px;">
        <div><b>資料處理中請稍後...</b></div>
      </div>
  
      <div id="chatView">
        <div class="svbar searchBar">
          <span class="fa">&#xf002;</span>
          <input placeholder="搜尋" type="text" name="choose" id="chatText">
        </div>
      </div>
</body>
</html>