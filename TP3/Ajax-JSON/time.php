<?php
$date = getdate();
$hours = $date['hours'];
$minutes = $date['minutes'];
$seconds = $date['seconds'];
$hour = "Il est ".$hours.":".$minutes.":".$seconds;
$tab = array($hour,array('hours' => $hours,'minutes' => $minutes,'seconds' => $seconds));
$json = json_encode($tab);
echo $json;
//echo $json[0].",\n\t{\n\thours :".$json[1]['hours']."\n\tminutes :".$json[1]['minutes']."\n\tseconds :".$json[1]['seconds']."\n\t}\n]";
?>