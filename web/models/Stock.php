<?php
class Stock
{
    public $title;
    public $price;
    public $change;
    public $percentage;

    function __construct($title, $price, $change, $percentage) {
        $this->title = $title;
        $this->price = $price;
        $this->change = $change;
        $this->percentage = $percentage;
    }
}

?>
