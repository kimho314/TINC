var prevPage = "/member/friendList";
var title = "메모와 채팅을 동시에, TINC";
var url = $(location).attr("pathname");
var state = "";

$(function () {
	$(".hrefBtn").click(function (e) {
		// e.preventDefault();
		// console.log(e);
		if (e.target.name != null) {
			urlChange(e.target.name);
		} else {
			urlChange(url);
		}
		// console.log(e.target.value);
		// if (e.target.href != null) {
		//   urlChange(e.target.href);
		//   console.log("href" + e.target.href);
		// } else if (e.target.value != null) {
		//   urlChange(e.target.value);
		//   console.log("value" + e.target.value);
		// } else {
		//   urlChange(url);
		//   console.log(url);
		// }
		buttomBtn();
		pageLoad();
	});
});

function urlChange(path) {
	console.log("urlChange");
	prevPage = url;
	url = path;
	console.log(url);
	history.pushState(state, title, url);
}

function buttomBtn() {
	if (url == "/member/friendList" || url == "/member/friendSetting") {
		$("#bottomButton").append(`
	  <div class="bottombutton">
		  <button type="button" class="btn on bottombutton1" name="/member/addFriend">
			  <i class="fas fa-user-plus" onclick="$('.bottombutton1').trigger('click')">친구추가</i>
		  </button>
		  <button type="button" class="btn bottombutton2" name="/chat/list">
			  <i class="fas fa-comments" onclick="$('.bottombutton2').trigger('click')">채팅목록</i>
		  </button>
		  <button type="button" class="btn bottombutton3" name="/setting">
			  <i class="fas fa-cog" onclick="$('.bottombutton3').trigger('click')">설정</i>
		  </button>
	  </div>
	  `);
	} else if (url == "/member/addFriend") {
		$("#bottomButton").append(`
	  <div class="bottombutton">
		  <button type="button" class="btn on bottombutton1" name="/member/friendList">
		  <i class="fas fa-user" onclick="$('.bottombutton1').trigger('click')">친구목록</i>
		  </button>
		  <button type="button" class="btn bottombutton2" name="/chat/list">
			  <i class="fas fa-comments" onclick="$('.bottombutton2').trigger('click')">채팅목록</i>
		  </button>
		  <button type="button" class="btn bottombutton3" name="/setting">
			  <i class="fas fa-cog" onclick="$('.bottombutton3').trigger('click')">설정</i>
		  </button>
	  </div>
	  `);
	} else if (url.split("/")[1] == "setting") {
		$("#bottomButton").append(`
	  <div class="bottombutton">
		<button type="button" class="btn bottombutton1" name="/member/friendList">
		  <i class="fas fa-user" onclick="$('.bottombutton1').trigger('click')">친구목록</i>
		</button>
		<button type="button" class="btn bottombutton2" name="/chat/list">
			<i class="fas fa-comments" onclick="$('.bottombutton2').trigger('click')">채팅목록</i>
		</button>
		<button type="button" class="btn on bottombutton3" name="/setting">
		  <i class="fas fa-cog" onclick="$('.bottombutton3').trigger('click')">설정</i>
		</button>
	 </div>
	 `);
	} else if (url == "/chat/list") {
		$("#bottomButton").append(`
	  <div class="bottombutton">
		<button type="button" class="btn bottombutton1" name="/member/friendList">
		  <i class="fas fa-user" name="/member/friendList" onclick="$('.bottombutton1').trigger('click')">친구목록</i>
		</button>
		<button type="button" class="btn on" onclick="location.href='/chat/add'">
		  <span class="btn-chatadd" name="/chat/add" onclick="$('.bottombutton2').trigger('click')">
			 <span class="hidden" name="/chat/add">채팅추가</span>
			 <i class="fas fa-comments" name="/chat/add" onclick="$('.bottombutton2').trigger('click')"></i>
			 <i class="fas fa-plus" name="/chat/add" onclick="$('.bottombutton2').trigger('click')"></i>
		  </span>
		</button>
		<button type="button" class="btn bottombutton3" name="/setting">
		  <i class="fas fa-cog" name="/setting" onclick="$('.bottombutton3').trigger('click')">설정</i>
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
			success: function (data) {
				//console.log(data);
				$("#content *").remove();
				$("#content").append(
					`<link rel="stylesheet" href="/resource/css/setting/setting.css">
				  <script src="/resource/js/setting/set.js"></script>
				  <section class="wrapper settingMain">
				  <nav class="gnb">
					  <button type="button" name="/memo/list" class="hrefBtn" title="메모장 이동" onclick="urlChange('/memo/list');buttomBtn();pageLoad();">MEMO</button>
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
					<input type='file' accept='image/*' id='mpImg' style="display:none;"/>
					<div id="setMyImg"></div>
					</form>
  
						<div><input id="myId" class="changeMyprofile" type="text" value="${data[0].nickName}"/></div>
						<div><input id="myStatusMessage" class="changeMyprofile" type="text" placeholder="${data[0].statusMsg}" value=""/></div>
						<form id="setting-edit-form">
						  <div class="set-line">이메일
							<input id="settingEditEmail" class="changeMyprofile" type="text" placeholder="${data[0].email}" value=""/>
						  </div>
  
						  <div class="set-line">전화번호
							<input id="settingEditPhone" class="changeMyprofile" type="text" placeholder="${data[0].phoneNum}" value=""/>
						  </div>
  
						  <div class="set-line">
							<input type="button" name="/setting/change-pwd" id="setting-edit-pwd" value="비밀번호 변경" onclick="urlChange('/setting/change-pwd');buttomBtn();pageLoad();"/>
						  </div>
						  <div class="set-line">
							<input type="button" name="/setting/withdraw" id="setting-secession" value="탈퇴하기" onclick="urlChange('/setting/withdraw');buttomBtn();pageLoad();"/>
						  </div>
  
						  <div class="set-line">공개설정</div>
							<div class="set-line onOff-button">아이디
							  <div id="idOpenCheckBox" class="open-set-checkbox changeMyprofile"></div>
							</div>
  
							<div class="set-line onOff-button">전화번호
							  <div class="open-set-checkbox">
								  <div id="phoneNumOpenCheckBox" class="open-set-checkbox changeMyprofile"></div>
							  </div>
							</div>
  
							<div class="set-line onOff-button">이메일
							  <div class="open-set-checkbox">
								  <div id="emailOpenCheckBox" class="open-set-checkbox changeMyprofile"></div>
							  </div>
							</div>
  
						  <div class="set-line">알림설정</div>
							<div class="set-line onOff-button">채팅방 알림
							  <div class="open-set-checkbox">
								  <div id="chatAlarmCheckBox" class="open-set-checkbox changeMyprofile"></div>
							  </div>
							</div>
  
							<div class="set-line onOff-button">메모 알림
							  <div class="open-set-checkbox">
								  <div id="memoAlarmCheckBox" class="open-set-checkbox changeMyprofile"></div>
							  </div>
							</div>
  
						  <input type="button" name="/setting/logout" id="set-logout" value="로그아웃" onclick="urlChange('/setting/logout');buttomBtn();pageLoad();"/>
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
					  <label for="idCheckbox" class="set-check" onchange="updateSetting();"></label>`
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
			$(function () {
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
							  <input type="button" name="/setting" class="btn" id="cancle-edit-pwd" value="취소" onclick="urlChange('/setting');buttomBtn();pageLoad();"/>
							  <button class="btn hrefBtn" id="ok-edit-pwd" type="submit" name="/setting">확인</button>
						  </div>
						  <button type="button" name="/setting" class="btn-close fas fa-times" onclick="urlChange('/setting');buttomBtn();pageLoad();">닫기</button>
						  </form>
						  </div>
						  </div>
						  <div class="mask" style="display:block"></div>
				  `);
			});
			// onclick="$('#edit-click').trigger('click')"
			// <input value="/setting" id="edit-click" class="hrefBtn" type="hidden"/>
		} else if (url.split("/")[2] == "logout") {
			$(function () {
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
							  <input type="button" name="/setting" class="btn" id="logout-cancle" value="취소" onclick="urlChange('/setting');buttomBtn();pageLoad();"/>
							  <input type="button" name="/member/logout" class="btn" id="logout-ok" value="확인" onclick="location.href='/member/logout'"/>
						  </div>
						  <button type="button" name="/setting" class="btn-close fas fa-times" onclick="urlChange('/setting');buttomBtn();pageLoad();">닫기</button>
					  </div>
				  </div>
			  </div>
			  <div class="mask" style="display:block"></div>`);
			});
		} else if (url.split("/")[2] == "withdraw") {
			$(function () {
				url = "/setting/withdraw";
				state = "";
				history.pushState(state, title, url);
				$("#setPopUp").append(`
				  <script src="/resource/js/setting/set.js"></script>
				  <div class="popup" style="display:block">
				  <div class="popup-wrap">
						<form class="popup-container" id="withdrawA1">
						  <div class="context">
							<p>탈퇴 하시겠습니까?</p>
						  </div>
						  <div class="btn-area">
							<input type="button" name="/setting" class="btn" id="withdraw-cancle1" value="취소" onclick="urlChange('/setting');buttomBtn();pageLoad();"/>
							<div class="btn" id="withdraw-ok1">확인</div>
						  </div>
						 <button type="button" name="/setting" class="btn-close fas fa-times" onclick="urlChange('/setting');buttomBtn();pageLoad();">닫기</button>
						</form>
	  
						<form class="popup-container" id="withdrawA2" method="post">
						  <div class="context">
							<p>비밀번호를 한 번 더<br>입력해 주세요.</p>
							<div>
							  <input class="withdraw-pwd" name="checkPwd" type="text" value="" placeholder="비밀번호 입력"/>
							</div>
						  </div>
						  <div class="btn-area">
							<input type="button" name="/setting" id="withdraw-cancle2" class="btn" value="취소" onclick="urlChange('/setting');buttomBtn();pageLoad();"/>
							<input type="submit" class="btn" id="withdraw-ok2" value="확인"/>
						  </div>
						  <button type="button" name="/setting" class="btn-close fas fa-times" onclick="urlChange('/setting');buttomBtn();pageLoad();">닫기</button>
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
			success: function (data) {
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
						  <button type="button" name="/memo/list" class="hrefBtn" title="메모장 이동" onclick="urlChange('/memo/list');buttomBtn();pageLoad();">MEMO</button>
					  </nav>
					  <main class="container hasbtn">
						  <div class="topBox">
							  <div class="left"></div>
							  <h1 class="title">채팅</h1>
							  <div class="right"></div>
						  </div>
						  <ul class="chatList" id="chatIfList">
  
						  </ul>
						  <button type="button" class="btn-top"><i class="fas fa-arrow-up">TOP</i></button>
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
			success: function (data) {
				$("#content *").remove();
				$("#content").append(`
			  <link rel="stylesheet" href="/resource/css/member/member.css?xxxxxx" >
			  <link rel="stylesheet" href="/resource/css/chatting/chat.css?x">
			  <script src="/resource/js/chatting/uiUtil.js"></script>
			  <script src="/resource/js/member/friendList.js"></script>
			  <section class="wrapper">
			  <nav class="gnb">
				  <button type="button" name="/memo/list" class="hrefBtn" title="메모장 이동" onclick="urlChange('/memo/list');buttomBtn();pageLoad();">MEMO</button>
			  </nav>
			  <main class="container friend-list">
				  <form>
				  <div class="menu">
					  <span class="left"></span>
					  <span class="center">친구</span>
					  <button type="button" id="friendSettingBtn" class="right hrefBtn" name="/member/friendSetting" onclick="urlChange('/member/friendSetting');buttomBtn();pageLoad();"><i class="fas fa-bars" onclick="$('#friendSettingBtn').trigger('click')"></i></a>
				  </div>
				  <div class="friend">
					  <div class="box inline" id="ajMyProfileImg">
						  
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
							  <!-- 여기 a태그들은 페이지 안에서 처리하는거라 자바스크립트 따로있거나, 만들어야되는부분들 -->
								  <div id="chatting" class="btn">1:1채팅</div>
								  <div id="block" class="btn">차단</div>
							  </li>
						  </ul>
					  </nav>
					  <button type="button" name="#" class="btn-close fas fa-times hrefBtn" onclick="popupClose()">닫기</button>
				  </div>
			  </div>
		  </div>
		  <div class="mask"></div>
			  `);

				if (data[0].profileImg != "") {
					$("#ajMyProfileImg").append(`
				  <img src="/resource/images/${data[0].profileImg}" alt="image" value="/setting" class="profile" data-nickname="${data[0].nickName}" data-statusmsg="${data[0].statusMsg}" data-img="${data[0].profileImg}" >
				  `);
				} else {
					$("#ajMyProfileImg").append(`
				  <img src="/resource/images/profile.jpg" alt="image" value="/setting" class="profile" data-nickname="${data[0].nickName}" data-statusmsg="${data[0].statusMsg}" data-img="${data[0].profileImg}" >
				  `);
				}

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
						 <div class="inline" id="ajFL${data[1][i].id}" onclick="$('#img_${i}').trigger('click')"></div>
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
	} else if (url == "/memo/list") {
		createCookie("prevUrl", prevPage);
		$.ajax({
			url: "/jsonTinc/memo/list",
			dataType: "json",
			async: false,
			success: function (data) {
				//createCookie("prevUrl", prevPage);
				//console.log(data);
				$("#bottomButton *").remove();
				$("#bottomButton").css({ dlsplay: "none" });
				$("#content *").remove();
				$("#content").css({ height: "100%" });
				$("#content").append(`
			  <link rel="stylesheet" href="/resource/css/memo/memo-list.css"/>
			  <script src="/resource/js/memo/memo-list.js"></script>
			  <template id="memo-card-template">
							 <div class="memo-card">
								  <div class="memo-card-title">
										<input type="text" name="memo-card-title" value=""/>
								<input type="hidden" name="memo-card-id" value=""/>
								  </div>
								  <div class="memo-card-content">
										<textarea readonly class="memo-card-content-textarea" name="memo-card-content-textarea"></textarea>
								  </div>
							 </div>
						</template>
			  <section class="wrapper">
				<main class="memo-list-container" id="ML">
				</main>
				<div class="memo-list-bottom-wrapper">
					<input type="button" name="memo-list" value="닫기" onclick="location.replace(prevPage)" />
				</div>
			</section>
			  `);

				for (let j = 0; j < data[0].length; j++) {
					$("#ML").append(`
				<div class="memo-list-wrapper">
				<div class="memo-list-title">
					<div></div>
					<input readonly type="text" name="memo-list-title" value="${data[0][j].title}"/>
					<input type="hidden" id="private-memo-list-id" name="private-memo-list-id" value="${data[0][j].id}"/>
				</div>

				<div class="memo-card-list-wrapper" id="groMemoList"></div>

				<div class="memo-list-add-wrapper">
					<div>
						<i class="fas fa-plus"></i><input type="button" name="memo-list-add-button" value="add"/>
					</div>
				</div>
			</div>`);
					for (let i = 0; i < data[2].length; i++) {
						if (
							data[2][i].groupListId == null &&
							data[0][0].id == data[2][i].privateListId
						) {
							$("#groMemoList").append(`
						<div class="memo-card">
						<div class="memo-card-title">
							<input readonly type="text" name="memo-card-title" value="${data[2][i].title}"/>
							<input type="hidden" name="memo-card-id" value="${data[2][i].id}"/>
						</div>
						<div class="memo-card-content">
							<textarea readonly class="memo-card-content-textarea" name="memo-card-content-textarea">${data[2][i].content}</textarea>
						</div>
					</div>
					`);
						}
					}
				}

				for (let j = 0; j < data[1].length; j++) {
					$("#ML").append(`
				<div class="memo-list-wrapper">
				<div class="memo-list-title">
					<div></div>
					<input readonly type="text" name="memo-list-title" value="${data[1][j].title}"/>
					<input type="hidden" id="group-memo-list-id" name="group-memo-list-id" value="${data[1][j].id}"/>
				</div>

				<div class="memo-card-list-wrapper" id="groMemoList"></div>

				<div class="memo-list-add-wrapper">
					<div>
						<i class="fas fa-plus"></i><input type="button" name="memo-list-add-button" value="add"/>
					</div>
				</div>
			</div>`);
					for (let i = 0; i < data[2].length; i++) {
						if (
							data[2][i].privateListId == null &&
							data[0][0].id == data[2][i].groupListId
						) {
							$("#groMemoList").append(`
					  <div class="memo-card">
					  <div class="memo-card-title">
						  <input readonly type="text" name="memo-card-title" value="${data[2][i].title}"/>
						  <input type="hidden" name="memo-card-id" value="${data[2][i].id}"/>
					  </div>
					  <div class="memo-card-content">
						  <textarea readonly class="memo-card-content-textarea" name="memo-card-content-textarea">${data[2][i].content}</textarea>
					  </div>
				  </div>
				  `);
						}
					}
				}
			}
		});
	} else if (url == "/member/friendSetting") {
		$.ajax({
			url: "/jsonTinc/member/friendSetting",
			dataType: "json",
			async: false,
			success: function (data) {
				console.log(data);
				$("#content *").remove();
				$("#content").append(`
				<link rel="stylesheet" href="/resource/css/member/member.css?sxss" >
				<script src="/resource/js/member/friendSetting.js"></script>
				<section class="wrapper">
				<nav class="gnb">
					<button type="button" name="/memo/list" class="hrefBtn" title="메모장 이동" onclick="urlChange('/memo/list');buttomBtn();pageLoad();">MEMO</button>
				</nav>
				<main class="container friend-setting">
					<form action="friendSetting" method="post">
					<div class="menu">
						<button type="button" id="friendSettingBack" class="left hrefBtn" name="/member/friendList" onclick="urlChange('/member/friendList');buttomBtn();pageLoad();"><i class="fas fa-chevron-left" onclick="$('#friendSettingBack').trigger('click')"></i></button>
						<span class="center">친구 설정</span>
						<span class="right"></span>
					</div>
				<div style="display: none" id="data">
					<input type="hidden" name="friendsId" value=""/>
					<input type="hidden" name="cmd" value=""/>
					</div>
					<p class="block-friend" id="block">차단한 친구</p>
					<hr>
				<div id="blockedFriend"></div>
	  
					<p class="add-friend">나를 추가한 친구</p>
					<hr>
	  
					<div id="addedMeFriend"></div>
	  
					<div id="anno" style="display:none">
				  추가
			  </div>
					</form>
	  
				</main>
			</section>
				`);

				for (let i = 0; i < data[0].length; i++) {
					$("#blockedFriend").append(`
				  <div class="flex friend">
				  <div class="box">
					 <img src="/resource/images/${data[0][i].profileImg}" alt="image1" class="profile">
				  </div>
	  
				  <div class="child-flex" id="bFriendStatusMsg${data[0][i].id}"></div>
	  
				  <div class="child-flex">
					 <input type="button" class="find-btn" value="추가" name="userIhaveblocked_addBtn_${i}" data-id="${data[0][i].id}" />
					 <input type="button" class="find-btn" value="해제" name="userIhaveblocked_unBlockBtn_${i}" data-id="${data[0][i].id}"/>
				  </div>
				</div>
				  `);
					if (data[0][i].statusMsg == "") {
						$(`#bFriendStatusMsg${data[0][i].id}`).append(`
					 <div class="child-flex empty">
					 <p><b>${data[0][i].nickName}</b></p>
				  </div>
					 `);
					} else {
						$(`#bFriendStatusMsg${data[0][i].id}`).append(`
					 <div class="child-flex">
					 <p><b>${data[0][i].nickName}</b></p>
					 <p>${data[0][i].statusMsg}</p>
				  </div>
					 `);
					}
				}

				for (let j = 0; j < data[1].length; j++) {
					$("#addedMeFriend").append(`
					 <div class="flex friend">
				  <div class="box">
					 <img src="/resource/images/${data[1][j].profileImg}" alt="image1" class="profile">
				  </div>
	  
				  <div class="child-flex" id="aFriendStatusMsg${data[1][j].id}"></div>
	  
				  <div class="child-flex">
					 <input type="button" class="find-btn" value="추가" name="userWhoHaveAddedMe_addBtn_${j}" data-id="${data[1][j].id}"/>
					 <input type="button" class="find-btn" value="차단" name="userWhoHaveAddedMe_blockBtn_${j}" data-id="${data[1][j].id}"/>
				  </div>
				</div>`);

					if (data[1][j].statusMsg == "") {
						$(`#aFriendStatusMsg${data[1][j].id}`).append(`
					 <div class="child-flex empty">
					 <p><b>${data[1][j].nickName}</b></p>
				  </div>
					 `);
					} else {
						$(`#aFriendStatusMsg${data[1][j].id}`).append(`
					 <div class="child-flex">
					 <p><b>${data[1][j].nickName}</b></p>
					 <p>${data[1][j].statusMsg}</p>
				  </div>
					 `);
					}
				}
			}
		});
	} else if (url == "/member/addFriend") {
		$(function () {
			url = "/member/addFriend";
			state = "";
			history.pushState(state, title, url);
			$("#content *").remove();
			$("#content").append(`
			 <link rel="stylesheet" href="/resource/css/member/member.css" >
			 <script src="/resource/js/member/addFriend.js"></script>
				<section class="wrapper">
				<nav class="gnb">
					<button type="button" name="/memo/list" class="hrefBtn" title="메모장 이동" onclick="urlChange('/memo/list');buttomBtn();pageLoad();">MEMO</button>
				</nav>
				<main class="container friend-add">
					<form action="addFriend" method="post" id="frm">
					<input type="hidden" name="id" value="user1"/>
						<div class="menu">
							<span class="left"></span>
							<span class="center">친구 추가</span>
							<span class="right"><!-- <i class="fas fa-times"></i> --></span>
						</div>
	
						<input type="hidden" name="friendsId" id="friendsId" value=""/>
						<div class="inline" id="search">
							<input type="text" value="" id="searchword" name="searchword" placeholder="아이디로 검색하세요"/>
							<button type="button" type="button" class="fas fa-search"></button>
						</div>
					  <div class="add-list" id="add-list">
						</div>
						<div id="anno" style="display:none">
					추가
				</div>
					</form>
				</main>
			</section>
				`);
		});
	} else if (url == "/chat/add") {
		$("#content *").remove();
		$("#content").append(`
	  <link rel="stylesheet" href="/resource/css/chatting/chat.css" />
	  <section class="wrapper">
		  <nav class="gnb">
			  <button type="button" name="/memo/list" class="hrefBtn" title="메모장 이동" onclick="urlChange('/memo/list');buttomBtn();pageLoad();">MEMO</button>
		  </nav>
		  <main class="container">
			  <div class="topBox">
				  <div class="left">
					  <button type="button" class="btn-back fas fa-chevron-left hrefBtn" name="/chat/list" onclick="urlChange('/chat/list');buttomBtn();pageLoad();">뒤로가기</button>
				  </div>
				  <h1 class="title">채팅 추가</h1>
				  <div class="right"></div>
			  </div>
			  <form action="add" method="post" name="frm">
				<div class="search add">
					<input type="text" placeholder="검색" name="userIdInput" id="searchKey"/>
					<span class="searchSpan">
						<label><span id="cnt">0</span> 명</label>
						<button type="button" type="button" onclick="listCheck()">완료</button>
					</span>
					<input type="hidden" name="memberIds" />
				</div>
			  <ul class="chatList add"></ul>
			  <div class="popup alert" id="add">
				  <div class="popup-wrap alert">
					  <button  type="button" class="btn-close fas fa-times"></button>
					  <div class="context">
						  <input type="text" placeholder="채팅방 이름을 설정해 주세요" name="title" id="title"/>
					  </div>
					  <div class="btn-area">
						  <button type="button" class="btn" onclick="frmCheck()">확인</button>
					  </div>
				  </div>
			  </div>
			  </form>
			  <button type="button" class="btn-top"><i class="fas fa-arrow-up">TOP</i></button>
		  </main>
	  </section>
	  <div class="mask"></div>
	  <script>
		let pageMode="addChat";
	  </script>
	  <script src="https://code.jquery.com/jquery-3.4.1.min.js"
 integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo="
 crossorigin="anonymous"></script>
 <script src="/resource/js/chatting/uiUtil.js?version=1"></script>
 <script src="/resource/js/chatting/chatInvite.js?version=1"></script>
		 `);
	}
}

$(document).ready(function () {
	console.log($(location).attr("pathname"));
	console.log(url.split("/")[1]);



	$(function () {
		$("#bottomButton").click(function (e) {
			$("#bottomButton *").remove();
			if (e.target.name != null) {
				urlChange(e.target.name);
			} else {
				urlChange(url);
			}
			buttomBtn();
			pageLoad();
		});
	});

	urlChange(url);
	buttomBtn();
	pageLoad();
});
