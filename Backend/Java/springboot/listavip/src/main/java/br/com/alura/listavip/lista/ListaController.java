package br.com.alura.listavip.lista;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import br.com.alura.listavip.model.Convidado;
import br.com.alura.listavip.repository.ConvidadoRepository;

@Controller
public class ListaController {

	@Autowired
	ConvidadoRepository repository;
	
	
	@RequestMapping("/")
	public String index() {
		return "index";
	}
	
	@RequestMapping("convidados")
	public String convidados(Model model){
	
		List<Convidado> convidados = (List<Convidado>) repository.findAll();
		model.addAttribute("convidados", convidados);
		return "convidados";
	}
	
	@RequestMapping(value="salvar", method=RequestMethod.POST)
	public String Salvar(Convidado convidado, Model model){
		
		repository.save(convidado);
	    Iterable<Convidado> convidados = repository.findAll();
	    model.addAttribute("convidados", convidados);
	    
		return "convidados";
	}
}
