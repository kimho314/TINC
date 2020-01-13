<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE HTML>
<html lang="ko">
<head>
<title>메모와 채팅을 동시에, TINC</title>
<meta charset="utf-8" >
<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no">
<link rel="stylesheet" href="../../../resource/css/common.css" >
<link rel="stylesheet" href="../../../resource/css/member/member.css" >

</head>
<body>
   <section class="wrapper"> 
      <nav class="gnb"> 
         <a href="#" title="메모장 이동">MEMO</a>
      </nav><!-- gnb end -->
      <main class="container">
         <form method="post">
	         <div class="menu">
	            <span class="left"><i class="fas fa-chevron-left"></i></span>
	            <span class="center">회원가입</span>
	            <span class="right"></span>
	         </div>
	         
	         <!-- <div class="join">
	         	 <input type="text" value=""  placeholder="아이디"/>               
	         	 <input type="text" value=""  placeholder="닉네임"/>
	             <input type="password" value=""  placeholder="비밀번호"/>
	             <input type="password" value=""  placeholder="비밀번호 확인"/>
	             <input type="text" value=""  placeholder="이름"/>
	             <input type="text" value=""  placeholder="전화번호"/>
	             <input type="text" value=""  placeholder="이메일"/>
	         </div> -->
	         <div class="join center">
	         	<div class="usable">
	         		<div><input type="text" value="" name="id" placeholder="아이디"/></div>
	         		
	         	</div>   
	         	<div class="unusable">
	         		<div><input type="text" value="" name="nickName" placeholder="닉네임"/></div>
	         		<div><p><b>필수 입력란입니다.</b></p></div>
				 </div>
				 <div>
	             <input type="password" id="pwd1-input" value="" name="password" placeholder="비밀번호"/>
				 <div>
		             <input type="password" id="pwd2-input" value="" name="password2" placeholder="비밀번호 확인"/>
		             <div><p><b id="duplicated-state"></b></p></div>
	             </div>
	             <input type="text" value="" name="phoneNum" placeholder="전화번호"/>
	             <input type="text" value="" name="email" placeholder="이메일"/>
	         </div>
	         </div>
	         
	         <div class="agree-btn">
	             <input type="button" class="left-btn" value="취소"/>
	             <input type="submit" class="right-btn" value="가입"/>
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