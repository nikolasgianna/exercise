<?php

define('MAX_I', 1000);

final class Plant {
    public static function growingPlant($upSpeed, $downSpeed, $desiredHeight) {

        $i = 0;

        while ($i < MAX_I) {
            $i++;
            if (($upSpeed * $i) - ($downSpeed * ($i - 1)) >= $desiredHeight)
                return $i;
        }
        return -1;
    }
}
?>
