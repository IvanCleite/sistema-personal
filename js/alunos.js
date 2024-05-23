function cadastraAluno() {
  closeMenu();
  closeNav();
  disableLinks();

  button("sair", "index.php", "divButton");

  let aluno = [];
  for (i = 0; i < 11; i++) {
    aluno[i] = "";
  }
  formularioAluno(aluno);
}
