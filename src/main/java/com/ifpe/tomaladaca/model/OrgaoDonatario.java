package com.ifpe.tomaladaca.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class OrgaoDonatario {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Integer idOrgaoDonatario;
	@Column(length = 255)
	private String nomeOrgaoDonatario;
	@Column(length = 255)
	private String enderecoOrgaoDonatario;
	@Column(length = 15)
	private String telefoneOrgaoDonatario;
	@Column(length = 15)
	private String horarioFuncionemento;
	@Column(length = 255)
	private String descricaoOrgaoDonatario;
	
	public Integer getIdOrgaoDonatario() {
		return idOrgaoDonatario;
	}
	public void setIdOrgaoDonatario(Integer idOrgaoDonatario) {
		this.idOrgaoDonatario = idOrgaoDonatario;
	}
	public String getNomeOrgaoDonatario() {
		return nomeOrgaoDonatario;
	}
	public void setNomeOrgaoDonatario(String nomeOrgaoDonatario) {
		this.nomeOrgaoDonatario = nomeOrgaoDonatario;
	}
	public String getEnderecoOrgaoDonatario() {
		return enderecoOrgaoDonatario;
	}
	public void setEnderecoOrgaoDonatario(String enderecoOrgaoDonatario) {
		this.enderecoOrgaoDonatario = enderecoOrgaoDonatario;
	}
	public String getTelefoneOrgaoDonatario() {
		return telefoneOrgaoDonatario;
	}
	public void setTelefoneOrgaoDonatario(String telefoneOrgaoDonatario) {
		this.telefoneOrgaoDonatario = telefoneOrgaoDonatario;
	}
	public String getHorarioFuncionemento() {
		return horarioFuncionemento;
	}
	public void setHorarioFuncionemento(String horarioFuncionemento) {
		this.horarioFuncionemento = horarioFuncionemento;
	}
	public String getDescricaoOrgaoDonatario() {
		return descricaoOrgaoDonatario;
	}
	public void setDescricaoOrgaoDonatario(String descricaoOrgaoDonatario) {
		this.descricaoOrgaoDonatario = descricaoOrgaoDonatario;
	}
}
