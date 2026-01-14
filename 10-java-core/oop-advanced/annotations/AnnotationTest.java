package oop-advanced.annotations;


import java.util.List;

public class AnnotationTest {
    public static void main(String[] args) {
        User user = new User();
        user.setAge(15);

        List<String> errors = Validator.validate(user);
        System.out.println(errors);  
    }
}
