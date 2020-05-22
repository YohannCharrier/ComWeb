<?php
$date = getdate();
$hours = $date['hours'];
$minutes = $date['minutes'];
$seconds = $date['seconds'];
$hour = "Il est ".$hours.":".$minutes.":".$seconds;
$tab = array($hour,array('hours' => $hours,'minutes' => $minutes,'seconds' => $seconds));
$json = json_encode($tab);
echo $json;

?>