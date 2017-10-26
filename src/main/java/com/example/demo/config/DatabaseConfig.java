package com.example.demo.config;

import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.transaction.annotation.EnableTransactionManagement;

@EnableJpaRepositories("com.example.demo.repository")
@EnableTransactionManagement
public class DatabaseConfig {

}
