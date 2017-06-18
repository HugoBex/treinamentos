package br.com.casadocodigo.util.api;

public class Mensagens {

	public String titulo;
	public String mensagem;

	public Mensagens(String titulo, String mensagem) {
		super();
		this.titulo = titulo;
		this.mensagem = mensagem;
	}

	public String getTitulo() {
		return titulo;
	}

	public void setTitulo(String titulo) {
		this.titulo = titulo;
	}

	public String getMensagem() {
		return mensagem;
	}

	public void setMensagem(String mensagem) {
		this.mensagem = mensagem;
	}

	public static class Produto {

		public static String TAG_SUCESSO = "sucesso";
		public static String SUCESSO_CADASTRO = "Produto cadastrado com sucesso";
		public static String TAG_FALHA = "falha";
		public static String FALHA_CADASTRO = "Erro ao cadastrar o produto";
	}

}
