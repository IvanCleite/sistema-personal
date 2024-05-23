function formularioAluno(alunoAEditar) {

  let form = document.createElement("form");
  form.action = "controle.php?acao=editar";
  form.id = 'formAluno'
  form.method = "post";

  // Input id oculto ----------------------------
  let inputId = document.createElement("input");
  inputId.type = "text";
  inputId.name = "id";
  inputId.id = "id";
  inputId.value = alunoAEditar[0];
  inputId.hidden = true;

  // Input Nome ---------------------------------
  let lableNome = document.createElement("lable");
  lableNome.className = "form-lable ms-2";
  lableNome.innerHTML = "Nome:";

  let inputNome = document.createElement("input");
  inputNome.type = "text";
  inputNome.name = "nome";
  inputNome.className = "form-control mb-2";
  inputNome.placeholder = " nome completo";
  inputNome.value = alunoAEditar[1];

  // Input Sexo ---------------------------------
  let lableSexo = document.createElement("lable");
  lableSexo.className = "form-lable ms-2";
  lableSexo.innerHTML = "Sexo:";

  let inputSexo = document.createElement("input");
  inputSexo.type = "text";
  inputSexo.name = "sexo";
  inputSexo.className = "form-control mb-2";
  inputSexo.setAttribute("list", "sexos");
  inputSexo.placeholder = "escolha o sexo";
  inputSexo.value = alunoAEditar[2];

  let dataList = document.createElement("datalist");
  dataList.id = "sexos";
  let opM = document.createElement("option");
  opM.value = "M";
  let opF = document.createElement("option");
  opF.value = "F";

  dataList.appendChild(opM);
  dataList.appendChild(opF);
  inputSexo.appendChild(dataList);

  // Input Idade ---------------------------------
  let lableIdade = document.createElement("lable");
  lableIdade.className = "form-lable ms-2";
  lableIdade.innerHTML = "Idade:";

  let inputIdade = document.createElement("input");
  inputIdade.type = "number";
  inputIdade.name = "idade";
  inputIdade.className = "form-control mb-1";
  inputIdade.placeholder = "idade";
  inputIdade.value = alunoAEditar[3];

  // Input Altura ---------------------------------
  let lableAltura = document.createElement("lable");
  lableAltura.className = "form-lable ms-2";
  lableAltura.innerHTML = "Altura:";

  let inputAltura = document.createElement("input");
  inputAltura.type = "number";
  inputAltura.name = "altura";
  inputAltura.className = "form-control mb-1";
  inputAltura.placeholder = "altura";
  inputAltura.value = alunoAEditar[4];

  // Input Peso ---------------------------------
  let lablePeso = document.createElement("lable");
  lablePeso.className = "form-lable ms-2";
  lablePeso.innerHTML = "Peso:";

  let inputPeso = document.createElement("input");
  inputPeso.type = "number";
  inputPeso.name = "peso";
  inputPeso.className = "form-control mb-1";
  inputPeso.placeholder = "peso";
  inputPeso.value = alunoAEditar[5];

  // Input Cel ---------------------------------
  let lableCel = document.createElement("lable");
  lableCel.className = "form-lable ms-2";
  lableCel.innerHTML = "Celular:";

  let inputCel = document.createElement("input");
  inputCel.type = "text";
  inputCel.name = "cel";
  inputCel.className = "form-control mb-1";
  inputCel.placeholder = "celular";
  inputCel.value = alunoAEditar[6];

  // Input Email ---------------------------------
  let lableEmail = document.createElement("lable");
  lableEmail.className = "form-lable ms-2";
  lableEmail.innerHTML = "E-mail:";

  let inputEmail = document.createElement("input");
  inputEmail.type = "text";
  inputEmail.name = "email";
  inputEmail.className = "form-control mb-1";
  inputEmail.placeholder = "e-mail";
  inputEmail.value = alunoAEditar[7];

  // Input CPF ---------------------------------
  let lableCPF = document.createElement("lable");
  lableCPF.className = "form-lable ms-2";
  lableCPF.innerHTML = "CPF:";

  let inputCPF = document.createElement("input");
  inputCPF.type = "cpf";
  inputCPF.name = "cpf";
  inputCPF.className = "form-control mb-1";
  inputCPF.placeholder = "CPF";
  inputCPF.value = alunoAEditar[8];

  // Input Endereco ---------------------------------
  let lableEndereco = document.createElement("lable");
  lableEndereco.className = "form-lable ms-2";
  lableEndereco.innerHTML = "Endereço:";

  let inputEndereco = document.createElement("input");
  inputEndereco.type = "text";
  inputEndereco.name = "endereco";
  inputEndereco.className = "form-control mb-1";
  inputEndereco.placeholder = "endereço";
  inputEndereco.value = alunoAEditar[9];

  // Input Dia ---------------------------------
  let lableDia = document.createElement("lable");
  lableDia.className = "form-lable ms-2";
  lableDia.innerHTML = "Dia de pagamento:";

  let inputDia = document.createElement("input");
  inputDia.type = "number";
  inputDia.name = "dia";
  inputDia.className = "form-control mb-1";
  inputDia.placeholder = "dia de pagamento";
  inputDia.value = alunoAEditar[10];

  // Input Valor ---------------------------------
  let lableValor = document.createElement("lable");
  lableValor.className = "form-lable ms-2";
  lableValor.innerHTML = "Valor:";

  let inputValor = document.createElement("input");
  inputValor.type = "number";
  inputValor.name = "valor";
  inputValor.className = "form-control mb-3";
  inputValor.placeholder = "valor";
  inputValor.value = alunoAEditar[11];

  // Div para o Button Submit
  //let divButton = document.createElement("div");
  //divButton.style = "text-align: right;";

  // Button Submit --------------------------------
  let buttonSubmit = document.createElement("button");
  buttonSubmit.type = "submit";
  buttonSubmit.setAttribute('form', 'formAluno')
  buttonSubmit.className = "btn btn-info form-button mt-3 mb-3";
  buttonSubmit.innerHTML = "Enviar";

  //divButton.appendChild(buttonSubmit);

  form.appendChild(inputId);
  form.appendChild(lableNome);
  form.appendChild(inputNome);
  form.appendChild(lableSexo);
  form.appendChild(inputSexo);
  form.appendChild(lableIdade);
  form.appendChild(inputIdade);
  form.appendChild(lableAltura);
  form.appendChild(inputAltura);
  form.appendChild(lablePeso);
  form.appendChild(inputPeso);
  form.appendChild(lableCel);
  form.appendChild(inputCel);
  form.appendChild(lableEmail);
  form.appendChild(inputEmail);
  form.appendChild(lableCPF);
  form.appendChild(inputCPF);
  form.appendChild(lableEndereco);
  form.appendChild(inputEndereco);
  form.appendChild(lableDia);
  form.appendChild(inputDia);
  form.appendChild(lableValor);
  form.appendChild(inputValor);
  //form.appendChild(divButton);

  let containerPrincipal = document.getElementById("container-principal");
  divButton = document.getElementById("divButton");

  containerPrincipal.insertBefore(form, containerPrincipal[0]);
  divButton.insertBefore(buttonSubmit, divButton[0]);
}
