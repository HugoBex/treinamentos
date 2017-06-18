package br.com.casadocodigo.daos.base;

import java.util.List;

public interface IDao<E, ID>  {
		
	void save(E entity) throws Exception;

	void delete(E entity) throws Exception;

	void update(E entity) throws Exception;
	
	List<E> findAll() throws Exception;

	E find(ID key) throws Exception;
}
