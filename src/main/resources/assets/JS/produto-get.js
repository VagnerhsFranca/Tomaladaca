function fazGet(url) {
    let request = new XMLHttpRequest()
    request.open("GET", url, false)
    request.send()
    return request.responseText
}

function criaLinhaProduto(produto) {
	console.log(produto);
    linha = document.createElement("tr");

    tdId = document.createElement("td");
    tdNome = document.createElement("td");
    tdDescricao = document.createElement("td");
    tdQuantidade = document.createElement("td");
    tdOperacao = document.createElement("td");

    tdId.innerHTML = produto.codigoProduto;
    tdNome.innerHTML = produto.nomeProduto;
    tdDescricao.innerHTML = produto.descricaoProduto;
    tdQuantidade.innerHTML = produto.quantidade;
    tdOperacao.innerHTML = "<button class='btn btn-warning' onclick=\"editarProduto("+produto.codigoProduto+")\"> Editar </button>" + " | " + "<button class='btn btn-danger' onclick=\"deletarProduto("+produto.codigoProduto+")\"> Deletar </button>";
    
    linha.appendChild(tdId);
    linha.appendChild(tdNome);
    linha.appendChild(tdDescricao);
    linha.appendChild(tdQuantidade);
    linha.appendChild(tdOperacao);

    return linha;
}

function main() {
    data = fazGet("http://localhost:8080/admin/produto");
    let produtos = JSON.parse(data);
    tabela = document.getElementById("tabelaProdutos");
    produtos.forEach(element => {
        let linha = criaLinhaProduto(element);
        tabela.appendChild(linha);
    }); 
}

function editarProduto(codigoProduto){
    dataEdit = fazGet("http://localhost:8080/admin/produto-form/"+ codigoProduto);
    sessionStorage.setItem("produtoEdit", dataEdit);
    console.log(sessionStorage.getItem("produtoEdit"));
    window.location.href="./produto-form.html";
}

function deletarProduto(codigoProduto){
    fazGet("http://localhost:8080/admin/produto/delete/"+ codigoProduto);
    window.location.reload(true);

}

main();