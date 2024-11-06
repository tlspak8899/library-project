package com.group.library_project.domain.User;

public class User {
    private String name;
    private Integer age;

    public User(String name, Integer age) {
        if(name == null || name.isBlank()){
            throw new IllegalArgumentException(String.format("잘못된 name(%s)이 들어가 있습니다.",name));
        }
        this.name = name;
        this.age = age;
    }

    public String getName() {
        return name;
    }

    public Integer getAge() {
        return age;
    }
    public void setAge(Integer age) {
        this.age = age;
    }

    public void setName(String name) {
        this.name = name;
    }
}
