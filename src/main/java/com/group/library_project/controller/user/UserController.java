package com.group.library_project.controller.user;

import com.group.library_project.dto.user.request.UserCreateRequest;
import com.group.library_project.dto.user.response.UserResponse;
import lombok.extern.slf4j.Slf4j;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.web.bind.annotation.*;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;

@RestController
@Slf4j
public class UserController {

    private final JdbcTemplate jdbcTemplate;

    public UserController(JdbcTemplate jdbcTemplate){
        this.jdbcTemplate = jdbcTemplate;
    }

    @GetMapping("/api/getaa")
    public String getaa(){
        return " 테스트";
    }

    @PostMapping("/api/createUser")
    public void createUser(@RequestBody UserCreateRequest request){
        String sql = "insert into user (name, age) values (?,?)";
        jdbcTemplate.update(sql, request.getName(),request.getAge());
        log.info("request 값 : ( {} , {} )",request.getAge(),request.getName()); // log.info 를 사용할때 매개변수화된 로그메시지를 사용해주는게 좋다. gradle 에 annotationProcessor 추가해줘야함 롬복 컴파일 에러 방지
    }

    @PutMapping("/api/updateUser")
    public void updateUser(@RequestBody UserCreateRequest request){
        String sql = "update user set name=?, age=? where id=?";
        jdbcTemplate.update(sql, request.getName(), request.getAge(), request.getId());
    }

     @GetMapping("/api/getUser")
    public List<UserResponse> getUsers() {
        String sql = "select * from user";
        return jdbcTemplate.query(sql, new RowMapper<UserResponse>() {

            @Override
            public UserResponse mapRow(ResultSet rs, int rowNum) throws SQLException {
                long id = rs.getLong("id");
                String name = rs.getString("name");
                int age = rs.getInt("age");
                return new UserResponse(id,name,age);
            }
        });
    }
}