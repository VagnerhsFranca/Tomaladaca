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

import com.ifpe.tomaladaca.dto.OrgaoDonatarioDto;
import com.ifpe.tomaladaca.model.OrgaoDonatario;
import com.ifpe.tomaladaca.service.OrgaoDonatarioService;

@RestController
@RequestMapping("admin")
public class OrgaoDonatarioController {
	
	@Autowired
	OrgaoDonatarioService orgaoDonatarioService;
	@Autowired (required = false)
	OrgaoDonatarioDto orgaoDonatarioDto;
	
	@CrossOrigin("*")
	@GetMapping ("orgao-donatario")
	public  ResponseEntity<List<OrgaoDonatario>> orgaosDonatarios(){
		return ResponseEntity.ok(orgaoDonatarioService.findAll());
	}
	
	@CrossOrigin("*")
	@GetMapping ("orgao-donatario/delete/{idOrgaoDonatario}")
	public ResponseEntity<?> deleteOrgaoDonatario(Model model, @PathVariable Integer idOrgaoDonatario ) {
		
		if(orgaoDonatarioService.findById(idOrgaoDonatario) != null) {
			orgaoDonatarioService.delete(orgaoDonatarioService.findById(idOrgaoDonatario).get());
			return new ResponseEntity<>(HttpStatus.OK);
		}
		return new ResponseEntity<>(HttpStatus.NOT_FOUND);
	}
	
	@CrossOrigin("*")
	@GetMapping ("orgao-donatario-form/{idOrgaoDonatario}")
	public ResponseEntity<?> updateOrgaoDonatario(Model model, @PathVariable Integer idOrgaoDonatario ) {
		
		if(orgaoDonatarioService.findById(idOrgaoDonatario) != null) {
			return ResponseEntity.ok(orgaoDonatarioService.findById(idOrgaoDonatario).get());
		}
		return new ResponseEntity<>(HttpStatus.NOT_FOUND);
	}
	
	@CrossOrigin("*")
	@PostMapping("orgao-donatario-form")
	public ResponseEntity<?> saveOrgaoDonatario(Model model, @RequestBody OrgaoDonatarioDto orgaoDonatarioDto) {
		OrgaoDonatario orgaoDonatario = new OrgaoDonatario();
		
		if(orgaoDonatarioDto.getIdOrgaoDonatario() != null) {
			orgaoDonatario.setIdOrgaoDonatario(orgaoDonatarioDto.getIdOrgaoDonatario());
		}
		orgaoDonatario.setDescricaoOrgaoDonatario(orgaoDonatarioDto.getDescricaoOrgaoDonatario());
		orgaoDonatario.setEnderecoOrgaoDonatario(orgaoDonatarioDto.getEnderecoOrgaoDonatario());
		orgaoDonatario.setHorarioFuncionemento(orgaoDonatarioDto.getHorarioFuncionemento());
		orgaoDonatario.setNomeOrgaoDonatario(orgaoDonatarioDto.getNomeOrgaoDonatario());
		orgaoDonatario.setTelefoneOrgaoDonatario(orgaoDonatarioDto.getTelefoneOrgaoDonatario());
		
		orgaoDonatarioService.save(orgaoDonatario);
		
		return new ResponseEntity<>(HttpStatus.OK);
	}
	

}
