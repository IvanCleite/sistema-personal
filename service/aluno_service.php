<?php

class AlunoService
{

    private $conexao;
    private $aluno;

    public function __construct(Conexao $conexao, Aluno $aluno)
    {
        $this->conexao = $conexao->conectar();
        $this->aluno = $aluno;
    }

    public function inserir()
    {
        $query = 'insert into alunos (nome, sexo, idade, altura, peso, cel, email, cpf, endereco, dia, valor)values
            (:nome, :sexo, :idade, :altura, :peso, :cel, :email, :cpf, :endereco, :dia, :valor)';

        $stmt = $this->conexao->prepare($query);
        $stmt->bindValue(':nome', $this->aluno->__get('nome'));
        $stmt->bindValue(':sexo', $this->aluno->__get('sexo'));
        $stmt->bindValue(':idade', $this->aluno->__get('idade'));
        $stmt->bindValue(':altura', $this->aluno->__get('altura'));
        $stmt->bindValue(':peso', $this->aluno->__get('peso'));
        $stmt->bindValue(':cel', $this->aluno->__get('cel'));
        $stmt->bindValue(':email', $this->aluno->__get('email'));
        $stmt->bindValue(':cpf', $this->aluno->__get('cpf'));
        $stmt->bindValue(':endereco', $this->aluno->__get('endereco'));
        $stmt->bindValue(':dia', $this->aluno->__get('dia'));
        $stmt->bindValue(':valor', $this->aluno->__get('valor'));

        $stmt->execute();

    }
    public function recupear()
    {
        $query = 'select id, nome, email, pais from alunos';
        $stmt = $this->conexao->prepare($query);
        $stmt->execute();
        return $stmt->fetchAll(PDO::FETCH_OBJ);
    }
    public function editar()
    {

        $query = "UPDATE alunos SET nome = :nome, sexo = :sexo, idade = :idade, altura = :altura, peso = :peso, cel = :cel, email = :email, cpf = :cpf, endereco = :endereco, dia = :dia, valor = :valor WHERE id = :id";
        $stmt = $this->conexao->prepare($query);
        $stmt->bindValue(':id', $this->aluno->__get('id'));
        $stmt->bindValue(':nome', $this->aluno->__get('nome'));
        $stmt->bindValue(':sexo', $this->aluno->__get('sexo'));
        $stmt->bindValue(':idade', $this->aluno->__get('idade'));
        $stmt->bindValue(':altura', $this->aluno->__get('altura'));
        $stmt->bindValue(':peso', $this->aluno->__get('peso'));
        $stmt->bindValue(':cel', $this->aluno->__get('cel'));
        $stmt->bindValue(':email', $this->aluno->__get('email'));
        $stmt->bindValue(':cpf', $this->aluno->__get('cpf'));
        $stmt->bindValue(':endereco', $this->aluno->__get('endereco'));
        $stmt->bindValue(':dia', $this->aluno->__get('dia'));
        $stmt->bindValue(':valor', $this->aluno->__get('valor'));
        $stmt->execute();

    }
    /*
    public function excluir()
    {
        $query = "DELETE FROM alunos WHERE id = :id";
        $stmt = $this->conexao->prepare($query);
        $stmt->bindValue(':id', $this->aluno->__get('id'));
        $stmt->execute();
    }
    */

    public function pesquisar($nome)
    {

        $query = 'SELECT * FROM alunos WHERE nome LIKE "' . $nome . '%"';
        $stmt = $this->conexao->prepare($query);


        $stmt->execute();
        return $stmt->fetchAll(PDO::FETCH_OBJ);

    }

    public function pesquisarId($idString)
    {

        $id = (int) $idString;
        $query = 'SELECT * FROM alunos WHERE id = :id';
        //$query = 'select id, nome, sexo, idade, altura, peso, cel, email, cpf, endereco, dia, valor from alunos where id = :id';
        $stmt = $this->conexao->prepare($query);
        $stmt->bindValue(':id', $this->aluno->__get('id'));

        $stmt->execute();
        return $stmt->fetchAll(PDO::FETCH_OBJ);

    }

    public function listaVideos()
    {
        $query = 'select id, nome, modalidade from videos';
        $stmt = $this->conexao->prepare($query);
        $stmt->execute();
        return $stmt->fetchAll(PDO::FETCH_OBJ);
    }


}