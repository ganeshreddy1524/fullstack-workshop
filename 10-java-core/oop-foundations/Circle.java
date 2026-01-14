public class Circle extends Shape {
    double radius;
    Circle(double radius){
        this.radius=radius;
    }
    double area(){
        System.out.println("area of circle is");
        return (3.14)*radius*radius;
    }
    double perimeter(){
        System.out.println("perimeter of circle is");
        return 2*(3.14)*radius;
    }
    // public static void main(String[] args) {
    //    Circle c=new Circle(4);
    //     c.displayInfo();
    // }
}