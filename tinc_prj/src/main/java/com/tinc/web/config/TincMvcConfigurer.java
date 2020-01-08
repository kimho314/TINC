package com.tinc.web.config;

import java.nio.charset.Charset;
import java.util.List;

import org.springframework.context.annotation.Configuration;
import org.springframework.http.converter.HttpMessageConverter;
import org.springframework.http.converter.StringHttpMessageConverter;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.ViewControllerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
@EnableWebMvc
public class TincMvcConfigurer 
		implements WebMvcConfigurer {
	
	
	@Override
	public void addResourceHandlers(ResourceHandlerRegistry registry) {
		
		registry
		.addResourceHandler("/resource/**")
		.addResourceLocations("/resource/");
	}
	
	
	@Override
	public void configureMessageConverters(List<HttpMessageConverter<?>> converters) {

		StringHttpMessageConverter converter = new StringHttpMessageConverter();
		converter.setDefaultCharset(Charset.forName("UTF-8"));
		converter.setWriteAcceptCharset(false);		
		converters.add(converter);
		
		WebMvcConfigurer.super.configureMessageConverters(converters);
	}
	
	@Override
	public void addViewControllers(ViewControllerRegistry registry)
	{
		registry.addViewController("/").setViewName("redirect:/index");
	}
}
