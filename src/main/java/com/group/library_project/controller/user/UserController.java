package com.group.library_project.controller.user;

import com.group.library_project.domain.User.User;
import com.group.library_project.dto.user.request.UserCreateRequest;
import com.group.library_project.dto.user.response.UserResponse;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@Slf4j
public class UserController {

    private List<User> users = new ArrayList<>();

    @GetMapping("/api/getaa")
    public String getaa(){
        return " 테스트";
    }

    @PostMapping("/api/createUser")
    public void createUser(@RequestBody UserCreateRequest request){
        users.add(new User(request.getName(),request.getAge()));
        log.info("request 값 : ( {} , {} )",request.getAge(),request.getName()); // log.info 를 사용할때 매개변수화된 로그메시지를 사용해주는게 좋다. gradle 에 annotationProcessor 추가해줘야함 롬복 컴파일 에러 방지
    }

    @GetMapping("/api/user")
    public List<UserResponse> getUsers() {
        List<UserResponse> reponses = new ArrayList<>();
        for (int i = 0; i < users.size(); i++) {
            reponses.add(new UserResponse(i + 1, users.get(i)));
        }
        return reponses;
    }
}