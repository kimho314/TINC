<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE HTML>
<html lang="ko">
<head>
<title>메모와 채팅을 동시에, TINC</title>
<meta charset="utf-8" >
<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no">
<link rel="stylesheet" href="../../../resource/css/common.css" >
<link rel="stylesheet" href="../../../resource/css/bottomButton.css">
<link rel="stylesheet" href="../../../resource/css/member/member.css?sxss" >
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
<script src="/resource/js/member/addFriend.js"></script>
</head>
<body>
   <section class="wrapper"> 
      <nav class="gnb"> 
         <a href="#" title="메모장 이동">MEMO</a>
      </nav><!-- gnb end -->
      <main class="container friend-add">
         <form action="addFriend" method="post" id="frm">
         <input type="hidden" name="id" value="user1">
            <div class="menu">
               <span class="left"></span>
               <span class="center">친구 추가</span>
               <span class="right" onclick="location.href='friendList'"><i class="fas fa-times"></i></span>
            </div>
            
            <input type="hidden" name="friendsId" id="friendsId" value=""/>
            <div class="inline" id="search">
               <input type="text" value="" id="searchword" name="searchword" placeholder="아이디로 검색하세요"/>
               <button type="button" class="fas fa-search"></button>
            </div>
           <div class="add-list" id="add-list">
            </div> 
            <div id="anno" style="display:none">
			추가							
		</div>
            
         <div class="bottombutton">
            <button type="button" class="btn on"  onclick="location.href='friendList'">
               <i class="fas fa-user">친구목록</i>
               <!-- <i class="fas fa-user-plus">친구추가</i> -->
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