<%@ page language="java" contentType="text/html; charset=UTF-8"
pageEncoding="UTF-8"%> <%@ taglib prefix="c"
uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html lang="ko">
  <head>
    <title>메모와 채팅을 동시에, TINC</title>
    <meta charset="utf-8" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1, user-scalable=no"
    />
  </head>
  <body>
    <link rel="stylesheet" href="../../../resource/css/chatting/chat.css" />
    <section class="wrapper">
      <nav class="gnb">
        <a href="#" title="메모장 이동">MEMO</a>
      </nav>
      <!-- gnb end -->
      <main class="container">
        <div class="topBox">
          <div class="left">
            <button
              type="button"
              class="btn-back fas fa-chevron-left"
              onclick="location.href='list';"
            >
              뒤로가기
            </button>
          </div>
          <h1 class="title">${title}</h1>
          <div class="searchBox" style="display:none">
            <form action="">
              <input type="search" name="keyword" id="" />
              <button type="submit" class="fas fa-search">검색</button>
              <button class="btn-up fas fa-chevron-up">위로이동</button>
              <button class="btn-down fas fa-chevron-down">아래로이동</button>
            </form>
          </div>
          <div class="right">
            <button type="button" class="btn-srch fas fa-search">
              검색하기</button
            >&nbsp;&nbsp;
            <button type="button" class="btn-bar fas fa-bars">메뉴</button>
          </div>
        </div>
        <!-- chat-->
        <div class="chattingBox">
          <ul class="chatting">
            <!-- <li class="member">
						<figure>
							<img src="http://placehold.it/100x100" alt="">
						</figure>
						<div class="megBox">
							<div class="name">Jessica</div>
							<ul>
								<li>
									<div class="message">
										안녕
										<span class="date">13:50</span>							
									</div>
								</li>
							</ul>
							
						</div>
					</li>
					<li class="info"><div>2019년 12월 12일</div></li>
					<li class="info"><div><i class="fas fa-user-plus"></i> 회원님이 은선띠님을 초대했습니다</div></li>
					<li class="me">
						<div class="megBox">
							<ul>
								<li>
									<div class="message">
										ㅎㅇ
										<span class="date">14:50</span>
									</div>
								</li>
							</ul>							
						</div>
					</li>
					<li class="member">
						<figure>
							<img src="http://placehold.it/100x100" alt="">
						</figure>
						<div class="megBox">
							<div class="name">Jessica</div>
							<ul>
								<li>
									<div class="message imgBox">
										<img src="https://cafeptthumb-phinf.pstatic.net/20151221_149/ry2225_1450659220988LylbB_JPEG/51.jpg?type=w740" alt="">
										<span class="date">13:50</span>							
									</div>
								</li>
							</ul>							
						</div>
						<div class="btnBox">
							<button class="btn-share"><i class="fas fa-external-link-alt">공유하기</i></button>	
						</div>
					</li>
					<li class="member">
						<figure>
							<img src="http://placehold.it/100x100" alt="">
						</figure>
						<div class="megBox">
							<div class="name">Jessica</div>
							<ul>
								<li>
									<div class="message">
										별에도 봄이 패 그리워 사람들의 내 이름과, 계십니다. 별빛이 언덕 가득 가을로 계집애들의 내 까닭입니다 계 절이 소학교 차 노루, 듯합니다. 별이 멀듯이, 별 경, 지나가는 별 나는 무성 할 봅니다. 벌써 소녀들의 아무 하나 에 무덤 까닭입니다. 새겨지는 마리 아 별을 멀듯이, 밤이 이웃 있습니다. 사랑과 오면 불러 시와 지나가는 어머 니 노루, 봅니다. 흙으로 내일 않은 나 는...
										<button class="btn-all">전체보기<span>&rsaquo;</span></button>
										<span class="date">13:50</span>							
									</div>									
								</li>
							</ul>							
						</div>
						<div class="btnBox">
							<button class="btn-share"><i class="fas fa-external-link-alt">공유하기</i></button>	
						</div>
					</li>
					<li class="me">
						<div class="megBox">
							<ul>
								<li>
									<div class="message">
										ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ
										<span class="date">14:50</span>
									</div>
								</li>
							</ul>							
						</div>
					</li> -->
          </ul>
          <div class="popup alert popup-title">
            <div class="popup-wrap alert">
              <button type="button" class="btn-close fas fa-times"></button>
              <div class="context">
                <input
                  type="text"
                  placeholder="채팅방 이름을 설정해 주세요"
                  name="title"
                  id="chatTitle"
                />
              </div>
              <div class="btn-area">
                <button type="button" class="btn" onclick="rename()">
                  확인
                </button>
              </div>
            </div>
          </div>
          <div class="chatInput">
            <button class="btn-top"><i class="fas fa-arrow-up">TOP</i></button>
            <form action="">
              <button type="button" class="btn-add">
                <i class="fas fa-plus">채팅메뉴</i>
              </button>
              <input type="text" class="chatInputBox" id="sendChat" />
              <button
                type="button"
                id="send-meg"
                class="btn-send fas fa-paper-plane"
              >
                보내기
              </button>
            </form>
            <nav class="sendMenu" style="display:none">
              <ul>
                <li>
                  <form
                    action=""
                    id="chattingFileForm"
                    enctype="multipart/form-data"
                    method="POST"
                    data-id="${id}"
                    data-member="${member.id}"
                  >
                    <a href="">
                      <span><i class="far fa-folder-open"></i></span>
                      파일전송
                    </a>
                  </form>
                </li>
                <li>
                  <a href="">
                    <span><i class="far fa-file-alt"></i></span>
                    메모공유
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </main>
      <!-- container end -->
      <aside id="setting" class="setting"></aside>
      <aside id="subSetting" class="setting">
        <div class="topBox">
          <div class="left">
            <button
              type="button"
              class="btn-back fas fa-chevron-left"
              onclick="closeSubAside();"
            >
              뒤로가기
            </button>
          </div>
          <h1 class="title">설정</h1>
          <div class="right"></div>
        </div>
        <ul class="settingList">
          <!-- 채팅방설정 클릭시(뒷부분) -->
          <li class="cursor" onclick="popupOpen('.popup-title')">
            <span class="settingFont">채팅방 이름 설정</span>
          </li>
          <div class="line"></div>
          <li class="cursor" onclick="exeChat.clear()">
            <span class="settingFont">대화내용 모두 삭제</span>
          </li>
          <div class="line"></div>
          <li class="cursor" onclick="exit(0)">
            <span class="settingFont">채팅방 나가기</span>
          </li>
          <c:if test="${isOwner eq false}">
            <div class="line"></div>
            <li class="cursor" onclick="exit(1)"
              ><span class="settingFont">초대거부 후 채팅방나가기</span></li
            >
          </c:if>
        </ul>
      </aside>
    </section>
    <!-- wrapper end -->
    <div class="popup alert megDetail" id="megDetail">
      <div class="popup-wrap alert">
        <div class="popup-container">
          <div class="context"></div>
          <a href="#" class="btn-close fas fa-times">닫기</a>
        </div>
      </div>
    </div>
    <div class="popup friendSetting">
      <div class="popup-wrap">
        <div class="popup-container">
          <div class="profile">
            <figure>
              <!-- default -->
              <!-- <i class="fas fa-user"></i> -->
              <img src="http://placehold.it/100x100" alt="" />
            </figure>
            <ul>
              <li class="title">
                Jessica/dfdfdfdfdfddddddddddddddddddddddddddddd
              </li>
              <li>
                In a professional context it often happensIn a professional
                context it often happensIn a professional context it often
                happensIn a professional context it often happensIn a
                professional context it often happens
              </li>
            </ul>
          </div>
          <nav class="btn-area">
            <ul>
              <li>
                <a href="#" class="btn">1:1채팅</a>
                <!-- <a href="#" class="btn">친구추가</a> -->
                <a href="#" class="btn">차단</a>
              </li>
              <!--방장메뉴-->
              <!-- <li>
							<a href="#" class="btn">권한</a>
							<a href="#" class="btn">추방</a>
						</li> -->
            </ul>
          </nav>
          <!--방장 권한 메뉴-->
          <!-- <div class="head">
					<p class="title">권한 위임, 박탈하기</p>
					<nav class="btn-area">
						<ul>
							<li>
								<a href="#" class="btn">초대 권한</a>
								<a href="#" class="btn">방장 위임</a>
							</li>
						</ul>
					</nav>
					<a href="#" class="btn-back fas fa-chevron-left">뒤로가기</a>
					<a href="#" class="btn-close fas fa-times">닫기</a>
				</div> -->
          <!--// 방장 권한 메뉴-->
          <a href="#" class="btn-close fas fa-times">닫기</a>
        </div>
      </div>
    </div>
    <div class="mask"></div>
    <script
      src="https://code.jquery.com/jquery-3.4.1.min.js"
      integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo="
      crossorigin="anonymous"
    ></script>
    <script src="/resource/js/chatting/uiUtil.js"></script>
    <script src="/resource/js/chatting/chat.js"></script>
    <script src="/resource/js/chatting/UploadFiles.js"></script>
    <script>
      let socket = null;
      $(function() {
        socket = new WebSocket("ws://localhost:8080/chat"); //192.168.0.47
        socket.onopen = function() {
          console.log("connection success");
          exeChat.setConfig(
            "${id}",
            "${member.id}",
            "${member.nickName}",
            "${member.profileImg}",
            "${isOwner}"
          );
          exeChat.getChat();
          socket.send(exeChat.enterMeg());
        };
        socket.onclose = function() {
          console.log("connecton closes");
        };
        socket.onmessage = function(e) {
          //console.log(e.data);
          var obj = JSON.parse(e.data);
          chatParser.parseData(obj);
          exeChat.saveChat(e.data);
        };
        $("#send-meg").click(function() {
          socket.send(exeChat.textMeg());
          $("#sendChat").val("");
        });

        $(".chatInput .btn-add").click(function() {
          $(".sendMenu").toggle();
        });
        $(".topBox .btn-srch").click(function() {
          $(".topBox .title,.searchBox").toggle();
        });
        $(".topBox .btn-bar").click(function() {
          exeChat.getMenu();
        });
      });
      function viewAll(e) {
        var orgData = e.parentNode.dataset.content;
        $("#megDetail .context").html(orgData);
        popupOpen("#megDetail");
      }
      function exit(type) {
        switch (type) {
          case 0:
            socket.send(exeChat.exitMeg());
            location.href = exeChat.getDataUrl(2);
            break;

          case 1:
            socket.send(exeChat.exitMeg());
            location.href = exeChat.getDataUrl(3);
            break;
        }
      }
      function rename() {
        var input = $("#chatTitle");
        if (!input.val()) {
          alert("채팅방 이름을 입력해주세요.");
          input.focus();
          return;
        }
        exeChat.rename();
        popupClose();
      }
      //util
      function closeAside() {
        $("#setting").animate({ width: "0", opacity: 0 }, 500, function() {
          $(this)
            .hide()
            .html("");
        });
      }
      function openSubAside() {
        $("#subSetting")
          .show()
          .animate({ width: "100%", opacity: 1 }, 500);
      }
      function closeSubAside() {
        $("#subSetting").animate({ width: "0", opacity: 0 }, 500, function() {
          $(this).hide();
        });
      }
    </script>
  </body>
</html>
