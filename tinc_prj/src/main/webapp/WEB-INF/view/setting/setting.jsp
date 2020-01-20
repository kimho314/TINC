<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE HTML>
<html lang="ko">
<head>
<title>메모와 채팅을 동시에, TINC</title>
<meta charset="utf-8" >
<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no">
<link rel="stylesheet" href="/resource/css/setting/setting.css" >
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
<script src="/resource/js/setting/setting.js"></script>
</head>
<body>
	<section class="wrapper"> 
		<nav class="gnb"> 
			<a title="메모장 이동">MEMO</a>
		</nav><!-- gnb end -->
		<main class="container">

			<div id="setting-head">
				<span class="fas fa-chevron-left" id="return"></span>
				<span id="setting-title">설정</span>
				<span class="fas fa-bars" id="setting-menu"></span>
			</div>

			<div id ="myImage"></div>
			<div><input id="myId" type="text" value="정윤띠"></div>
			<div><input id="myStatusMessage" type="text" placeholder="상태메시지이이이이이ㅣ" value=""></div>
			<form id="setting-edit-form">
				<div class="set-line">이메일&nbsp;&nbsp;&nbsp;
					<input id="setting-edit-email" type="text" placeholder="yupddok@gmail.com" value="">
				</div>

				<div class="set-line">전화번호
					<input id="setting-edit-phone" type="text" placeholder="010-0101-0101" value="">
				</div>

				<div>
					<button class="set-line" id="setting-edit-pwd">비밀번호 변경</button>
				</div>
				<div>
					<button class="set-line" id="setting-secession">탈퇴하기</button>
				</div>

				<div class="set-line">공개설정</div>
					<div class="set-line onOff-button">아이디
						<div class="open-set-checkbox">
							<input type="checkbox" id="id-checkbox" class="set-checkbox" checked>
							<label for="id-checkbox" class="set-check"></label>
						</div>
					</div>

					<div class="set-line onOff-button">전화번호
						<div class="open-set-checkbox">
							<input type="checkbox" id="phone-checkbox" class="set-checkbox">
							<label for="phone-checkbox" class="set-check"></label>
						</div>
					</div>

					<div class="set-line onOff-button">이메일
						<div class="open-set-checkbox">
							<input type="checkbox" id="email-checkbox" class="set-checkbox">
							<label for="email-checkbox" class="set-check"></label>
						</div>
					</div>

				<div class="set-line">알림설정</div>
					<div class="set-line onOff-button">채팅방 알림
						<div class="open-set-checkbox">
							<input type="checkbox" id="chatting-checkbox" class="set-checkbox" checked>
							<label for="chatting-checkbox" class="set-check"></label>
						</div>	
					</div>

					<div class="set-line onOff-button">메모 알림
						<div class="open-set-checkbox">
							<input type="checkbox" id="memo-checkbox" class="set-checkbox" checked>
							<label for="memo-checkbox" class="set-check"></label>
						</div>
					</div>
					
				<div id="set-logout"><a href="logout.html" id="logout-color">로그아웃</a></div>
				<div></div>
			</form>
		</main>
	</section>
</body>
</html>