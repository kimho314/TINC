$(document).ready(function() {
  let title = "메모와 채팅을 동시에, TINC";
  let url = "";
  let state = "";

  if (false) {
    history.pushState(state, title, url);

    function moveHistory(state, url) {
      history.pushState(state, title, url);
    }

    $.ajax({
      url: "/jsonTinc/setting",
      dataType: "json",
      async: false,
      success: function(data) {
        console.log(data);
        //$("#content *").remove();
        $("#content").append(
          `<link rel="stylesheet" href="/resource/css/setting/setting.css">
				<script src="/resource/js/setting/set.js"></script>
				<section class="wrapper"> 
				<nav class="gnb"> 
				   <a title="메모장 이동" id="goMemo">MEMO</a>
				</nav><!-- gnb end -->
				<main class="container">
		  
				   <div id="setting-head">
					  <!-- <span class="fas fa-chevron-left" id="return"></span> -->
					  <span id="setting-title">설정</span>
				   </div>
		  
				   
				   <!-- 프로필 이미지 -->
				   <input type='file' accept='image/*' id='mpImg' style="display:none;">
				   <div id="setMyImg">
					   <img id='myProfileImage' src="/resource/images/profile.jpg">
				   </div>
		  
				   
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
				</div><!-- context -->

				<div class="btn-area">
					<button class="btn" id="logout-cancle">취소</button>
					<button class="btn" id="logout-ok">확인</button>
				</div>

				<div class="btn-close fas fa-times">닫기</div>
			</div><!-- popup-container -->
		</div><!-- popup-wrap -->
	</div><!-- popup -->
	<div class="mask" style="display:block"></div>`);
    });

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
			  <!-- context -->
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
			  <!-- context -->
			  <div class="btn-area">
				 <input type="button" class="btn" id="withdraw-cancle2" value="취소"/>
				 <input type="submit" class="btn" id="withdraw-ok2" value="확인"/>
			  </div>
			  <div class="btn-close fas fa-times">닫기</div>
		   </form>
  
		</div><!-- popup-wrap -->
	 </div><!-- popup -->
	 <div class="mask" style="display:block"></div>
		`);
    });
  } // if -end

  $.ajax({
    url: "/jsonTinc/chat/list",
    dataType: "json",
    async: false,
    success: function(data) {
	  console.log(data);
	  //$("#content *").remove();
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
				</nav><!-- gnb end -->
				<main class="container hasbtn">
					<div class="topBox">
						<div class="left"></div>
						<h1 class="title">채팅</h1>
						<div class="right"></div>
					</div>
					<!-- chatlist -->
					<ul class="chatList" id="chatIfList">
						
					</ul>
					<button class="btn-top"><i class="fas fa-arrow-up">TOP</i></button>
				</main><!-- container end -->
			</section><!-- wrapper end -->
			<aside id="menu"> </aside>
		`);

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



  $.ajax({
    url: "/jsonTinc/memo/list",
    dataType: "json",
    async: false,
    success: function(data) {
	  console.log(data);
	  //$("#content *").remove();
	  $("#content").append(``);
	}

	});// ajax memo-list -end

	$.ajax({
		url: "/jsonTinc/memo/detail",
		dataType: "json",
		async: false,
		success: function(data) {
		  console.log(data);
		  //$("#content *").remove();
		  $("#content").append(``);
		}
	
		});// ajax memo-detail -end

});
