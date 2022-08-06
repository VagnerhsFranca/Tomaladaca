function fazGet(url) {
    let request = new XMLHttpRequest()
    request.open("GET", url, false)
    request.send()
    return request.responseText
}

function criaLinhaLote(lote) {
	console.log(lote);
    linha = document.createElement("tr");

    tdId = document.createElement("td");
    tdDonatario = document.createElement("td");
    tdFiscalizador = document.createElement("td");
    tdProdutos = document.createElement("td");
    tdDataCadastro = document.createElement("td");
    tdDataEntrega = document.createElement("td");
    tdOperacao = document.createElement("td");

    tdId.innerHTML = lote.idLote;
    
    tdDonatario.innerHTML = lote.OrgaoDonatario.nomeOrgaoDonatario
    
    fiscalizador = lote.OrgaoFiscalizador
    tdFiscalizador.innerHTML = fiscalizador.nomeOrgaoFiscalizador
   
   	produtos = lote.produtos 
   	var listaProdutos
   	produtos.forEach(element => {
       listaProtudos = listaProdutos + element.nomeProduto + " " + element.quantidade + "x" + "<br>"
    }); 
    tdProdutos.innerHTML = listaProdutos;
   
    tdOperacao.innerHTML = "<button class='btn btn-danger' onclick=\"deletarLote("+lote.idLote+")\"> Deletar </button>";
    
    linha.appendChild(tdId);
    linha.appendChild(tdFiscalizador);
    linha.appendChild(tdDonatario);
    linha.appendChild(tdProdutos);
    linha.appendChild(tdDataEntrega);
    linha.appendChild(tdDataCadastro);
    linha.appendChild(tdOperacao);

    return linha;
}

function main() {
    data = fazGet("http://localhost:8080/admin/lote");
    let produtos = JSON.parse(data);
    tabela = document.getElementById("tabelaLotes");
    produtos.forEach(element => {
        let linha = criaLinhaLote(element);
        tabela.appendChild(linha);
    }); 
}


function deletarLote(codigoProduto){
    fazGet("http://localhost:8080/admin/lote/delete/"+ codigoProduto);
    window.location.reload(true);

}

main();