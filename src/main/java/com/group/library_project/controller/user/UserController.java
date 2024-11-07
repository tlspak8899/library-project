package com.group.library_project.controller.user;

import com.group.library_project.domain.User.User;
import com.group.library_project.dto.user.request.UserCreateRequest;
import com.group.library_project.dto.user.response.UserResponse;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
public class UserController {

    private List<User> users = new ArrayList<>();

    @GetMapping("/getaa")
    public String getaa(){
        return " 테스트";
    }

    @PostMapping("/createUser")
    public void createUser(@RequestBody UserCreateRequest request){
        users.add(new User(request.getName(),request.getAge()));
    }

    @GetMapping("/user")
    public List<UserResponse> getUsers(){
        List<UserResponse> reponses = new ArrayList<>();
        for(int i = 0; i < users.size(); i++){
            reponses.add(new UserResponse(i + 1, users.get(i) ));
        }
        return reponses;
    }



}
