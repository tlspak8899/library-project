package com.group.library_project.controller.user;

import com.group.library_project.domain.User.User;
import com.group.library_project.dto.UserCreateRequest;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
public class UserController {

    private List<User> users = new ArrayList<>();

    @PostMapping("/user")
    public void saveUser(@RequestBody UserCreateRequest request){
        users.add(new User(request.getName(),request.getAge())); // 2. 객체 생성과 동시에 값을 할당 하는 방법 => 파라미터가 있는 생성자를 만들어야함
    }



}
