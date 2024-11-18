package com.group.library_project;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class CorsConfig implements WebMvcConfigurer { // cors 접근 허용 하는 부분들.
    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**")
                .allowedOrigins("http://localhost:3000") // 허용할 Origin 설정
                .allowedMethods("OPTIONS","GET", "POST", "PUT", "DELETE")
                .allowedHeaders("*")
                .allowCredentials(true);
                // addMapping : CORS 를 적용할 URL 의 패턴을 정의("/**"로 모든 패턴 기능)
                // allowedOrigins : 허용할 origin ("*"로 모든 origin 허용 가능, 여러 개도 지정 가능)
                // allowedMethods : 허용할 HTTP Method ("*"로 모든 Method 허용 가능)


    }
}
