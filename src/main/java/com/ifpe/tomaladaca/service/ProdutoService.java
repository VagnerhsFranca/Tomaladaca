package com.ifpe.tomaladaca.service;

import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ifpe.tomaladaca.model.Produto;
import com.ifpe.tomaladaca.repository.ProdutoRepository;

@Service
public class ProdutoService {
	
	@Autowired
	ProdutoRepository produtoRepository;
	
	@Transactional
	public Produto save(Produto produto) {
		return produtoRepository.save(produto);
	}
	
	@Transactional
	public void delete(Produto produto) {
		produtoRepository.delete(produto);
	}
	
	public List<Produto> findAll() {
		return produtoRepository.findAll();
	}

	public Optional<Produto> findById(int codigoProduto) {
		return produtoRepository.findById(codigoProduto);
	}
}
