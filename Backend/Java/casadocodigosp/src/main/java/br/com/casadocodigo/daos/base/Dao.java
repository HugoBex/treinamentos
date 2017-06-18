package br.com.casadocodigo.daos.base;

import java.util.List;


public abstract class Dao<E, ID> implements IDao<E, ID> {

	protected Class<E> entity;

//	@PersistenceContext
//	private EntityManager entityManager;

	public Dao(Class<E> entity) {
		this.entity = entity;
	}

	@Override
//	@Transactional
	public void save(E entity) throws Exception {
//		entityManager.persist(entity);
	}

	@Override
	public void delete(E entity) throws Exception {

	}

	@Override
	public void update(E entity) throws Exception {

	}

	@Override
	public List<E> findAll() throws Exception {
		return null;
	}

	@Override
	public E find(ID key) throws Exception {
		return null;
	}

}
