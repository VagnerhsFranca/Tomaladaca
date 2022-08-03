package com.ifpe.tomaladaca.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class OrgaoFiscalizador {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Integer idOrgaoFiscalizador;
	@Column(length = 255)
	private String nomeOrgaoFiscalizador;
	@Column(length = 255)
	private String descricaoOrgaoFiscalizador;
	
	public Integer getIdOrgaoFiscalizador() {
		return idOrgaoFiscalizador;
	}
	public void setIdOrgaoFiscalizador(Integer idOrgaoFiscalizador) {
		this.idOrgaoFiscalizador = idOrgaoFiscalizador;
	}
	public String getNomeOrgaoFiscalizador() {
		return nomeOrgaoFiscalizador;
	}
	public void setNomeOrgaoFiscalizador(String nomeOrgaoFiscalizador) {
		this.nomeOrgaoFiscalizador = nomeOrgaoFiscalizador;
	}
	public String getDescricaoOrgaoFiscalizador() {
		return descricaoOrgaoFiscalizador;
	}
	public void setDescricaoOrgaoFiscalizador(String descricaoOrgaoFiscalizador) {
		this.descricaoOrgaoFiscalizador = descricaoOrgaoFiscalizador;
	}
}
