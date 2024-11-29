package com.group.library_project.dto.user.request;

public class UserCreateRequest {

    private String name;
    private Integer age;
    private Integer id;

    public Integer getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public Integer getAge() {
        return age;
    }
}
