function fazPost(url, body) {
    console.log("Body=", body)
    let request = new XMLHttpRequest()
    request.open("POST", url, true)
    request.setRequestHeader("Content-type", "application/json")
    request.send(JSON.stringify(body))

    request.onload = function() {
        console.log(this.responseText)
    }

    return request.responseText
}

function cadastrarProduto() {
    event.preventDefault()
    
    let url = "http://localhost:8080/admin/produto-form"
    
    let nome = document.getElementById("nomeProduto").value
    let descricao = document.getElementById("descricaoProduto").value
    
    let id = document.getElementById("codigoProduto")
    let quantidade = document.getElementById("quantidade").value
   
   	if(id != undefined && id != null){
		id = document.getElementById("codigoProduto").value
		body = {
			"codigoProduto":  id,
	        "nomeProduto": nome,
	        "descricaoProduto": descricao,
	        "quantidade": quantidade
	    }
	}else{
		body = {
	        "nomeProduto": nome,
	        "descricaoProduto": descricao,
	        "quantidade": quantidade
    	}
	}
	console.log(body)
    fazPost(url, body)
    window.location.href="./produto.html";
}
