package br.com.casadocodigo.models;

public enum TipoPreco {

	IMPRESSO("Impresso"), EBOOK("eBook"), COMBO("Combo");
//	IMPRESSO(), EBOOK(), COMBO();

	
	private String typeValue;

	private TipoPreco(String toString) {
		typeValue = toString;
	}


	@Override
	public String toString() {
		return typeValue;
	}

	public static String[] getListString(){
		return new String []{IMPRESSO.toString(), EBOOK.toString(), COMBO.toString()};
	}
}