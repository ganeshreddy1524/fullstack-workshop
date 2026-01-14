package banking;

public class BankingTest {
    public static void main(String[] args) {
        Bank bank = new Bank("kotak");

        Account savings = new SavingsAccount("Ganesh", 1000);
        Account checking = new CheckingAccount("virat", 500);
        Account fd = new FixedDepositAccount("sachin", 10000);

        bank.addAccount(savings);
        bank.addAccount(checking);
        bank.addAccount(fd);

        savings.deposit(500);
        checking.withdraw(800);  

        System.out.println("Total deposits: $" + bank.getTotalDeposits());

        for (Account acc : bank.getAllAccounts()) {
            System.out.println(acc.getHolderName() + " interest: $" + acc.calculateInterest());
        }
    }
}

