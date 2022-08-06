package com.ifpe.tomaladaca.controller;

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

import com.ifpe.tomaladaca.dto.ProdutoDto;
import com.ifpe.tomaladaca.model.Produto;
import com.ifpe.tomaladaca.service.ProdutoService;

@RestController
@RequestMapping("admin")
public class ProdutoController {

	@Autowired 
	ProdutoService produtoService;
	
	@CrossOrigin("*")
	@GetMapping ("produto")
	public  ResponseEntity<List<Produto>> produtos(){
		return ResponseEntity.ok(produtoService.findAll());
	}
	
	@CrossOrigin("*")
	@GetMapping ("produto/delete/{codigoProduto}")
	public ResponseEntity<?> deleteProduto(Model model, @PathVariable Integer codigoProduto ) {
		
		if(produtoService.findById(codigoProduto) != null) {
			produtoService.delete(produtoService.findById(codigoProduto).get());
			return new ResponseEntity<>(HttpStatus.OK);
		}
		return new ResponseEntity<>(HttpStatus.NOT_FOUND);
	}
	
	@CrossOrigin("*")
	@GetMapping ("produto-form/{codigoProduto}")
	public ResponseEntity<?> updateProduto(Model model, @PathVariable Integer codigoProduto ) {
		
		if(produtoService.findById(codigoProduto) != null) {
			return ResponseEntity.ok(produtoService.findById(codigoProduto).get());
		}
		return new ResponseEntity<>(HttpStatus.NOT_FOUND);
	}
	
	@CrossOrigin("*")
	@PostMapping("produto-form")
	public ResponseEntity<?> saveProduto(Model model, @RequestBody ProdutoDto produtoDto) {
		Produto produto = new Produto();
		if(produtoDto.getCodigoProduto() != null) {
			produto.setCodigoProduto(produtoDto.getCodigoProduto());
		}
		produto.setNomeProduto(produtoDto.getNomeProduto());
		produto.setDescricaoProduto(produtoDto.getDescricaoProduto());
		produto.setQuantidade(produtoDto.getQuantidade());
		
		produtoService.save(produto);
		
		return new ResponseEntity<>(HttpStatus.OK);
	}
	
}
