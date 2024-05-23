<?php
// Check if the script file exists
if (file_exists('js/conf-exib.js')) {

    // Read the script content
    $scriptContent1 = file_get_contents('js/conf-exib.js');
    $scriptContent2 = file_get_contents('js/alunos.js');
    $scriptContent3 = file_get_contents('js/videos.js');
    $scriptContent4 = file_get_contents('js/financeiro.js');
    $scriptContent5 = file_get_contents('js/formulario-aluno.js');

    // Set the content type header
    header('Content-Type: application/javascript');

    // Output the script content
    echo $scriptContent1;
    echo $scriptContent2;
    echo $scriptContent3;
    echo $scriptContent4;
    echo $scriptContent5;

} else {
    // Handle script file not found error
    echo 'Script file not found';
}

