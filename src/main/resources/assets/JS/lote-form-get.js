function fazGet(url) {
    let request = new XMLHttpRequest()
    request.open("GET", url, false)
    request.send()
    return request.responseText
}

function criaListaDonatario(donatario) {
	console.log(donatario);
	
    optionDonatario = document.createElement("option");
    optionDonatario.innerHTML = donatario.nomeOrgaoDonatario;
    optionDonatario.setAttribute("value",donatario.idOrgaoDonatario);

    return optionDonatario;
}

function criaListaFiscalizador(fiscalizador) {
	console.log(fiscalizador);
	
    optionFiscalizador = document.createElement("option");
    optionFiscalizador.innerHTML = fiscalizador.nomeOrgaoFiscalizador;
    optionFiscalizador.setAttribute("value", fiscalizador.idOrgaoFiscalizador);

    return optionFiscalizador;
}

function criaListaProduto(produto) {
	console.log(produto);
    linha = document.createElement("tr");

    tdId = document.createElement("td");
    tdNome = document.createElement("td");
    tdDescricao = document.createElement("td");
    tdQuantidade = document.createElement("td");
    
    inputQuantidade = document.createElement("input");
    inputQuantidade.setAttribute("type", "number");
	inputQuantidade.setAttribute("min", 0);
	inputQuantidade.setAttribute("max", produto.quantidade);
	inputQuantidade.setAttribute("name", "quantidade")
	inputQuantidade.value = 0;
	
	inputCodigoProduto = document.createElement("input");
    inputCodigoProduto.setAttribute("type", "hidden");
    inputCodigoProduto.setAttribute("name", "codigoProduto");
    inputCodigoProduto.value = produto.codigoProduto;
    
    tdId.innerHTML = produto.codigoProduto;
    tdNome.innerHTML = produto.nomeProduto;
    tdDescricao.innerHTML = produto.descricaoProduto;
    tdQuantidade.appendChild(inputQuantidade);
    
    linha.appendChild(tdId);
    linha.appendChild(tdNome);
    linha.appendChild(tdDescricao);
    linha.appendChild(tdQuantidade);
    linha.appendChild(inputCodigoProduto);

    return linha;
}

function main() {
    data = fazGet("http://localhost:8080/admin/produto");
    let produtos = JSON.parse(data);
    tabela = document.getElementById("tabelaProdutos");
    produtos.forEach(element => {
        let linha = criaListaProduto(element);
        tabela.appendChild(linha);
    }); 
    
    data = fazGet("http://localhost:8080/admin/orgao-donatario");
    let donatarios = JSON.parse(data);
    selectDonatario = document.getElementById("idOrgaoDonatario");
    donatarios.forEach(element => {
        let linha = criaListaDonatario(element);
        selectDonatario.appendChild(linha);
    }); 
    
    data = fazGet("http://localhost:8080/admin/orgao-fiscalizador");
    let fiscalizadores = JSON.parse(data);
    selectFiscalizador = document.getElementById("idOrgaoFiscalizador");
    fiscalizadores.forEach(element => {
        let linha = criaListaFiscalizador(element);
        selectFiscalizador.appendChild(linha);
    }); 
}


main();