package com.test.ladonware;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.google.auth.oauth2.GoogleCredentials;
import com.google.firebase.FirebaseApp;
import com.google.firebase.FirebaseOptions;

@SpringBootApplication
public class LadonwareApplication {

	// http://localhost:8080/swagger-ui.html

	public static void main(String[] args) {

		SpringApplication.run(LadonwareApplication.class, args);
		
	}

}
