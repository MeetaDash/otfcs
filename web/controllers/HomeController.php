<?php
require __DIR__.'/../models/user.php';
require __DIR__.'/../models/stock.php';

class HomeController
{
    private $users;
    private $stocks;

    // create array with two users
    function __construct() {
        $nestor = new User(
            'Nestor', 'Bermudez', 'nestor.bermudez@agilityfeat.com', 'password'
        );
        $arin = new User(
            'Arin', 'Sime', 'arin@agilityfeat.com', 'agilityfeat'
        );
        $this->users = array($nestor, $arin);
        $this->stocks = array(
            new Stock('Dow', '15,821.63', '+70.96', '0.45%'),
            new Stock('Nasdaq', '3,965.58', '+45.66', '1.16%'),
            new Stock('S&P 500', '1,782.00', '+14.31', '0.81%')
        );
    }

    public function firstUser()
    {
        return $this->users[0];
    }

    public function stocks() {
        return $this->stocks;
    }
}
?>
