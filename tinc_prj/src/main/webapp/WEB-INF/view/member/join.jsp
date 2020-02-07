<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE HTML>
<html lang="ko">
<head>
<title>메모와 채팅을 동시에, TINC</title>
<meta charset="utf-8" >
<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no">
<link rel="stylesheet" href="../../../resource/css/common.css" >
<link rel="stylesheet" href="../../../resource/css/member/member.css?xsxssssxsx" >
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
<!-- <script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/prototype/1.6.0.3/prototype.js"></script>  -->
<script src="/resource/js/member/join.js"></script>

</head>
<body>
   <section class="wrapper"> 
      <nav class="gnb"> 
         <a href="#" title="메모장 이동">MEMO</a>
      </nav><!-- gnb end -->
      <main class="container">
         <form method="post" id="frm">
            <div class="menu">
               <span class="left" onclick="location.href='agree'"><i class="fas fa-chevron-left" ></i></span>
               <span class="center">회원가입</span>
               <span class="right"></span>
            </div>
           
            <div class="join center">
	         <div class="usable">
	            <div><input type="text" id="id-input" value="" name="id" placeholder="아이디"/></div>
	            <div><p><b id="validate-id"></b></p></div>
	         </div>   
	         <div class="usable">
	            <div><input type="text" value="" id="nickName-input" name="nickName" placeholder="닉네임"/></div>
	            <div><p><b id="validate-nickName"></b></p></div>
	         </div>
	         <div class="usable">
	            <input type="password" id="pwd1-input" value="" name="password" placeholder="비밀번호"/>
	            <div><p><b id="validate-pwd1"></b></p></div>
	         </div>
	         <div class="usable">
	            <input type="password" id="pwd2-input" value="" name="password2" placeholder="비밀번호 확인"/>
	            <div><p><b id="validate-pwd2"></b></p></div>
	         </div>
	         <div class="usable">
	            <input type="tel" id="phoneNum-input" value="" name="phoneNum" placeholder="전화번호"/>
	            <div><p><b id="validate-phone"></b></p></div>
	         </div>
	         <div class="usable"> 
	            <input type="text" value="" id="email-input" name="email" placeholder="이메일"/>
	            <div><p><b id="validate-email"></b></p></div>
	         </div>
         </div>
            
            <div class="agree-btn">
                <button type="button" class="left-btn"  onclick="location.href='agree'">취소</button>
                <input type="submit" id="submit" class="right-btn" value="가입"/>
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