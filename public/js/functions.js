
function validacao() {
    var erros = validaContato();
    mensagemErro.innerHTML = "";
    
    if(erros.length > 0){
      for(var i=0; i < erros.length; i++){
          var erro = erros[i];
          var li = document.createElement("li");
          li.innerHTML = erro;
          mensagemErro.appendChild(li);
      }
    }else{
       // Código que envia os dados
      // para o BD
      document.getElementById("confirmacao").style.display = "block";
    }       

    function validaContato(){
    var erros = [];

    if(!nomes.value || nomes.value.length<8 || nomes.value.length>40){
      erros.push("Prencher nome corretamente!");
    }

    if(!email.value ||
        (email.value.search("@") == -1) ||
        (email.value.search(".") == -1) ||
        (email.value.search(" ") >= '')){
      erros.push("O formato do email é: usuario@dominio.com");
    }

    if(isNaN(telefone.value) || !telefone.value || (telefone.value.search("9") == -1) || telefone.value.length <10 || telefone.value.length >11){
      erros.push("Insira um número valido!");
    }
    return erros;
  }

}


function validacaoLogin(){
  document.getElementById("confirmacaoLogin").style.display = "none";
  document.getElementById("loginErrado").style.display = "none";

  if (login.value == 'caio_lindinho2002feio' && password.value == 'caioba123'){
    document.getElementById("confirmacaoLogin").style.display = "block";
  }else{
    document.getElementById("loginErrado").style.display = "block";
  }
}

function abrircadastro(){
  window.location.href = 'cadastro.html'
}

function voltar() {
  window.location.href = 'site_pessoal.html'
}