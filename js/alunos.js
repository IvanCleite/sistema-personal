function cadastraAluno() {
  closeMenu();
  closeNav();
  disableLinks();

  button("sair", "index.php", "divButton");

  let aluno = [];
  for (i = 0; i < 11; i++) {
    aluno[i] = "";
  }
  let acao = "service/controle.php?acao=inserir";
  formularioAluno(aluno, acao);
}

function editaAluno() {
  closeMenu();
  closeNav();
  disableLinks();

  button("sair", "index.php", "divButton");

  sessionStorage.setItem("nomeDigitado", "");

  window.addEventListener("keydown", function (event) {
    if (
      event.key === "ArrowUp" ||
      event.key === "ArrowDown" ||
      event.key === "ArrowLeft" ||
      event.key === "ArrowRight" ||
      (event.key === " " && sessionStorage.getItem("nomeDigitado") === "")
    ) {
      event.preventDefault();
    }
  });

  // ------ Criando o formulário para selecionar o aluno a editar ------
  // -------------------------------------------------------------------
  let form = document.createElement("form");
  form.action = "service/controle.php?acao=recuparar1";
  form.method = "post";

  // ------- Input nome para selecionar o aluno a editar ---------------
  let lableNome = document.createElement("lable");
  lableNome.className = "form-lable ms-2";
  lableNome.innerHTML = "Nome:";

  let inputNome = document.createElement("input");
  inputNome.id = "nome";
  inputNome.type = "text";
  inputNome.name = "nome";
  inputNome.setAttribute("autocomplete", "off");
  inputNome.setAttribute("autofocus", "on");
  inputNome.className = "form-control mb-2";
  inputNome.setAttribute("onkeypress", "keyPress(event)");
  inputNome.placeholder = " digite o nome";

  // Div para o Button Submit
  let divButton = document.createElement("div");
  divButton.id = "divButton";
  divButton.className = "d-flex justify-content-end";

  form.appendChild(lableNome);
  form.appendChild(inputNome);

  let containerPrincipal = document.getElementById("container-principal");

  let containerInternoSup = document.createElement("div");
  containerInternoSup.className = "container-interno-sup";
  containerInternoSup.style.height = "80px";

  containerInternoSup.appendChild(form);

  containerPrincipal.insertBefore(containerInternoSup, containerPrincipal[0]);

  let containerInternoInf = document.createElement("div");
  containerInternoInf.id = "containerInternoInf";
  containerInternoInf.className = "container-interno-inf";
  containerInternoInf.style.height = "670px";

  containerPrincipal.insertBefore(containerInternoInf, containerPrincipal[0]);
}

function keyPress(event) {
  document.addEventListener("keydown", function (event) {
    if (event.key === "Backspace") {
      let inputNome = document.getElementById("nome").value;
      let nomeDigitado = inputNome.slice(0, inputNome.length - 1);
      sessionStorage.setItem("nomeDigitado", nomeDigitado);
      if (nomeDigitado != "") {
        envia(nomeDigitado);
      } else {
        containerInternoInf.innerHTML = "";
      }
    }
  });

  let nomeDigitado = sessionStorage.getItem("nomeDigitado");
  let character = event.key;
  nomeDigitado += character;
  sessionStorage.setItem("nomeDigitado", nomeDigitado);

  envia(nomeDigitado);

  function envia(nomeDigitado) {
    console.log("==>>", nomeDigitado);
    var xhr = new XMLHttpRequest();

    xhr.open(
      "GET",
      "service/controle.php?nomeDigitado=" + nomeDigitado + "&acao=recuperar1",
      true
    );

    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
      }
    };

    xhr.onload = function () {
      if (xhr.status === 200) {
        let retornoBD = xhr.responseText;
        let nomesAlunosEditar = null;

        try {
          nomesAlunosEditar = JSON.parse(retornoBD);
        } catch (error) {
          console.error("Failed to parse JSON:", error);
          nomesAlunosEditar = ["Não existe no banco de dados"];
        }

        // ----- Lista nomes a editar selecionados pelos caracteres digitados usando links ---------
        // -----------------------------------------------------------------------------------------
        //let linkId = [];
        let numId = 0;
        let linhaId = null;
        let linhaNome = null;
        let linhaEndereco = null;
        let divRow = [];
        let divColId = [];
        let divColNome = [];
        let divColEndereco = [];
        let divNomes = document.createElement("div");
        divNomes.className = "inner-content";
        containerInternoInf.innerHTML = "";

        for (i = 0; i < nomesAlunosEditar.length; i++) {
          linhaNome = nomesAlunosEditar[i].nome;
          linhaEndereco = nomesAlunosEditar[i].endereco;

          divRow[i] = document.createElement("div");

          if (i % 2 === 0) {
            divRow[i].className = "linhaClarear row m-1";
          } else {
            divRow[i].className = "row m-1";
          }

          divRow[i].name = nomesAlunosEditar[i].id;
          divRow[i].onclick = function () {
            let idSelecionado = this.name;
            escolhido(idSelecionado);
          };
          divRow[i].style.cursor = "pointer";

          divColId[i] = document.createElement("div");
          divColId[i].className = "col-1";
          divColId[i].innerHTML = linhaId;

          divColNome[i] = document.createElement("div");
          divColNome[i].className = "col-6";
          divColNome[i].innerHTML = linhaNome;

          divColEndereco[i] = document.createElement("div");
          divColEndereco[i].className = "col-5";
          divColEndereco[i].innerHTML = linhaEndereco;

          divRow[i].appendChild(divColId[i]);
          divRow[i].appendChild(divColNome[i]);
          divRow[i].appendChild(divColEndereco[i]);

          containerInternoInf.appendChild(divRow[i]);
        }
        let containerPrincipal = document.getElementById("container-principal");

        containerPrincipal.insertBefore(
          containerInternoInf,
          containerPrincipal[0]
        );
      } else {
        console.error("Error:", xhr.statusText);
      }
    };

    xhr.send();
  }

  // -- Envia o id do nome selecionado ao servidor para retornar o cadastro completo para edição --
  // ----------------------------------------------------------------------------------------------
  function escolhido(escolhido) {
    var xhr = new XMLHttpRequest();
    xhr.open(
      "GET",
      "service/controle.php?idEscolhido=" + escolhido + "&acao=recuperar2",
      true
    );

    xhr.onload = function () {
      if (xhr.status === 200) {
        let cadNomeEscolhido = JSON.parse(xhr.responseText);

        let containerPrincipal = document.getElementById("container-principal");
        containerPrincipal.innerHTML = "";

        let acao = "service/controle.php?acao=editar";
        formularioAluno(cadNomeEscolhido, acao);
      }
    };
    xhr.send();
  }
}
