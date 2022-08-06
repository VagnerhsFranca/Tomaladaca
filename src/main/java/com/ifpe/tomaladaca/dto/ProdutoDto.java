package com.ifpe.tomaladaca.dto;

public class ProdutoDto {

	private Integer codigoProduto;
	private String nomeProduto;
	private String descricaoProduto;
	private Integer quantidade;
	
	public Integer getCodigoProduto() {
		return codigoProduto;
	}
	public void setCodigoProduto(Integer codigoProduto) {
		this.codigoProduto = codigoProduto;
	}
	public String getNomeProduto() {
		return nomeProduto;
	}
	public void setNomeProduto(String nomeProduto) {
		this.nomeProduto = nomeProduto;
	}
	public String getDescricaoProduto() {
		return descricaoProduto;
	}
	public void setDescricaoProduto(String descricaoProduto) {
		this.descricaoProduto = descricaoProduto;
	}
	public Integer getQuantidade() {
		return quantidade;
	}
	public void setQuantidade(Integer quantidade) {
		this.quantidade = quantidade;
	}
}
