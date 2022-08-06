function fazGet(url) {
    let request = new XMLHttpRequest()
    request.open("GET", url, false)
    request.send()
    return request.responseText
}

function preencheForm(produto) {
	console.log(produto);
	
	inputId = document.createElement("input");
    inputId.setAttribute("id", "codigoProduto");
    inputId.setAttribute("type", "hidden");

    inputNome = document.getElementById("nomeProduto");
    inputDescricao = document.getElementById("descricaoProduto");
    inputQuantidade = document.getElementById("quantidade");
    
    inputId.value = produto.codigoProduto
    inputNome.value = produto.nomeProduto
    inputDescricao.value = produto.descricaoProduto
	inputQuantidade.value = produto.quantidade
    
    form = document.getElementById("produto-form");
    form.appendChild(inputId);
}

function main() {
    editProduto = sessionStorage.getItem("produtoEdit");
    if(editProduto != null){
		let produto = JSON.parse(editProduto);
	    console.log(editProduto);
	    preencheForm(produto);
	    sessionStorage.removeItem("produtoEdit");
	}
}
main();