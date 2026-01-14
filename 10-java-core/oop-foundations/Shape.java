abstract class Shape{
	abstract double area();
	abstract double perimeter();
	void displayInfo(){
		System.out.println("area "+area());
		System.out.println("perimeter "+perimeter());
	}
	
}
