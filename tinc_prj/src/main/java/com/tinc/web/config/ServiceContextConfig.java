package com.tinc.web.config;

import java.io.IOException;

import org.mybatis.spring.SqlSessionFactoryBean;
import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.jdbc.datasource.DataSourceTransactionManager;
import org.springframework.jdbc.datasource.DriverManagerDataSource;
import org.springframework.transaction.PlatformTransactionManager;
import org.springframework.transaction.annotation.EnableTransactionManagement;

@Configuration
@EnableTransactionManagement
@ComponentScan(basePackages= {"com.tinc.web.service","com.tinc.web.dao"})
public class ServiceContextConfig {
	
	@Autowired
	private ApplicationContext applicationContext;
	
	@Bean
	public DriverManagerDataSource dataSource() {
		
		DriverManagerDataSource dataSource = new DriverManagerDataSource();
		dataSource.setDriverClassName("com.mysql.cj.jdbc.Driver");
		dataSource.setUrl("jdbc:mysql://125.129.74.131/tinc?autoReconnect=true&useSSL=false&useUnicode=true&characterEncoding=utf8&serverTimezone=UTC");  
		//dataSource.setUrl("jdbc:mysql://dev.notepubs.com/tinc?autoReconnect=true&useSSL=false&useUnicode=true&characterEncoding=utf8&serverTimezone=UTC");
		dataSource.setUsername("tinc"); 
		dataSource.setPassword("33333"); 
		
		return dataSource;
	}
	
	// @Transactional annotation 사용을 위한 설정
	@Bean
	public PlatformTransactionManager transactionManager()
	{
		DataSourceTransactionManager tm = new DataSourceTransactionManager();
		tm.setDataSource(dataSource());
		
		return tm;
	}
	
	@Bean
	public SqlSessionFactoryBean sqlSessionFactory() throws IOException {
		SqlSessionFactoryBean factory = new SqlSessionFactoryBean();
		factory.setDataSource(dataSource());
		factory.setMapperLocations(
				applicationContext.getResources("classpath:com/tinc/web/dao/mybatis/mapper/*.xml"));
		
		return factory;
	}
	
	@Bean
	public SqlSessionTemplate sqlSession() throws Exception {
		
		SqlSessionTemplate sqlSession = 
				new SqlSessionTemplate(sqlSessionFactory().getObject());
				
		return sqlSession;
	}
	
}
