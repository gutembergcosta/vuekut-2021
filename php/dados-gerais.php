<?php

    include("includes/headers.php");

    $rs = [
        "nome"      => 'Fulano de tal',
        "idade"     => 39,
        "cidade"    => 'Belo Horizonte / MG',
        "pais"      => 'Brasil',
    ];

    echo json_encode($rs);

?>