public class BankAccount {
    private static String bankName="bank";
    private static int totalAccounts=0;
    private static int getAccountGenerator=1000;

    private int accountNumber;
    private String holderName;
    private double balance;

    BankAccount(String holderName,double balance){
        this.holderName=holderName;
        this.balance=balance;
        this.accountNumber=++getAccountGenerator;
        totalAccounts++;
    }
    public void deposit(double amount){
        if(amount>0){
            balance+=amount;
        }
    }
    public void withdraw(double amount){
        if(amount>0&&amount<=balance){
            balance-=amount;
        }
    }
    public double getBalance(){
        return balance;
    }
    public static String getBankInfo(){
        return bankName+"- total accounts"+totalAccounts;
    }
    public static void main(String[] args) {
        BankAccount bank=new BankAccount("ganesh",1000);
        System.out.println(bank.getBankInfo());
        System.out.println(bank.getBalance());
    }
}
