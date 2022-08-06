package com.ifpe.tomaladaca.model;

import java.io.Serializable;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;

@Entity
public class Lote implements Serializable{

	/**
	 * 
	 */
	private static final long serialVersionUID = 3677373405821767695L;
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Integer idLote;
	@Column
	private Date dataEntrega;
	@Column
	private LocalDateTime dataCadastro;
	@Column(length = 255)
	private String descricaoLote;
	@ManyToOne
	private OrgaoDonatario orgaoDonatario;
	@ManyToOne
	private OrgaoFiscalizador orgaoFiscalizador;
	@ManyToMany
	private List<Produto> produtos = new ArrayList<>();
	
	public Integer getIdLote() {
		return idLote;
	}
	public void setIdLote(Integer idLote) {
		this.idLote = idLote;
	}
	public Date getDataEntrega() {
		return dataEntrega;
	}
	public void setDataEntrega(Date dataEntrega) {
		this.dataEntrega = dataEntrega;
	}
	public String getDescricaoLote() {
		return descricaoLote;
	}
	public void setDescricaoLote(String descricaoLote) {
		this.descricaoLote = descricaoLote;
	}
	public OrgaoDonatario getOrgaoDonatario() {
		return orgaoDonatario;
	}
	public void setOrgaoDonatario(OrgaoDonatario orgaoDonatario) {
		this.orgaoDonatario = orgaoDonatario;
	}
	public OrgaoFiscalizador getOrgaoFiscalizador() {
		return orgaoFiscalizador;
	}
	public void setOrgaoFiscalizador(OrgaoFiscalizador orgaoFiscalizador) {
		this.orgaoFiscalizador = orgaoFiscalizador;
	}
	public List<Produto> getProdutos() {
		return produtos;
	}
	public void setProdutos(List<Produto> produtos) {
		this.produtos = produtos;
	}
	public LocalDateTime getDataCadastro() {
		return dataCadastro;
	}
	public void setDataCadastro(LocalDateTime dataCadastro) {
		this.dataCadastro = dataCadastro;
	}
	public void addProdutos(Produto produto) {
		this.produtos.add(produto);
	}
	public void removeProdutos(Produto produto) {
		this.produtos.remove(produto);
	}
	public static long getSerialversionuid() {
		return serialVersionUID;
	}
	
}
