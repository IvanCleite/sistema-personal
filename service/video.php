<?php

class Video
{
    //private $id;
    private $nome;
    private $modalidade;
    private $descricao;

    public function __get($atributo)
    {
        return $this->$atributo;
    }

    public function __set($atributo, $valor)
    {
        $this->$atributo = $valor;
    }

}