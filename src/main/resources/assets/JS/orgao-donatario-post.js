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

function cadastrarDonatario() {
    event.preventDefault()
    
    let url = "http://localhost:8080/admin/orgao-donatario-form"
    
    let id = document.getElementById("idOrgaoDonatario")
    let nome = document.getElementById("nomeOrgaoDonatario").value
    let endereco = document.getElementById("enderecoOrgaoDonatario").value
    let telefone = document.getElementById("telefoneOrgaoDonatario").value
    let descricao = document.getElementById("descricaoOrgaoDonatario").value
    let horarioFuncionamento = document.getElementById("horarioFuncionemento").value
   
   	if(id != undefined && id != null){
		id = document.getElementById("idOrgaoDonatario").value
		body = {
			"idOrgaoDonatario":  id,
	        "nomeOrgaoDonatario": nome,
	        "descricaoOrgaoDonatario": descricao,
	        "enderecoOrgaoDonatario": endereco,
	        "telefoneOrgaoDonatario": telefone,
	        "horarioFuncionemento": horarioFuncionamento 
	    }
	}else{
		body = {
	        "nomeOrgaoDonatario": nome,
	        "descricaoOrgaoDonatario": descricao,
	        "enderecoOrgaoDonatario": endereco,
	        "telefoneOrgaoDonatario": telefone,
	        "horarioFuncionemento": horarioFuncionamento 
    	}
	}
    
    debugger;
    fazPost(url, body)
    window.location.href="./orgao-donatario.html";
}
