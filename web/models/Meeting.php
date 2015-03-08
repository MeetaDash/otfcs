<?php
require __DIR__.'/Representative.php';

class Meeting
{
    public $rep;
    public $title;
    public $time;
    public $is_today;

    function __construct($title, $time, $is_today, $rep_id, $rep_name)
    {
        $this->title = $title;
        $this->time = $time;
        $this->is_today = $is_today;
        $this->rep = new Representative($rep_id, $rep_name);
    }
}
?>
