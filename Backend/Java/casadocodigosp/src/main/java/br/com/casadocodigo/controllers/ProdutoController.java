package br.com.casadocodigo.controllers;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.WebDataBinder;
import org.springframework.web.bind.annotation.InitBinder;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import br.com.casadocodigo.daos.ProdutoDao;
import br.com.casadocodigo.models.Produto;
import br.com.casadocodigo.models.TipoPreco;
import br.com.casadocodigo.util.api.ConstantesAPI;
import br.com.casadocodigo.util.api.Mensagens;
import br.com.casadocodigo.validation.ProdutoValidator;

@Controller
@RequestMapping("/" + ConstantesAPI.Produto.PRODUTO)
public class ProdutoController {

	// TODO -
	/*
	 * Carregar o css na view form.jsp Corrigir o Dao para injetar o
	 * EntityManager Corretamente
	 */

	@Autowired
	private ProdutoDao produtoDao;
	private final String ATTR_TIPOS = "tipos";
	private final String ATTR_PRODUTOS = "produtos";
	private final String ATTR_MSG = "msg";

	@InitBinder
	public void initBinder(WebDataBinder binder) {
		binder.addValidators(new ProdutoValidator());
	}

	@RequestMapping(ConstantesAPI.FORM_ENDPOINT)
	public ModelAndView form(Produto produto) {

		ModelAndView modelAndView = new ModelAndView(ConstantesAPI.Produto.FORM);
		modelAndView.addObject(ATTR_TIPOS, TipoPreco.getListString());
		return modelAndView;
	}

	@RequestMapping(method = RequestMethod.POST)
	public ModelAndView gravar(@Valid Produto produto, BindingResult results, 
			RedirectAttributes redirectAttributes) {

		ModelAndView mv = null;
		Mensagens msg = null;
		try {

			if (results.hasErrors()) {
				System.out.println(results.getAllErrors().toString());
				return form(produto);
				
			}

			produtoDao.salvar(produto);
			mv = new ModelAndView(ConstantesAPI.REDIRECT + ConstantesAPI.Produto.PRODUTO);
			msg = new Mensagens(Mensagens.Produto.TAG_SUCESSO, Mensagens.Produto.SUCESSO_CADASTRO);

		} catch (Exception e) {
			e.printStackTrace();
			msg = new Mensagens(Mensagens.Produto.TAG_FALHA, Mensagens.Produto.FALHA_CADASTRO);
			mv = new ModelAndView(ConstantesAPI.REDIRECT + ConstantesAPI.Produto.FALHA);
		}

		redirectAttributes.addFlashAttribute(ATTR_PRODUTOS, produto);
		return mv;
	}

	@RequestMapping(method = RequestMethod.GET)
	public ModelAndView listar() {
		ModelAndView modelAndView = new ModelAndView(ConstantesAPI.Produto.LISTA);
		modelAndView.addObject(ATTR_PRODUTOS, produtoDao.listar());
		return modelAndView;
	}
}
