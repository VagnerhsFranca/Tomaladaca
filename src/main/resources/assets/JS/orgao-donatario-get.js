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

    tdId.innerHTML = orgaoDonatario.idOrgaoDonatario;
    tdNome.innerHTML = orgaoDonatario.nomeOrgaoDonatario;
    tdEndereco.innerHTML = orgaoDonatario.enderecoOrgaoDonatario;
    tdTelefone.innerHTML = orgaoDonatario.telefoneOrgaoDonatario;
    tdHorarioFuncionemento.innerHTML = orgaoDonatario.horarioFuncionemento;
    tdDescricao.innerHTML = orgaoDonatario.descricaoOrgaoDonatario;
    tdOperacao.innerHTML = "<button class='btn btn-warning' onclick=\"editarDonatario("+orgaoDonatario.idOrgaoDonatario+")\"> Editar </button>" + " | " + "<button class='btn btn-danger' onclick=\"deletarDonatario("+orgaoDonatario.idOrgaoDonatario+")\"> Deletar </button>";
    
    linha.appendChild(tdId);
    linha.appendChild(tdNome);
    linha.appendChild(tdEndereco);
    linha.appendChild(tdTelefone);
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

function editarDonatario(idOrgaoDonatario){
    dataEdit = fazGet("http://localhost:8080/admin/orgao-donatario-form/"+ idOrgaoDonatario);
    sessionStorage.setItem("donatarioEdit", dataEdit);
    console.log(sessionStorage.getItem("donatarioEdit"));
    window.location.href="./orgao-donatario-form.html";
}

function deletarDonatario(idOrgaoDonatario){
    fazGet("http://localhost:8080/admin/orgao-donatario/delete/"+ idOrgaoDonatario);
    window.location.reload(true);
}

main();