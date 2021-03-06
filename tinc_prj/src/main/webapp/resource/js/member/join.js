	window.addEventListener("load",function(){
    	$("#id-input").blur(function() {
    		var id = $('#id-input').val();
    		var idJ = /^[a-z0-9]{4,12}$/;
    		$.ajax({
    			url : '/member/idCheck?id='+ id,
    			type : 'get',
    			dataType : "json",
    			success : function(data) {
    				console.log("true = 중복o / false = 중복x : "+ data);							
    				if (data == true) {
    					// 1 : 아이디가 중복되는 문구
    					$("#validate-id").text("사용중인 아이디입니다");
    					$("#validate-id").css("color", "#f0679e");
    					$("#id-input").css("border", "0.0625rem solid #f0679e");
    					$("#submit").attr("disabled", true);
    				}else if (data == false && id != "" && idJ.test(id) == true){
    					$('#validate-id').text("");
    					$('#validate-id').css('color', '#7367f0');
    					$("#id-input").css("border", "0.0625rem solid #7367f0");
    					$("#submit").attr("disabled", false);
    					console.log("reg"+idJ.test(id));
    				}else {
    					if(idJ.test(id) == false){
    						// 0 : 아이디 길이 / 문자열 검사
    						$("#validate-id").text("영문 + 숫자 4~12자로 입력하세요");
    						$("#validate-id").css("color", "#f0679e");
    						$("#id-input").css("border", "0.0625rem solid #f0679e");
    						$("#submit").attr("disabled", true);
    						console.log("reg"+idJ.test(id));
    					} else if(id == ""){
    						$('#validate-id').text('아이디를 입력해주세요 :)');
    						$('#validate-id').css('color', '#f0679e');
    						$("#id-input").css("border", "0.0625rem solid #f0679e");
    						$("#submit").attr("disabled", true);				
    						
    					}
    				}
    			}, error : function() {
    				console.log("실패");
    			}
    		});
    	});
       var div = document.querySelector(".join");
       
       var idInput = document.querySelector("#id-input");
       var pwd1Input = document.querySelector("#pwd1-input");
       var pwd2Input = document.querySelector("#pwd2-input");
       var nickNameInput = document.querySelector("#nickName-input");
       var emailInput = document.querySelector("#email-input");
       var phoneNumInput = document.querySelector("#phoneNum-input");
       
       var validateId = document.querySelector("#validate-id");
       var validatePwd1 = document.querySelector("#validate-pwd1");
       var validatePwd2 = document.querySelector("#validate-pwd2");
       var validateNickName = document.querySelector("#validate-nickName");
       var validateEmail = document.querySelector("#validate-email");
       var validatePhone = document.querySelector("#validate-phone");

       var regExpNickName = /^[\w\Wㄱ-ㅎㅏ-ㅣ가-힣]{2,10}$/;
       var regExpPwd = /(?=.*\d{1,50})(?=.*[~`!@#$%\^&*()-+=]{1,50})(?=.*[a-zA-Z]{2,50}).{8,50}$/;
       var regExpPhone = /^01(?:0|1|[6-9])-(?:\d{3}|\d{4})-\d{4}$/;
       var regExpEmail = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
       var regExpEmail = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
       
       nickNameInput.oninput = function(e){
    	   if(!regExpNickName.exec(nickNameInput.value)){
    		   nickNameInput.style.border =  "0.0625rem solid #f0679e";
    		   validateNickName.style.color = "#f0679e";
    		   validateNickName.innerText = "2~10자의 한글,영문,숫자로 입력하세요.";
           }else{ 
        	   nickNameInput.style.border =  "0.0625rem solid #7367f0";
        	   validateNickName.style.color = "#7367f0";
        	   validateNickName.innerText = "";
           }
               
       };
       
       pwd1Input.oninput = function(e){
           if(!regExpPwd.exec(pwd1Input.value)){
               pwd1Input.style.border =  "0.0625rem solid #f0679e";
               validatePwd1.style.color = "#f0679e";
               validatePwd1.innerText = "비밀번호가 유효하지 않습니다.";
           }else{ 
               pwd1Input.style.border =  "0.0625rem solid #7367f0";
               validatePwd1.style.color = "#7367f0";
               validatePwd1.innerText = "";
           }
               
       };

       pwd2Input.oninput = function(e){
            if(pwd1Input.value != pwd2Input.value){
                pwd2Input.style.border =  "0.0625rem solid #f0679e";
                validatePwd2.style.color = "#f0679e";
                validatePwd2.innerText = "비밀번호가 일치하지 않습니다.";
            }else{ 
                pwd2Input.style.border =  "0.0625rem solid #7367f0";
                validatePwd2.style.color = "#7367f0";
                validatePwd2.innerText = "";
            }
                
        };

       emailInput.oninput = function(){
           if(!regExpEmail.exec(emailInput.value)) {
               emailInput.style.border  =  "0.0625rem solid #f0679e";
               validateEmail.style.color = "#f0679e";
               validateEmail.innerText = "적합하지 않은 이메일 형식입니다."
           }else{
               emailInput.style.border  =  "0.0625rem solid #7367f0";
               validateEmail.style.color = "#7367f0";
               validateEmail.innerText = "";
           }
        };

        phoneNumInput.oninput = function(){
           if(!regExpPhone.exec(phoneNumInput.value)) {
               phoneNumInput.style.border  =  "0.0625rem solid #f0679e";
               validatePhone.style.color = "#f0679e";
               validatePhone.innerText = "적합하지 않은 전화번호 형식입니다."
           }else{
               phoneNumInput.style.border  =  "0.0625rem solid #7367f0";
               validatePhone.style.color = "#7367f0";
               validatePhone.innerText = "";
           }
        };
       
        var idInput = document.querySelector("#id-input");
        var pwd1Input = document.querySelector("#pwd1-input");
        var pwd2Input = document.querySelector("#pwd2-input");
        var nickNameInput = document.querySelector("#nickName-input");
        var emailInput = document.querySelector("#email-input");
        var phoneNumInput = document.querySelector("#phoneNum-input");
        
        var validateId = document.querySelector("#validate-id");
        var validatePwd1 = document.querySelector("#validate-pwd1");
        var validatePwd2 = document.querySelector("#validate-pwd2");
        var validateNickName = document.querySelector("#validate-nickName");
        var validateEmail = document.querySelector("#validate-email");
        var validatePhone = document.querySelector("#validate-phone");
        
        var frm = document.getElementById('frm');
        frm.addEventListener("submit", function(e){
        	if(idInput.value.length === 0){
        		e.preventDefault();
        		idInput.style.border  =  "0.0625rem solid #f0679e";
        		validateId.style.color = "#f0679e";
        		validateId.innerText = "아이디를 입력하세요."
        	}else if(pwd1Input.value.length === 0){
        		e.preventDefault();
        		pwd1Input.style.border  =  "0.0625rem solid #f0679e";
        		validatePwd1.style.color = "#f0679e";
        		validatePwd1.innerText = "비밀번호를 입력하세요."
        	}else if(nickNameInput.value.length === 0){
        		e.preventDefault();
        		nickNameInput.style.border  =  "0.0625rem solid #f0679e";
        		validateNickName.style.color = "#f0679e";
        		validateNickName.innerText = "닉네임을 입력하세요."		    	
        	}else if(pwd2Input.value.length === 0){
        		e.preventDefault();
        		pwd2Input.style.border  =  "0.0625rem solid #f0679e";
        		validatePwd2.style.color = "#f0679e";
        		validatePwd2.innerText = "비밀번호를 확인하세요."	
        	}else if(emailInput.value.length === 0){
        		e.preventDefault();
        		emailInput.style.border  =  "0.0625rem solid #f0679e";
        		validateEmail.style.color = "#f0679e";
        		validateEmail.innerText = "이메일을 입력하세요."	
        	}else if(phoneNumInput.value.length === 0){
        		e.preventDefault();
        		phoneNumInput.style.border  =  "0.0625rem solid #f0679e";
        		validatePhone.style.color = "#f0679e";
        		validatePhone.innerText = "휴대폰번호를 입력하세요."	
        	}
        });
   });	   
	   