$(document).ready(function() {
	var friendsId=0;
    $("#searchword").keyup(function(){
        var words = $("#searchword").val();
        let x = 0;
        if( words != ''){
       $('#add-list').html("");
            $.ajax({
                type: 'POST',
                url: 'addFriend',
                data: {searchwords : words},
                async : false,
                success: function(result){
                   if ( result.length > 0){
                      var jsonObj = JSON.parse(result);
                      for(key in jsonObj){
                         var search='';
                         search += `<div id='friend' data-id=`+jsonObj[key].id+`>
                           <div id='box'>  
                              <img src='../../../resource/images/`+jsonObj[key].profileImg+`' alt='image1' id='profile'>
                          </div>
                           <div id='child-flex1'>
                              <p id='p1'>`+jsonObj[key].id+`</p>
                              <p id='p2'>`+jsonObj[key].nickName+`</p>
                           </div>
                           <div id='child-flex2'>
                              <input type='button' id='findBtn' name="addBtn" data-id=`+jsonObj[key].id+` value='친구 추가'/>
                           </div>
                        </div>`;
                         $('#add-list').append(search);
                         if(jsonObj[key].id === undefined){
                            alert('aa');
                            $('#add-list').html("검색결과가 없습니다");
                         } 
                         $("input[name^='addBtn']").on('click',function(e){
                            $("input[name='friendsId']").val($(e.target).data('id'));
                            var friendsId = $("input[name='friendsId']").val();
                         	$.post("addFriend", $("input[name='friendsId']").serialize());
                         	$(e.target).parent().parent().remove();
                         	x = 1;
                         }); 
                      }
                      $("input[name^='addBtn']").on('click',function(e){
	                      if(x == 1){
							x=0;                    	  
                			$(function(){infobox('친구가 추가되었습니다.');});
	                      }
                      }); 
                   } else { $('#add-list').html(""); }
                },
                error: function(e) {console.log('error:' + e.status);}
            });
        } else{ $('#add-list').html(""); }
    });

function infobox(txt){
	$("#anno").html(txt);
	$("#anno").fadeIn().delay(2000).fadeOut();
}

});