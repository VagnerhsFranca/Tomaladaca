package com.ifpe.tomaladaca.service;

import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ifpe.tomaladaca.model.OrgaoFiscalizador;
import com.ifpe.tomaladaca.repository.OrgaoFiscalizadorRepository;

@Service
public class OrgaoFiscalizadorService {

	@Autowired
	OrgaoFiscalizadorRepository orgaoFiscalizadorRepository;
	
	@Transactional
	public OrgaoFiscalizador save(OrgaoFiscalizador orgaoFiscalizador) {
		return orgaoFiscalizadorRepository.save(orgaoFiscalizador);
	}
	
	@Transactional
	public void delete(OrgaoFiscalizador orgaoFiscalizador) {
		orgaoFiscalizadorRepository.delete(orgaoFiscalizador);
	}
	
	public List<OrgaoFiscalizador> findAll() {
		return orgaoFiscalizadorRepository.findAll();
	}

	public Optional<OrgaoFiscalizador> findById(int idorgaoFiscalizador) {
		return orgaoFiscalizadorRepository.findById(idorgaoFiscalizador);
	}
}
