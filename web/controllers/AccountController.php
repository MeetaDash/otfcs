<?php
require __DIR__.'/../models/CashTransaction.php';
require __DIR__.'/../models/Meeting.php';

class AccountController
{
    function __construct() {
    }

    public function show()
    {
        return array(
          'total_cash' => '127,559.33',
          'total_equity' => '141,112.96',
          'total_fixed' => '164,832.21',
          'total_retirement' => '198,451.43',
          'cash_transactions' => $this->dummy_cash_transactions(),
          'first_meeting' => $this->dummy_meetings()[0]
        );
    }

    private function dummy_cash_transactions()
    {
        return array(
            new CashTransaction('Check deposit #844', false, '1,543.50', '127,559.33', '11/14/2013'),
            new CashTransaction('VISA 1234', true, '2,457.87', '126,015.83', '11/13/2013'),
            new CashTransaction('Cash deposit ATM', false, '1,000.00', '128,473.70', '11/10/2013'),
            new CashTransaction('Withdrawal', true, '200.00', '127,473.70', '11/05/2013'),
            new CashTransaction('Check deposit #843', false, '2,150.00', '127,673.70', '10/29/2013')
        );
    }

    private function dummy_meetings()
    {
        return array(
            new Meeting('Portfolio Review 2013', 1392903000000, true, 'Scott', 'Scott Small')
        );
    }
}
?>
