<?php
$tabCIR1 = array(array("login" => "ak", "id" => 1000, "notes" => array("DS"=>array(15,16),"partiel" =>array(17,18))),array("login" => "tn", "id" => 1001, "notes" => array("DS" => array(13,12),"partiel" => array(16,17))),array("login" => "lm", "id" => 1002, "notes" => array("DS" => array(10,11),"partiel" => array(14,13))));
$tabCIR2 = array(array("login" => "sl", "id" => 2000, "notes" => array("DS"=>array(17,12),"partiel" =>array(16,19))),array("login" => "ep", "id" => 2001, "notes" => array("DS"=>array(11,15),"partiel" =>array(13,14))),array("login" => "tr", "id" => 2002, "notes" => array("DS"=>array(12,11),"partiel" =>array(10,15))));
$tabCSI2 = array(array("login" => "mp", "id" => 3000, "notes" => array("DS"=>array(10,12),"partiel" =>array(13,11))),array("login" => "fi", "id" => 3001, "notes" => array("DS"=>array(12,14),"partiel" =>array(10,11))),array("login" => "dr", "id" => 3002, "notes" => array("DS"=>array(9,12),"partiel" =>array(11,13))));
$date = getdate();
$heure = $date['hours'].":".$date['minutes'];
$date2 = $date['mday']."/".$date['mon']."/".$date['year'];
$dateHour = $date2." ".$heure;
$tabEtu = array($dateHour,"CIR1" => $tabCIR1, "CIR2" => $tabCIR2, "CSI2" => $tabCSI2);
$json = json_encode($tabEtu);
echo $json;