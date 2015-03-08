<?php
class CashTransaction
{
    public $date;
    public $info;
    public $debt;
    public $amount;
    public $total;

    function __construct($info, $debt, $amount, $total, $date)
    {
        $this->date = $date;
        $this->info = $info;
        $this->total = $total;
        $this->amount = $amount;
        $this->debt = $debt;
    }
}
?>
