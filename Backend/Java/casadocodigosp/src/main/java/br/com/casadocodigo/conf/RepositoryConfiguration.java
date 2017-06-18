package br.com.casadocodigo.conf;

import java.util.Properties;

import javax.persistence.EntityManagerFactory;

import org.springframework.context.annotation.Bean;
import org.springframework.jdbc.datasource.DriverManagerDataSource;
import org.springframework.orm.jpa.JpaTransactionManager;
import org.springframework.orm.jpa.LocalContainerEntityManagerFactoryBean;
import org.springframework.orm.jpa.vendor.HibernateJpaVendorAdapter;
import org.springframework.transaction.annotation.EnableTransactionManagement;

@EnableTransactionManagement
public class RepositoryConfiguration {

	@Bean
	public LocalContainerEntityManagerFactoryBean entityManagerFactory() {

		LocalContainerEntityManagerFactoryBean 
			managerFactoryBean = new LocalContainerEntityManagerFactoryBean();

	    managerFactoryBean.setJpaVendorAdapter(new HibernateJpaVendorAdapter());
		managerFactoryBean.setDataSource(getDataSource());
		managerFactoryBean.setJpaProperties(getRepositoryProperties());
		managerFactoryBean.setPackagesToScan(ConstantesConf.PACOTE_MODELS);
		
		return managerFactoryBean;
	}

	private DriverManagerDataSource getDataSource() {	
		DriverManagerDataSource dataSource = new DriverManagerDataSource();
		dataSource.setUrl("jdbc:mysql://localhost:3306/casadocodigosp");
		dataSource.setDriverClassName("com.mysql.jdbc.Driver");
		dataSource.setUsername("aluralab");
		dataSource.setPassword("aluralab");
		
		return dataSource;
	}
	
	private Properties getRepositoryProperties(){
		Properties props = new Properties();
		props.setProperty("hibernate.dialect", "org.hibernate.dialect.MySQL5Dialect");
		props.setProperty("hibernate.show_sql", "true");
		props.setProperty("hibernate.hbm2ddl.auto", "update");
		
		return props;
	}
	
    @Bean
    public JpaTransactionManager transactionManager(EntityManagerFactory emf){
        return new JpaTransactionManager(emf);
    }
}
