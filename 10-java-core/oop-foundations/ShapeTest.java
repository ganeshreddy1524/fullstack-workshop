public class ShapeTest {
    public static void main(String[] args) {
        Shape[] s={
            new Circle(32),
            new Rectangle(32, 21),
            new Triangle(1, 3, 10, 10, 10)
        };
        for (Shape shape : s) {
            shape.displayInfo();
        }
    }
    
}
