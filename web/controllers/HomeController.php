<?php
require __DIR__.'/../models/User.php';
require __DIR__.'/../models/Stock.php';

class HomeController
{
    private $users;
    private $stocks;

    // create array with two users
    function __construct() {
        $nestor = new User(
            'Ian', 'Smith', 'ian@company.com', 'password'
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

    public function lastUser()
    {
        return end($this->users);
    }

    public function stocks() {
        return $this->stocks;
    }
}
?>
