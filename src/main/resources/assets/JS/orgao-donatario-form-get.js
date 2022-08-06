function fazGet(url) {
    let request = new XMLHttpRequest()
    request.open("GET", url, false)
    request.send()
    return request.responseText
}

function preencheForm(orgaoDonatario) {
	console.log(orgaoDonatario);
	
    inputId = document.createElement("input");
    inputId.setAttribute("id", "idOrgaoDonatario");
    inputId.setAttribute("type", "hidden");
    
    inputNome = document.getElementById("nomeOrgaoDonatario");
    inputEndereco = document.getElementById("enderecoOrgaoDonatario");
    inputTelefone = document.getElementById("telefoneOrgaoDonatario");
    inputFuncionamento = document.getElementById("horarioFuncionemento");
    inputDescricao = document.getElementById("descricaoOrgaoDonatario");
    
    inputId.value = orgaoDonatario.idOrgaoDonatario
    inputNome.value = orgaoDonatario.nomeOrgaoDonatario
    inputEndereco.value = orgaoDonatario.enderecoOrgaoDonatario
    inputTelefone.value = orgaoDonatario.telefoneOrgaoDonatario
    inputFuncionamento.value = orgaoDonatario.horarioFuncionemento
    inputDescricao.value = orgaoDonatario.descricaoOrgaoDonatario

    form = document.getElementById("orgao-donatario-form");
    form.appendChild(inputId);
    
}

function main() {
    editOrgao = sessionStorage.getItem("donatarioEdit");
    if(editOrgao != null){
		let donatario = JSON.parse(editOrgao);
	    console.log(editOrgao);
	    preencheForm(donatario);
	    sessionStorage.removeItem("donatarioEdit");
	}
    
}
main();