public class Rectangle extends Shape{
    double length;
    double width;
    Rectangle(double length,double width){
        this.length=length;
        this.width=width;
    }
    double area(){
        System.out.println("area of rectangle is");
        return length*width;
    }
    double perimeter(){
        System.out.println("perimeter of rectangle is");
        return 2*(length+width);
    }
    // public static void main(String[] args) {
    //     Rectangle r=new Rectangle(3,4);
    //     r.displayInfo();
    // }
}
