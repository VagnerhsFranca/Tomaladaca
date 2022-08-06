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
    tdDonatario.innerHTML = lote.orgaoDonatario.nomeOrgaoDonatario
    tdFiscalizador.innerHTML = lote.orgaoFiscalizador.nomeOrgaoFiscalizador
    tdOperacao.innerHTML = "<button class='btn btn-danger' onclick=\"deletarLote("+lote.idLote+")\"> Deletar </button>";
    tdDataEntrega.innerHTML = lote.dataEntrega
    tdDataCadastro.innerHTML = lote.dataCadastro
   
   	produtos = lote.produtos
   	console.log(produtos)
   	for (var i = 0; i < produtos.length; i++) {
       let listaProdutos = document.createElement("p");
       listaProdutos.innerHTML = "<p>"+ produtos[i].nomeProduto + " " + produtos[i].quantidade + "x" + "</p>"       
       tdProdutos.appendChild(listaProdutos)
    }; 
    
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
    let lotes = JSON.parse(data);
    console.log(lotes)
    tabela = document.getElementById("tabelaLotes");
    lotes.forEach(element => {
        let linha = criaLinhaLote(element);
        tabela.appendChild(linha);
    }); 
}


function deletarLote(codigoProduto){
	data = fazGet("http://localhost:8080/admin/lote/"+codigoProduto);
	lote = JSON.parse(data)
	
	dataCadastro = new Date(lote.dataCadastro)
	console.log(dataCadastro)
	dataAtual = new Date();
	console.log(dataAtual)
	
	var ms = moment(dataAtual, "DD/MM/YYYY HH:mm:ss").diff(moment(dataCadastro, "DD/MM/YYYY HH:mm:ss"))
	console.log(ms)
	var m = moment.utc(ms).format(" mm");
	console.log(m)	
	if(m <= 30){
		fazGet("http://localhost:8080/admin/lote/delete/"+ codigoProduto);
		window.alert("O lote foi excluido")
		window.location.reload(true);
	}else{
		window.alert("O lote nao pode ser excluido")
	}
    
    
}

main();