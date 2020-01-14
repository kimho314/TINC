<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE HTML>
<html lang="ko">
<head>
<title>메모와 채팅을 동시에, TINC</title>
<meta charset="utf-8" >
<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no">
<link rel="stylesheet" href="../../../resource/css/member/member.css" >
<link rel="stylesheet" href="../../../resource/css/common.css" >
</head>
<body>
   <section class="wrapper"> 
      <nav class="gnb"> 
         <a href="#" title="메모장 이동">MEMO</a>
      </nav><!-- gnb end -->
      <main class="container">
         <form action="find" method="post" onsubmit="openPwdPopUp()">
	         <div class="menu">
	         	<span class="left"><i class="fas fa-chevron-left"></i></span>
	            <span class="center">아이디/비밀번호 찾기</span>
	            <span class="right"></span>
	         </div>
	             
	         <div class="find">
	         	<div>
                  <span>아이디 찾기</span>
               </div>
               <div class="text-center"> 
	               <input type="text" name="email" value="" placeholder="이메일 입력"/>
	               <input type="button" class="find-btn" value="아이디 찾기" onClick="openPopUp()"/>
	            </div>
	            <div>
                  <span>비밀번호 찾기</span>
               </div>
               <div  class="text-center">
	               <input type="text" value="" name="id" placeholder="아이디 입력"/>
	               <input type="text" value="" name="email" placeholder="이메일 입력"/>
	               <input type="submit" class="find-btn" value="비밀번호 찾기"/>
	            </div>
	         </div>
	         
	         <div class="agree-btn">
	         	<input type="button" class="left-btn" value="취소"/>
	            <input type="button" class="right-btn" value="로그인"/>
	         </div>
         </form>      
      </main><!-- container end -->
   </section><!-- wrapper end -->
   <div class="popup alert">
		<div class="popup-wrap">
			<div class="popup-container">
				<div class="context">
				 <c:if test="${null ne user.id}">
					<p>회원님의 아이디는 <b>${user.id}</b>입니다.</p>
					</c:if>
					<c:if test="${null eq user.id}">
					<p>아이디를 찾을 수 없습니다</p>
					</c:if> 
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
	
	<div class="popup alert">
		<div class="popup-wrap">
			<div class="popup-container">
				<div class="context">
				
					<p>이메일이 전송됐습니다.</p>
					
					
					
					
				</div><!-- context -->
				<div class="btn-area">
					<a href="" class="btn" onclick="closePwdPopUp()">취소</a>
					<a href="" class="btn" onclick="closePwdPopUp()">확인</a>
				</div>
				<a href="" class="btn-close fas fa-times" onclick="closePwdPopUp()">닫기</a>
			</div><!-- popup-container -->
		</div><!-- popup-wrap -->
	</div><!-- popup -->
	<div class="mask"></div>

   <script>
   function openPopUp() {
       document.getElementsByClassName("popup alert")[0].style.display = "block";
       document.getElementsByClassName("mask")[0].style.display = "block";
       
   }

   function closePopUp() {
       document.getElementsByClassName("popup alert")[0].style.display = "none";
       document.getElementsByClassName("mask")[0].style.display = "none";
     
   }
   function openPwdPopUp() {
       document.getElementsByClassName("popup alert")[1].style.display = "block";
       document.getElementsByClassName("mask")[1].style.display = "block";
       
   }

   function closePwdPopUp() {
       document.getElementsByClassName("popup alert")[1].style.display = "none";
       document.getElementsByClassName("mask")[1].style.display = "none";
     
   }
   </script>
</body>
</html>