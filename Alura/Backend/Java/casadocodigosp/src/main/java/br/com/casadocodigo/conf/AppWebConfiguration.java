package br.com.casadocodigo.conf;

import org.springframework.context.MessageSource;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.support.ReloadableResourceBundleMessageSource;
import org.springframework.core.convert.ConversionService;
import org.springframework.format.datetime.DateFormatter;
import org.springframework.format.datetime.DateFormatterRegistrar;
import org.springframework.format.support.DefaultFormattingConversionService;
import org.springframework.format.support.FormattingConversionService;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.view.InternalResourceViewResolver;

@EnableWebMvc
@ComponentScan(basePackages = { ConstantesConf.PACOTE_CONTROLLERS, ConstantesConf.PACOTE_DAOS,
		ConstantesConf.PACOTE_MODELS })
public class AppWebConfiguration {

	@Bean
	public InternalResourceViewResolver internalResourceViewResolver() {
		InternalResourceViewResolver resolver = new InternalResourceViewResolver();
		resolver.setPrefix(ConstantesConf.PACOTE_VIEWS);
		resolver.setSuffix(ConstantesConf.SUFIX_VIEW_JSP);

		return resolver;
	}

	@Bean
	public MessageSource messageSource() {
		ReloadableResourceBundleMessageSource messageSource = new ReloadableResourceBundleMessageSource();
		messageSource.setBasename(ConstantesConf.PACOTE_MESSAGE_SOURCE);
		messageSource.setDefaultEncoding(ConstantesConf.ENCODING_UTF8);
		messageSource.setCacheSeconds(10);
		return messageSource;
	}

	@Bean
	public FormattingConversionService mvcConversionService() {
		DefaultFormattingConversionService conversionService 
			= new DefaultFormattingConversionService();
		
		DateFormatterRegistrar dateRegistrar = new DateFormatterRegistrar();
		dateRegistrar.setFormatter(new DateFormatter("dd/MM/yyyy"));
		dateRegistrar.registerFormatters(conversionService);
		
		return conversionService;
	}
}
