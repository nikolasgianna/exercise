<?php

function growingPlant($upSpeed, $downSpeed, $desiredHeight) {
  
    define(MAX_I, 1000);
    $i = 0;
    
    while ($i < MAX_I) {
        $i++;
        if (($upSpeed * $i) - ($downSpeed * ($i - 1)) >= $desiredHeight)
            return $i;
    }
    return -1;
}

echo growingPlant(100,10,450)

?>