<?php

    include("includes/headers.php");

    $rs = [
        "nome"      => 'Gutemberg',
        "idade"     => 39,
        "cidade"    => 'Belo Horizonte / MG',
        "pais"      => 'Brasil',
    ];

    echo json_encode($rs,true);

?>