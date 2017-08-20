package br.com.casadocodigo.util.api;

public class ConstantesAPI {

	public static final String FORM_ENDPOINT = "/form";
	public static final String SUCESSO_ENDPOINT = "/sucesso";
	public static final String FALHA_ENDPOINT = "/falha";
	public static final String REDIRECT = "redirect:";

	public class Produto {

		public static final String PRODUTO = "produtos";
		public static final String FORM = PRODUTO + FORM_ENDPOINT;
		public static final String LISTA = PRODUTO + "/lista";
		public static final String SUCESSO = PRODUTO + SUCESSO_ENDPOINT;
		public static final String FALHA = PRODUTO + FALHA_ENDPOINT;

	}

}
