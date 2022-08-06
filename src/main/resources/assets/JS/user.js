function fazGet(url) {
    let request = new XMLHttpRequest()
    request.open("GET", url, false)
    request.send()
    return request.responseText
}

function criaLinhaDonatario(orgaoDonatario) {
	console.log(orgaoDonatario);
    linha = document.createElement("tr");

    tdId = document.createElement("td");
    tdNome = document.createElement("td");
    tdEndereco = document.createElement("td");
    tdTelefone = document.createElement("td");
    tdHorarioFuncionemento = document.createElement("td");
    tdDescricao = document.createElement("td");
    tdOperacao = document.createElement("td");
    
    tdNome.innerHTML = orgaoDonatario.nomeOrgaoDonatario;
    tdEndereco.innerHTML = orgaoDonatario.enderecoOrgaoDonatario;
    tdTelefone.innerHTML = orgaoDonatario.telefoneOrgaoDonatario;
    tdHorarioFuncionemento.innerHTML = orgaoDonatario.horarioFuncionemento;
    tdDescricao.innerHTML = orgaoDonatario.descricaoOrgaoDonatario;
    tdOperacao.innerHTML = "<button type='button' class='btn btn-info btn-lg' data-toggle='modal' data-target='#MyModal' onclick=\"preencheModal("+orgaoDonatario.idOrgaoDonatario+")\">Lotes</button>";
    
    linha.appendChild(tdNome);
    linha.appendChild(tdTelefone);
    linha.appendChild(tdEndereco);
    linha.appendChild(tdHorarioFuncionemento);
    linha.appendChild(tdDescricao);
    linha.appendChild(tdOperacao);

    return linha;
}

function main() {
    data = fazGet("http://localhost:8080/admin/orgao-donatario");
    let donatarios = JSON.parse(data);
    tabela = document.getElementById("tabelaDonatarios");
    donatarios.forEach(element => {
        let linha = criaLinhaDonatario(element);
        tabela.appendChild(linha);
    });
}

function preencheModal(idDonatario){
	data = fazGet("http://localhost:8080/admin/lote/donatario/"+idDonatario);
	let lotesDonatario = JSON.parse(data);
	
	dataNome = fazGet("http://localhost:8080/admin/orgao-donatario/"+idDonatario);
	let donatario = JSON.parse(dataNome);
	
	tituloModal = document.getElementById("tituloModal");
	tituloModal.innerHTML = donatario.nomeOrgaoDonatario
	
    tabela = document.getElementById("conteudoModal");
    lotesDonatario.forEach(element => {
        
        let linha = document.createElement("div")
        
        let tdId = document.createElement("p")
        tdId.innerHTML = 'Lote: ' + element.idLote
        
        let tdDataEntrega = document.createElement("p");
        tdDataEntrega.innerHTML = 'Data de Entrega: ' + element.dataEntrega
        
        let tdProdutos = document.createElement("p");
        let tdP = document.createElement("p")
        tdP.innerHTML = "Produtos: "
        tdProdutos.appendChild(tdP)
        
        produtos = element.produtos
   		console.log(produtos)
   		ulProduto = document.createElement("ul")
   		for (var i = 0; i < produtos.length; i++) {
	       	let liProdutos = document.createElement("li");
	       	liProdutos.innerHTML =  produtos[i].nomeProduto + " " + produtos[i].quantidade + "x"
	       	ulProduto.appendChild(liProdutos)
    	};
        tdProdutos.appendChild(ulProduto);
        
        linha.appendChild(tdId);
        linha.appendChild(tdDataEntrega);
        linha.appendChild(tdProdutos);
        tabela.appendChild(linha);
        
    });
}

main();