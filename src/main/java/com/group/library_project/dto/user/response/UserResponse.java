package com.group.library_project.dto.user.response;

import com.group.library_project.domain.User.User;

public class UserResponse {

    public UserResponse(long id, User user) {
        this.id = id;
        this.name = user.getName();
        this.age = user.getAge();
    }

    public long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public Integer getAge() {
        return age;
    }

    private long id;
    private String name;
    private Integer age;
}
