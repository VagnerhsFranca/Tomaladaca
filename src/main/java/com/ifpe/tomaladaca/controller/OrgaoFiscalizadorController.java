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

import com.ifpe.tomaladaca.dto.OrgaoFiscalizadorDto;
import com.ifpe.tomaladaca.model.OrgaoFiscalizador;
import com.ifpe.tomaladaca.service.OrgaoFiscalizadorService;

@RestController
@RequestMapping("admin")
public class OrgaoFiscalizadorController {

	@Autowired 
	OrgaoFiscalizadorService orgaoFiscalizadorService;
	@Autowired (required = false)
	OrgaoFiscalizadorDto orgaoFiscalizadorDto;
	
	@CrossOrigin("*")
	@GetMapping ("orgao-fiscalizador")
	public  ResponseEntity<List<OrgaoFiscalizador>> orgaosFiscalizadores(){
		return ResponseEntity.ok(orgaoFiscalizadorService.findAll());
	}
	
	@CrossOrigin("*")
	@GetMapping ("orgao-fiscalizador/delete/{idOrgaoFiscalizador}")
	public ResponseEntity<?> deleteOrgaoFiscalizador(Model model, @PathVariable Integer idOrgaoFiscalizador ) {
		
		if(orgaoFiscalizadorService.findById(idOrgaoFiscalizador) != null) {
			orgaoFiscalizadorService.delete(orgaoFiscalizadorService.findById(idOrgaoFiscalizador).get());
			return new ResponseEntity<>(HttpStatus.OK);
		}
		return new ResponseEntity<>(HttpStatus.NOT_FOUND);
	}
	
	@CrossOrigin("*")
	@PostMapping("orgao-fiscalizador-form")
	public ResponseEntity<?> saveOrgaoFiscalizador(Model model,@RequestBody OrgaoFiscalizadorDto orgaoFiscalizadorDto) {
		OrgaoFiscalizador orgaoFiscalizador = new OrgaoFiscalizador();
		
		if(orgaoFiscalizadorDto.getIdOrgaoFiscalizador() != null) {
			orgaoFiscalizador.setIdOrgaoFiscalizador(orgaoFiscalizadorDto.getIdOrgaoFiscalizador());
		}
		orgaoFiscalizador.setNomeOrgaoFiscalizador(orgaoFiscalizadorDto.getNomeOrgaoFiscalizador());
		orgaoFiscalizador.setDescricaoOrgaoFiscalizador(orgaoFiscalizadorDto.getDescricaoOrgaoFiscalizador());
		
		orgaoFiscalizadorService.save(orgaoFiscalizador);
		
		return new ResponseEntity<>(HttpStatus.OK);
	}	
}
