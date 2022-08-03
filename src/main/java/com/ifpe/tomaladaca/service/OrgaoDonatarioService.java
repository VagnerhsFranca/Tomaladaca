package com.ifpe.tomaladaca.service;

import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ifpe.tomaladaca.model.OrgaoDonatario;
import com.ifpe.tomaladaca.repository.OrgaoDonatarioRepository;

@Service
public class OrgaoDonatarioService {

	@Autowired
	OrgaoDonatarioRepository orgaoDonatatioRepository;
	
	@Transactional
	public OrgaoDonatario save(OrgaoDonatario orgaoDonatario) {
		return orgaoDonatatioRepository.save(orgaoDonatario);
	}
	
	@Transactional
	public void delete(OrgaoDonatario orgaoDonatario) {
		orgaoDonatatioRepository.delete(orgaoDonatario);
	}
	
	public List<OrgaoDonatario> findAll() {
		return orgaoDonatatioRepository.findAll();
	}

	public Optional<OrgaoDonatario> findById(int idOrgaoDonatario) {
		return orgaoDonatatioRepository.findById(idOrgaoDonatario);
	}
	
}
