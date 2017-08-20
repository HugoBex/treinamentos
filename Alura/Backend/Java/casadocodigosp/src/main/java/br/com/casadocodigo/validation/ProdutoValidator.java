package br.com.casadocodigo.validation;

import org.springframework.validation.Errors;
import org.springframework.validation.ValidationUtils;
import org.springframework.validation.Validator;

import br.com.casadocodigo.models.Produto;

public class ProdutoValidator implements Validator {

	@Override
	public boolean supports(Class<?> clazz) {
		return Produto.class.isAssignableFrom(clazz);
	}

	@Override
	public void validate(Object target, Errors errors) {

		ValidationUtils.rejectIfEmpty(errors, "titulo", ErrorsCode.FIELD_REQUIRED);
		ValidationUtils.rejectIfEmpty(errors, "descricao", ErrorsCode.FIELD_REQUIRED);
		Produto produto = (Produto) target;
		if (produto.getPaginas() <= 0)
			errors.rejectValue("paginas", ErrorsCode.FIELD_REQUIRED);

	}

	class ErrorsCode {

		public static final String FIELD_REQUIRED = "field.required";
	}

}
