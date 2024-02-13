const cadastros = [{login:"fulano",senha:"12"},{login:"teste",senha:"123"}];

function entrar(){
    login = document.getElementById("login").value;   
    senha = (document.getElementById("senha").value).toString();
    let achou = false;
    let resultado = document.getElementById("resultado");
    
    for(var i =0; i < cadastros.length; i++){
        if(cadastros[i].login == login && cadastros[i].senha == senha){
            achou = true;
            break;
        }
    }
    if(achou){
        resultado.style.color = '#21f10e';
        resultado.innerHTML ="Login efetuado com sucesso!!";
    }
    else{
        resultado.style.color = 'red';
        resultado.innerHTML ="Login ou Senha incorreta!!";
    }
}