package banking;

public class SavingsAccount extends Account {

    private static final double INTEREST_RATE = 0.04;
    private static final double MIN_BALANCE = 100;

    public SavingsAccount(String holderName, double balance) {
        super(holderName, balance);
    }

    @Override
    public void withdraw(double amount) {
        if (balance - amount >= MIN_BALANCE) {
            balance -= amount;
        } else {
            System.out.println("Withdrawal failed! Minimum balance requirement not met.");
        }
    }

    @Override
    public double calculateInterest() {
        return balance * INTEREST_RATE;
    }
}

