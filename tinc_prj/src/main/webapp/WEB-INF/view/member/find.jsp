<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE HTML>
<html lang="ko">
<head>
<title>메모와 채팅을 동시에, TINC</title>
<meta charset="utf-8" >
<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no">
<link rel="stylesheet" href="../../../resource/css/member/member.css?xxx" >
<link rel="stylesheet" href="../../../resource/css/common.css" >
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
<script src="/resource/js/member/find.js"></script>
</head>
<body>
   <section class="wrapper"> 
      <nav class="gnb"> 
         <a href="#" title="메모장 이동">MEMO</a>
      </nav><!-- gnb end -->
      <main class="container">
         <form action="find" method="post">
	         <div class="menu">
	         	<span class="left" onclick="location.href='login';"><i class="fas fa-chevron-left"></i></span>
	            <span class="center">아이디/비밀번호 찾기</span>
	            <span class="right"></span>
	         </div>
	             
	         <div class="find">
	         	<div>
                  <span>아이디 찾기</span>
               </div>
               <div class="text-center"> 
	               <input type="text" name="email"  value="" placeholder="이메일 입력"/>
	               <input type="button" class="find-btn" id="findId" value="아이디 찾기"/>
	            </div>
	            <div>
                  <span>비밀번호 찾기</span>
               </div>
               <div  class="text-center">
	               <input type="text" value="" name="id" placeholder="아이디 입력"/>
	               <input type="text" value="" name="email2" placeholder="이메일 입력"/>
	               <input type="button" class="find-btn" id="findPwd" value="비밀번호 찾기"/>
	            </div>
	         </div>
	         
	          <div class="agree-btn">
	         	<button type="button" class="left-btn" onclick="location.href='login';">취소</button>
	            <button type="button" class="right-btn" onclick="location.href='login';">로그인</button>
	         </div> 
	         <div id="anno" style="display:none">
				추가							
			</div>
         </form>      
      </main><!-- container end -->
   </section><!-- wrapper end -->
   <div class="popup alert">
		<div class="popup-wrap">
			<div class="popup-container">
				<div class="context">
					<p id="popup-text"></p>
				</div><!-- context -->
				 <div class="btn-area">
					<a href="" class="btn" onclick="closePopUp()">취소</a>
					<a href="" class="btn" onclick="closePopUp()">확인</a>
				</div> 
				<a href="" class="btn-close fas fa-times" onclick="closePopUp()">닫기</a>
			</div><!-- popup-container -->
		</div><!-- popup-wrap -->
	</div><!-- popup -->
	<div class="mask"></div>
</body>
</html>