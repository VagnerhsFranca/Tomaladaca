package com.ifpe.tomaladaca.controller;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ifpe.tomaladaca.dto.LoteDto;
import com.ifpe.tomaladaca.model.Lote;
import com.ifpe.tomaladaca.model.Produto;
import com.ifpe.tomaladaca.service.LoteService;
import com.ifpe.tomaladaca.service.OrgaoDonatarioService;
import com.ifpe.tomaladaca.service.OrgaoFiscalizadorService;
import com.ifpe.tomaladaca.service.ProdutoService;

@RestController
@RequestMapping("admin")
public class LoteController {

	@Autowired 
	ProdutoService produtoService;
	@Autowired 
	OrgaoDonatarioService orgaoDonatarioService;
	@Autowired 
	OrgaoFiscalizadorService orgaoFiscalizadorService;
	@Autowired
	LoteService loteService;
	@Autowired (required = false)
	LoteDto loteDto;
	
	@CrossOrigin("*")
	@GetMapping ("lote")
	public  ResponseEntity<List<Lote>> lotes(){
		return ResponseEntity.ok(loteService.findAll());
	}
	
	@CrossOrigin("*")
	@GetMapping ("lote/{idLote}")
	public  ResponseEntity<Lote> lote(Model model, @PathVariable Integer idLote ){
		return ResponseEntity.ok(loteService.findById(idLote).get());
	}
	
	@CrossOrigin("*")
	@GetMapping ("lote/donatario/{idDonatario}")
	public  ResponseEntity<List<Lote>> lotesDonatario(Model model, @PathVariable Integer idDonatario ){
		List <Lote> loteDonatario = new ArrayList<>();
		for(Lote l : loteService.findAll()) {
			if(l.getOrgaoDonatario().getIdOrgaoDonatario() == idDonatario) {
				loteDonatario.add(l);
			}
		}
		
		return ResponseEntity.ok(loteDonatario);
	}
	
	@CrossOrigin("*")
	@GetMapping ("lote/delete/{idLote}")
	public ResponseEntity<?> deleteLote(Model model, @PathVariable Integer idLote ) {
		Lote lote = loteService.findById(idLote).get();
		
		if(lote != null) {
			loteService.delete(loteService.findById(idLote).get());
			return new ResponseEntity<>(HttpStatus.OK);
		}
		return new ResponseEntity<>(HttpStatus.NOT_FOUND);
	}
	
	@CrossOrigin("*")
	@PostMapping("lote-form")
	public ResponseEntity<?> saveLote(Model model, @RequestBody LoteDto loteDto) {
		Lote lote = new Lote();
		if(loteDto.getIdLote() != null) {
			lote.setIdLote(loteDto.getIdLote());
		}
		lote.setOrgaoDonatario(orgaoDonatarioService.findById(loteDto.getIdDonatario()).get());
		lote.setOrgaoFiscalizador(orgaoFiscalizadorService.findById(loteDto.getIdFiscalizador()).get());
		
		List <Produto> produtosLote = new ArrayList<>();
		for(Produto p : loteDto.getProdutos()) {
			Produto p2 = produtoService.findById(p.getCodigoProduto()).get();
			if(p.getQuantidade() > 0) {
				
				p.setDescricaoProduto(p2.getDescricaoProduto());
				p.setNomeProduto(p2.getNomeProduto());
				produtosLote.add(p);
			}
			
		}
		lote.setProdutos(produtosLote);
		lote.setDataEntrega(loteDto.getDataEntrega());
		lote.setDescricaoLote(loteDto.getDescricaoLote());
		lote.setDataEntrega(loteDto.getDataEntrega());
		lote.setDataCadastro(LocalDateTime.now());
		
		if(lote.getProdutos().size() > 0) {
			loteService.save(lote);
		}
		
		
		for(Produto p : lote.getProdutos()) {
			atualizaQuantidadeProduto(p, p.getQuantidade());
		}
		
		return new ResponseEntity<>(HttpStatus.OK);
	}
	
	
	private void atualizaQuantidadeProduto(Produto produto, Integer quantidadeSaida){
		
		Produto p = produtoService.findById(produto.getCodigoProduto()).get();
		p.setQuantidade(p.getQuantidade() - quantidadeSaida);
		produtoService.save(p);
	}
	
}
