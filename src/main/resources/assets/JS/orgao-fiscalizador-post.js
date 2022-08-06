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

function cadastrarFiscalizador() {
    event.preventDefault()
    
    let url = "http://localhost:8080/admin/orgao-fiscalizador-form"
    
    let id = document.getElementById("idOrgaoFiscalizador")
    let nome = document.getElementById("nomeOrgaoFiscalizador").value
    let descricao = document.getElementById("descricaoOrgaoFiscalizador").value
   
   	if(id != undefined && id != null){
		id = document.getElementById("idOrgaoFiscalizador").value
		body = {
			"idOrgaoFiscalizador":  id,
	        "nomeOrgaoFiscalizador": nome,
	        "descricaoOrgaoFiscalizador": descricao
	    }
	}else{
		body = {
	        "nomeOrgaoFiscalizador": nome,
	        "descricaoOrgaoFiscalizador": descricao
    	}
	}
    
    fazPost(url, body)
    window.location.href="./orgao-fiscalizador.html";
}
