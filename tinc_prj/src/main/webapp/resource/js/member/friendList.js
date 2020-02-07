
		$('[id^=img]').on('click',function(e){ 
			$('.popup').css("display", "block");
			$('.mask').css("display", "block");
			
			var fileName = $(e.target).data('img');
			var friendsId = $(e.target).data('id');
			
			$('#popupImg').attr("src", "../../../resource/images/"+fileName);
			$('#popId').html($(e.target).data('nickname'));
			$('#popupStatusMsg').html($(e.target).data('statusmsg'));
			
			$('#block').off("click").on('click',function(e){ 
				var cmd = 'block';
		        console.log(cmd+friendsId);
		        $.post("${pageContext.request.contextPath}/member/friendList", {friendsId : friendsId, cmd : cmd});
		        $('.popup').css("display", "none");
				$('.mask').css("display", "none");
				$("#friendsId"+friendsId).remove();
	      		$(function(){infobox('차단되었습니다.');});
			});
			
			$('#chatting').on('click',function(e){ 
				var cmd = 'chatting';
				console.log(cmd+friendsId);
				$.post("${pageContext.request.contextPath}/member/friendList", {friendsId : friendsId, cmd : cmd}, function(data){
					$(location).attr('href', data);
				});
			});
			
		});
		
		
		
		function infobox(txt){
			$("#anno").html(txt);
			$("#anno").fadeIn().delay(2000).fadeOut();
		}