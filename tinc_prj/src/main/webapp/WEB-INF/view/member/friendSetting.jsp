<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE HTML>
<html lang="ko">
<head>
<title>메모와 채팅을 동시에, TINC</title>
<meta charset="utf-8" >
<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no">
<link rel="stylesheet" href="../../../resource/css/common.css" >
<link rel="stylesheet" href="../../../resource/css/bottomButton.css">
<link rel="stylesheet" href="../../../resource/css/member/member.css?xssxx" >
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
<script src="/resource/js/member/friendSetting.js"></script>
</head>
<body>
   <section class="wrapper"> 
      <nav class="gnb"> 
         <a href="#" title="메모장 이동">MEMO</a>
      </nav><!-- gnb end -->
      <main class="container friend-setting">
         <form action="friendSetting" method="post">
         <div class="menu">
         	<span class="left" onclick="location.href='friendList'"><i class="fas fa-chevron-left"></i></span>
            <span class="center">친구 설정</span>
            <span class="right"></span>
         </div>
         
		 <div style="display: none" id="data">
         <input type="hidden" name="friendsId" value=""/>
         <input type="hidden" name="cmd" value=""/>
         </div>
         <p class="block-friend" id="block">차단한 친구</p>
         <hr>
          <c:forEach var="userIhaveblocked" items="${userIhaveblocked}">
         <div class="flex friend">
	         <div class="box">  
	         	<img src="../../../resource/images/${userIhaveblocked.profileImg}" alt="image1" class="profile">
	         </div>
	         <c:if test="${not empty userIhaveblocked.statusMsg}">
         	<div class="child-flex">
	         	<p><b>${userIhaveblocked.nickName}</b></p>
	         	<p>${userIhaveblocked.statusMsg}</p>
         	</div>
         	</c:if>
	         <c:if test="${empty userIhaveblocked.statusMsg}">
         	<div class="child-flex empty">
	         	<p><b>${userIhaveblocked.nickName}</b></p>
         	</div>
         	</c:if>
         	<div class="child-flex">
	         	<input type="button" class="find-btn" value="추가" name="userIhaveblocked_addBtn_${var.index }" data-id="${userIhaveblocked.id}" />
	         	<input type="button" class="find-btn" value="해제" name="userIhaveblocked_unBlockBtn_${var.index }" data-id="${userIhaveblocked.id}"/>
	         	
         	</div>
         </div>
         </c:forEach>
         <p class="add-friend">나를 추가한 친구</p>
         
         <hr>
         <c:forEach var="userWhoHaveAddedMe" items="${userWhoHaveAddedMe}">
         <div class="flex friend">
	         <div class="box">  
	         	<img src="../../../resource/images/${userWhoHaveAddedMe.profileImg}" alt="image1" class="profile">
	         </div>
	         <c:if test="${not empty userWhoHaveAddedMe.statusMsg}">
         	<div class="child-flex">
	         	<p><b>${userWhoHaveAddedMe.nickName}</b></p>
	         	<p>${userWhoHaveAddedMe.statusMsg}</p>
         	</div>
         	</c:if>
	         <c:if test="${empty userWhoHaveAddedMe.statusMsg}">
         	<div class="child-flex empty">
	         	<p><b>${userWhoHaveAddedMe.nickName}</b></p>
         	</div>
         	</c:if>
         	<div class="child-flex">
	         	<input type="button" class="find-btn" value="추가" name="userWhoHaveAddedMe_addBtn_${var.index }" data-id="${userWhoHaveAddedMe.id}"/>
	         	<input type="button" class="find-btn" value="차단" name="userWhoHaveAddedMe_blockBtn_${var.index }" data-id="${userWhoHaveAddedMe.id}"/>
         	</div>
         </div>
         </c:forEach>
         <div id="anno" style="display:none">
			추가							
		</div>
         
	     <div class="bottombutton">
			<button class="btn on">
				<!-- <i class="fas fa-user">친구목록</i>  -->
				<i class="fas fa-user-plus">친구추가</i>
			</button>
			<button class="btn">
				<i class="fas fa-comments">채팅목록</i> 
				<!-- <span class="btn-chatadd">
					<span class="hidden">채팅추가</span>
					<i class="fas fa-comments"></i>
					<i class="fas fa-plus"></i>
				</span> -->
			</button>
			<button class="btn">
				<i class="fas fa-cog">설정</i>
			</button>
		</div>
         </form>
         
      </main><!-- container end -->
   </section><!-- wrapper end -->
   <div class="popup alert">
      <div class="popup-wrap">
         <div class="context">
            <p>회원가입이 완료되었습니다.</p>
         </div>
         <div class="btn-area">
            <a href="#" class="btn">취소</a>
            <a href="#" class="btn">확인</a>
         </div>
         <a href="#" class="btn-close">닫기</a>
      </div>
   </div>
   <div class="mask"></div>
</body>
</html>