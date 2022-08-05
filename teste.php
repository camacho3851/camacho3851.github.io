<?php
if($_GET['tipo'] == 'incluirVisitante'){

    //abrindo o json externo
    $json = json_decode(file_get_contents('assets/db/db.json'));

    $visitanteNum = $json->visitante;

    //Editando a linha que vc quer
    $json->visitante =  $json->visitante + 1;

    //Salvando as edições
    $json_editado = file_put_contents('assets/db/db.json',json_encode($json));

    //Carregando json após ser salvo já editado
    $json = json_decode(file_get_contents('assets/db/db.json'));
    //Imprimindo json editado
    $visitanteNum = $json->visitante;
    echo json_decode(json_encode('{"visitante": '.$json->visitante.'}'));

}
?>