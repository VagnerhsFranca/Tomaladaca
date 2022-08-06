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

    tdId.innerHTML = orgaoDonatario.idOrgaoDonatario;
    tdNome.innerHTML = orgaoDonatario.nomeOrgaoDonatario;
    tdEndereco.innerHTML = orgaoDonatario.enderecoOrgaoDonatario;
    tdTelefone.innerHTML = orgaoDonatario.telefoneOrgaoDonatario;
    tdHorarioFuncionemento.innerHTML = orgaoDonatario.enderecoOrgaoDonatario;
    tdDescricao.innerHTML = orgaoDonatario.descricaoOrgaoDonatario;

    linha.appendChild(tdId);
    linha.appendChild(tdNome);
    linha.appendChild(tdEndereco);
    linha.appendChild(tdTelefone);
    linha.appendChild(tdHorarioFuncionemento);
    linha.appendChild(tdDescricao);

    return linha;
}

function main() {
    debugger;
    data = fazGet("http://localhost:8080/admin/orgao-donatario");
    let donatarios = JSON.parse(data);
    debugger;
    tabela = document.getElementById("tabelaDonatarios");
    donatarios.forEach(element => {
        let linha = criaLinhaDonatario(element);
        tabela.appendChild(linha);
    });

}

main();