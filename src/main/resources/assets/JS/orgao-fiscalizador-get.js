function fazGet(url) {
    let request = new XMLHttpRequest()
    request.open("GET", url, false)
    request.send()
    return request.responseText
}

function criaLinhaFiscalizador(orgaoFiscalizador) {
	console.log(orgaoFiscalizador);
    linha = document.createElement("tr");

    tdId = document.createElement("td");
    tdNome = document.createElement("td");
    tdDescricao = document.createElement("td");
    tdOperacao = document.createElement("td");

    tdId.innerHTML = orgaoFiscalizador.idOrgaoFiscalizador;
    tdNome.innerHTML = orgaoFiscalizador.nomeOrgaoFiscalizador;
    tdDescricao.innerHTML = orgaoFiscalizador.descricaoOrgaoFiscalizador;
    tdOperacao.innerHTML = "<button class='btn btn-warning' onclick=\"editarFiscalizador("+orgaoFiscalizador.idOrgaoFiscalizador+")\"> Editar </button>" + " | " + "<button class='btn btn-danger' onclick=\"deletarFiscalizador("+orgaoFiscalizador.idOrgaoFiscalizador+")\"> Deletar </button>";
    
    linha.appendChild(tdId);
    linha.appendChild(tdNome);
    linha.appendChild(tdDescricao);
    linha.appendChild(tdOperacao);

    return linha;
}

function main() {
    data = fazGet("http://localhost:8080/admin/orgao-fiscalizador");
    let donatarios = JSON.parse(data);
    tabela = document.getElementById("tabelaFiscalizadores");
    donatarios.forEach(element => {
        let linha = criaLinhaFiscalizador(element);
        tabela.appendChild(linha);
    });

    
}

function editarFiscalizador(idOrgaoFiscalizador){
    dataEdit = fazGet("http://localhost:8080/admin/orgao-fiscalizador-form/"+ idOrgaoFiscalizador);
    sessionStorage.setItem("fiscalizadorEdit", dataEdit);
    console.log(sessionStorage.getItem("fiscalizadorEdit"));
    debugger;
    window.location.href="./orgao-fiscalizador-form.html";
}

function deletarFiscalizador(idOrgaoFiscalizador){
    dataDelete = fazGet("http://localhost:8080/admin/orgao-fiscalizador/delete/"+ idOrgaoFiscalizador);
    window.location.reload(true);
}

main();