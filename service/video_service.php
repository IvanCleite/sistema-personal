<?php

class VideoService
{

    private $conexao;
    private $video;

    public function __construct(Conexao $conexao, Video $video)
    {
        $this->conexao = $conexao->conectar();
        $this->video = $video;
    }

    public function inserir()
    {


    }
    public function videoRecupear()
    {

        $query = 'select id, nome, modalidade, descricao from videos';
        $stmt = $this->conexao->prepare($query);
        $stmt->execute();
        return $stmt->fetchAll(PDO::FETCH_OBJ);

        
    }

    public function editar()
    {



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

}