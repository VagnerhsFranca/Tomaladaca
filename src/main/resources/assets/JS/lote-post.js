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

function fazGet(url) {
    let request1 = new XMLHttpRequest()
    request1.open("GET", url, false)
    request1.send()
    return request1.responseText
}

function cadastrarLote() {
    event.preventDefault()
    
    let url = "http://localhost:8080/admin/lote-form"
    
    let descricaoLote = document.getElementById("descricaoLote").value
    let dataEntrega = document.getElementById("dataEntrega").value
    let selectOrgaoDonatario = document.getElementById("idOrgaoDonatario")
    let valueOrgaoDonatario = selectOrgaoDonatario.options[selectOrgaoDonatario.selectedIndex].value
    let selectOrgaoFiscalizador = document.getElementById("idOrgaoFiscalizador")
    let valueOrgaoFiscalizador = selectOrgaoFiscalizador.options[selectOrgaoFiscalizador.selectedIndex].value

    let donatario = new Object()
    donatario.idOrgaoDonatario = valueOrgaoDonatario

    let fiscalizador = new Object()
    fiscalizador.idOrgaoFiscalizador = valueOrgaoFiscalizador
    
    data = fazGet("http://localhost:8080/admin/produto");
    let listaProdutos = JSON.parse(data);
    
    var produtoQuantidade = document.getElementsByName("quantidade")
    var produtoCodigo = document.getElementsByName("codigoProduto")
    var arrayDeProdutos = [];
    for (var i = 0; i < produtoCodigo.length; i++) {
        for(var j = 0; j < listaProdutos.length; j++){
            if (produtoQuantidade[i].value != 0 && produtoCodigo[i].value == listaProdutos[j].codigoProduto) {
                let produto = new Object()
                produto.codigoProduto = produtoCodigo[i].value
                produto.quantidade = produtoQuantidade[i].value
                arrayDeProdutos.push(produto)
            }
        }
    } 
   	body={
        "descricaoLote": descricaoLote,
        "idDonatario": donatario.idOrgaoDonatario,
        "idFiscalizador": fiscalizador.idOrgaoFiscalizador,
        "dataEntrega": dataEntrega,
        "produtos": arrayDeProdutos
    }
	console.log(body);
    fazPost(url, body)
    window.location.href="./lote.html";
}
