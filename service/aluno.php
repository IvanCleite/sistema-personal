<?php

class Aluno
{
    //private $id;
    private $nome;
    private $sexo;
    private $idade;
    private $altura;
    private $peso;
    private $cel;
    private $email;
    private $cpf;
    private $endereco;
    private $dia;
    private $valor;

    public function __get($atributo)
    {
        return $this->$atributo;
    }

    public function __set($atributo, $valor)
    {
        $this->$atributo = $valor;
    }

}