
function limpa_formulario_cep()
{
  //Limpa valores do formulário de cep.
  document.getElementById('logradouro').value=("");
  document.getElementById('bairro').value=("");
  document.getElementById('cidade').value=("");
  document.getElementById('estado').value=("");
}

function meu_callback(conteudo)
{
  if (!("erro" in conteudo))
  {
    //Atualiza os campos com os valores.
    document.getElementById('logradouro').value=(conteudo.logradouro);
    document.getElementById('bairro').value=(conteudo.bairro);
    document.getElementById('cidade').value=(conteudo.localidade);
    document.getElementById('estado').value=(conteudo.uf);
  } //end if.
  else
  {
    //CEP não Encontrado.
    limpa_formulario_cep();
    alert("CEP não encontrado.");
    document.getElementById('cep').value=("");
  }
}

function pesquisacep(valor)
{
  //Nova variável "cep" somente com dígitos.
  var cep = valor.replace(/\D/g, '');

  //Verifica se campo cep possui valor informado.
  if (cep !== "")
  {
    //Expressão regular para validar o CEP.
    var validacep = /^[0-9]{8}$/;

    //Valida o formato do CEP.
    if(validacep.test(cep))
    {
      //Preenche os campos com "..." enquanto consulta webservice.
      document.getElementById('logradouro').value="...";
      document.getElementById('bairro').value="...";
      document.getElementById('cidade').value="...";
      document.getElementById('estado').value="...";

      //Cria um elemento javascript.
      var script = document.createElement('script');

      //Sincroniza com o callback.
      script.src = 'http://viacep.com.br/ws/'+ cep + '/json/?callback=meu_callback';

      //Insere script no documento e carrega o conteúdo.
      document.body.appendChild(script);
    } //end if.
    else
    {
      //cep é inválido.
      limpa_formulario_cep();
      alert("Formato de CEP inválido.");
    }
  } //end if.
  else
  {
    //cep sem valor, limpa formulário.
    limpa_formulario_cep();
  }
}

function formatar(mascara, documento)
{
  var i = documento.value.length;
  var saida = mascara.substring(0,1);
  var texto = mascara.substring(i);
  
  if (texto.substring(0,1) != saida)
  {
    documento.value += texto.substring(0,1);
  }
  
}
 
function idade ()
{
  var data = document.getElementById("dtnasc").value;
  var dia=data.substr(0, 2);
  var mes=data.substr(3, 2);
  var ano=data.substr(6, 4);
  var d = new Date();
  var ano_atual = d.getFullYear(),
      mes_atual = d.getMonth() + 1,
      dia_atual = d.getDate();
      ano=+ano,
      mes=+mes,
      dia=+dia;
  var idade=ano_atual-ano;
  if (mes_atual < mes || mes_atual == mes_aniversario && dia_atual < dia)
  {
    idade--;
  }
  return idade;
} 

function concluircadastro() {
  window.onload=function()
  {                
    window.location = "Agendamento.html"; 
  }
}

function exibe(i)
{
  document.getElementById(i).readOnly= true;
}

function desabilita(i)
{
  document.getElementById(i).disabled = true;    
}

function habilita(i)
{
  document.getElementById(i).disabled = false;
}

function showhide()
{
  var div = document.getElementById("newpost");
  if(idade() >= 18)
  {
    div.style.display = "none";
  }
  else if(idade()<18)
  {
    div.style.display = "inline";
  }
}

function validaQuestionario()
{
  if
  (
    document.getElementById("p3s").checked == true ||
    document.getElementById("medicamento").checked == true ||
    document.getElementById("trat-pele").checked == true ||
    document.getElementById("p5s").checked == true ||
    document.getElementById("p6s").checked == true
  )
  {
    alert("Desculpe, mas você não está apto atualmente para doar sangue.");
  }
  else
  {
    window.location.href = "Cadastro.html";
  }
}

/*
function agendamento()
{
  var erros = 0;
  var mgs = "";
  
  if(document.getElementById("nome").value == '')
  {
		mgs += 'Informe o nome.\n';
		erros++;
	}
  
  if(document.getElementById("sexo").value == '')
  {
		mgs += 'Informe o sexo.\n';
		erros++;
	}
  
  if(document.getElementById("sexo").value == '')
  {
		mgs += 'Informe o sexo.\n';
		erros++;
	}
  
  //if(erros>0)
  if(document.formulario.classList.value == 'was-validated')
  {
		//alert(mgs);
		//return false;
    window.location.href = "Agendamento.html";
	}
  //else
  //{
  //document.formulario.submit();
  //window.location.href = "Agendamento.html";
  //}
  //window.location.href = "Agendamento.html";
}
*/
