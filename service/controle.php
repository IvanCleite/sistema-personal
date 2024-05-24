<?php

//session_start();

require 'aluno.php';
require 'aluno_service.php';
require 'video.php';
require 'video_service.php';
require 'conexao.php';

$acao = $_GET['acao'];

if ($acao == 'inserir') {
    $aluno = new Aluno();
    $aluno->__set('nome', $_POST['nome']);
    $aluno->__set('sexo', $_POST['sexo']);
    $aluno->__set('idade', $_POST['idade']);
    $aluno->__set('altura', $_POST['altura']);
    $aluno->__set('peso', $_POST['peso']);
    $aluno->__set('cel', $_POST['cel']);
    $aluno->__set('email', $_POST['email']);
    $aluno->__set('cpf', $_POST['cpf']);
    $aluno->__set('endereco', $_POST['endereco']);
    $aluno->__set('dia', $_POST['dia']);
    $aluno->__set('valor', $_POST['valor']);

    $conexao = new Conexao();

    $alunoServive = new AlunoService($conexao, $aluno);

    $alunoServive->inserir();

    header('Location: ../index.php?cadastrar=1');

    /*

} elseif ($acao == 'recuperar') {

        $aluno = new Aluno();
        $conexao = new Conexao();

        $alunoServive = new AlunoService($conexao, $aluno);
        $alunos = $alunoServive->recupear();

        */

} elseif ($acao == 'editar') {

    $aluno = new Aluno();
    $aluno->__set('id', $_POST['id']);
    $aluno->__set('nome', $_POST['nome']);
    $aluno->__set('sexo', $_POST['sexo']);
    $aluno->__set('idade', $_POST['idade']);
    $aluno->__set('altura', $_POST['altura']);
    $aluno->__set('peso', $_POST['peso']);
    $aluno->__set('cel', $_POST['cel']);
    $aluno->__set('email', $_POST['email']);
    $aluno->__set('cpf', $_POST['cpf']);
    $aluno->__set('endereco', $_POST['endereco']);
    $aluno->__set('dia', $_POST['dia']);
    $aluno->__set('valor', $_POST['valor']);

    $conexao = new Conexao();

    $alunoServive = new AlunoService($conexao, $aluno);
    $alunoServive->editar();

    header('Location: ../index.php?edicao=1');

    /*
} elseif ($acao == 'excluir') {

    $aluno = new Aluno();
    $aluno->__set('id', $_POST['id']);
    $conexao = new Conexao();
    $alunoServive = new AlunoService($conexao, $aluno);
    $alunoServive->excluir();

    header('Location: lista_alunos.php?');
    */

} elseif ($acao == 'recuperar1') {

    $aluno = new Aluno();
    $conexao = new Conexao();
    $alunoServive = new AlunoService($conexao, $aluno);

    $alunosEditar = $alunoServive->pesquisar($_GET['nomeDigitado']);

    if (count($alunosEditar) > 0) {

        for ($i = 0; $i < count($alunosEditar); $i++) {
            $nomesAlunosEditar[$i]['id'] = $alunosEditar[$i]->id;
            $nomesAlunosEditar[$i]['nome'] = $alunosEditar[$i]->nome;
            $nomesAlunosEditar[$i]['endereco'] = $alunosEditar[$i]->endereco;

        }

        $jsonAlunosEditar = json_encode($nomesAlunosEditar);
        print_r($jsonAlunosEditar);
    } else {
        print_r($alunosEditar);
    }



} elseif ($acao == 'recuperar2') {

    $aluno = new Aluno();
    $aluno->__set('id', $_GET['idEscolhido']);

    $conexao = new Conexao();
    $alunoServive = new AlunoService($conexao, $aluno);

    $alunosEditar = $alunoServive->pesquisarId($_GET['idEscolhido']);

    $arrayAluno = get_object_vars(($alunosEditar[0]));

    $cadAluno = array(
        $arrayAluno['id'],
        $arrayAluno['nome'],
        $arrayAluno['sexo'],
        $arrayAluno['idade'],
        $arrayAluno['altura'],
        $arrayAluno['peso'],
        $arrayAluno['cel'],
        $arrayAluno['email'],
        $arrayAluno['cpf'],
        $arrayAluno['endereco'],
        $arrayAluno['dia'],
        $arrayAluno['valor']
    );


    $alunoJson = json_encode($cadAluno);


    print_r($alunoJson);

} elseif ($acao == 'videoRecuperar') {
    $video = new Video();
    $conexao = new Conexao();

    $videoServive = new VideoService($conexao, $video);
    $videos = $videoServive->videoRecupear();

    if (count($videos) > 0) {

        for ($i = 0; $i < count($videos); $i++) {
            $arrayVideos[] = $videos[$i]->nome . ' => ' . $videos[$i]->descricao;
        }

        $jsonVideos = json_encode($arrayVideos);
        print_r($jsonVideos);
    } else {
        print_r($videos);
    }

    //$videosJson = json_encode($videos);

} elseif ($acao == 'executaVideo') {

    $videoFile = "C:/xampp/personal2/img/" . $_GET['video'] . ".mp4";


    $videoData = file_get_contents($videoFile);

    // Set content headers
    header("Content-Type: video/mp4");
    header("Content-Length: " . filesize($videoFile));

    // Send video data
    echo $videoData;

} elseif ($acao == 'carregaImagem') {

    $imgFile = "C:/xampp/personal2/img/" . $_GET['nomeImagem'] . ".png";


    $imgData = file_get_contents($imgFile);

    // Set content headers
    header("Content-Type: image/png");
    header("Content-Length: " . filesize($imgFile));

    // Send video data
    echo $imgData;
} elseif ($acao == 'carregaPoster') {

    $imgPoster = "C:/xampp/personal2/img/" . $_GET['video'] . "-poster.png";


    $imgData = file_get_contents($imgPoster);

    // Set content headers
    header("Content-Type: image/png");
    header("Content-Length: " . filesize($imgPoster));

    // Send video data
    echo $imgData;
}
