	$(function(e){
	   $("#findId").on('click',function(e){ 
		   var email = $("input[name=email]").val();
		   if(email == ""){
			   e.preventDefault();
			   $(function(){infobox('이메일을 입력하세요.');});
		   }else{
		   	   $.post("/member/find", {email:email}, function(data){ 
				   if(data.length==0){
					   $(function(){infobox('존재하지 않는 회원입니다.');});
				   }else{
				   	    openPopUp();
				   	    $('#popup-text').html("회원님의 아이디는 <b>"+data+"</b>입니다");
				   }
		   	   },"json");
		   }
	   });
   });
   
   $(function(e){
	   $("#findPwd").on('click',function(e){ 
		   var id =  $("input[name=id]").val();
		   var email = $("input[name=email2]").val();
		   if(id=="" || email == ""){
			   e.preventDefault();
			   $(function(){infobox('아이디와 이메일을 입력하세요.');});
		   }else{
		   	   $.post("/member/find", {id:id, email:email}, function(data){ 
		   		   console.log(data);
				   if(data.length==0){
					   $(function(){infobox('존재하지 않는 회원입니다.');});
				   }else{
					   $(function(){infobox('이메일이 전송되었습니다.');});
				   }
		   	   },"json");
		   	   
		   }
	   });
   });
   
   function openPopUp() {
       document.getElementsByClassName("popup alert")[0].style.display = "block";
       document.getElementsByClassName("mask")[0].style.display = "block";
       
   }

   function closePopUp() {
       document.getElementsByClassName("popup alert")[0].style.display = "none";
       document.getElementsByClassName("mask")[0].style.display = "none";
     
   }
   
   function infobox(txt){
		$("#anno").html(txt);
		$("#anno").fadeIn().delay(2000).fadeOut();
	}