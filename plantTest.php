<?php

require_once('growingPlant.php');

use PHPUnit\Framework\TestCase;

final class PlantTest extends TestCase
{
    public function testGrowingPlant(): void
    {
        $this->assertEquals(
            5,
            Plant::growingPlant(100,10,450)
        );
        $this->assertEquals(
            1,
            Plant::growingPlant(10,9,4)
        );
        $this->assertEquals(
            -1,
            Plant::growingPlant(0,1,2)
        );
        $this->assertEquals(
            1,
            Plant::growingPlant(100,10,40)
        );
    }
}
