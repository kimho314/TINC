   $(function(){	
      $("input[name^='userWhoHaveAddedMe_addBtn']").on('click',function(e){ 
          $("input[name='friendsId']").val($(e.target).data('id'));
          $("input[name='cmd']").val('userWhoHaveAddedMe-add');
          console.log($("input[name='cmd']").val() + ":" + $("input[name='friendsId']").val());
          var cmd = $("input[name='cmd']").val();
          var friendsId = $("input[name='friendsId']").val();
          $.post("/member/friendSetting", {friendsId : friendsId, cmd : cmd});
          $(e.target).parent().parent().remove();
          $(function(){infobox('친구가 추가되었습니다.');});
      });      
   });      
     
   $(function(){	
		$("input[name^='userWhoHaveAddedMe_blockBtn']").on('click',function(e){ 
	        $("input[name='friendsId']").val($(e.target).data('id'));
	        $("input[name='cmd']").val('userWhoHaveAddedMe-block');
	        console.log($("input[name='cmd']").val() + ":" + $("input[name='friendsId']").val());
	        var cmd = $("input[name='cmd']").val();
	        var friendsId = $("input[name='friendsId']").val();
	        $.post("/member/friendSetting", {friendsId : friendsId, cmd : cmd});
	        $(e.target).parent().parent().remove();
	        $(function(){infobox('차단 되었습니다.');});
	       
	    }); 	
   });
	
   $(function(){	
   		$("input[name^='userIhaveblocked_addBtn']").on('click',function(e){ 
        	$("input[name='friendsId']").val($(e.target).data('id'));
        	$("input[name='cmd']").val('userIhaveblocked-add');
	        console.log($("input[name='cmd']").val() + ":" + $("input[name='friendsId']").val());
	        var cmd = $("input[name='cmd']").val();
	        var friendsId = $("input[name='friendsId']").val();
	        $.post("/member/friendSetting", {friendsId : friendsId, cmd : cmd});
	        $(e.target).parent().parent().remove();
	        $(function(){infobox('친구가 추가되었습니다.');});
			
   		});
	       
   });
   
   $(function(){
	   $("input[name^='userIhaveblocked_unBlockBtn']").on('click',function(e){ 
	       $("input[name='friendsId']").val($(e.target).data('id'));
	       $("input[name='cmd']").val('userIhaveblocked-unblock');
	       console.log($("input[name='cmd']").val() + ":" + $("input[name='friendsId']").val());
	       var cmd = $("input[name='cmd']").val();
	       var friendsId = $("input[name='friendsId']").val();
	       $.post("/member/friendSetting", {friendsId : friendsId, cmd : cmd});
	       $(e.target).parent().parent().remove(); 
	       $(function(){infobox('차단이 해제되었습니다.');});
   		});
	   
   });
   
  function infobox(txt){
		$("#anno").html(txt);
		$("#anno").fadeIn().delay(2000).fadeOut();
	}
   
  
  