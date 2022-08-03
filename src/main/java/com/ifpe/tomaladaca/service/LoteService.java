package com.ifpe.tomaladaca.service;

import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ifpe.tomaladaca.model.Lote;
import com.ifpe.tomaladaca.repository.LoteRepository;

@Service
public class LoteService {

	@Autowired
	LoteRepository loteRepository;
	
	@Transactional
	public Lote save(Lote lote) {
		return loteRepository.save(lote);
	}
	
	@Transactional
	public void delete(Lote lote) {
		loteRepository.delete(lote);
	}
	
	public List<Lote> findAll() {
		return loteRepository.findAll();
	}

	public Optional<Lote> findById(int idLote) {
		return loteRepository.findById(idLote);
	}
}
