class Person{
    private String name;
	private int age;
	private String email;
    
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
    
    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        if(this.age>0&&this.age<150){
             this.age = age;
        }
        else{
            System.out.println("invalid age");
        }
       
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        if(email.contains("@"))
        this.email = email;
    }

    Person(String name,int age,String email){
        this.name = name;
        this.age = age;
        this.email = email;
    }

    @Override
    public String toString() {
        return "Person [name=" + name + ", age=" + age + ", email=" + email + "]";
    }

    public static void main(String[] args) {
       Person p = new Person("ganesh",29,"ganesh@gmai.com");
       System.out.println(p);
    }
}