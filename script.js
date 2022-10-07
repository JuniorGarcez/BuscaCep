// ***FUNCIONANDO NO BOTÃO***
//function buscacep() {
//    cep = document.getElementById("cep").value
//
//    if (cep.length != 8) {
//        alert("cep invalido")
//    } else {
//
//        url = `https://viacep.com.br/ws/${cep}/json/`
//        fetch(url).then(function (response) {
//            response.json().then(function (data) {
//                document.getElementById("logradouro").value = data.logradouro
//                document.getElementById("complemento").value = data.complemento
//                document.getElementById("bairro").value = data.bairro
//                document.getElementById("cidade").value = data.localidade
//            })
//        })
//    }
//}

// *** AJAX ***

let xhr = new XMLHttpRequest();
function buscacep(cep) {
    cep = $("#cep").val().replace('-', '').replace('.', '')
    if (cep.length == 8) {
        xhr.onreadystatechange = () => {
            if (xhr.readyState == 4 && xhr.status == 200) {
                let retorno = JSON.parse(xhr.responseText);
                $('#logradouro').val(retorno.logradouro)
                $('#cidade').val(retorno.localidade)
                $('#bairro').val(retorno.bairro)
                $('#estado').val(retorno.uf)
            }
        }
        xhr.open('GET', `https://viacep.com.br/ws/${cep}/json/`)
        xhr.send()
    }
}


const chk = document.getElementById('chk')

chk.addEventListener('change', () => {
    document.body.classList.toggle('dark')
})
