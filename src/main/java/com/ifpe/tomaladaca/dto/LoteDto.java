package com.ifpe.tomaladaca.dto;

import java.util.Date;
import java.util.List;

import com.ifpe.tomaladaca.model.Produto;

public class LoteDto {

	private Integer idLote;
	private Integer idDonatario;
	private Integer idFiscalizador;
	private List<Produto> produtos;
	private String descricaoLote;
	private Date dataEntrega;
	public Integer getIdDonatario() {
		return idDonatario;
	}
	public void setIdDonatario(Integer idDonatario) {
		this.idDonatario = idDonatario;
	}
	public Integer getIdFiscalizador() {
		return idFiscalizador;
	}
	public void setIdFiscalizador(Integer idFiscalizador) {
		this.idFiscalizador = idFiscalizador;
	}
	public List<Produto> getProdutos() {
		return produtos;
	}
	public void setProdutos(List<Produto> produtos) {
		this.produtos = produtos;
	}
	public String getDescricaoLote() {
		return descricaoLote;
	}
	public void setDescricaoLote(String descricaoLote) {
		this.descricaoLote = descricaoLote;
	}
	public Date getDataEntrega() {
		return dataEntrega;
	}
	public void setDataEntrega(Date dataEntrega) {
		this.dataEntrega = dataEntrega;
	}
	
	public Integer getIdLote() {
		return idLote;
	}
	public void setIdLote(Integer idLote) {
		this.idLote = idLote;
	}
}
