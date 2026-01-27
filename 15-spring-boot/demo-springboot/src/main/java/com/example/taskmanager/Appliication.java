package com.example.taskmanager;

import com.example.taskmanager.controller.TaskController;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.PropertySource;

@SpringBootApplication
@PropertySource("classpath:db.properties")
public class Appliication {

	public static void main(String[] args) {
		SpringApplication.run(Appliication.class, args);
	}
}

