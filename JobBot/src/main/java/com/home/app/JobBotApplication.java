package com.home.app;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan(basePackages= {"com.home.app"})
public class JobBotApplication {

	public static void main(String[] args) {
		SpringApplication.run(JobBotApplication.class, args);
	}

}
