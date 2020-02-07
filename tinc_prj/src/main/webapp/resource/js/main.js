$(document).ready(function() {
  let title = "메모와 채팅을 동시에, TINC";
  let url = $(location).attr("pathname");
  let state = "";
  console.log($(location).attr("pathname"));
  console.log(url.split("/")[1]);

  $("#bottomButton").click(function(e) {
    $("#bottomButton *").remove();
    if (e.target.name != null) {
      urlChange(e.target.name);
    } else {
      urlChange(url);
    }
    buttomBtn();
    pageLoad();
  });

  function urlChange(path) {
    url = path;
    history.pushState(state, title, url);
  }

  function buttomBtn() {
    if (url == "/member/friendList" || url == "/member/friendSetting") {
      $("#bottomButton").append(`
		<div class="bottombutton">
			<button type="button" class="btn on" name="/member/addFriend">
				<i class="fas fa-user-plus">친구추가</i>
			</button>
			<button class="btn" name="/chat/list">
				<i class="fas fa-comments">채팅목록</i>
			</button>
			<button class="btn" name="/setting">
				<i class="fas fa-cog">설정</i>
			</button>
		</div>
		`);
    } else if (url == "/member/addFriend") {
      $("#bottomButton").append(`
		<div class="bottombutton">
			<button type="button" class="btn on" name="/member/friendList">
			<i class="fas fa-user">친구목록</i>
			</button>
			<button class="btn" name="/chat/list">
				<i class="fas fa-comments">채팅목록</i>
			</button>
			<button class="btn" name="/setting">
				<i class="fas fa-cog">설정</i>
			</button>
		</div>
		`);
    } else if (url.split("/")[1] == "setting") {
      $("#bottomButton").append(`
		<div class="bottombutton">
		 <button type="button" class="btn" name="/member/friendList">
			<i class="fas fa-user">친구목록</i>
		 </button>
		 <button class="btn" name="/chat/list">
			 <i class="fas fa-comments">채팅목록</i>
		 </button>
		 <button class="btn on" name="/setting">
			<i class="fas fa-cog">설정</i>
		 </button>
	  </div>
	  `);
    } else if (url == "/chat/list") {
      $("#bottomButton").append(`
		<div class="bottombutton">
		 <button type="button" class="btn" name="/member/friendList">
			<i class="fas fa-user" name="/member/friendList">친구목록</i>
		 </button>
		 <button class="btn on" name="/chat/add">
			<span class="btn-chatadd" name="/chat/add">
			  <span class="hidden" name="/chat/add">채팅추가</span>
			  <i class="fas fa-comments" name="/chat/add"></i>
			  <i class="fas fa-plus" name="/chat/add"></i>
			</span>
		 </button>
		 <button class="btn" name="/setting">
			<i class="fas fa-cog" name="/setting">설정</i>
		 </button>
	  </div>
	  `);
    }
  }

  function pageLoad() {
    if (url.split("/")[1] == "setting") {
      $.ajax({
        url: "/jsonTinc/setting",
        dataType: "json",
        async: false,
        success: function(data) {
          console.log(data);
          $("#content *").remove();
          $("#content").append(
            `<link rel="stylesheet" href="/resource/css/setting/setting.css">
					<script src="/resource/js/setting/set.js"></script>
					<section class="wrapper">
					<nav class="gnb">
						 <a title="메모장 이동" id="goMemo">MEMO</a>
					</nav>
					<main class="container">
	
						 <div id="setting-head">
							<span id="setting-title">설정</span>
						 </div>
	
						 
						 <form 
					 action=""
					 id="settingFileForm"
					 enctype="multipart/form-data"
					 method="POST">
					 <input type='file' accept='image/*' id='mpImg' style="display:none;">
					 <div id="setMyImg"></div>
					 </form>
	
						 <div><input id="myId" type="text" value="${data[0].nickName}"></div>
						 <div><input id="myStatusMessage" type="text" placeholder="${data[0].statusMsg}" value=""></div>
						 <form id="setting-edit-form">
							<div class="set-line">이메일
							 <input id="settingEditEmail" type="text" placeholder="${data[0].email}" value="">
							</div>
	
							<div class="set-line">전화번호
							 <input id="settingEditPhone" type="text" placeholder="${data[0].phoneNum}" value="">
							</div>
	
							<div>
							 <div class="set-line" id="setting-edit-pwd">비밀번호 변경</div>
							</div>
							<div>
							 <div class="set-line" id="setting-secession">탈퇴하기</div>
							</div>
	
							<div class="set-line">공개설정</div>
							 <div class="set-line onOff-button">아이디
								<div id="idOpenCheckBox" class="open-set-checkbox"></div>
							 </div>
	
							 <div class="set-line onOff-button">전화번호
								<div class="open-set-checkbox">
									<div id="phoneNumOpenCheckBox" class="open-set-checkbox"></div>
								</div>
							 </div>
	
							 <div class="set-line onOff-button">이메일
								<div class="open-set-checkbox">
									<div id="emailOpenCheckBox" class="open-set-checkbox"></div>
								</div>
							 </div>
	
							<div class="set-line">알림설정</div>
							 <div class="set-line onOff-button">채팅방 알림
								<div class="open-set-checkbox">
									<div id="chatAlarmCheckBox" class="open-set-checkbox"></div>
								</div>
							 </div>
	
							 <div class="set-line onOff-button">메모 알림
								<div class="open-set-checkbox">
									<div id="memoAlarmCheckBox" class="open-set-checkbox"></div>
								</div>
							 </div>
	
							<div id="set-logout">로그아웃</div>
							<div></div>
						 </form>
					</main>
					<div id="setPopUp"></div>
				 </section>`
          );
          if (data[0].profileImg == null) {
            $("#setMyImg").append(
              `<img id='myProfileImage' src="/resource/images/profile.jpg}">`
            );
          } else if (data[0].profileImg != null) {
            $("#setMyImg").append(
              `<img id='myProfileImage' src="/resource/images/${data[0].profileImg}">`
            );
          }

          if (data[0].idOpen == 0) {
            $("#idOpenCheckBox").append(
              `<input type="checkbox" id="idCheckbox" class="set-checkbox"/>
						<label for="idCheckbox" class="set-check"></label>`
            );
          } else if (data[0].idOpen == 1) {
            $("#idOpenCheckBox").append(
              `<input type="checkbox" id="idCheckbox" class="set-checkbox" checked/>
						<label for="idCheckbox" class="set-check"></label>`
            );
          }

          if (data[0].phoneNumOpen == 0) {
            $("#phoneNumOpenCheckBox").append(
              `<input type="checkbox" id="phoneCheckbox" class="set-checkbox"/>
						<label for="phoneCheckbox" class="set-check"></label>`
            );
          } else if (data[0].phoneNumOpen == 1) {
            $("#phoneNumOpenCheckBox").append(
              `<input type="checkbox" id="phoneCheckbox" class="set-checkbox" checked/>
						<label for="phoneCheckbox" class="set-check"></label>`
            );
          }

          if (data[0].emailOpen == 0) {
            $("#emailOpenCheckBox").append(
              `<input type="checkbox" id="emailCheckbox" class="set-checkbox"/>
						<label for="emailCheckbox" class="set-check"></label>`
            );
          } else if (data[0].emailOpen == 1) {
            $("#emailOpenCheckBox").append(
              `<input type="checkbox" id="emailCheckbox" class="set-checkbox" checked/>
						<label for="emailCheckbox" class="set-check"></label>`
            );
          }

          if (data[0].chattingAlarm == 0) {
            $("#chatAlarmCheckBox").append(
              `<input type="checkbox" id="chattingCheckbox" class="set-checkbox"/>
						<label for="chattingCheckbox" class="set-check"></label>`
            );
          } else if (data[0].chattingAlarm == 1) {
            $("#chatAlarmCheckBox").append(
              `<input type="checkbox" id="chattingCheckbox" class="set-checkbox" checked/>
						<label for="chattingCheckbox" class="set-check"></label>`
            );
          }

          if (data[0].memoAlarm == 0) {
            $("#memoAlarmCheckBox").append(
              `<input type="checkbox" id="memoCheckbox" class="set-checkbox"/>
						<label for="memoCheckbox" class="set-check"></label>`
            );
          } else if (data[0].memoAlarm == 1) {
            $("#memoAlarmCheckBox").append(
              `<input type="checkbox" id="memoCheckbox" class="set-checkbox" checked/>
						<label for="memoCheckbox" class="set-check"></label>`
            );
          }
        }
      });
      if (url.split("/")[2] == "change-pwd") {
        $(function() {
          url = "/setting/change-pwd";
          state = "";
          history.pushState(state, title, url);
          $("#setPopUp").append(`
							<div class="popup" style="display:block">
							<div class="popup-wrap" id="popup-change-pwd">
							<form class="popup-container" method="post">
							
							<div class="context">
							<div>
							<p>비밀번호</p>
							<input class="edit-pwd" type="text" value="" name="password" placeholder="비밀번호 입력"/>
							</div>
							<div>
							<p>새 비밀번호</p>
							<input class="edit-pwd" type="text" value="" name="newPwd1" placeholder="새 비밀번호 입력"/>
							</div>
							<div>
							<p>새 비밀번호 확인</p>
							<input class="edit-pwd" type="text" value="" name="newPwd2" placeholder="새 비밀번호 확인 입력"/>
							</div>
							</div>
							
							<div class="btn-area">
							<input class="btn" id="cancle-edit-pwd" type="button" value="취소"/>
							<input class="btn" id="ok-edit-pwd" type="submit" value="확인"/>
							</div>
							<div class="btn-close fas fa-times">닫기</div>
							</form>
							</div>
							</div>
							<div class="mask" style="display:block"></div>
					`);
        });
      } else if (url.split("/")[2] == "logout") {
        $(function() {
          url = "/setting/logout";
          state = "";
          history.pushState(state, title, url);
          $("#setPopUp").append(`
				<div class="popup" style="display:block">
					<div class="popup-wrap">
						<div class="popup-container">
		
							<div class="context">
								<p>로그아웃 하시겠습니까?</p>
							</div>
		
							<div class="btn-area">
								<button class="btn" id="logout-cancle">취소</button>
								<button class="btn" id="logout-ok">확인</button>
							</div>
		
							<div class="btn-close fas fa-times">닫기</div>
						</div>
					</div>
				</div>
				<div class="mask" style="display:block"></div>`);
        });
      } else if (url.split("/")[2] == "withdraw") {
        $(function() {
          url = "/setting/withdraw";
          state = "";
          history.pushState(state, title, url);
          $("#setPopUp").append(`
					<div class="popup" style="display:block">
					<div class="popup-wrap">
		
						 <form class="popup-container" id="withdrawA1">
							<div class="context">
							 <p>탈퇴 하시겠습니까?</p>
							</div>
							<div class="btn-area">
							 <input type="button" class="btn" id="withdraw-cancle1" value="취소"/>
							 <input type="button" class="btn" id="withdraw-ok1" value="확인"/>
							</div>
							<div class="btn-close fas fa-times">닫기</div>
						 </form>
		
						 <form class="popup-container" id="withdrawA2">
							<div class="context">
							 <p>비밀번호를 한 번 더<br>입력해 주세요.</p>
							 <div>
								<input class="withdraw-pwd" name="checkPwd" type="text" value="" placeholder="비밀번호 입력">
							 </div>
							</div>
							<div class="btn-area">
							 <input type="button" class="btn" id="withdraw-cancle2" value="취소"/>
							 <input type="submit" class="btn" id="withdraw-ok2" value="확인"/>
							</div>
							<div class="btn-close fas fa-times">닫기</div>
						 </form>
		
					</div>
				 </div>
				 <div class="mask" style="display:block"></div>
					`);
        });
      }
    } else if (url == "/chat/list") {
      $.ajax({
        url: "/jsonTinc/chat/list",
        dataType: "json",
        async: false,
        success: function(data) {
          console.log(data);
          $("#content *").remove();
          $("#content").append(`
				<script
					src="https://code.jquery.com/jquery-3.4.1.min.js"
					integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo="
					crossorigin="anonymous"></script>
					<script src="/resource/js/chatting/uiUtil.js"></script>
					<link rel="stylesheet" type="text/css" href="/resource/css/chatting/chat.css?vvvv" >
					<section class="wrapper">
						<nav class="gnb">
							<a href="#" title="메모장 이동">MEMO</a>
						</nav>
						<main class="container hasbtn">
							<div class="topBox">
								<div class="left"></div>
								<h1 class="title">채팅</h1>
								<div class="right"></div>
							</div>
							<ul class="chatList" id="chatIfList">
	
							</ul>
							<button class="btn-top"><i class="fas fa-arrow-up">TOP</i></button>
						</main>
					</section>
					<aside id="menu"> </aside>
				`);

          // 찾기용 문자

          //리스트가 없을 시
          if (data[0] == undefined) {
            $("#chatIfList").append(`<li class="nolist">
							아직 채팅방이 없습니다.<br>
							아래의 채팅방 추가를 눌러<br>
							채팅방을 만들어 보세요.
						</li>`);
          }
          // 1:1채팅 사진 미설정 시
          else {
            for (let i = 0; i < data[0].length; i++) {
              $("#chatIfList").append(`
								<li>
								 <a href="/chat/${data[0][i].id}">
									 <figure id = "chatG${i}">
									 </figure>
									 <ul>
										 <li class="title" id="chatTitle${i}">${data[0][i].title}</li>
										 <li id="chatMsg${i}"></li>
									 </ul>
								 </a>
							 </li>
						`);
              if (data[1][i].type == "그룹") {
                $(`#chatG${i}`).append(`
								<i class="fas fa-users"></i>
								`);
              } else if (data[1][i].type == "개인") {
                if (data[1][i].img == undefined) {
                  $(`#chatG${i}`).append(`
									<i class="fas fa-user"></i>
									`);
                } else {
                  $(`#chatG${i}`).append(`
									<img src="/resource/images/${data[1][i].img}" alt="#">
									`);
                }
              }

              if (data[0][i].status == false) {
                $(`#chatTitle${i}`).append(`
						<span class="ico_new">N</span>
						`);
              }

              if (data[0][i].meg != null) {
                $(`#chatMsg${i}`).append(`
						<xmp>${data[0][i].meg}</xmp>
						`);
              } else {
                $(`#chatMsg${i}`).append(`
						메시지가 없습니다.
						`);
              }
            } //for -end
          } //if- else -end
        }
      }); // ajax chat-list -end
    } else if (url == "/member/friendList") {
      $.ajax({
        url: "/jsonTinc/member/friendList",
        dataType: "json",
        async: false,
        success: function(data) {
          $("#content *").remove();
          $("#content").append(`
				<link rel="stylesheet" href="/resource/css/member/member.css?xxxxxx" >
				<link rel="stylesheet" href="/resource/css/chatting/chat.css?x">
				<script src="/resource/js/chatting/uiUtil.js"></script>
				<section class="wrapper">
				<nav class="gnb">
					<a href="#" title="메모장 이동">MEMO</a>
				</nav>
				<main class="container friend-list">
					<form>
					<div class="menu">
						<span class="left"></span>
						<span class="center">친구</span>
						<span class="right" onclick="location.href='friendSetting'" ><i class="fas fa-bars"></i></span>
					</div>
					<div class="friend">
						<div class="box inline">
							<img src="/resource/images/${data[0].profileImg}" alt="image" onclick="location.href='../setting'" class="profile" data-nickname="${data[0].nickName}" data-statusmsg="${data[0].statusMsg}" data-img="${data[0].profileImg}" >
					  </div>
					  <div class="inline" id="ajStatusMsg">
					  </div>
					</div>
				 <hr>
				 <div id="ajfriendList"></div>
	 
					 <div id="anno" style="display:none">
						추가
					</div>
					</form>
				</main>
			</section>
	 
			<div class="popup friendSetting">
				<div class="popup-wrap">
					<div class="popup-container">
				  <div class="profile">
							<figure>
								<img id="popupImg" src="" alt="">
							</figure>
							<ul>
								<li class="title" id="popId"></li>
								<li id="popupStatusMsg"></li>
							</ul>
						</div>
						<nav class="btn-area">
							<ul >
								<li>
									<a href="#" id="chatting" class="btn">1:1채팅</a>
									<a href="#" id="block" class="btn">차단</a>
								</li>
							</ul>
						</nav>
						<a href="#" class="btn-close fas fa-times" onclick="popupClose()">닫기</a>
					</div>
				</div>
			</div>
			<div class="mask"></div>
				`);
          if (data[0].statusMsg == "") {
            $("#ajStatusMsg").append(`
				  <p><b>${data[0].nickName}</b></p>
				  `);
          } else {
            $("#ajStatusMsg").append(`
				  <p><b>${data[0].nickName}</b></p>
				  <p>${data[0].statusMsg}</p>
				  `);
          }

          if (data[2] == 0) {
            $("#ajfriendList").append(`
				  <p class="no-friend">아래의 친구 추가를<br>눌러 친구를 추가해 보세요.</p>
				  `);
          } else {
            $("#ajfriendList").append(`
				  <p class="list-count">친구 ${data[2]}</p>
				  `);
            for (let i = 0; i < data[2]; i++) {
              $("#ajfriendList").append(`
					 <div class="list" id="friendsId${data[1][i].id}">
					 <div class="friend">
						  <div class="box inline">
							 <img src="/resource/images/${data[1][i].profileImg}" alt="image1" class="profile" id="img_${i}"
							 data-id="${data[1][i].id}" data-nickname="${data[1][i].nickName}" data-statusmsg="${data[1][i].statusMsg}" data-img="${data[1][i].profileImg}">
						  </div>
						  <div class="inline" id="ajFL${data[1][i].id}"></div>
						</div>
				  </div>
					 `);
              if (data[1][i].statusMsg == "") {
                $(`#ajFL${data[1][i].id}`).append(`
						<div class="inline empty">
						<p><b>${data[1][i].nickName}</b></p>
					 </div>
					 `);
              } else {
                $(`#ajFL${data[1][i].id}`).append(`
						<div class="inline">
								  <p id="nickName"><b>${data[1][i].nickName}</b></p>
								  <p id="statusMsg">${data[1][i].statusMsg}</p>
								</div>
						`);
              }
            }
          }
        }
      });
    }
  }

  urlChange(url);
  buttomBtn();
  pageLoad();
});
