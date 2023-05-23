package com.paf.airfoo;

import com.paf.airfoo.configuration.ApplicationProperties;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.EnableConfigurationProperties;

@SpringBootApplication
@EnableConfigurationProperties(ApplicationProperties.class)
public class AirFooApplication {

	public static void main(String[] args) {
		SpringApplication.run(AirFooApplication.class, args);
	}

}
