package com.tinc.web.controller;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileWriter;
import java.io.IOException;
import java.security.Principal;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;
import javax.servlet.ServletContext;
import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.MailException;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.google.gson.Gson;
import com.tinc.web.entity.BlackList;
import com.tinc.web.entity.ChattingRoom;
import com.tinc.web.entity.FriendsList;
import com.tinc.web.entity.GroupMemoList;
import com.tinc.web.entity.Member;
import com.tinc.web.entity.MemberRole;
import com.tinc.web.entity.PrivateMemoList;
import com.tinc.web.service.ChattingService;
import com.tinc.web.service.GroupMemoListService;
import com.tinc.web.service.MemberService;
import com.tinc.web.service.PrivateMemoListService;

@Controller
@RequestMapping("/member/")
public class MemberController {
   
   @Autowired
   private JavaMailSender mailSender;
   @Autowired
   private MemberService service;
   @Autowired
   private PrivateMemoListService memoService;
   @Autowired
   private ChattingService chattingService;
   @Autowired
   private GroupMemoListService groupMemoListService;
   
   @GetMapping("main")
      public String main() {
         return "main";
      }   
   
   @GetMapping("friendList")
   public String friendList(Principal principal, Model model) {

      String id = principal.getName();
      System.out.println(id);
      
      model.addAttribute("myprofile", service.getMyProfile(id));
      model.addAttribute("friendsProfile", service.getFriendsProfile(id));
      model.addAttribute("friendListCount", service.getFriendsListCount(id));
   
//      return "member/friendList";
      return "main";
   }
   
   @ResponseBody
   @PostMapping("friendList")
   public String friendList(
         @RequestParam(name = "friendsId" , required = false) String friendsId,
         @RequestParam(name = "cmd" , required = false) String cmd,
         BlackList blackList,
         FriendsList friendsList,
         Principal principal,
         HttpServletRequest request) {
      String memberId = principal.getName();
      
      blackList.setMemberId(memberId);
      blackList.setBlackId(friendsId);
      friendsList.setMemberId(memberId);
      friendsList.setFriendsId(friendsId);
      System.out.println(memberId+cmd+friendsId);
      
      if(friendsId != null && cmd!=null) {
         switch (cmd) {
            case "chatting":
               int dupliRoomId = chattingService.isDuplicatedRoom(memberId,friendsId);
               if(dupliRoomId != 0) {
                  String roomId = String.valueOf(dupliRoomId);
                  return "../../chat/"+roomId+"";
               }else {
                  int chatId = 0;
                  Member my = service.get(memberId);
                  Member m = service.get(friendsId);
                  String title = my.getNickName()+", "+m.getNickName();
                  int result = chattingService.createChattingRoom(new ChattingRoom(memberId,title));// 방장 먼저 개설   
                  
                  if(result == 1) {
                     chatId = chattingService.getChattingRoomId(memberId); // 개설한 채팅 아이디가져오기
                     chattingService.inviteMember(chatId, friendsId); // 초대 완료 
                     groupMemoListService.insert(new GroupMemoList(title,chatId,memberId));
                     groupMemoListService.insert(new GroupMemoList(title,chatId,friendsId));
                     mkFile(memberId,chatId,request);
                     mkFile(friendsId,chatId,request);
                  }
                  String chattingId = String.valueOf(chatId);
                  return "../../chat/"+chattingId+"";
               }
         case "block":
            int result1 = service.deleteFriend(friendsList);
            int result2 = service.blockUser(blackList);
            if(result1 == 1 && result2 == 1) {
               friendsList.setMemberId(friendsId);
               friendsList.setFriendsId(memberId);
               int result3 = service.deleteFriend(friendsList);
               System.out.println(result1+","+result2+","+result3);
            }
            break;
         }
      }
      return "member/friendList";
   }
   
   @GetMapping("friendSetting")
   public String friendSetting(Principal principal, Model model) {
      
      String memberId = principal.getName();
      System.out.println(memberId);
      model.addAttribute("userIhaveblocked", service.getListOfUserIhaveblocked(memberId));
      model.addAttribute("userWhoHaveAddedMe", service.getListOfUserWhoHaveAddedMe(memberId));
      
      return "main";
   }
   
   @PostMapping("friendSetting")
   public String friendSetting( 
         @RequestParam(name = "friendsId" , required = false) String friendsId,
         @RequestParam(name = "cmd" , required = false) String cmd,
         FriendsList friendsList, 
         BlackList blackList,
         Principal principal) 
      {
      String memberId = principal.getName();
      String blackId = friendsId;
      System.out.println(memberId+","+friendsId);
      
      friendsList.setMemberId(memberId);
      friendsList.setFriendsId(friendsId);
      blackList.setMemberId(memberId);
      blackList.setBlackId(blackId);
      
      System.out.println(cmd);
      if(friendsId != null || blackId!=null) {
         switch (cmd) {
         case "userIhaveblocked-add":
            int result1 = service.unblockUser(blackList);
            int result2 = service.addFriend(friendsList);
            System.out.println("result1:"+result1+"result2:"+result2);
            break;
         case "userIhaveblocked-unblock":
            service.unblockUser(blackList);
            break;
         case "userWhoHaveAddedMe-add":
            int result = service.addFriend(friendsList);
            System.out.println(result);
            break;
         case "userWhoHaveAddedMe-block":
            System.out.println("for delete"+friendsList);
            int result3 = service.deleteFriend(friendsList);
            System.out.println("result3:"+result3);
            int result4 = service.blockUser(blackList);
            System.out.println("result4:"+result4);
            if(result3 == 1 || result4 == 1) {
               friendsList.setMemberId(friendsId);
               friendsList.setFriendsId(memberId);
               int result5 = service.deleteFriend(friendsList);
               System.out.println("삭제했니??"+result3+","+result4+","+result5);
            }
            break;
         }
      }
      return "member/friendSetting";
      }
   
   
   
   @GetMapping("addFriend")
      public String addFriend() {
         
         return "member/addFriend";
      }
      
   @ResponseBody
   @RequestMapping(value="addFriend", method = RequestMethod.POST)
   public String addFriend(
         Principal principal, Model model, FriendsList friendsList,
         @RequestParam(name = "friendsId" , required = false) String friendsId,
         @RequestParam(name = "searchwords", required = false) String query)
      {
      String id = principal.getName();
      System.out.println("id:"+id+", query:"+query);
      
      Map<String, String> item = new HashMap<String, String>();
      item.put("item1", id); 
      item.put("item2", id);
      item.put("item3", id);
      item.put("item4", id);
      item.put("item5", query);
      model.addAttribute("id", id);
      
      List<Member> list = service.searchFriendsforAdding(item);
      
      Gson gson = new Gson();
      String searchwords = gson.toJson(list);
      System.out.println(searchwords);
      
      if(friendsId !=null) {
         friendsList.setMemberId(id);
         friendsList.setFriendsId(friendsId);
         System.out.println("friendsId"+friendsId);
         service.addFriend(friendsList);         
      }
      
      return searchwords;
   }
   
   @GetMapping("join")
   public String join() {

      return "member/join";
   }
   
   @PostMapping("join")
   public String join(Member member) {
      BCryptPasswordEncoder scpwd = new BCryptPasswordEncoder();
      String encPassword = scpwd.encode(member.getPassword());
      member.setPassword(encPassword);
      
      int result = service.joinMember(member);   
      
      System.out.println("id:"+member.getId());
        if(result ==1) { 
           memoService.insert(new PrivateMemoList(member.getNickName(),member.getId())); 
           service.addRole(new MemberRole(member.getId(), "ROLE_MEMBER"));
        }
        
      return "redirect:friendList";
   }
   
   @GetMapping("idCheck")
   @ResponseBody
   public String idCheck(@RequestParam(name = "id") String id) {
      
      System.out.println("중복체크"+id);
      System.out.println("중복체크결과"+service.isDuplicatedId(id));
      
      return service.isDuplicatedId(id);
   }
   
   @GetMapping("login")
   public String login() {
      
      return "member/login";
   }

   @GetMapping("logout")
   public String logout() {
      
      return "member/logout";
   }
   
   @GetMapping("agree")
   public String agree() {
	   
      return "member/agree";
   }

   @GetMapping("find")
   public String find() {
      return "member/find";
   }

   @ResponseBody
   @PostMapping("find")
   public String find(@RequestParam(name="email", required = false)String email, @RequestParam(name="id", required = false)String id, Model model)  throws MailException, MessagingException {

      String json = "[]";
      String json2 = "[]";
      String findedId = null;
      Gson gson = new Gson();
      
      if(service.findId(email)!=null) {
         findedId = service.findId(email).getId();
         json = gson.toJson(findedId);
      }else {
         json ="[]";
      }

      if(id != null && email != null) {
         Member member = new Member();
         member.setId(id);
         member.setEmail(email);
         if(service.findPwd(member)!=null) {
            String temporaryPassword = getRamdomPassword(7);
            StringBuilder html = new StringBuilder();
            html.append("<html>");
            html.append("<body>");
            html.append("<p>TINC 임시비밀번호입니다.</p>");      
            html.append("<h1>"+temporaryPassword+"</h1>");
            html.append("<p>비밀번호를 변경하여 사용하세요</p>");
            html.append("</body>");
            html.append("</html>");
            
            MimeMessage message = mailSender.createMimeMessage();
            MimeMessageHelper helper = new MimeMessageHelper(message, true, "UTF-8");
            
            helper.setFrom("yupddok@gmail.com");
            helper.setTo(email);
            helper.setText(html.toString(), true); //true안하면 utf8로안감
            helper.setSubject("[TINC] 비밀번호 재설정 메일");
            
            mailSender.send(message);  //얘 객체생성하는 config파일 있어야됨 
            Member member2 = null;
            member2 = service.get(id);
            BCryptPasswordEncoder scpwd = new BCryptPasswordEncoder();
            String encPassword = scpwd.encode(temporaryPassword);
            member2.setPassword(encPassword);
            service.editMember(member2);
            json2 = gson.toJson("success");
         }else {
            json2 = "[]";
         }
         return json2;
      }
      return json;
   }
   
   public void mkFile(String userId,int chatId,HttpServletRequest request) {
      //파일 만들기 
      String filePath = "/WEB-INF/storage/chat";
      String fileName = userId+chatId+".json";
      ServletContext application = request.getServletContext();
      String realPath = application.getRealPath(filePath);      
      try {
         File file = new File(realPath);
         
         if(!file.exists())
            file.mkdirs();
         
         FileWriter fos = new FileWriter(realPath+File.separator+fileName);
         fos.close();
      } catch (IOException e) {}
   }
   
   public static String getRamdomPassword(int len) { 
      //임시 비밀번호 생성
      char[] charSet = new char[] { '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 
                             'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 
                             'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 
                             'U', 'V', 'W', 'X', 'Y', 'Z' }; 
      int idx = 0; 
      StringBuffer sb = new StringBuffer(); 
      System.out.println("charSet.length :::: "+charSet.length); 
      for (int i = 0; i < len; i++) { 
         idx = (int) (charSet.length * Math.random()); 
         sb.append(charSet[idx]); 
      } 
      return sb.toString(); 
   }
   
}