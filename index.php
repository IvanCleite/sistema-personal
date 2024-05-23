<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.3/font/bootstrap-icons.css">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
    <title>Sistema Personal</title>
    <link rel="stylesheet" href="css/estilo.css">
    <link rel="shortcut icon" href="img/favicon.ico" type="image/x-icon">

</head>

<body>



        <nav class="container navbar navbar-expand-md navbar-dark fixed-top">

            <div class="container nav-container d-flex">

                <a class="navbar-brand ms-3" href="#">
                    <h6 class="display-6">ALUNOS</h6>
                </a>

                <button class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#dropMenu">
                    <i class="bi bi-list text-white"></i>
                </button>

                <div class="navbar-collapse collapse" id="dropMenu" onmouseleave="closeNav()">
                    <ul class="navbar-nav ml-auto mt-2">

                        <li class="nav-item">
                            <a id="home" class="nav-link linkDisabled">Home</a>
                        </li>

                        <div class="dropdown" onmouseleave="closeMenu()">
                            <li id="navItemAlunos" class="nav-item">

                                <a id="alunos" class="nav-link dropdown-toggle" data-bs-toggle="dropdown"
                                    onmouseenter="openMenu()">
                                    Alunos
                                </a>

                                <ul id="dropMenuId" class="dropdown-menu" onmouseleave="closeMenu()"
                                    onmouseenter="openMenu()">
                                    <li><a id="cadastra" class="dropdown-item nav-link" href="#"
                                            onclick="cadastraAluno()">Cadastra</a></li>

                                    <li><a id="edita" class="dropdown-item nav-link" href="#"
                                            onclick="editaAluno()">Edita</a></li>

                                    <li><a id="lista" class="dropdown-item nav-link" href="#">Lista</a></li>
                                </ul>
                            </li>
                        </div>

                        <li class="nav-item">
                            <a id="videos" class="nav-link" href="#" onclick="listaVideos()">Vídeos</a>
                        </li>
                        <li class="nav-item">
                            <a id="financeiro" class="nav-link" href="#" onclick="financeiro()">Financeiro</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>


    <div id="container-principal" class="container container-principal ">



    </div>

    <footer id="footer" class="container fixed-bottom ">
        <div id="divButton" class="d-flex justify-content-end">

        </div>
    </footer>

    <script src="get_script.php"></script>


</body>


</html>