package br.com.alura.listavip;

import java.util.Properties;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.jdbc.datasource.DriverManagerDataSource;

@SpringBootApplication
public class Configuracao {

	public static void main(String[] args) {
		SpringApplication.run(Configuracao.class, args);
	}

	@Bean
	public DriverManagerDataSource getDataSource() {	
		DriverManagerDataSource dataSource = new DriverManagerDataSource();
		dataSource.setUrl("jdbc:mysql://localhost:3306/listavip");
		dataSource.setDriverClassName("com.mysql.jdbc.Driver");
		dataSource.setUsername("aluralab");
		dataSource.setPassword("aluralab");
		dataSource.setConnectionProperties(getRepositoryProperties());
		return dataSource;
	}
	
	public Properties getRepositoryProperties(){
		Properties props = new Properties();
		props.setProperty("hibernate.dialect", "org.hibernate.dialect.MySQL5Dialect");
		props.setProperty("hibernate.show_sql", "true");
		props.setProperty("hibernate.hbm2ddl.auto", "update");
		
		return props;
	}
}
