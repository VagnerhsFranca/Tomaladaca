function fazGet(url) {
    let request = new XMLHttpRequest()
    request.open("GET", url, false)
    request.send()
    return request.responseText
}

function preencheForm(orgaoFiscalizador) {
    
    inputId = document.createElement("input");
    inputId.setAttribute("id", "idOrgaoFiscalizador");
    inputId.setAttribute("type", "hidden");
    
    inputNome = document.getElementById("nomeOrgaoFiscalizador");
    inputDescricao = document.getElementById("descricaoOrgaoFiscalizador");
        
    inputId.value = orgaoFiscalizador.idOrgaoFiscalizador
    inputNome.value = orgaoFiscalizador.nomeOrgaoFiscalizador
    inputDescricao.value = orgaoFiscalizador.descricaoOrgaoFiscalizador
    
    form = document.getElementById("orgao-fiscalizador-form");
    form.appendChild(inputId);
}

function main() {
    editOrgao = sessionStorage.getItem("fiscalizadorEdit");
    if(editOrgao != null){
	    let fiscalizador = JSON.parse(editOrgao);
	    console.log(editOrgao);
	    preencheForm(fiscalizador);
	    sessionStorage.removeItem("fiscalizadorEdit");
    }
}
main();