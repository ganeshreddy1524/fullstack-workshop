public class Triangle extends Shape {
    double base;
    double height;
    double side1;
    double side2;
    double side3;
    Triangle(double base,double height,double side1,double side2,double side3){
        this.base=base;
        this.height=height;
        this.side1=side1;
        this.side2=side2;
        this.side3=side3;
    }
    double area(){
        System.out.println("area of Triangle is");
        return (base*height)/2;
    }
    double perimeter(){
        System.out.println("perimeter of Triangle is");
        return side1+side2+side3;
    }
    // public static void main(String[] args) {
    //     Triangle t=new Triangle(20, 43, 10, 10, 10);
    //     t.displayInfo();
    // }
}
