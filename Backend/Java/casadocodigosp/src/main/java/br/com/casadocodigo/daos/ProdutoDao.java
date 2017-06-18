package br.com.casadocodigo.daos;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import br.com.casadocodigo.models.Produto;

@Repository
@Transactional
public class ProdutoDao {

	@PersistenceContext
	private EntityManager entityManager;

	public ProdutoDao() {
		super();
	}

	public void salvar(Produto produto) throws Exception {
		entityManager.persist(produto);
	}

	public List<Produto> listar() {
		return entityManager.createQuery("Select p from Produto p", Produto.class).getResultList();
	}

}
