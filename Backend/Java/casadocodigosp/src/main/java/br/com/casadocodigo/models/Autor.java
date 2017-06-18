package br.com.casadocodigo.models;

public class Autor {

	private String autorNome;
	private String autorIntro;

	public Autor() {
		super();
		// TODO Auto-generated constructor stub
	}

	public String getAutorNome() {
		return autorNome;
	}

	public void setAutorNome(String autorNome) {
		this.autorNome = autorNome;
	}

	public String getAutorIntro() {
		return autorIntro;
	}

	public void setAutorIntro(String autorIntro) {
		this.autorIntro = autorIntro;
	}

	@Override
	public String toString() {
		return "Autor [autorNome=" + autorNome + ", autorIntro=" + autorIntro + "]";
	}
	
	

}